import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import MoviesIcon from "assets/img/movies-icon.png";

import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <div className="logo-title">
            <img src={MoviesIcon} alt="Logo" />
            <h1>Movie Rating</h1>
          </div>
          <a
            href="https://github.com/Wanderson-A-Timoteo"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">Wanderson Timóteo</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
