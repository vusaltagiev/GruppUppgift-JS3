import {useEffect, useState} from 'react'

const productDetails = ({ name, image, image2, image3, image4, category, price, description, id, product}) => {


  return (
    <>
    <section className='product-details'>

      <div className="details-images">

        <div className="display-image">
          <img src={product.image} alt="" />
        </div>

        <div className="thumbnails">

          <div className="thumbnail-div">
            <img src={product.image} alt="" />
          </div>
          <div className="thumbnail-div">
            <img src={product.image2} alt="" />
          </div>
          <div className="thumbnail-div">
            <img src={product.image3} alt="" />
          </div>
          <div className="thumbnail-div">
            <img src={product.image4} alt="" />
          </div>
        </div>
      </div>

      <div className="product-information">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <h3>{product.price}</h3>
        <div className="add-to-cart">
        <button className='btn-quantity'>-</button>
        <input type="number" />
        <button className='btn-quantity'>+</button>
        <button className='btn-add'> Add to Cart</button>
        </div>
        <p>Add to wishlist</p>
        <p>{`Category: ${product.category}`}</p>
      </div>
    </section>
    </>
  )
}

export default productDetails
