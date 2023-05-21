import './BannerArea.scss'
import "bootstrap/dist/css/bootstrap.css";
import BannerImg from "../../images/placeholders/625x647.svg";

const BannerArea = () => {
  return (
    <section className="banner-area">
        <div className="container-baner">
            <div className="row">
                <div className="col-lg-7 align-self-center">
                    <div className="banner-inner">
                        <h6>WELLCOME TO BMARKETO SHOP</h6>
                        <h1>Exclusive Chair gold Collection. </h1>
                        <a className="btn-banner" href="product.html">SHOP NOW</a>
                    </div>
                </div>
                <div className="col-lg-5 d-none d-lg-block">
                    <div>
                        <div className="slider-item">
                            <img src={BannerImg}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BannerArea