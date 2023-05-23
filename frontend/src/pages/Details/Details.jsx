import { useEffect, useState } from "react";
import Related from "../../components/Related/Related";
import { useParams } from "react-router-dom";
import "./Details.scss";
import Banner from "../../components/Banner/Banner";
import Display from "../../components/Display/Display";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import ProductInfo from "../../components/ProductInfo/ProductInfo";

const Details = () => {
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
  }, [productId]);

  return (
    <>
      <Banner />
      <section className="product-details container">
        <Display product={product} />
        <ProductDetails product={product} />
        <ProductInfo product={product} />
        <Related />
      </section>
    </>
  );
};

export default Details;
