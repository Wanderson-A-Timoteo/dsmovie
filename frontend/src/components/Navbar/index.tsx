import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>Movie Rating</h1>
          <a href="https://github.com/Wanderson-A-Timoteo">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/Wanderson Timóteo</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
