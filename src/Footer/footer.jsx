import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import './footer.css'
import { Link } from 'react-router-dom'


function Footer() {
    return (
        <footer className="foot">
            <span>
                FASTZ SPORTS &copy;
            </span>

            <ul>
                <li><FaInstagram className="instaf" /></li>
                <li><FaWhatsapp className="facef" /></li>
            </ul>
        </footer>
    )
};

export default Footer;