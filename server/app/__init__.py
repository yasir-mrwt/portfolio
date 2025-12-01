"""
Flask App Factory
This creates and configures the Flask application instance.
"""

from flask import Flask
from flask_cors import CORS
from instance.config import Config

def create_app(config_class=Config):
    """
    Application Factory Pattern
    
    Creates a Flask application with:
    - Configuration loading
    - CORS setup for frontend communication
    - Blueprint registration for modular routes
    
    Returns configured Flask app instance
    """
    
    # Initialize Flask application
    app = Flask(__name__, instance_relative_config=True)
    
    # Load configuration from Config class
    app.config.from_object(config_class)
    
    # Enable CORS (Cross-Origin Resource Sharing)
    # This allows React frontend to make requests to Flask backend
    # In production, specify exact origins instead of '*'
    CORS(app, resources={
        r"/api/*": {
            "origins": ["http://localhost:5173", "https://yourdomain.com"],
            "methods": ["GET", "POST", "OPTIONS"],
            "allow_headers": ["Content-Type"]
        }
    })
    
    # Register blueprints (modular route handlers)
    from app.routes.api_routes import api_bp
    app.register_blueprint(api_bp, url_prefix='/api/v1')
    
    # Root health check endpoint
    @app.route('/')
    def index():
        return {
            'status': 'healthy',
            'message': 'Portfolio API is running',
            'version': '1.0.0'
        }
    
    return app