import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import { useState } from "react";
import Contact from "./components/Contact/Contact";
import Post from "./components/Post/Post";
import Categories from "./components/Categories/Categories";
import Search from "./components/Search";

function App() {
  const [light, setLight] = useState();
  const [theLight, setTheLight] = useState();

  useEffect(() => {
    if (light === true || light === false) {
      localStorage.setItem("light", JSON.stringify(light));
      const ifLight = JSON.parse(localStorage.getItem("light"));
      setTheLight(ifLight);
    } else {
      const ifLight = JSON.parse(localStorage.getItem("light"));
      if (ifLight === true || ifLight === false) {
        setTheLight(ifLight);
      } else {
        setTheLight(true);
      }
    }
  }, [light]);

  useEffect(() => {
    const body = document.querySelector("body");
    const ifLight = JSON.parse(localStorage.getItem("light"));
    if (ifLight === true) {
      body.classList.remove("active-dark-mode");
      body.classList.add("active-light-mode");
    } else if (ifLight === false) {
      body.classList.remove("active-light-mode");
      body.classList.add("active-dark-mode");
    } else {
      body.classList.remove("active-dark-mode");
      body.classList.add("active-light-mode");
    }
  }, [theLight]);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home theLight={theLight} light={light} setLight={setLight} />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact theLight={theLight} light={light} setLight={setLight} />
            }
          />
          <Route
            path="/about"
            element={
              <About theLight={theLight} light={light} setLight={setLight} />
            }
          />
          <Route
            path="/post"
            element={
              <Post theLight={theLight} light={light} setLight={setLight} />
            }
          />
          <Route
            path="/categories"
            element={
              <Categories
                theLight={theLight}
                light={light}
                setLight={setLight}
              />
            }
          />
          <Route
            path="/search"
            element={
              <Search theLight={theLight} light={light} setLight={setLight} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
