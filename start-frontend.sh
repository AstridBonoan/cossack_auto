#!/bin/bash
# Start React frontend development server
# Usage: Run this script from the project root using Git Bash

cd frontend

if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

echo "Starting Vite development server on http://localhost:3000"
npm run dev

