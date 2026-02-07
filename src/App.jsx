import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import { useLenis } from "./hooks/useLenis";

const App = () => {
  useLenis();

  return (
    <Router>
      {/* Main layout */}
      <div className="flex min-h-screen flex-col backdrop-blur-none">
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<Project />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
