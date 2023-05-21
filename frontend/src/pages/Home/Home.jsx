import BannerArea from "../../components/BannerArea/BannerArea";
import BestCollectionNav from "../../components/BestCollectionNav/BestCollectionNav";
import BestCollectionProducts from "../../components/BestCollectionProducts/BestCollectionProducts";
import "./Home.scss";

const Home = () => {
  return <div>
    <BannerArea/>
    <BestCollectionNav/>
    <BestCollectionProducts/>
  </div>;
};

export default Home;
