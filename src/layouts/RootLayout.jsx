// layouts/RootLayout.jsx
import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <main className="min-h-screen flex-1">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <Outlet />
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default RootLayout;
