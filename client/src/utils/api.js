// API configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

/**
 * Send contact form data to backend
 * @param {Object} data - Form data {name, email, subject, message}
 * @returns {Promise<Object>} - Response with status
 */
export async function sendContact(data) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.message || "Failed to send message");
    }

    return {
      status: result.status,
      message: result.message,
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      status: "error",
      message: error.message || "Network error. Please try again.",
    };
  }
}
