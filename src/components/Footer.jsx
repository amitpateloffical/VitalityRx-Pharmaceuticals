

import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const navigate = useNavigate();
  const handleClick = (to) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate(to);
  };
  
  return (
    <>
      {/* <!-- Footer Start --> */}
      <div className="container-fluid bg-dark text-white-50 footer ">
    <div className="row p-3"> 
    <div className="col-md-9">
      Address :  2 GHJ+3F Kruger National Park, Sabie Park, 1260, South Africa
    </div>
<div className="col-md-3">
  <a href="">info@VitalityRX-pharma.in</a>
</div>
    </div>
        <div className="container wow fadeIn" data-wow-delay="0.1s">
          <div className="copyright">
            <div className="row py-3">
              <div className="col-md-4 text-center text-md-start mb-2 mb-md-0">
                &copy; VITAI'YRX Pharmaceuticals, All Right Reserved.
              </div>
              <div className="col-md-4">
                <div className="d-flex justify-content-center justify-content-md-start">
                  <a className="btn btn-outline-light btn-social" href="">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                  <a className="btn btn-outline-light btn-social" href="">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </div>
              </div>
              <div className="col-md-4 text-center text-md-end">
                <div className="footer-menu">
                  <a href="/">Home</a>
                  <a href="/features">R&D</a>
                  <a href="/about">About Us</a>
                  <a href="/contact">Contact us</a>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
    </>
  );
}

export default Footer;
