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
        {/* Floating Orbs */}
        <div className="fixed top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-linear-to-r from-orange-500/10 to-orange-400/10 blur-3xl" />
        <div className="fixed right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-linear-to-r from-amber-500/5 to-amber-500/5 blur-3xl" />

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
