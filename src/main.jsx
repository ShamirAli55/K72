import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import Stairs from "./components/common/Stairs.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
      <App />
      </Stairs>
    </BrowserRouter>
  </StrictMode>
);
