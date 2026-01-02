from flask import Flask, jsonify, request
from flask_cors import CORS
from datetime import datetime
import os
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)  # Enable CORS for React frontend

# Configuration for file uploads
UPLOAD_FOLDER = 'uploads'
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max file size

# Create uploads directory if it doesn't exist
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# Sample data for auto repair services
services = [
    {
        "id": 1,
        "name": "Oil Change",
        "description": "Full synthetic oil change with filter replacement",
        "price": 49.99,
        "duration": "30 minutes"
    },
    {
        "id": 2,
        "name": "Brake Service",
        "description": "Complete brake inspection and pad replacement",
        "price": 199.99,
        "duration": "2 hours"
    },
    {
        "id": 3,
        "name": "Engine Diagnostic",
        "description": "Comprehensive engine diagnostic scan",
        "price": 89.99,
        "duration": "1 hour"
    },
    {
        "id": 4,
        "name": "Tire Rotation",
        "description": "Tire rotation and pressure check",
        "price": 29.99,
        "duration": "30 minutes"
    }
]

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        "status": "healthy",
        "message": "Cossack Auto API is running",
        "timestamp": datetime.now().isoformat()
    })

@app.route('/api/services', methods=['GET'])
def get_services():
    """Get all available services"""
    return jsonify({
        "services": services,
        "count": len(services)
    })

@app.route('/api/services/<int:service_id>', methods=['GET'])
def get_service(service_id):
    """Get a specific service by ID"""
    service = next((s for s in services if s['id'] == service_id), None)
    if service:
        return jsonify(service)
    return jsonify({"error": "Service not found"}), 404

@app.route('/api/appointments', methods=['GET'])
def get_appointments():
    """Get all appointments"""
    return jsonify({
        "appointments": [],
        "message": "Appointment system coming soon"
    })

@app.route('/api/appointments', methods=['POST'])
def create_appointment():
    """Create a new appointment"""
    data = request.get_json()
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    # In a real application, you would save this to a database
    appointment = {
        "id": len(services) + 1,
        "customer_name": data.get("customer_name"),
        "service_id": data.get("service_id"),
        "date": data.get("date"),
        "time": data.get("time"),
        "status": "pending",
        "created_at": datetime.now().isoformat()
    }
    
    return jsonify({
        "message": "Appointment created successfully",
        "appointment": appointment
    }), 201

@app.route('/api/reservations', methods=['POST'])
def create_reservation():
    """Create a new reservation"""
    try:
        # Get form data
        year = request.form.get('year')
        make = request.form.get('make')
        model = request.form.get('model')
        contact_number = request.form.get('contact_number')
        description = request.form.get('description')
        
        # Validate required fields
        if not all([year, make, model, contact_number, description]):
            return jsonify({"error": "All required fields must be filled"}), 400
        
        # Handle file upload if present
        picture_filename = None
        if 'picture' in request.files:
            file = request.files['picture']
            if file and file.filename and allowed_file(file.filename):
                filename = secure_filename(file.filename)
                # Add timestamp to make filename unique
                timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
                filename = f"{timestamp}_{filename}"
                filepath = os.path.join(app.config['UPLOAD_FOLDER'], filename)
                file.save(filepath)
                picture_filename = filename
        
        # In a real application, you would save this to a database
        reservation = {
            "id": len(services) + 1,
            "year": year,
            "make": make,
            "model": model,
            "contact_number": contact_number,
            "description": description,
            "picture": picture_filename,
            "status": "pending",
            "created_at": datetime.now().isoformat()
        }
        
        return jsonify({
            "message": "Reservation submitted successfully",
            "reservation": reservation
        }), 201
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000, host='0.0.0.0')

