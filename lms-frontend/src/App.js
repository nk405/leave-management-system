import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.min.js";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Add from "./Pages/Add";
import Edit from "./Pages/Edit";
import View from "./Pages/View";

function App() {
  return (
    <main className="container mt-5">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add" element={<Add />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route exact path="/view/:id" element={<View />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
