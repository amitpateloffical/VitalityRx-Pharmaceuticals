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
      <img height={"500px"} src="https://zyduslife.com/public/images/home-2.jpg"/>
      <img height={"500px"} src="https://zyduslife.com/public/images/home-4.jpg" />
      <img height={"500px"} src="https://img.freepik.com/free-vector/isometric-mars-colonization-color-background-with-text-learn-more-button-people-futuristic-laboratory-environment_1284-31071.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
      <img height={"500px"} src="https://media.istockphoto.com/id/1250152635/photo/medicine-doctor-holding-electronic-medical-and-record-on-tablet-dna-digital-healthcare-and.jpg?s=612x612&w=0&k=20&c=FikWeiJRJBc4UD4wbmhRzPoJRCMnMO8XPY2kD2AWsKA=" />
    
    </Slider>
  );
};

export default MySlider;
