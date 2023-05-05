import {useEffect, useState} from 'react'

const Details = ({ name, image, image2, image3, image4, category, price, description}) => {


  // Displays the image that is clicked
  const [currentImage, setCurrentImage] = useState(image)

  useEffect(() => {
    setCurrentImage(image)
  }, [image])

  const handleThumbnailClick = (e) =>{
    setCurrentImage(e.target.src)
  }

  return (
    <>
    <section className='product-details'>

      <div className="details-images">

        <div className="display-image">
          <img src={currentImage} alt={name} />
        </div>

        <div className="thumbnails">

          <div className="thumbnail-div">
            <img src={image} alt={name}  onClick={handleThumbnailClick}/>
          </div>
          <div className="thumbnail-div">
            <img src={image2} alt={name}  onClick={handleThumbnailClick}/>
          </div>
          <div className="thumbnail-div">
            <img src={image3} alt={name}  onClick={handleThumbnailClick}/>
          </div>
          <div className="thumbnail-div">
            <img src={image4} alt={name} onClick={handleThumbnailClick} />
          </div>
        </div>
      </div>

      <div className="product-information">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{price}</h3>
        <div className="add-to-cart">
        <button className='btn-quantity'>-</button>
        <input type="number" />
        <button className='btn-quantity'>+</button>
        <button className='btn-add'> Add to Cart</button>
        </div>

        <div className="colors">
          <div className="color black"></div>
          <div className="color red"></div>
          <div className="color yellow"></div>
          <div className="color blue"></div>
        </div>
        <p className='wishlist'>Add to wishlist</p>
        <p>{`Category: ${category}`}</p>
      </div>

      <div className="product-description">

        <div className="description-buttons">
          <button className='btn-description'>Description</button>
          <button className='btn-description'>Additional info</button>
          <button className='btn-description'>Reviews(0)</button>
          <button className='btn-description'>Shipping & Delivery</button>

          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quae impedit repudiandae? Aspernatur cupiditate</h2>

          <div className="description-container">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quia ducimus ullam dolorum odio maiores nesciunt, quidem, cum omnis autem animi esse sapiente molestiae aperiam, molestias pariatur? Molestias, iure dicta.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus mollitia ea molestias. Quisquam perspiciatis hic quia, mollitia minima voluptates repudiandae exercitationem? Suscipit rem distinctio architecto iste ipsam inventore voluptas alias.
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias expedita sit, ratione architecto eligendi minima dolores voluptate voluptates magnam! Laudantium illum ullam, quasi repellat assumenda quos ipsum! Tempora, aperiam laboriosam.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam provident velit totam numquam doloribus maiores laboriosam esse deleniti nobis molestias eligendi nostrum suscipit unde minus omnis nihil at, porro iusto!
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere voluptatum consequuntur illo aperiam optio, eum delectus dolore a. Ratione debitis eum exercitationem eveniet blanditiis, corporis modi rerum. Fugiat, quisquam obcaecati!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quo hic animi corporis quae ad voluptate totam. Assumenda enim ducimus nesciunt ad error, nobis nemo ut nihil atque omnis dignissimos!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio facere consequatur. Consequatur voluptatem libero consequuntur tempora voluptatum vel, magni est ullam. Distinctio vel quaerat incidunt eligendi laudantium odit. Pariatur.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum repellat accusantium in earum officia ex ratione laudantium laborum eligendi, eum, asperiores fuga? Repudiandae provident atque dolorem totam veritatis, beatae velit.
            </p>

            <img src={image} alt="" />
          </div>
        </div>
      </div>

      <div className="related-container">
        <h2>Related Products</h2>
      </div>
    </section>
    </>
  )
}

export default Details
