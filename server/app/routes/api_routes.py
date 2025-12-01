"""
API Routes Blueprint
Defines all API endpoints for the portfolio application.
"""

from flask import Blueprint, request, jsonify
from app.modules.mailer import send_contact_email
from app.modules.utils import validate_email, sanitize_input

# Create Blueprint for API routes
# All routes here will be prefixed with /api/v1
api_bp = Blueprint('api', __name__)

# Sample project data (in production, this would come from a database)
PROJECTS_DATA = [
    {
        'id': 1,
        'title': 'E-Commerce Platform',
        'description': 'Full-stack online store with payment integration',
        'tech_stack': ['React', 'Node.js', 'MongoDB', 'Stripe'],
        'github_url': 'https://github.com/username/project1',
        'live_url': 'https://project1.demo.com',
        'image_url': '/images/project1.jpg'
    },
    {
        'id': 2,
        'title': 'AI Task Manager',
        'description': 'Smart task management with ML-powered prioritization',
        'tech_stack': ['React', 'Flask', 'TensorFlow', 'PostgreSQL'],
        'github_url': 'https://github.com/username/project2',
        'live_url': 'https://project2.demo.com',
        'image_url': '/images/project2.jpg'
    },
    {
        'id': 3,
        'title': 'Real-Time Chat App',
        'description': 'WebSocket-based messaging platform',
        'tech_stack': ['React', 'Socket.io', 'Express', 'Redis'],
        'github_url': 'https://github.com/username/project3',
        'live_url': 'https://project3.demo.com',
        'image_url': '/images/project3.jpg'
    }
]

@api_bp.route('/projects', methods=['GET'])
def get_projects():
    """
    GET /api/v1/projects
    
    Returns list of all projects.
    Frontend fetches this to display portfolio items.
    """
    try:
        return jsonify({
            'success': True,
            'data': PROJECTS_DATA,
            'count': len(PROJECTS_DATA)
        }), 200
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': 'Failed to fetch projects'
        }), 500


@api_bp.route('/projects/<int:project_id>', methods=['GET'])
def get_project(project_id):
    """
    GET /api/v1/projects/<id>
    
    Returns single project by ID.
    Used for project detail pages.
    """
    try:
        project = next((p for p in PROJECTS_DATA if p['id'] == project_id), None)
        
        if project:
            return jsonify({
                'success': True,
                'data': project
            }), 200
        else:
            return jsonify({
                'success': False,
                'error': 'Project not found'
            }), 404
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': 'Failed to fetch project'
        }), 500


@api_bp.route('/contact', methods=['POST'])
def contact():
    """
    POST /api/v1/contact
    
    Handles contact form submissions.
    Validates input, sanitizes data, sends email.
    
    Expected JSON body:
    {
        "name": "John Doe",
        "email": "john@example.com",
        "subject": "Inquiry",
        "message": "Hello..."
    }
    """
    try:
        # Get JSON data from request
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        for field in required_fields:
            if field not in data or not data[field].strip():
                return jsonify({
                    'success': False,
                    'error': f'Missing required field: {field}'
                }), 400
        
        # Validate email format
        if not validate_email(data['email']):
            return jsonify({
                'success': False,
                'error': 'Invalid email address'
            }), 400
        
        # Sanitize inputs to prevent injection attacks
        clean_data = {
            'name': sanitize_input(data['name']),
            'email': sanitize_input(data['email']),
            'subject': sanitize_input(data['subject']),
            'message': sanitize_input(data['message'])
        }
        
        # Send email using mailer module
        email_sent = send_contact_email(clean_data)
        
        if email_sent:
            return jsonify({
                'success': True,
                'message': 'Message sent successfully'
            }), 200
        else:
            return jsonify({
                'success': False,
                'error': 'Failed to send message'
            }), 500
    
    except Exception as e:
        return jsonify({
            'success': False,
            'error': 'Server error occurred'
        }), 500


@api_bp.route('/health', methods=['GET'])
def health_check():
    """
    GET /api/v1/health
    
    Health check endpoint for monitoring.
    Returns server status and uptime.
    """
    return jsonify({
        'status': 'healthy',
        'service': 'portfolio-api',
        'version': '1.0.0'
    }), 200