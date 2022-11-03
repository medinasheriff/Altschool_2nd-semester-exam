import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error">
      <h4>Oops! ERROR 404. <br/>Cant't find searched page. <br/>Please, check your URL or Click {" "}
      <Link to="/"> here </Link>  to go back Home.</h4>
    </div>
  );
}

export default ErrorPage;
