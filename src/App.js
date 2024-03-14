import logo from "./assets/shared/logo.svg";
import "./App.css";

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
    <div className="App">
      <div className="home">
        <header className="primary-header flex">
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <button
            className="mobile-nav-toggle"
            aria-controls="primary-navigation"
            onClick={navBarToggle}
          >
            <span className="sr-only" aria-expanded="false">
              Menu
            </span>
          </button>
          <nav>
            <ul
              id="primary-navigation"
              data-visible="false"
              className="primary-navigation underline-indicators flex"
            >
              <li className="active">
                <a
                  class="uppercase text-white letter-spacing-2 ff-sans-cond"
                  href="index.html"
                >
                  <span aria-hidden="true">00</span>Home
                </a>
              </li>
              <li>
                <a
                  class="uppercase text-white letter-spacing-2 ff-sans-cond"
                  href="destination.html"
                >
                  <span aria-hidden="true">01</span>Destination
                </a>
              </li>
              <li>
                <a
                  class="uppercase text-white letter-spacing-2 ff-sans-cond"
                  href="crew.html"
                >
                  <span aria-hidden="true">02</span>Crew
                </a>
              </li>
              <li>
                <a
                  class="uppercase text-white letter-spacing-2 ff-sans-cond"
                  href="technology.html"
                >
                  <span aria-hidden="true">02</span>Technology
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main
          id="main"
          className="grid-container grid-container--home box"
          // style="max-width: 60rem;"
        >
          <div>
            <h1 class="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1 d-block">
              So, you want to travel to
              <span class="fs-900 uppercase ff-serif text-accent d-block">
                Space
              </span>
            </h1>
            <p class="text-white">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>

          <div>
            <a
              href="#"
              className="large-button uppercase ff-sans-cond fs-600 text-dark bg-white"
            >
              Explore
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
