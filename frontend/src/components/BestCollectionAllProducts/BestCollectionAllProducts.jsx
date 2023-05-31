import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import BestCollectionProduct from "../BestCollectionProduct/BestCollectionProduct";
import "./BestCollectionAllProducts.scss";

const BestCollectionAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [displayCount] = useState(8);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/products")
      .then((response) => {
        const { data } = response;
        const extractedProducts = data.map(({ _id, image, name, price }) => ({
          id: _id,
          image,
          name,
          price,
        }));
        setProducts(extractedProducts);
      })
      .catch((error) => console.log(error));
  }, []);

  const productList = products
    .slice(0, showAll ? products.length : displayCount)
    .map((product) => (
      <BestCollectionProduct
        id={product.id}
        img={product.image}
        name={product.name}
        price={product.price} key={product.id + product.name}
      />
    ));

  const handleLoadMore = () => {
    if (!showAll) {
      setShowAll(true);
    }
  };

  return (
    <div className="gallery-section">
      <div className="gallery-isotope row">
        {productList}
      </div>
      {!showAll && (
        <div className="row">
          <div className="col-12 text-center">
            <button className="btn btn-border" onClick={handleLoadMore}>
              VISA MER <FontAwesomeIcon icon={faRedoAlt} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BestCollectionAllProducts;
