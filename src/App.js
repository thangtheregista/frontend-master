import "./App.css";
import DestinationMoon from "./components/DestinationMoon";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
/*React router */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const navBarToggle = () => {
    const nav = document.querySelector(".primary-navigation");
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const visibility = nav.getAttribute("data-visible");
    if (visibility === "false") {
      nav.setAttribute("data-visible", true);
      navToggle.setAttribute("aria-expanded", true);
    } else {
      nav.setAttribute("data-visible", false);
      navToggle.setAttribute("aria-expanded", false);
    }
  };

  return (
    <Router>
      <div className="App home">
        <Routes>
          <Route
            exact
            path=""
            element={[<Navigation navBarToggle={navBarToggle} />, <Home />]}
          />
          <Route
            exact
            path="/destination-moon"
            element={[
              <Navigation navBarToggle={navBarToggle} />,
              <DestinationMoon />,
            ]}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
