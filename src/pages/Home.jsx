import "swiper/css";
import "./Home.css";
import "swiper/css/navigation";
import MySlider from "../components/MySlider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

  useEffect(() => {
    AOS.init({ duration: 1400 });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="slider-container ">
        <MySlider />
      </div>

      <div className="h-32 p-5">
        <div
          className=" wow fadeIn py-3"
          data-wow-delay="0.1s"
          data-aos="flip-up"
        >
          <div className="service-item d-flex flex-column justify-content-center text-center rounded">

            <h5 className="mb-3 home-heading">Business Area</h5>
            <h1 className="home-subHeading">Advancing Healthcare Through Pharmaceutical Excellence</h1>
            <p>
              Our pharmaceutical business area focuses on the development,
              manufacturing, and commercialization of innovative medicines and healthcare products
              that improve the health and well-being of patients worldwide. We believe in delivering
              value to our customers, stakeholders, and society as a whole through high-quality,
              safe, and effective medicines and therapies. Our commitment to research and development,
              quality, and sustainability
              drives our continuous innovation and growth in the pharmaceutical industry
            </p>
            <a className="btn px-3 mt-auto mx-auto" href="/businessareas">
              Read More..
            </a>
          </div>
        </div>

        <div
          className="col-12 wow fadeIn py-3"
          data-wow-delay="0.1s"
          data-aos="flip-up"
        >
          <div className="service-item d-flex flex-column justify-content-center text-center rounded ">

            <h5 className="mb-3 home-heading">Manufacturing</h5>
            <h1 className="home-subHeading">Innovative Pharmaceutical Manufacturing</h1>
            <p>
            At Vitai'yrx, we are committed to excellence in pharmaceutical
               manufacturing. Our state-of-the-art facilities are equipped with advanced technologies
                and adhere to stringent quality control standards to ensure the safety, efficacy, 
                and reliability of our products. We employ highly skilled professionals who are dedicated to 
                maintaining the highest level of quality and compliance throughout the manufacturing process.
                 Our commitment to innovation, sustainability, and continuous improvement drives our pursuit of 
                 excellence in pharmaceutical manufacturing,
               enabling us to meet the evolving needs of patients and healthcare providers worldwide
            </p>
            <a className="btn px-3 mt-auto mx-auto" href="/manufacturing">
              Read More...
            </a>
           
          </div>
          
        </div>


        <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-right"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="https://img.freepik.com/free-photo/researching-laboratory_1384-51.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-left"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="https://img.freepik.com/free-photo/technologist-expert-protective-uniform-with-hairnet-mask-taking-parameters-from-industrial-machine-food-production-plant_342744-1176.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>
          </div>
        </div>
      </div>

        <div
          className="col-12 wow fadeIn py-3"
          data-wow-delay="0.1s"
          data-aos="flip-up"
        >
          <div className="service-item d-flex flex-column justify-content-center text-center rounded">

            <h5 className="mb-3 home-heading">Research and Development</h5>
            <h1 className="home-subHeading">Cutting-Edge Research and Development (R&D) for Lifesaving Solutions</h1>
            <p>
            we are passionate about improving human health through groundbreaking research and 
              development (R&D). Our R&D teams consist of world-class scientists and medical experts who are dedicated to
               discovering and developing innovative medicines and therapies that address unmet medical needs. Our focus
                on collaboration, cutting-edge technologies, and robust scientific methodologies enables us to accelerate
                 the development of potential lifesaving solutions. With a deep commitment to excellence and a relentless
                  pursuit of scientific discovery, we are working tirelessly to advance
               healthcare and enhance the quality of life for patients around the globe.
            </p>
            <a className="btn px-3 mt-auto mx-auto" href="/features">
              Read More...
            </a>
           
          </div>
          
        </div>

        <div
          className="col-12 wow fadeIn py-3"
          data-wow-delay="0.1s"
          data-aos="flip-up"
        >
          <div className="service-item d-flex flex-column justify-content-center text-center rounded">

            <h5 className="mb-3 home-heading"> About Us</h5>
            <h1 className="home-subHeading">Empowering Health with Excellence</h1>
            <p>
            "VITAI'YRX is driven by a deep commitment to your well-being.
               We relentlessly pursue innovation to develop and deliver life-enhancing medicines and therapies.
                Our promise is to bring you quality, safe, and effective healthcare solutions, backed by scientific
                 rigor and ethical integrity.
               Join us as we strive to create a healthier, happier world for all.
            </p>
            <a className="btn px-3 mt-auto mx-auto" href="/about">
              Read More...
            </a>
          </div>
        </div>

      </div>

     
    </>
  );
}

export default Home;
