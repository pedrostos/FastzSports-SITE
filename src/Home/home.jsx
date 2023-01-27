import './home.css'
import '../Products/products.css'
import Walking from '/public/images/walking.jpg'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import Shoes1 from '/public/images/shoes1.png'
import Shoes2 from '/public/images/casual.png'
import allShoes from '../Products/listProducts.jsx'


function Home() {
    return (
        <> <div className='containerPai'>
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
        </div>


            <div className="containerProducts">
                <div className='containerMae'>
                    <h1 className='titleProduct'></h1>
                    <div className='product'>
                        <img src={Shoes1} alt='' className='img' width='70%' height='80%' />
                        <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
                    </div>
                    <div className='product'>
                        <img src={Shoes2} alt='' className='img' width='70%' height='' />
                        <span className='descriptionProduct'>{allShoes[1].name} - {allShoes[1].price}</span>
                    </div>
                    <div className='product'>
                        <img src={Shoes1} alt='' className='img' width='70%' height='80%' />
                        <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
                    </div>
                    <div className='product'>
                        <img src={Shoes1} alt='' className='img' width='70%' height='80%' />
                        <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
                    </div>
                    <div className='product'>
                        <img src={Shoes1} alt='' className='img' width='70%' height='80%' />
                        <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
                    </div>
                    <div className='product'>
                        <img src={Shoes1} alt='' className='img' width='70%' height='80%' />
                        <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
                    </div>
                    <div className='product'>
                        <img src={Shoes1} alt='' className='img' width='70%' height='80%' />
                        <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
                    </div>
                    <div className='product'>
                        <img src={Shoes1} alt='' className='img' width='70%' height='80%' />
                        <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
                    </div>
                    <div className='product'>
                        <img src={Shoes1} alt='' className='img' width='70%' height='80%' />
                        <span className='descriptionProduct'>{allShoes[0].name} - {allShoes[0].price}</span>
                    </div>

                </div>
            </div>





        </>
    )
}

export default Home