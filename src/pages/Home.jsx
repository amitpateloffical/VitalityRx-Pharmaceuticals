import "swiper/css";
import "./Home.css";
import "swiper/css/navigation";
import MySlider from "../components/MySlider";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";
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
      <div className="container-fluid p-5 hero-header mb-5 mt-4">
        <div >
          <div className=" g-5 align-items-center slider-img">
            <div className="  wow fadeIn" data-wow-delay="0.1s" data-aos="fade-right">
              <div className="abouts">
                <img className="img-fluid" src="https://www.shutterstock.com/shutterstock/photos/623912978/display_1500/stock-photo-a-futuristic-doctor-with-syringe-withdraws-a-liquid-medicine-and-appears-a-hologram-of-a-planet-623912978.jpg" />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill  px-3 mb-3">
                Business Area
              </div>
              <h1 className="heading-about">Advancing Healthcare Through Pharmaceutical Excellence</h1>
              <p className="home-para">"Our pharmaceutical business area focuses on the development,
               manufacturing, and commercialization of innovative medicines and healthcare products
                that improve the health and well-being of patients worldwide. We believe in delivering
                 value to our customers, stakeholders, and society as a whole through high-quality,
                  safe, and effective medicines and therapies. Our commitment to research and development, 
                  quality, and sustainability
              drives our continuous innovation and growth in the pharmaceutical industry"</p>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-5  hero-header mb-5 mt-4">
        <div className="">
          <div className="slider-img g-5 align-items-center">
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill px-3 mb-3">
                Manufacturing
              </div>
              <h1 className="heading-about">Innovative Pharmaceutical Manufacturing</h1>
              <p className="home-para">"At Vitai'yrx, we are committed to excellence in pharmaceutical
               manufacturing. Our state-of-the-art facilities are equipped with advanced technologies
                and adhere to stringent quality control standards to ensure the safety, efficacy, 
                and reliability of our products. We employ highly skilled professionals who are dedicated to 
                maintaining the highest level of quality and compliance throughout the manufacturing process.
                 Our commitment to innovation, sustainability, and continuous improvement drives our pursuit of 
                 excellence in pharmaceutical manufacturing,
               enabling us to meet the evolving needs of patients and healthcare providers worldwide"</p>

            </div>
            <div className="wow fadeIn" data-wow-delay="0.1s" data-aos="fade-right">
