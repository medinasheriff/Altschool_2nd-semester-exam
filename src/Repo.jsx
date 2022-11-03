import React, { useState, useEffect, } from "react";
import { useErrorHandler } from "react-error-boundary";
import { useParams, useNavigate } from "react-router-dom";

function Repo() {
  const [repo, setRepo] = useState({});
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const handleError = useErrorHandler();
  const navigate = useNavigate();
  const url = `https://api.github.com/repos/medinasheriff/${params.name}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        {
          console.log(data);
        }
        setRepo(data);
        setLoading(false);
      } catch (error) {
        handleError(error);
      }
    };
    fetchData();
  }, []);
  if (loading) return <h3>Loading...</h3>;
  return (
    <div className="data">
      <h2 className="repo-head">Repository Data</h2>
      <p>
        <h3>Description:</h3> {repo.description}
      </p>
      <p>
        <h3>Name:</h3> {repo.name}
      </p>
      <p>
        <h3>ID:</h3> {repo.id}
      </p>
      <p>
        <h3>Date of Creation:</h3> {repo.created_at}
      </p>
      <button className="btn" onClick={() => navigate("/repos")}>Back</button>
    </div>
  );
}

export default Repo;
