import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
          <nav className="container"> 
            <div className="damovies-nav-content">
              <h1>DAMovies</h1>
              <a href="https://github.com/anadunning">
                <div className="damovies-contact-container">
                  <GithubIcon />
                  <p className="damovies-contact-link">/anadunning</p>
                </div>
              </a>
            </div>
          </nav>
        </header>
      );
}

export default Navbar;