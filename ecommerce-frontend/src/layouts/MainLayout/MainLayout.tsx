import React from "react";
import Header from "@components/common/Header/Header";
import Footer from "@components/common/Header/Footer/Footer";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto min-h-screen flex flex-col mt-4">
        {/* Outlet for rendering child routes */}
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
