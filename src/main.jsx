import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { CountryApp } from "./CountryApp";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountryApp />
  </StrictMode>
);
