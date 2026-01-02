#!/bin/bash
# Start Flask backend server
# Usage: Run this script from the project root using Git Bash

cd backend
if [ ! -d "venv" ]; then
    echo "Creating virtual environment..."
    python -m venv venv
fi

echo "Activating virtual environment..."
source venv/Scripts/activate

echo "Installing dependencies..."
pip install -r requirements.txt

echo "Starting Flask server on http://localhost:5000"
python app.py

