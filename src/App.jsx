import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Repos from "./Repos";
import Home from "./Home";
import ErrorTest from "./ErrorTest";
import { ErrorBoundary } from "react-error-boundary";
import Fallback from "./Fallback";
import Index from "./HomeContent";
import Repo from "./Repo";

function App() {
  const navigate = useNavigate();
  return (
    <ErrorBoundary
      FallbackComponent={Fallback}
      onReset={() => {
        navigate("/");
      }}
    >
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Index />} />
            <Route path="errortest" element={<ErrorTest />} />
            <Route path="about" element={<About />} />
            <Route path="/repos">
              <Route index element={<Repos />} />
              <Route path=":name" element={<Repo />} />
            </Route>
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
}

export default App;
