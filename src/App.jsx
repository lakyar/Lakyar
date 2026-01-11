import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Project from './pages/Project'
import Blog from './pages/Blog'
import Footer from './components/Footer'
import BlogList from './pages/BlogList';


const App = () => {
  return (
    <Router>
      {/* Background image */}
      <div className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-15" ></div>

      {/* Main layout */}
      <div className="min-h-screen flex flex-col backdrop-blur-none">
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/project/:slug" element={<Project />} />
            <Route path="/blog/:slug" element={<Blog />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App