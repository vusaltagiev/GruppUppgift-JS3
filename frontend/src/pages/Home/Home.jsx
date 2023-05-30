import BannerArea from "../../components/BannerArea/BannerArea";
import BestCollection from "../../components/BestCollection/BestCollection";
import DiscountedProducts from "../../components/DiscountedProducts/DiscountedProducts";
import SubscribeArea from "../../components/SubscribeArea/SubscribeArea";
import TopSelling from "../../components/TopSelling/TopSelling";


import "./Home.scss";

const Home = () => {
  return (
    <>
      <BannerArea />
      <BestCollection />
      <DiscountedProducts />
      <TopSelling />
      <SubscribeArea/>
    </>
  );
};

export default Home;
