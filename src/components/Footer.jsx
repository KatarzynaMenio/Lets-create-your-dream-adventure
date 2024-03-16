import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="footer-style">
            <div className="container footer-space" id="footer">
                <div className="footer-contact footer-info">
                    <span>Kontakt:</span>
                    <a href="mailto:createyourdreamadventure@gmail.com">createyourdreamadventure@gmail.com</a>
                </div>
                <div className="footer-contact ">
                    <a href="https://www.facebook.com/"><FontAwesomeIcon className="footer-icon" icon={faFacebook} /></a>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon className="footer-icon" icon={faInstagram} /></a>
                </div>
            </div>
        </footer>
    )
}