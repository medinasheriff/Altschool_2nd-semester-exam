function Fallback({ error }) {
    return (
      <div className="fallback">
        <p>Omoh!!! Something went wrong o</p>
        <p style={{ color: " rgb(189, 30, 30)" }}>{error.message}</p>
      </div>
    );
  }
  
  export default Fallback;
  