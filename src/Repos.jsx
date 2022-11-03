import { useEffect } from "react";
import { useState } from "react";
import { useErrorHandler } from "react-error-boundary";
import { Link, useNavigate } from "react-router-dom";
function Repos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleError = useErrorHandler();
  const navigate = useNavigate();
  const usersPerPage = 5;
  const [pages, setPages] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.github.com/users/medinasheriff/repos"
        );
        const data = await response.json();
        {
          console.log(data);
        }
        setRepos(data);
        setLoading(false);
      } catch (error) {
        handleError(error);
      }
    };
    fetchData();
  }, []);
  if (loading) return <h2>Loading...</h2>;
  return (
    <div>
      <h3 className="github">My 20 Github Repositories.</h3>
      <div className="repos-container">
        <div className="repos">
          {repos
            .slice((pages - 1) * usersPerPage, pages * usersPerPage)
            .map((repo, index) => {
              return (
                <div className="repo" key={repo.id}>
                  <Link to={repo.name}>{repo.name}</Link>
                  <h4>{repo.language}</h4>
                  <p>{repo.visibility}</p>
                </div>
              );
            })}
        </div>
        <div>
          Pages {pages} of {repos.length / usersPerPage}
        </div>
        <button
          disabled={pages <= 1}
          onClick={() => {
            setPages((p) => p - 1);
          }}
        >
          Prev
        </button>
        {Array.from(
          { length: Math.ceil(repos.length / usersPerPage) },
          (_, index) => index + 1
        ).map((btn) => (
          <button
            key={btn}
            className={pages === btn ? "active" : null}
            onClick={() => {
              setPages(btn);
            }}
          >
            {btn}
          </button>
        ))}
        <button
          disabled={pages >= repos.length / usersPerPage}
          onClick={() => {
            setPages((p) => p + 1);
          }}
        >
          Next
        </button>
      </div>
      <button className="btn2" onClick={() => navigate("/home")}>Back</button>
    </div>
  );
}

export default Repos;
