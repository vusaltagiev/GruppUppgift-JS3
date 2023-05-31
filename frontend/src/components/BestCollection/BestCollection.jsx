import BestCollectionAllProducts from "../BestCollectionAllProducts/BestCollectionAllProducts";
import "./BestCollection.scss";
import "bootstrap/dist/css/bootstrap.min.css";
const BestCollectionNav = () => {
  return (
    <section className="product-area pd-top-66 pd-bottom-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <h2 className="title">Våran Samling</h2>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="isotope-filters product-isotope-btn text-center">
              <button className="button pl-0 active" data-filter="*">
                Allt
              </button>
              <button className="button" data-filter=".cat-1">
                Väskor
              </button>
              <button className="button" data-filter=".cat-3">
                Dekorationer
              </button>
              <button className="button" data-filter=".cat-4">
                Väsentligheter
              </button>
              <button className="button" data-filter=".cat-5">
                Interiör
              </button>
              <button className="button" data-filter=".cat-6">
                Laptop
              </button>
              <button className="button" data-filter=".cat-7">
                Mobil
              </button>
              <button className="button mr-0" data-filter=".cat-8">
                Skönhet
              </button>
            </div>
          </div>
        </div>
        <BestCollectionAllProducts />
      </div>
    </section>
  );
};

export default BestCollectionNav;
