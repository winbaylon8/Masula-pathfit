import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Import page components
import WebsiteIntroduction from "./components/pages/WebsiteIntroduction";
import PALog from "./components/pages/PALog";
import FoodLog from "./components/pages/FoodLog";
import Advocacy from "./components/pages/Advocacy";
import PathfitKusina from "./components/pages/PathfitKusina";
import Recipes from "./components/pages/Recipes";
import PathfitReflection from "./components/pages/PathfitReflection";
import HealthTrivia from "./components/pages/HealthTrivia";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/MASULA-WEBSITE">
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<WebsiteIntroduction />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/pa-log" element={<PALog />} />
          <Route path="/food-log" element={<FoodLog />} />
          <Route path="/advocacy" element={<Advocacy />} />
          <Route path="/pathfit-kusina" element={<PathfitKusina />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/pathfit-reflection" element={<PathfitReflection />} />
          <Route path="/health-trivia" element={<HealthTrivia />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
