import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';

import Auth from "./pages/Auth";
import Leftover from "./pages/Leftover";
import Recipe from "./pages/Recipe";

function AnimatedRoutes() {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.6, ease: 'easeInOut' },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Auth />
          </motion.div>
        } />
        <Route path="/leftover" element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Leftover />
          </motion.div>
        } />
        <Route path="/recipe" element={
          <motion.div
            initial={pageTransition.initial}
            animate={pageTransition.animate}
            exit={pageTransition.exit}
            transition={pageTransition.transition}
          >
            <Recipe />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
