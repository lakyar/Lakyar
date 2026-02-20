import React, { useEffect, useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Lenis from "lenis";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/Project";

gsap.registerPlugin(ScrollTrigger, SplitText);

const AppContent = () => {
  const location = useLocation();
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  // Clean up function
  const cleanupLenis = () => {
    if (lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }

    // Remove the GSAP ticker callback if it exists
    if (rafIdRef.current) {
      gsap.ticker.remove(rafIdRef.current);
      rafIdRef.current = null;
    }
  };

  useEffect(() => {
    // Clean up existing Lenis instance
    cleanupLenis();

    // Only create Lenis for Home page
    if (location.pathname === "/") {
      // Create new Lenis instance
      lenisRef.current = new Lenis({
        duration: 0.01,
        smooth: true,
        smoothTouch: false,
      });

      // Connect Lenis with ScrollTrigger
      lenisRef.current.on("scroll", ScrollTrigger.update);

      // Create the RAF callback function
      const rafCallback = (time) => {
        if (lenisRef.current) {
          lenisRef.current.raf(time * 10);
        }
      };

      // Add to GSAP ticker and store the ID
      rafIdRef.current = rafCallback;
      gsap.ticker.add(rafCallback);

      gsap.ticker.lagSmoothing(0);
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Cleanup on component unmount
    return cleanupLenis;
  }, [location.pathname]);

  return (
    <>
      {/* Main layout */}
      <div className="flex min-h-screen flex-col backdrop-blur-none">
        <Navbar />

        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:slug" element={<Project />} />
            {/* <Route path="/member/:name" element={<MemberDetail />} /> */}
          </Routes>
        </main>

        <Footer />
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Project from "./pages/Project";
// import Footer from "./components/Footer";
// import { gsap } from "gsap";
// import { ScrollTrigger, SplitText } from "gsap/all";
// import { useLenis } from "./hooks/useLenis";
// gsap.registerPlugin(ScrollTrigger, SplitText);

// const App = () => {
//   useLenis();

//   return (
//     <Router>
//       <div className="flex min-h-screen flex-col backdrop-blur-none">
//         <div className="fixed top-1/4 left-1/4 -z-10 h-64 w-64 rounded-full bg-linear-to-r from-orange-500/10 to-orange-400/10 blur-3xl" />
//         <div className="fixed right-1/4 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-linear-to-r from-amber-500/5 to-amber-500/5 blur-3xl" />

//         <Navbar />

//         <main className="grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/project/:slug" element={<Project />} />
//           </Routes>
//         </main>

//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;
