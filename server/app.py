"""
Main entry point for the Flask application.
This file imports the app factory and runs the server.
"""

from app import create_app
import os

# Create Flask application instance using factory pattern
app = create_app()

if __name__ == '__main__':
    # Get port from environment or default to 5000
    port = int(os.environ.get('PORT', 5000))
    
    # Run development server
    # In production, use a WSGI server like Gunicorn
    app.run(
        host='0.0.0.0',  # Listen on all network interfaces
        port=port,
        debug=os.environ.get('FLASK_ENV') == 'development'
    )