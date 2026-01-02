# Cossack Auto - Full Stack Web Application

A modern full-stack web application for Cossack Auto, an auto repair business. Built with React.js, Vite, Tailwind CSS, and Flask.

## Project Structure

```
Cossack Auto/
├── frontend/          # React + Vite + Tailwind CSS
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/           # Flask API
│   ├── app.py
│   └── requirements.txt
└── README.md
```

## Prerequisites

- **Node.js** (v18 or higher) and npm
- **Python** (v3.8 or higher) and pip
- **Git Bash** (for running commands)

## Setup Instructions

### 1. Frontend Setup

Open Git Bash and navigate to the frontend directory:

```bash
cd frontend
npm install
```

This will install all React, Vite, and Tailwind CSS dependencies.

### 2. Backend Setup

In a new Git Bash terminal, navigate to the backend directory:

```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows Git Bash, use: source venv/Scripts/activate
pip install -r requirements.txt
```

## Running the Application

### Start the Backend Server

In Git Bash, navigate to the backend directory and run:

```bash
cd backend
source venv/Scripts/activate  # Activate virtual environment
python app.py
```

The Flask server will start on `http://localhost:5000`

### Start the Frontend Development Server

In a new Git Bash terminal, navigate to the frontend directory and run:

```bash
cd frontend
npm run dev
```

The React app will start on `http://localhost:3000` and automatically proxy API requests to the backend.

## API Endpoints

The Flask backend provides the following endpoints:

- `GET /api/health` - Health check endpoint
- `GET /api/services` - Get all available services
- `GET /api/services/<id>` - Get a specific service by ID
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Create a new appointment

## Technologies Used

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Backend
- **Flask** - Python web framework
- **Flask-CORS** - Cross-Origin Resource Sharing support

## Development

### Frontend Development
- Hot module replacement is enabled
- The Vite dev server proxies `/api/*` requests to the Flask backend
- Tailwind CSS is configured and ready to use

### Backend Development
- Flask debug mode is enabled by default
- CORS is configured to allow requests from the frontend

## Building for Production

### Frontend
```bash
cd frontend
npm run build
```

The production build will be in the `frontend/dist` directory. Serve these files with a web server (Nginx, Apache) or a static hosting service.

### Backend
The Flask app can be deployed using any WSGI server (e.g., Gunicorn, uWSGI).

**Using Gunicorn:**
```bash
cd backend
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

**Environment Variables:**
Create a `.env` file in the backend directory:
```
SECRET_KEY=your-secret-key-here
FLASK_ENV=production
PORT=5000
```

## Production Checklist

See `PRODUCTION_CHECKLIST.md` for a complete list of items to update before deploying to production.

## License

© 2024 Cossack Auto. All rights reserved.

