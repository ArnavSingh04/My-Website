// imports/ui/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";

import { Home } from "./Pages/Home";
import { Debates } from "./Pages/Debates";
import { Olympiads } from "./Pages/Olympiads";
import { Cricket } from "./Pages/Cricket";
import { Dramatics } from "./Pages/Dramatics";
import { Leadership } from "./Pages/Leadership";

export const App = () => {
  return(
    <Router>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/debates" element={<Debates />} />
          <Route path="/olympiads" element={<Olympiads />} />
          <Route path="/Cricket" element={<Cricket />} />
          <Route path="/Dramatics" element={<Dramatics />} />
          <Route path="/Leadership" element={<Leadership />} />
        </Routes>
      </div>
    </Router>
  )
};
