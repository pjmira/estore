import { useSelector } from 'react-redux';
import './_products.scss';
import productSlice from '../../Redux/Product/productSlice/productSlice';


const Prdoucts = () =>{
  const productData = useSelector(productSlice.getInitialState)

  return (
    <div className='products-container'>
      {
        productData.map((product,key)=>{
          return(
            
            <div className='product-card mx-5 p-3'>
              <div className='product-image-container'>
                <img className='product-images' src={require('../../assets/images/shop/'+product.img)} />
              </div>
              <div className='product-info'>
                <h5> <a href='#'>{product.pName} </a> </h5>
                <p className='product-price'>${product.price}</p>
                <div className='product-rating'>
                  <i className='fa fa-star'/>
                  <i className='fa fa-star'/>
                  <i className='fa fa-star'/>
                  <i className='fa fa-star'/>
                  <i className='fa fa-star'/>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Prdoucts;
