import {useState, useEffect} from 'react'

const Product_display = ({image, image2, image3, image4}) => {

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

    </>
  )
}

export default Product_display
