import React from "react";
import "./SubscribeArea.scss";
const SubscribeArea = () => {
  return (
    <>
      <section className="subscribe-area">
        <div className="container">
          <div className="row">
            <div className="subscribe-wrap">
              <div className="row justify-content-center">
                <div className="col-lg-10">
                  <div className="single-subscribe-wrap">
                    <input type="text" placeholder="Ange din e-post här" />
                    <button className="btn">PRENUMERERA PÅ NYHETSBREV</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SubscribeArea;
