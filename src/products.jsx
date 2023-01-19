import './styles/products.css'
import Shoes1 from '../src/images/shoes1.png'

const products = () => {

    class Product {
        constructor(color, price) {
            this.color = color
            this.price = price
        }
    }
    const tenis1 = new Product ('black', '200');
    const tenis2 = new Product ('white', '500');
    const tenis3 = new Product ('blue', '100');


    console.log(tenis1)

  

  return (
    <>
    <div className="containerProducts">
        <h1 className='titleProduct'>Produacts</h1>
        <div className='product'>
            <img src={Shoes1} alt='' className='img' />
            <span className='descriptionProduct'>Confortable Shoes - U$ 100,00</span>
            </div>
        <div className='product'>
            prduto2
            </div>
        <div className='product'>
            prduto3
            </div>
        <div className='product'>
            prduto4
            </div>
        <div className='product'>
            prduto5
            </div>
        <div className='product'>
            prduto6
            </div>
        <div className='product'>
            prduto7
            </div>
        <div className='product'>
            prduto8
            </div>
    </div>
    </>

    
  )
}

export default products
