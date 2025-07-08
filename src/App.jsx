import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Leftover from "./pages/Leftover";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/leftover" element={<Leftover />} />
        <Route path="/recipe" element={<Recipe />} />
      </Routes>
    </Router>
  );
}

export default App;
