// imports/ui/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <nav
    style={{
      display: "flex",
      justifyContent: "space-around",
      padding: "1rem",
      backgroundColor: "#f0f0f0",
      borderBottom: "1px solid #ccc"
    }}
  >
    <Link to="/">Home</Link>
    <Link to="/debates">Debates</Link>
    <Link to="/dramatics">Dramatics</Link>
    <Link to="/cricket">Cricket</Link>
    <Link to="/olympiads">Olympiads</Link>
    <Link to="/leadership">Leadership</Link>
  </nav>
);
