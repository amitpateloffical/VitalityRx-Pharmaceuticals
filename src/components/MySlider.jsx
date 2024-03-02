// MySlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const MySlider = () => {
  const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`slider-arrow slider-prev-arrow ${className}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={`slider-arrow slider-next-arrow ${className}`} onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Slide every 3 seconds
    arrows: true,
    // centerMode: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  return (
    <Slider {...settings} >
      {/* First Slide */}

      <img height={"500px"} src="https://media.istockphoto.com/id/1221032250/photo/asian-scientist-or-doctors-use-microscopes-to-test-for-the-coronavirus-or-a-new-flu-virus-to.jpg?s=612x612&w=0&k=20&c=nqmrPXZDDKH1o2WyNlmJK7oyd8zvZqgHnWkXg2HS96k=" />
      <img  height={"500px"} src="data:image/jpeg;base64,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"/>
      <img height={"500px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CXxloIRkOIJeWT5aFndqWZdIdVKQKp1KoA&usqp=CAU" />
     <img height={"500px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHjnif536FQuok-vbwj-9_NCJq9hJUoqrbJQ&usqp=CAU" />
      {/* <div className="container-fluid pt-5  hero-header mb-5">
        <div className="container pt-5">
          <div className="row g-5 pt-5">
            <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
              <div className="btn btn-sm border rounded-pill text-dark px-3 mb-3 animated slideInRight">
                Life Link Digital
              </div>
              <h1 className="display-4 text-dark mb-4 animated slideInRight">
                Artificial Intelligence for Your Business
              </h1>
              <p className="text-dark mb-4 animated slideInRight">
                Empowering Your Business with Intelligent Solutions: Harness the Power of Artificial Intelligence to
                Optimize, Innovate, and Excel in the Digital Era.
              </p>
              <a href="" className="btn btn-dark py-sm-3 px-sm-5 rounded-pill me-3 animated slideInRight">
                Read More
              </a>
              <a href="" className="btn btn-outline-dark py-sm-3 px-sm-5 rounded-pill animated slideInRight">
                Contact Us
              </a>
            </div>
            <div className="col-lg-6 align-self-end text-center text-lg-end">
              <img className="img-head " src="/3dd.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}
    
      
    </Slider>
  );
};

export default MySlider;
