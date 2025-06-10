import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "../styles/Sidebar.css";
import "../styles/Layout.css";

function Layout({ children }) {
  return (
    <div className="container-fluid p-0 m-0">
      {/* Top header bar */}
      <header className="bg-primary text-white p-3 d-flex justify-content-center align-items-center">
        <h1 className="h4 mb-0">G-Scores</h1>
      </header>

      {/* Mobile Menu Button */}
      <div className="row d-md-none d-flex align-items-center py-2">
        <div className="col-12 d-flex justify-content-start">
          <button
            className="btn btn-primary fs-5"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileSidebar"
          >
            ☰ Menu
          </button>
        </div>
      </div>

      {/* Offcanvas sidebar for mobile */}
      <div
        className="offcanvas offcanvas-start w-50 p-0 m-0"
        tabIndex="-1"
        id="mobileSidebar"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>
        <div className="offcanvas-body sidebar w-100">
          <Sidebar />
        </div>
      </div>

      {/* Main content and desktop sidebar */}
      <div className="row flex-nowrap p-0 m-0" style={{ height: "90vh" }}>
        {/* Sidebar (only shown on desktop) */}
        <div className="col-auto d-none d-md-block sidebar bg-light p-3 col-md-3">
          <Sidebar />
        </div>

        {/* Page content */}
        <div className="col bg-light p-3 overflow-auto">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default Layout;
