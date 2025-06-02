import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Competencies from "./pages/Competencies";

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/competencies" element={<Competencies />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App