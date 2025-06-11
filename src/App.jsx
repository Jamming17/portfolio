import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Competencies from "./pages/Competencies";
import BlogFeed from "./pages/blog/BlogFeed";
import Login from "./pages/blog/Login";
import Register from "./pages/blog/Register";
import Post from "./pages/blog/Post";

function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>"
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/competencies" element={<Competencies />} />
          <Route path="/blog" element={<BlogFeed />} />
          <Route path="/blog/login" element={<Login />} />
          <Route path="/blog/register" element={<Register />} />
          <Route path="/blog/post" element={<Post />} />
          <Route path="*" element={<h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>} />
        </Route>
      </Routes>
    </>
  );
}

export default App