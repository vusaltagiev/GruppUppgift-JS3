import "bootstrap/dist/css/bootstrap.min.css";
import Placeholder from "../../images/placeholders/1920x300.svg";
import "./Contact.scss";

const Contact = () => {
  return (
    <div>
      <div className="contact-img">
        <img src={Placeholder}></img>
        {/*
                <div className="col-lg-12">
                    <div className="">
                        <div className="section-title text-center">
                            <h1 className="page-title">CONTACT</h1>
                            <ul className="page-list">
                                <li className='list'>HOME .</li>
                                <li>CONTACT</li>
                            </ul>
                        </div>
                    </div>
                </div>
              */}
      </div>
      <section className="contact-area">
        <div className="container">
          <div className="contactWrapper">
            <div className="col-lg-12">
              <form className="contact-form">
                <h6>Kontaka Oss</h6>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="input-wrap">
                      <label>Ditt namn*</label>
                      <input type="text" className="input" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-wrap">
                      <label>Din E-postadress*</label>
                      <input type="text" className="input" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-wrap">
                      <label>Telefonnummer</label>
                      <input type="text" className="input" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="input-wrap">
                      <label>Företag (frivilligt)</label>
                      <input type="text" className="input" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-wrap single-textarea-wrap">
                      <label>Skriv Något*</label>
                      <textarea className="input textarea"></textarea>
                    </div>
                    <div className="checkbox">
                      <input
                        type="checkbox"
                        aria-label="Checkbox for following text input"
                      />
                      <span>
                        Spara mitt namn, e-post och webbplats i den här
                        webbläsaren till nästa gång jag kommenterar.
                      </span>
                    </div>
                  </div>
                </div>
                <a className="contactBtn" href="#">
                  Skicka
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="contact-map">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Sheikh%20Tower%2C%20%20Bogra%205800&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
