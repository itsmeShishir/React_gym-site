import { BrowserRouter, Router, Routes, Route, Switch } from "react-router-dom";
import About from "./Comp/Pages/About";
import OurFeature from "./Comp/Pages/OurFeature";
import Contact from "./Comp/Pages/Contact";
import Home from "./Comp/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/ourfeature" element={<OurFeature />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
