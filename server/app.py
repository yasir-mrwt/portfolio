"""
Flask backend for portfolio contact form
Sends emails via Resend API (works on Vercel serverless)
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import requests
from dotenv import load_dotenv
from datetime import datetime

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Configure CORS to allow frontend requests
CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:5173", "http://localhost:3000", os.environ.get('FRONTEND_URL', '*')],
        "methods": ["POST", "OPTIONS"],
        "allow_headers": ["Content-Type"]
    }
})

# Resend API configuration
RESEND_API_KEY = os.environ.get('RESEND_API_KEY')
RESEND_API_URL = 'https://api.resend.com/emails'
FROM_EMAIL = os.environ.get('FROM_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'inquiry.yasir@gmail.com')

# Get current year
CURRENT_YEAR = datetime.now().year

def send_email_resend(name, email, subject, message):
    """Send email using Resend API"""
    print(f"🚀 Attempting to send email from {email} to {RECIPIENT_EMAIL}")
    try:
        # Create professional HTML email content
        html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Portfolio Inquiry</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f4f7fa;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f4f7fa; padding: 40px 20px;">
        <tr>
            <td align="center">
                <!-- Main Container -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); overflow: hidden;">
                    
                    <!-- Header with Gradient -->
                    <tr>
                        <td style="background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); padding: 40px 40px 30px 40px; text-align: center;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700; letter-spacing: -0.5px;">
                                New Contact Inquiry
                            </h1>
                            <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                                Someone reached out through your portfolio
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 40px;">
                            
                            <!-- Greeting -->
                            <p style="margin: 0 0 24px 0; color: #1e293b; font-size: 16px; line-height: 1.6;">
                                Hi Yasir,
                            </p>
                            
                            <p style="margin: 0 0 32px 0; color: #475569; font-size: 15px; line-height: 1.6;">
                                You've received a new message from your portfolio contact form. Here are the details:
                            </p>
                            
                            <!-- Contact Info Card -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0; margin-bottom: 24px;">
                                <tr>
                                    <td style="padding: 24px;">
                                        
                                        <!-- Name -->
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 16px;">
                                            <tr>
                                                <td width="100" style="vertical-align: top;">
                                                    <p style="margin: 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        Name
                                                    </p>
                                                </td>
                                                <td style="vertical-align: top;">
                                                    <p style="margin: 0; color: #1e293b; font-size: 15px; font-weight: 600;">
                                                        {name}
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <!-- Email -->
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 16px;">
                                            <tr>
                                                <td width="100" style="vertical-align: top;">
                                                    <p style="margin: 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        Email
                                                    </p>
                                                </td>
                                                <td style="vertical-align: top;">
                                                    <a href="mailto:{email}" style="margin: 0; color: #06b6d4; font-size: 15px; text-decoration: none; font-weight: 500;">
                                                        {email}
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        <!-- Subject -->
                                        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                                            <tr>
                                                <td width="100" style="vertical-align: top;">
                                                    <p style="margin: 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                                        Subject
                                                    </p>
                                                </td>
                                                <td style="vertical-align: top;">
                                                    <p style="margin: 0; color: #1e293b; font-size: 15px; font-weight: 600;">
                                                        {subject}
                                                    </p>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Message Section -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 32px;">
                                <tr>
                                    <td>
                                        <p style="margin: 0 0 12px 0; color: #64748b; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">
                                            Message
                                        </p>
                                        <div style="background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 8px; padding: 20px;">
                                            <p style="margin: 0; color: #334155; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
{message}
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Reply Button -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 32px;">
                                <tr>
                                    <td align="center">
                                        <a href="mailto:{email}?subject=Re: {subject}" style="display: inline-block; background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%); color: #ffffff; text-decoration: none; padding: 14px 32px; border-radius: 8px; font-weight: 600; font-size: 15px; box-shadow: 0 4px 12px rgba(6, 182, 212, 0.3);">
                                            Reply to {name}
                                        </a>
                                    </td>
                                </tr>
                            </table>
                            
                            <!-- Divider -->
                            <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 32px 0;">
                                <tr>
                                    <td style="border-top: 1px solid #e2e8f0;"></td>
                                </tr>
                            </table>
                            
                            <!-- Footer Note -->
                            <p style="margin: 0; color: #64748b; font-size: 13px; line-height: 1.6; text-align: center;">
                                This email was sent from the contact form on your portfolio website.<br>
                                <span style="color: #94a3b8;">You can reply directly to this email to reach {name}.</span>
                            </p>
                            
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #f8fafc; padding: 24px 40px; text-align: center; border-top: 1px solid #e2e8f0;">
                            <p style="margin: 0; color: #94a3b8; font-size: 12px; line-height: 1.6;">
                                © {CURRENT_YEAR} Muhammad Yasir. All rights reserved.
                            </p>
                        </td>
                    </tr>
                    
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
        """

        # Professional plain text version
        text_content = f"""
NEW PORTFOLIO INQUIRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Hi Yasir,

You've received a new message from your portfolio contact form.

CONTACT DETAILS:
────────────────
Name:     {name}
Email:    {email}
Subject:  {subject}

MESSAGE:
────────────────
{message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply directly to this email to reach {name}.

---
© {CURRENT_YEAR} Muhammad Yasir
This email was sent from your portfolio contact form.
        """

        # Prepare request to Resend API
        headers = {
            'Authorization': f'Bearer {RESEND_API_KEY}',
            'Content-Type': 'application/json'
        }

        # Build payload
        payload = {
            'from': f'Portfolio Contact <{FROM_EMAIL}>',
            'to': [RECIPIENT_EMAIL],
            'subject': f"Portfolio Contact: {subject}",
            'html': html_content,
            'text': text_content
        }
        
        # Send request to Resend
        response = requests.post(RESEND_API_URL, json=payload, headers=headers)
        
        if response.status_code in [200, 201]:
            print(f"✅ Email sent successfully! ID: {response.json().get('id', 'unknown')}")
            return True
        else:
            print(f"❌ Resend API error: {response.status_code} - {response.text}")
            return False

    except Exception as e:
        print(f"Email error: {str(e)}")
        return False

