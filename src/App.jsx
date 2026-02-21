import React, { useEffect, useRef, Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Lenis from "lenis";

import RootLayout from "./layouts/RootLayout";
import Loading from "./components/Loading";

gsap.registerPlugin(ScrollTrigger, SplitText);

const Home = lazy(() => import("./pages/Home"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const AppContent = () => {
  const location = useLocation();
  const lenisRef = useRef(null);
  const rafIdRef = useRef(null);

  const cleanupLenis = () => {
    if (lenisRef.current) {
      lenisRef.current.destroy();
      lenisRef.current = null;
    }
    if (rafIdRef.current) {
      gsap.ticker.remove(rafIdRef.current);
      rafIdRef.current = null;
    }
  };

  useEffect(() => {
    cleanupLenis();

    lenisRef.current = new Lenis({
      duration: 0.01,
      smooth: true,
      smoothTouch: false,
    });

    lenisRef.current.on("scroll", ScrollTrigger.update);

    const rafCallback = (time) => {
      if (lenisRef.current) {
        lenisRef.current.raf(time * 10);
      }
    };

    rafIdRef.current = rafCallback;
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    window.scrollTo(0, 0);

    return cleanupLenis;
  }, [location.pathname]);

  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="project/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
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
