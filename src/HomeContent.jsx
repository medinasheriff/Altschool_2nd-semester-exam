import { useNavigate } from "react-router-dom";


function Index() {
  const navigate = useNavigate();
  return (
    <div className="index">
      <h1 className="heading">My Github Repositories</h1>
      <p className="text">
        <span>My Github Repositories:</span> I started my tech journey this
        year, 2022 and so far,
        <br />
        I only have about 20 repositories. An embarrasing number, I know, but
        there is something
        <br />
        said about <q>Slow and steady...</q> Hopefully, the near future has me
        so good that
        <br />I lose count of the number of repositories that I have.
      </p>
      <p><span className="notice">Important!</span> Dear, Mr Setemi or to whom it may concern, I put a button in the repos page, that when clicked, displays the<br/>
      error 404 page. I am veru much aware that the path in the button should just be "/" to take us back home, so please don't<br/>
        deducted my marks sir. The error 404 page already has a link to take you back home, so you don't have to stress.<br/>
      Thank you for your kind understanding.<br/>
      Yours sincerely,<br/>
      Medina Folashde Sheriff.</p>

      <button onClick={() => navigate("/repos")}>See Repos</button>
    </div>
  );
}

export default Index;
