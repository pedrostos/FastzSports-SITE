import './styles/home.css'
import Walking from './images/walking.jpg'
import { FaInstagram, FaFacebook } from 'react-icons/fa'


function Home() {
    return (
        <> 
        <div className="container">
            <div className='subcontainer1'>
                <img src={Walking} className='walking' alt='' />
            </div>
            <div className='subcontainer2'>
                <div>
                <h1 className='texto2'>#BEAFASTZ</h1>
                    <FaInstagram className='insta' />
                    <FaFacebook className='face' />
                </div>
            </div>

        </div>
        
        
        </>
    )
}

export default Home