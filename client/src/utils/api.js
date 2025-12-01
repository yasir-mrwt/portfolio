/**
 * API Communication Layer
 *
 * This module handles all HTTP requests to the Flask backend.
 *
 * How it works:
 * 1. Define base API URL (changes for dev vs production)
 * 2. Create functions for each API endpoint
 * 3. Use fetch() to make HTTP requests
 * 4. Handle responses and errors consistently
 * 5. Return data or throw errors
 *
 * Benefits of this pattern:
 * - Centralized API logic
 * - Easy to update endpoints
 * - Consistent error handling
 * - Type safety (if using TypeScript)
 */

// API base URL - change this based on environment
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api/v1";

/**
 * Generic fetch wrapper with error handling
 *
 * @param {string} endpoint - API endpoint (e.g., '/projects')
 * @param {object} options - Fetch options (method, headers, body)
 * @returns {Promise} - Resolves with response data or rejects with error
 */
async function apiFetch(endpoint, options = {}) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
      ...options,
    });

    // Parse JSON response
    const data = await response.json();

    // Check if request was successful
    if (!response.ok) {
      throw new Error(data.error || `HTTP error ${response.status}`);
    }

    return data;
  } catch (error) {
    console.error(`API Error [${endpoint}]:`, error);
    throw error;
  }
}

/**
 * Get all projects
 *
 * @returns {Promise<Array>} - Array of project objects
 */
export async function getProjects() {
  const response = await apiFetch("/projects");
  return response.data;
}

/**
 * Get single project by ID
 *
 * @param {number} id - Project ID
 * @returns {Promise<Object>} - Project object
 */
export async function getProject(id) {
  const response = await apiFetch(`/projects/${id}`);
  return response.data;
}

/**
 * Submit contact form
 *
 * @param {Object} formData - Contact form data
 * @param {string} formData.name - Sender name
 * @param {string} formData.email - Sender email
 * @param {string} formData.subject - Message subject
 * @param {string} formData.message - Message content
 * @returns {Promise<Object>} - Success response
 */
export async function submitContactForm(formData) {
  const response = await apiFetch("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
  return response;
}

/**
 * Health check - verify API is running
 *
 * @returns {Promise<Object>} - Health status
 */
export async function healthCheck() {
  const response = await apiFetch("/health");
  return response;
}
