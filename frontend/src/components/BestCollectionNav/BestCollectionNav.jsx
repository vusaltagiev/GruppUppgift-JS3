import './BestCollectionNav.scss'
import "bootstrap/dist/css/bootstrap.min.css";
const BestCollectionNav = () => {
  return (
    <>
        <div className="row">
                <div className="col-lg-12">
                    <div className="section-title text-center">
                        <h2 className="title">Best Collection</h2>
                    </div>                    
                </div>
                <div className="col-lg-12">
                    <div className="BestCollectionNavBar">
                        <button className="button pl-0 active" data-filter="*">All</button>
                        <button className="button" data-filter=".cat-1">Bags</button>
                        <button className="button" data-filter=".cat-2">Dress</button>
                        <button className="button" data-filter=".cat-3">Decoration</button>
                        <button className="button" data-filter=".cat-4">Essentials</button>
                        <button className="button" data-filter=".cat-5">Interior</button>
                        <button className="button" data-filter=".cat-6">Laptop</button>
                        <button className="button" data-filter=".cat-7">Mobile</button>
                        <button className="button mr-0" data-filter=".cat-8">Beauty</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default BestCollectionNav 