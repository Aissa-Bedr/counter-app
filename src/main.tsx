import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import Container from "./components/build/Container";
import "./style/index.css";

document.body.classList.add("bg-secondary");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Container className="bg-white">
    <App />
  </Container>
);