@app.route('/api/contact', methods=['POST'])
def contact():
    """Handle contact form submissions"""
    try:
        data = request.get_json()
        
        # Validate required fields
        required_fields = ['name', 'email', 'subject', 'message']
        if not all(field in data for field in required_fields):
            return jsonify({
                'status': 'error',
                'message': 'Missing required fields'
            }), 400

        name = data.get('name', '').strip()
        email = data.get('email', '').strip()
        subject = data.get('subject', '').strip()
        message = data.get('message', '').strip()

        # Basic validation
        if not all([name, email, subject, message]):
            return jsonify({
                'status': 'error',
                'message': 'All fields are required'
            }), 400

        if '@' not in email:
            return jsonify({
                'status': 'error',
                'message': 'Invalid email address'
            }), 400

        # Send email using Resend
        if send_email_resend(name, email, subject, message):
            return jsonify({
                'status': 'success',
                'message': 'Message sent successfully!'
            }), 200
        else:
            return jsonify({
                'status': 'error',
                'message': 'Failed to send message. Please try again.'
            }), 500

    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({
            'status': 'error',
            'message': 'Server error occurred'
        }), 500

@app.route('/api/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'ok', 
        'message': 'Server is running',
        'year': CURRENT_YEAR,
        'developer': 'Muhammad Yasir'
    }), 200

if __name__ == '__main__':
    # Check if Resend API key exists
    if not RESEND_API_KEY:
        print("⚠️  Warning: RESEND_API_KEY not set!")
        print("Get your free API key at: https://resend.com/api-keys")
    
    print(f"🚀 Server starting for Muhammad Yasir Portfolio - {CURRENT_YEAR}")
    port = int(os.environ.get('PORT', 5000))
    app.run(
        host='0.0.0.0',
        port=port,
        debug=os.environ.get('FLASK_ENV') == 'development'
    )

if __name__ != '__main__':
    app = app