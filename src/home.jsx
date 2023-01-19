import './styles/home.css'
import './styles/products.css'
import Walking from './images/walking.jpg'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import Shoes1 from '../src/images/shoes1.png'
import allShoes from './listProducts.jsx'


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

        <div className="containerProducts">
        <h1 className='titleProduct'></h1>
        <div className='product'>
            <img src={Shoes1} alt='' className='img' />
            <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
            </div>
            <div className='product'>
            <img src={Shoes1} alt='' className='img' />
            <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
            </div>
            <div className='product'>
            <img src={Shoes1} alt='' className='img' />
            <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
            </div>
            <div className='product'>
            <img src={Shoes1} alt='' className='img' />
            <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
            </div>
            <div className='product'>
            <img src={Shoes1} alt='' className='img' />
            <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
            </div>
            <div className='product'>
            <img src={Shoes1} alt='' className='img' />
            <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
            </div>
            <div className='product'>
            <img src={Shoes1} alt='' className='img' />
            <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
            </div>
            <div className='product'>
            <img src={Shoes1} alt='' className='img' />
            <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
            </div>
            <div className='product'>
            <img src={Shoes1} alt='' className='img' />
            <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
            </div>
    </div>

        
        
        </>
    )
}

export default Home