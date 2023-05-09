import { useEffect, useState } from "react";
import Related from "../../components/Related/Related";
import { MdAddShoppingCart } from "react-icons/md";
import { useParams } from "react-router-dom";
import "./Details.scss";

const Details = () => {
  const [quantity, setQuantity] = useState(0);

  const { productId } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          `http://localhost:7000/api/products/${productId}`
        );
        const data = await res.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
    }
  };

  // Displays the image that is clicked
  const [currentImage, setCurrentImage] = useState(product?.image);

  const handleThumbnailClick = (e) => {
    setCurrentImage(e.target.src);
  };

  // Change active button on click and display different HTML
  const [activeButton, setActiveButton] = useState("description");

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <section className="product-details container">
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

        <div className="product-information">
          <h2>{product?.name}</h2>
          <p>{product?.description}</p>
          <hr />
          <h3>{product?.price}</h3>
          <div className="add-to-cart">
            <button
              className="btn-quantity"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <input type="number" value={quantity} readOnly />
            <button
              className="btn-quantity"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
            <button className="btn-add">
              {" "}
              Lägg till i kundvagn
              <MdAddShoppingCart className="cart-icon" />{" "}
            </button>
          </div>

          <div className="colors">
            <div className="color black"></div>
            <div className="color red"></div>
            <div className="color yellow"></div>
            <div className="color blue"></div>
          </div>
          <button className="wishlist">Lägg till på önskelista </button>
          <p>{`Kategori: ${product?.category}`}</p>
        </div>

        <div className="product-description">
          <div className="description-buttons">
            <button
              className={`btn-description ${
                activeButton === "description" ? "btn-red" : ""
              }`}
              onClick={() => handleButtonClick("description")}
            >
              Beskrivning
            </button>
            <button
              className={`btn-description ${
                activeButton === "additional-info" ? "btn-red" : ""
              }`}
              onClick={() => handleButtonClick("additional-info")}
            >
              Övrig information
            </button>
            <button
              className={`btn-description ${
                activeButton === "reviews" ? "btn-red" : ""
              }`}
              onClick={() => handleButtonClick("reviews")}
            >
              Recensioner(0)
            </button>
            <button
              className={`btn-description ${
                activeButton === "shipping-delivery" ? "btn-red" : ""
              }`}
              onClick={() => handleButtonClick("shipping-delivery")}
            >
              Frakt & Leverans
            </button>

            {activeButton === "description" && (
              <>
                <h2>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorem quae impedit repudiandae? Aspernatur cupiditate
                </h2>

                <div className="description-container">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dignissimos quia ducimus ullam dolorum odio maiores
                    nesciunt, quidem, cum omnis autem animi esse sapiente
                    molestiae aperiam, molestias pariatur? Molestias, iure
                    <br />
                    <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Molestias expedita sit, ratione architecto eligendi minima
                    dolores voluptate voluptates magnam! Laudantium illum ullam,
                    quasi repellat assumenda quos ipsum! Tempora, aperiam
                    laboriosam.
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quam provident velit totam numquam doloribus maiores
                    laboriosam esse deleniti nobis molestias eligendi nostrum
                    suscipit unde minus omnis nihil at, porro iusto! Lorem,
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iusto quo hic animi corporis quae ad voluptate totam.
                    Assumenda enim ducimus nesciunt ad error, nobis nemo ut
                    nihil atque omnis dignissimos! Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quaerat optio facere
                  </p>

                  <img src={product.image} alt="" />
                </div>
              </>
            )}

            {activeButton === "additional-info" && (
              <p className="additional">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum eligendi ipsum temporibus et tempore obcaecati eaque a,
                enim quas ullam nesciunt non, soluta aut quisquam corporis
                doloremque quidem veniam nulla? Omnis exercitationem sequi ut
                blanditiis praesentium perspiciatis accusamus cumque! Enim
                voluptas corporis minima quo nisi odio, ea alias sint? Quae
                recusandae quo fuga dolores accusantium aliquid possimus et
                aperiam dolorem. Amet hic, odio, pariatur eligendi eaque nobis
                obcaecati animi, velit sed asperiores architecto iure ducimus?
                Necessitatibus, ab, eligendi ducimus perferendis repellendus
              </p>
            )}

            {activeButton === "reviews" && <h2>Inga recensioner än</h2>}

            {activeButton === "shipping-delivery" && (
              <p className="additional">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Laborum eligendi ipsum temporibus et tempore obcaecati eaque a,
                enim quas ullam nesciunt non, soluta aut quisquam corporis
                doloremque quidem veniam nulla? Omnis exercitationem sequi ut
                blanditiis praesentium perspiciatis accusamus cumque! Enim
                voluptas corporis minima quo nisi odio, ea alias sint? Quae
                recusandae quo fuga dolores accusantium aliquid possimus et
                aperiam dolorem. Amet hic, odio, pariatur eligendi eaque nobis
                obcaecati animi, velit sed asperiores architecto iure ducimus?
                Necessitatibus, ab, eligendi ducimus perferendis repellendus
              </p>
            )}
          </div>
        </div>

        <Related />
      </section>
    </>
  );
};

export default Details;
