function Fallback({ error, resetErrorBoundary }) {
  return (
    <div className="fallback">
      <p>Omoh!!! Something went wrong o</p>
      <p style={{ color: " rgb(189, 30, 30)" }}>{error.message}</p>
      <button onClick={resetErrorBoundary}>Back to Home</button>
    </div>
  );
}

export default Fallback;
