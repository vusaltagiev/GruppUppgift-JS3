import { useEffect, useState } from "react";
import "./Display.scss";

const Display = ({ product }) => {
  // Displays the image that is clicked
  const [currentImage, setCurrentImage] = useState(product?.image);

  // Changes product image when going to different product details from details page
  useEffect(() => {
    setCurrentImage(product.image);
  }, [product]);

  const handleThumbnailClick = (e) => {
    setCurrentImage(e.target.src);
  };
  return (
    <>
      <div className="details-images">
        <div className="display-image">
          <img src={currentImage || product.image} alt={product?.name} />
        </div>

        <div className="thumbnails">
          <div className="thumbnail-div">
            <img
              src={product?.image}
              alt={product?.name}
              onClick={handleThumbnailClick}
            />
          </div>
          <div className="thumbnail-div">
            <img
              src={product?.image2}
              alt={product?.name}
              onClick={handleThumbnailClick}
            />
          </div>
          <div className="thumbnail-div">
            <img
              src={product?.image3}
              alt={product?.name}
              onClick={handleThumbnailClick}
            />
          </div>
          <div className="thumbnail-div">
            <img
              src={product?.image4}
              alt={product?.name}
              onClick={handleThumbnailClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
