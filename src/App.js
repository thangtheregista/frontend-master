import logo from "./assets/shared/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="primary-header flex">
        <div>
          <img src={logo} alt="logo" className="logo" />
        </div>
        <button
          className="mobile-nav-toggle"
          aria-controls="primary-navigation"
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
            <li className="active"></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
