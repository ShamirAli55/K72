import { Routes as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/navigation/Navbar";
import Agence from "./pages/Agence";

const App = () => {
  return (
    <div>
      <Navbar/>
      <Router>
        <Route index path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/agence" element={<Agence />} />
      </Router>
    </div>
  );
};

export default App;
