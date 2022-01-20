import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Routes from "./routes";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const lightAsDefault =
    new Date().getHours() > 8 && new Date().getHours() < 18;

  const [isLight, setIsLight] = useState(lightAsDefault);

  const toggleTheme = () => setIsLight(!isLight);

  return (
    <div className={`App${!isLight ? " dark" : ""}`}>
      <Router>
        <Header themeClick={toggleTheme} />
        <Routes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
