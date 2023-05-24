import BannerArea from "../../components/BannerArea/BannerArea";
import BestCollectionAllProducts from "../../components/BestCollectionAllProducts/BestCollectionAllProducts";
import BestCollectionNav from "../../components/BestCollectionNav/BestCollectionNav";

import "./Home.scss";

const Home = () => {
  return <div>
    <BannerArea/>
    <BestCollectionNav/>
    <BestCollectionAllProducts/>
  </div>;
};

export default Home;
