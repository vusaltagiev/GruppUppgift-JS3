import BannerArea from "../../components/BannerArea/BannerArea";
import BestCollectionAllProducts from "../../components/BestCollectionAllProducts/BestCollectionAllProducts";
import BestCollectionNav from "../../components/BestCollectionNav/BestCollectionNav";
import DiscountedProducts from "../../components/DiscountedProducts/DiscountedProducts";
import "./Home.scss";

const Home = () => {
  return <div>
    <BannerArea/>
    <BestCollectionNav/>
    <BestCollectionAllProducts/>
    <DiscountedProducts/>
  </div>;
};

export default Home;
