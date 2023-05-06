import {useEffect, useState} from 'react'
import Related from '../components/Related'

const Details = ({ name, image, image2, image3, image4, category, price, description}) => {


  // Displays the image that is clicked
  const [currentImage, setCurrentImage] = useState(image)

  useEffect(() => {
    setCurrentImage(image)
  }, [image])

  const handleThumbnailClick = (e) =>{
    setCurrentImage(e.target.src)
  }



  // Change active button on click and display different HTML
  const [activeButton, setActiveButton] = useState('description')

  const handleButtonClick = (button) => {
    setActiveButton(button)
  }

  const [relatedProducts, setRelatedProducts] = useState([])


  useEffect(()  => {

    const randomProducts = async () => {
      try{

        const res = await fetch('http://localhost:7000/api/products')
        const data = await res.json()
        setRelatedProducts(data)

      } catch(error){
        console.error(error)
      }
    }
    randomProducts()
  },[])

  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max)
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
        <hr />
        <h3>{price}</h3>
        <div className="add-to-cart">
        <button className='btn-quantity'>-</button>
        <input type="number" />
        <button className='btn-quantity'>+</button>
        <button className='btn-add'> Lägg till i kundvagn</button>
        </div>

        <div className="colors">
          <div className="color black"></div>
          <div className="color red"></div>
          <div className="color yellow"></div>
          <div className="color blue"></div>
        </div>
        <button className='wishlist'>Lägg till på önskelista</button>
        <p>{`Kategori: ${category}`}</p>
      </div>

      <div className="product-description">

        <div className="description-buttons">
          <button className={`btn-description ${ activeButton === 'description' ? 'btn-red' : ''}`} onClick={()=>handleButtonClick('description')}>Beskrivning</button>
          <button className={`btn-description ${ activeButton === 'additional-info' ? 'btn-red' : ''}`} onClick={()=>handleButtonClick('additional-info')}>Övrig information</button>
          <button className={`btn-description ${ activeButton === 'reviews' ? 'btn-red' : ''}`} onClick={()=>handleButtonClick('reviews')}>Recensioner(0)</button>
          <button className={`btn-description ${ activeButton === 'shipping-delivery' ? 'btn-red' : ''}`} onClick={()=>handleButtonClick('shipping-delivery')}>Frakt & Leverans</button>

          { activeButton === 'description' &&
            <>
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
          </>
            }

            {
              activeButton === 'additional-info' && 
            
              <p className='additional'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eligendi ipsum temporibus et tempore obcaecati eaque a, enim quas ullam nesciunt non, soluta aut quisquam corporis doloremque quidem veniam nulla?
              Omnis exercitationem sequi ut blanditiis praesentium perspiciatis accusamus cumque! Enim voluptas corporis minima quo nisi odio, ea alias sint? Quae recusandae quo fuga dolores accusantium aliquid possimus et aperiam dolorem.
              Amet hic, odio, pariatur eligendi eaque nobis obcaecati animi, velit sed asperiores architecto iure ducimus? Necessitatibus, ab, eligendi ducimus perferendis repellendus nihil molestias atque nemo nesciunt officiis mollitia, ratione nostrum.
              Inventore, tempora consequuntur ducimus minus tenetur accusamus ab labore aut maxime temporibus illum nulla deserunt dicta asperiores nemo ullam quia, molestiae incidunt reprehenderit mollitia expedita soluta repellat? Non, a ducimus!
              Nobis, ratione? Qui vel, fugit repellendus quam officiis possimus itaque! Soluta tempora debitis minus non architecto natus ipsum unde, libero eaque totam! Iure laudantium molestias voluptatem hic reiciendis! Quas, a.
              Praesentium enim magni qui ipsa ducimus doloribus vitae, quam molestias alias eveniet suscipit perspiciatis, quaerat veniam. Eos, inventore laboriosam at veritatis sit, numquam accusantium, vitae voluptate asperiores enim aspernatur possimus.
              Magni culpa incidunt molestiae qui. Quisquam numquam illo, illum explicabo commodi dicta consequatur! Ipsam rerum molestiae, ullam illo rem similique praesentium expedita! Voluptatum eius excepturi sunt at odio tempore animi.
              Eveniet ipsum perspiciatis omnis repellendus fugit facere facilis asperiores dolorem veritatis hic molestias veniam accusantium similique repudiandae, consequatur saepe unde eaque. Nobis blanditiis ipsa nam labore est impedit quaerat nihil!
              Vitae voluptate, aliquid repellat reiciendis itaque est tempora, dolorum veniam in facilis nesciunt placeat, repellendus iste. Impedit illum aliquam dignissimos omnis molestiae eveniet asperiores quaerat maxime earum officia. At, dolores.
              Dolorum molestias vel facilis amet quod molestiae ipsum fugiat perspiciatis odio, pariatur beatae itaque atque ipsam dolore tempore illo quidem placeat nihil voluptatum. Sunt eaque, asperiores dolorem eius magni rerum?
              Excepturi, ex deserunt velit facilis culpa voluptas et tempora cupiditate quas quo qui alias id dolores ad eaque. Inventore voluptates ex quia nemo iste, suscipit magnam sed veritatis voluptate quod!</p>
            }

            {
              activeButton === 'reviews' &&
              <h2>Inga recensioner än</h2>
            }

            {
              activeButton === 'shipping-delivery' &&
              <p className='additional'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum eligendi ipsum temporibus et tempore obcaecati eaque a, enim quas ullam nesciunt non, soluta aut quisquam corporis doloremque quidem veniam nulla?
              Omnis exercitationem sequi ut blanditiis praesentium perspiciatis accusamus cumque! Enim voluptas corporis minima quo nisi odio, ea alias sint? Quae recusandae quo fuga dolores accusantium aliquid possimus et aperiam dolorem.
              Amet hic, odio, pariatur eligendi eaque nobis obcaecati animi, velit sed asperiores architecto iure ducimus? Necessitatibus, ab, eligendi ducimus perferendis repellendus nihil molestias atque nemo nesciunt officiis mollitia, ratione nostrum.
              Inventore, tempora consequuntur ducimus minus tenetur accusamus ab labore aut maxime temporibus illum nulla deserunt dicta asperiores nemo ullam quia, molestiae incidunt reprehenderit mollitia expedita soluta repellat? Non, a ducimus!
              Nobis, ratione? Qui vel, fugit repellendus quam officiis possimus itaque! Soluta tempora debitis minus non architecto natus ipsum unde, libero eaque totam! Iure laudantium molestias voluptatem hic reiciendis! Quas, a.
              Praesentium enim magni qui ipsa ducimus doloribus vitae, quam molestias alias eveniet suscipit perspiciatis, quaerat veniam. Eos, inventore laboriosam at veritatis sit, numquam accusantium, vitae voluptate asperiores enim aspernatur possimus.
              Magni culpa incidunt molestiae qui. Quisquam numquam illo, illum explicabo commodi dicta consequatur! Ipsam rerum molestiae, ullam illo rem similique praesentium expedita! Voluptatum eius excepturi sunt at odio tempore animi.
              Eveniet ipsum perspiciatis omnis repellendus fugit facere facilis asperiores dolorem veritatis hic molestias veniam accusantium similique repudiandae, consequatur saepe unde eaque. Nobis blanditiis ipsa nam labore est impedit quaerat nihil!
              Vitae voluptate, aliquid repellat reiciendis itaque est tempora, dolorum veniam in facilis nesciunt placeat, repellendus iste. Impedit illum aliquam dignissimos omnis molestiae eveniet asperiores quaerat maxime earum officia. At, dolores.
              Dolorum molestias vel facilis amet quod molestiae ipsum fugiat perspiciatis odio, pariatur beatae itaque atque ipsam dolore tempore illo quidem placeat nihil voluptatum. Sunt eaque, asperiores dolorem eius magni rerum?
              Excepturi, ex deserunt velit facilis culpa voluptas et tempora cupiditate quas quo qui alias id dolores ad eaque. Inventore voluptates ex quia nemo iste, suscipit magnam sed veritatis voluptate quod!</p>
            }

        </div>
      </div>

     <Related/>
    </section>
    </>
  )
}

export default Details
