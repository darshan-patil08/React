import { Routes, Route } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Details from "../components/Details";
import Nested from "../components/Nested";
const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/details" element={<Details />} />
        </Route>
        <Route path="/about" element={<About />}>
        <Route path="/about/nested" element={<Nested />} />
        </Route>

        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
