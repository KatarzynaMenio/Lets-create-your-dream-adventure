import {Link} from "react-router-dom";
import logo from '../assets/Logo/logo.png'

export default function Navigation() {
    return (<nav className="navbar navbar-expand-lg bg-dark navi-bar" data-bs-theme="dark">
        <div className="container navi">
            <a className="navbar-brand pt-0 pb-0" href="/"><img src={logo} height={"60"}  alt="logo"/></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
                    aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-right-align" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/#form-section">Formularz podróżnika
                            <span className="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">O mnie
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/inspiration">
                            Inspiracje
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">
                            Kontakt
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
}