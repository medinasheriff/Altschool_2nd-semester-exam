import { NavLink, Outlet } from "react-router-dom";
function Home() {
  let activeStyle = { padding: "2px 0", borderBottom: "4px solid #a3b18a" };
  return (
    <div>
      <h2>Medina's Altschool Second Semester Exam: Question 1. </h2>
      <nav className="navbar">
        <p className="logo">Github Repositories</p>

        <div className="navtabs">
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/"
            end
          >
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/about"
          >
            Description
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/repos"
          >
            Repositories
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/errortest"
          >
            Error Boundary
          </NavLink>
        </div>
      </nav>
<div className="bg"></div>
<div className="bg2"></div>
      <Outlet />
    </div>
  );
}

export default Home;
