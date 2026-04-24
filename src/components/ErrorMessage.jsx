// Displays error messages with close button

function ErrorMessage({ message, onClose }) {
  if (!message) return null;

  return (
    <div
      className="error-banner"
      role="alert"
      style={{ display: 'flex', alignItems: 'center' }}
    >
      <button
        onClick={onClose}
        className="error-close-btn"
        style={{ marginRight: '0.75rem' }}
      >
        ✕
      </button>
      <p style={{ margin: 0 }}>{message}</p>
    </div>
  );
}

export default ErrorMessage;
