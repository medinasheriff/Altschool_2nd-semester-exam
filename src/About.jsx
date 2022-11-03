import { Link } from "react-router-dom";

function About() {
  return (
    <div className="about">
      <blockquote>
        This is my AltSchool Africa School of Engineering second semester examination project,
        for the Frontend track. This Semester started in the month of August and is now being 
        rounded up on 6th of November, 2022.
      </blockquote>
      
      <h4>Question:</h4>
      <p><em>Implement an API fetch of your Github portfolio, show a page with<br/>
      a list of all your repositories on Github (the page should implement <br/>
      pagination for the repo list), and create another page showing data for <br/>
      a single repo clicked from the list of repos using nested routes while<br/>
      using all thenecessary tools in react. Implement the proper SEO, Error Boundary<br/>
      (show a page to test the error boundary) and 404 pages. Good UI and Designs are important.
      </em></p>
      
    </div>
  );
}

export default About;