<div className="abouts">
              <img className="img-fluid" src="https://media.istockphoto.com/id/1221032250/photo/asian-scientist-or-doctors-use-microscopes-to-test-for-the-coronavirus-or-a-new-flu-virus-to.jpg?s=612x612&w=0&k=20&c=nqmrPXZDDKH1o2WyNlmJK7oyd8zvZqgHnWkXg2HS96k=" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-5 hero-header mb-5 mt-4">
        <div >
          <div className=" g-5 align-items-center slider-img">
            <div className="  wow fadeIn" data-wow-delay="0.1s" data-aos="fade-right">
              <div className="abouts">
                <img className="img-fluid"  src="https://media.istockphoto.com/id/1403976499/photo/pharmaceutical-worker-or-technologist-in-protective-equipment-controlling-quality-of-vaccine.jpg?s=612x612&w=0&k=20&c=qEgH2NQ1kpfjls4HXkj4pbsVt6swPWs-v5RaC2PxYGs=" />
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill  px-3 mb-3">
                Research & Development
              </div>
              <h1 className="heading-about">Cutting-Edge Research and Development (R&D) for Lifesaving Solutions</h1>
              <p className="home-para">"we are passionate about improving human health through groundbreaking research and 
              development (R&D). Our R&D teams consist of world-class scientists and medical experts who are dedicated to
               discovering and developing innovative medicines and therapies that address unmet medical needs. Our focus
                on collaboration, cutting-edge technologies, and robust scientific methodologies enables us to accelerate
                 the development of potential lifesaving solutions. With a deep commitment to excellence and a relentless
                  pursuit of scientific discovery, we are working tirelessly to advance
               healthcare and enhance the quality of life for patients around the globe."</p>

            </div>
          </div>
        </div>
      </div>


      <div className="container-fluid p-5  hero-header mb-5 mt-4">
        <div className="">
          <div className="slider-img g-5 align-items-center">
            <div
              data-aos="fade-left"
              className="col-lg-6 wow fadeIn"
              data-wow-delay="0.5s"
            >
              <div className="home-head rounded-pill px-3 mb-3">
                About Us
              </div>
              <h1 className="heading-about"> Empowering Health with Excellence</h1>
              <p className="home-para"> "VITAI'YRX is driven by a deep commitment to your well-being.
               We relentlessly pursue innovation to develop and deliver life-enhancing medicines and therapies.
                Our promise is to bring you quality, safe, and effective healthcare solutions, backed by scientific
                 rigor and ethical integrity.
               Join us as we strive to create a healthier, happier world for all."</p>

            </div>
            <div className="wow fadeIn abouts" data-wow-delay="0.1s" data-aos="fade-right">

              <img className="img-fluid" height={"344px"} width={"612px"} src="https://media.istockphoto.com/id/1087218874/photo/shot-of-sterile-pharmaceutical-manufacturing-laboratory-where-scientists-in-protective.jpg?s=612x612&w=0&k=20&c=mFStTtDFonCqG1G9v5VPiWj5pZpfUNnx9djpQSZqocI=" />

            </div>
          </div>
        </div>
      </div>



      {/* <div className="container-fluid bg-light mt-5 py-5 ">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div
              className="col-lg-5 wow fadeIn"
              data-wow-delay="0.1s"
              data-aos="fade-right"
            >
              <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
                Our Services
              </div>
              <h1 className="mb-4">
                Our Excellent AI Solutions for Your Business
              </h1>
              <p className="mb-4">
                Tailored AI Services to Elevate Your Business Unlock the full
                potential of Artificial Intelligence with our tailored solutions
                at [Your Business Name]. We offer dynamic and innovative
                services, seamlessly integrating AI into your operations. From
                intelligent automation to data-driven insights, our expertise
                ensures your business stays at the forefront of technological
                advancement.
              </p>
              <a className="btn btn-primary rounded-pill px-4" href="">
                Read More
              </a>
            </div>
            <div className="col-lg-7" data-aos="fade-left">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="row g-4">
                    <div
                      className="col-12 wow fadeIn"
                      data-wow-delay="0.1s"
                      data-aos="flip-up"
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FontAwesomeIcon icon={faRobot} />
                        </div>
                        <h5 className="mb-3">Robotic Automation</h5>
                        <p>
                          Revolutionize Efficiency with Robotic Automation at
                          Life Link Digital. Streamlined processes for enhanced
                          productivity and a future-focused approach to work.
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-12 wow fadeIn"
                      data-aos="flip-up"
                      data-wow-delay="0.5s"
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FontAwesomeIcon icon={faPowerOff} />
                        </div>
                        <h5 className="mb-3">Machine learning</h5>
                        <p>
                          Empower success with our Machine Learning solutions.
                          From predictive analytics to intelligent insights, we
                          unleash innovation for your business growth.
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 pt-md-4">
                  <div className="row g-4">
                    <div
                      className="col-12 wow fadeIn"
                      data-aos="flip-up"
                      data-wow-delay="0.3s"
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FontAwesomeIcon icon={faGraduationCap} />
                        </div>
                        <h5 className="mb-3">Education & Science</h5>
                        <p>
                          Empowering education and advancing scientific
                          discovery, our innovative services pave the way for
                          transformative learning experiences and groundbreaking
                          research. Elevate your journey in education and
                          science with us.{" "}
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                    <div
                      className="col-12 wow fadeIn"
                      data-aos="flip-up"
                      data-wow-delay="0.7s"
                    >
                      <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                        <div className="service-icon btn-square">
                          <FontAwesomeIcon icon={faBrain} />
                        </div>
                        <h5 className="mb-3">Predictive Analysis</h5>
                        <p>
                          Strategic Insights through Predictive Analysis.
                          Harness the future with our solutions, providing
                          actionable intelligence for informed decision-making.
                        </p>
                        <a className="btn px-3 mt-auto mx-auto" href="">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Service End --> */}

      {/* <!-- Feature Start --> */}

      {/* <div className="container-fluid bg-themeColor feature pt-5">
        <div className="container pt-5">
          <div className="row g-5">
            <div
              data-aos="fade-right"
              className="col-lg-6 align-self-center mb-md-5 pb-md-5 wow fadeIn"
              data-wow-delay="0.3s"
            >
              <div className="btn btn-sm border rounded-pill text-white px-3 mb-3">
                Why Choose Us
              </div>
              <h1 className="text-white mb-4">
                We&lsquo;re Best in AI Industry with 10 Years of Experience
              </h1>
              <p className="text-light mb-4">
                AI Excellence with a Decade of Expertise. Our commitment,
                innovative solutions, and proven track record set us apart.
              </p>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <span>
                  Cutting-edge AI Solutions for Business Transformation
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <span>
                  Decade-long Expertise in Crafting Innovative Technologies
                </span>
              </div>
              <div className="d-flex align-items-center text-white mb-3">
                <div className="btn-sm-square bg-white text-primary rounded-circle me-3">
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <span>Client-Centric Approach with Proven Success Stories</span>
              </div>
              <div className="row g-4 pt-3">
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <FontAwesomeIcon
                      icon={faUsers}
                      className="fa-3x text-white"
                    />
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        93
                      </h2>
                      <p className="text-white mb-0">Happy Clients</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div
                    className="d-flex align-items-center rounded p-3"
                    style={{ background: "rgba(256, 256, 256, 0.1)" }}
                  >
                    <FontAwesomeIcon
                      icon={faCheck}
                      className="fa-3x text-white"
                    />
                    <div className="ms-3">
                      <h2 className="text-white mb-0" data-toggle="counter-up">
                        107
                      </h2>
                      <p className="text-white mb-0">Project Complete</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-left"
              className="col-lg-6 align-self-end text-center text-md-end wow fadeIn"
              data-wow-delay="0.5s"
            >
              <img className="img-fluid" src="/feature.png" alt="" />
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- Feature End --> */}
      {/* <!-- Case Start --> */}

      {/* <div className="container-fluid bg-light py-5">
        <div className="container py-5">
          <div
            className="mx-auto text-center wow fadeIn"
            data-wow-delay="0.1s"
            style={{ maxWidth: "500px" }}
          >
            <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">
              Services
            </div>
            <h1 className="mb-4" data-aos="fade-right">
              Our Top Services
            </h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.3s"
              data-aos="zoom-in"
              onClick={() => navigate("/elogbook")}
            >
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="/eLogBook.jpg" alt="" />
                <a className="case-overlay text-decoration-none" href="">
                  <small>eLogBook</small>
                  <h5 className="lh-base text-white mb-3">
                    "Digital logbook service for efficient record-keeping."
                  </h5>
                  <span className="btn btn-square btn-primary">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.5s"
              data-aos="zoom-in"
              onClick={() => navigate("/edms")}
            >
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="/edms.jpg" alt="" />
                <a
                  className="case-overlay text-decoration-none"
                  href=""
                  onClick={(e) => e.preventDefault()}
                >
                  <small>EDMS</small>
                  <h5 className="lh-base text-white mb-3">
                    "Electronic Document Management System for organizing
                    digital files."
                  </h5>
                  <span className="btn btn-square btn-primary">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
            <div
              className="col-lg-4 wow fadeIn"
              data-wow-delay="0.7s"
              data-aos="zoom-in"
              onClick={() => navigate("/eqms")}
            >
              <div className="case-item position-relative overflow-hidden rounded mb-2">
                <img className="img-fluid" src="/eqms.jpg" alt="" />
                <a className="case-overlay text-decoration-none" href="">
                  <small>EQMS</small>
                  <h5 className="lh-base text-white mb-3">
                    "Enterprise Quality Management System for process
                    optimization and compliance."
                  </h5>
                  <span className="btn btn-square btn-primary">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Home;
