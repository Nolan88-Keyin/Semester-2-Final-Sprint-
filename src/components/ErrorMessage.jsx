/*
 * ErrorMessage Component
 * Displays error messages in a banner at the top of the page with a close button.
 */

function ErrorMessage({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="error-banner" role="alert">
      <p>{message}</p>
      <button onClick={onClose} className="error-close-btn">✕</button>
    </div>
  );
}

export default ErrorMessage;
