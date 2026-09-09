import React from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";

import AboutApp from "./pages/AboutApp.jsx";
import TermsAndConditions from "./pages/TermsAndConditions.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import DeleteAccount from "./pages/DeleteAccount.jsx";

const navStyles = `
  .app-nav {
    display: flex;
    gap: 4px;
    flex-wrap: wrap;
    background: #0088cc;
    padding: 12px 20px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  .app-nav a {
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    padding: 8px 14px;
    border-radius: 6px;
    opacity: 0.85;
  }

  .app-nav a:hover {
    opacity: 1;
    background: rgba(255, 255, 255, 0.15);
  }

  .app-nav a.active {
    opacity: 1;
    background: rgba(255, 255, 255, 0.25);
  }
`;

function AppNav() {
  return (
    <nav className="app-nav">
      <style>{navStyles}</style>
      <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>
        About
      </NavLink>
      <NavLink to="/terms" className={({ isActive }) => (isActive ? "active" : "")}>
        Terms & Conditions
      </NavLink>
      <NavLink to="/privacy" className={({ isActive }) => (isActive ? "active" : "")}>
        Privacy Policy
      </NavLink>
      <NavLink to="/delete-account" className={({ isActive }) => (isActive ? "active" : "")}>
        Delete Account
      </NavLink>
    </nav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      {/* <AppNav /> */}
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutApp />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route
          path="/delete-account"
          element={
            <DeleteAccount
              onSubmitDelete={(data) => console.log("Delete account submitted:", data)}
              onCancel={() => window.history.back()}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
