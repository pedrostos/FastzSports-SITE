import './navbar.css'
import { Link } from 'react-router-dom'
import Logo from '/public/images/logo.png'
import MobileButton from '/public/images/mobile.png'

function menuShow() {
    let mobilemenu = document.querySelector('.menumobile');
    if (mobilemenu.classList.contains('open')) {
        mobilemenu.classList.remove('open');
    } else {
        mobilemenu.classList.add('open');
    }
};
function Navbar() {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="divlogo">
                    <Link to="/"><img src={Logo} alt='' className='imglogo' width="15%" /></Link>
                </div>
                <div className="menu">
                    <ul>
                        <li className="navitem"><Link to="/">Home</Link></li>
                        <li className="navitem"><Link to="/products">Build Your Shoes</Link></li>
                    </ul>
                </div><div className="botaomobile">
                    <button onClick={menuShow}><img src={MobileButton} alt='' className="imgbotao" /></button>
                </div>
            </nav>

            <div className="menumobile">
                <ul>
                    <li className="navitem"><Link to="/">Inicio</Link></li>
                    <li className="navitem"><Link to="/">Fotos</Link></li>
                    <li className="navitem"><Link to="/">História</Link></li>
                </ul>
            </div>
        </header>


    )
};

export default Navbar;