import './_products.scss';


const Prdoucts = () =>{
  const productData = [
    {
      pName: "Jacket",
      price: 50,
      img: "shop-1.jpg"
    },
    {
      pName: "Purse",
      price: 50,
      img: "shop-2.jpg"
    },
    {
      pName: "Dress",
      price: 50,
      img: "shop-3.jpg"
    },
    {
      pName: "Pants",
      price: 50,
      img: "shop-4.jpg"
    },
    {
      pName: "Boots",
      price: 50,
      img: "shop-5.jpg"
    },
    {
      pName: "Earrings",
      price: 10,
      img: "shop-6.jpeg"
    },
    {
      pName: "Pants",
      price: 50,
      img: "shop-7.jpeg"
    },
    {
      pName: "Sneakers",
      price: 50,
      img: "shop-8.jpg"
    },
    {
      pName: "Shirt",
      price: 50,
      img: "shop-9.jpg"
    },
    {
      pName: "Gold Earrings",
      price: 50,
      img: "shop-11.jpeg"
    },
  ]

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
