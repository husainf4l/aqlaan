#!/bin/bash

# Activate virtual environment
source venv/bin/activate

# Set environment variables
export PYTHONPATH="${PYTHONPATH}:$(pwd)"

echo "Virtual environment activated!"
echo "To run the development server: python main.py"
echo "To deactivate: deactivate"