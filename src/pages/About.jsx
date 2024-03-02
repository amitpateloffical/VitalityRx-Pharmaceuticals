import { useEffect, useRef, } from "react";
import BreadCrumb from "../components/BreadCrumb";
import AOS from "aos";
import "aos/dist/aos.css";


function About() {
  const listRefs = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 1400 });
    // AOS.refresh();
  }, []);

  useEffect(() => {
    if (listRefs.current) {
      ""
    }
    const observers = [];

    listRefs.current.forEach((listRef) => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const listItems =
              listRef.current.querySelectorAll(".list-group-item");
            listItems.forEach((item) => {
              item.classList.add("list-item-animation");
            });
            observer.unobserve(entry.target);
          }
        });
      });

      if (listRef.current) {
        observer.observe(listRef.current);
      }
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [listRefs]);

  return (
    <>
      <BreadCrumb page="About Us" />

      {/* <!-- About Start --> */}

      {/* <div className="container-fluid   py-3">
        <div id='header'>
          <h1 id='header-h1'>About us</h1>
        </div>

        <div className="container py-4">
          <div className="row g-2 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <h3 className=" text-center fs-2 pt-3">
                VitalityRx Pharmaceuticals: Is at the forefront of healthcare advancement, driven by innovation and a commitment to excellence.
              </h3>
              <div className="paragraph_container ">
                <p className="paragraph fs-5 pt-2">
                  VitalityRx Pharmaceuticals shines brightly as a symbol of pioneering spirit and exceptionalism within the healthcare domain. Firmly dedicated to propelling the boundaries of medical knowledge and enhancing patient well-being, VitalityRx leads the way in revolutionary research and developmental endeavors. Utilizing state-of-the-art technologies and drawing upon unparalleled expertise, the company forges innovative therapies for diverse diseases and medical afflictions.
                </p>
              </div>
              <p className="mb-4"></p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="BusinessArea">
        <section className="innerBanner">
          <picture>
            <img
              className="responsive-image"
              src="https://ajantapharma.com/assets/frontend/images/inner_banner/business_areas.jpg"
              alt="Business Areas"
              style={{ maxWidth: '100%' }}
            />

          </picture>

          <div className="container">
            <div className="innerpageTitle">
              <div className="row h-100">
                <div className="col-md-6 align-self-center aos-init aos-animate" >
                  <h1 data-aos="fade-right">About</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container-fluid section2  py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div
                className="col-lg-6 wow fadeIn"
                data-aos="fade-right"
                data-wow-delay="0.1s"
              >
                <div className="abouts">
                  <img className="img-fluid" src="About1.avif" />
                </div>
              </div>
              <div
                className="col-lg-6 wow fadeIn"
                // data-aos="fade-left"
                data-wow-delay="0.5s"
              >
                <p className="mb-4"></p>

                <div className="content_container">
                  <ul
                    className="list-group"
                    ref={(ref) => listRefs.current.push(ref)}
                  >
                    <li className="list-group-item" data-aos="fade-left">
                      <b> Innovative Solutions: </b>
                      VitalityRx Pharmaceuticals leads the way in developing groundbreaking healthcare solutions.
                    </li>
                    <li className="list-group-item" data-aos="fade-left">
                      <b> Excellence in Healthcare: </b>
                      Dedicated to providing outstanding healthcare services and products.
                    </li>
                    <li className="list-group-item" data-aos="fade-left">
                      <b> Cutting-edge Research:</b>
                      Involved in pioneering research aimed at advancing the field of medical science.
                    </li>
                    <li className="list-group-item" data-aos="fade-left">
                      <b> Continuous Improvement: </b>
                      Aims for ongoing enhancement and evolution in healthcare methodologies.
                    </li>
                    <li className="list-group-item" data-aos="fade-left">
                      <b> Industry Collaboration: </b>Engages actively with healthcare professionals and organizations to improve healthcare outcomes through collaboration.
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h3 className="mb-4" data-aos="fade-right">
                  By teaming up with VitalityRx Pharmaceuticals, you can:
                </h3>
                <div className="content_container">
                  <ul
                    className="list-group"
                    ref={(ref) => listRefs.current.push(ref)}
                  >
                    <li className="list-group-item" data-aos="fade-right">
                      <b>   Commitment to Excellence: </b>
                      Commitment to delivering excellence across all facets of healthcare provision.                  </li>
                    <li className="list-group-item" data-aos="fade-right">
                      <b>Visionary Leadership:</b>
                      Under the guidance of visionary leadership dedicated to revolutionizing healthcare. </li>
                    <li className="list-group-item" data-aos="fade-right">
                      <b>Leaders in Innovation:</b>  ChatGPT
                      Acknowledged as frontrunners in spearheading innovation within the pharmaceutical sector.
                    </li>
                    <li className="list-group-item" data-aos="fade-right">
                      <b> Quality Assurance:</b>
                      Guarantees utmost quality and safety standards across all pharmaceutical products.
                    </li>
                  </ul>
                </div>

                <div
                  className="ps_paragraph_container mt-2 bg"
                  data-aos="fade-right"
                >
                  <h5 className="ps_paragraph">
                    Contact VitalityRx Pharmaceuticals today to explore our innovative healthcare solutions.
                  </h5>
                </div>
              </div>

              <div
                className="col-lg-6 wow fadeIn"
                data-aos="fade-left"
                data-wow-delay="0.1s"
              >
                <div className="abouts">
                  <img className="img-fluid" src="partnership.avif" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- About End --> */}
        <div className="container-fluid section2 py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div
                className="col-lg-6 wow fadeIn "
                data-aos="fade-right"
                data-wow-delay="0.1s"
              >
                <div className="aboutsimg">
                  <img className="img-fluid" src="Quality.avif" />
                </div>
              </div>

              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h4 className="why_line" data-aos="fade-left">
                  Quality Policy
                </h4>
                <div className="paragraph_container" data-aos="fade-left">
                  <p className="paragraph">
                    At VitalityRx Pharmaceuticals, we prioritize quality above all else. Our products undergo rigorous testing and adhere to strict quality policies to guarantee their safety and effectiveness. We continuously strive for improvement and strictly comply with regulatory standards to ensure excellence across all our operations.
                  </p>
                </div>
                <h3 className="mb-4" data-aos="fade-left">
                  By partnering with VitalityRx Pharmaceuticals, you can:
                </h3>
                <div className="content_container">
                  <ul
                    className="list-group"
                    ref={(ref) => listRefs.current.push(ref)}
                  >
                    <li className="list-group-item" data-aos="fade-left">
                      <b> Global Impact: </b>
                      VitalityRx Pharmaceuticals endeavors to create a significant global impact by enhancing healthcare accessibility and pushing the boundaries of medical science forward.
                    </li>
                    <li className="list-group-item" data-aos="fade-left">
                      <b> Ethical Standards: </b>
                      In all facets of our operations, we uphold the utmost ethical standards, guaranteeing transparency and integrity in our business conduct.
                    </li>
                    <li className="list-group-item" data-aos="fade-left">
                      <b>Community Engagement: </b>
                      Dedicated to community welfare, VitalityRx Pharmaceuticals takes an active role in philanthropic endeavors, backing healthcare initiatives in underprivileged areas.
                    </li>

                    <li className="list-group-item" data-aos="fade-left">
                      <b> Sustainability: </b>
                      Our commitment lies in fostering environmentally sustainable practices, where we strive to reduce our ecological impact and advocate for eco-conscious solutions in pharmaceutical manufacturing.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                {/* <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div> */}
                <h3 className="mb-4" data-aos="fade-right">
                  To achieve these goals, we will:
                </h3>
                <div className="content_container">
                  <ul
                    className="list-group"
                    ref={(ref) => listRefs.current.push(ref)}
                  >
                    <li className="list-group-item" data-aos="fade-right">
                      Direct resources towards research and development endeavors to cultivate innovation and pioneer transformative healthcare solutions.
                    </li>
                    <li className="list-group-item" data-aos="fade-right">
                      Implement rigorous quality management systems to guarantee compliance with the utmost standards of quality and safety across all pharmaceutical products and procedures.    </li>
                    <li className="list-group-item" data-aos="fade-right">
                      Foster a mindset of perpetual advancement within the company, inspiring staff to pinpoint opportunities for improvement and deploy creative solutions.
                    </li>

                    <li className="list-group-item" data-aos="fade-right">
                      Enhance customer connections through proactive solicitation of feedback, thorough comprehension of their requirements, and customization of offerings to exceed their expectations.
                    </li>
                    <li className="list-group-item" data-aos="fade-right">
                      Engage in partnerships with healthcare experts, academic institutions, and industry peers to propel innovation, exchange insights, and enhance healthcare results.
                    </li>
                    <li className="list-group-item" data-aos="fade-right">
                      Incorporate environmentally conscious methods into day-to-day operations, such as waste reduction, eco-friendly initiatives, and efforts to minimize our ecological footprint.
                    </li>
                  </ul>
                </div>
                <div
                  className="ps_paragraph_container mt-2 bg"
                  data-aos="fade-right">
                  <h5 className="ps_paragraph">
                    Our dedication lies in delivering unparalleled products and services to our customers. We firmly believe that our commitment to quality is paramount to our achievements, and we are steadfast in its ongoing enhancement.
                  </h5>
                </div>
              </div>

              <div
                className="col-lg-6 wow fadeIn"
                data-aos="fade-left"
                data-wow-delay="0.1s"
              >
                <div className="abouts">
                  <img className="img-fluid" src="gols.avif" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid section2 py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div
                className="col-lg-6 wow fadeIn"
                data-aos="fade-right"
                data-wow-delay="0.1s"
              >
                <div className="abouts">
                  <img className="img-fluid" src="mission.jpg" />
                </div>
              </div>

              <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <h4 className="why_line" data-aos="fade-left">
                  Mission Statement
                </h4>
                <div className="paragraph_container" data-aos="fade-left">
                  <p className="paragraph">
                    "At VitalityRx Pharmaceuticals, we aspire to lead the way in developing inventive healthcare solutions that elevate patient welfare and push the boundaries of medical knowledge. Rooted in our unwavering dedication to excellence across healthcare services and products, we endeavor to provide groundbreaking research and uphold the utmost standards of quality assurance."
                  </p>
                </div>
                <h3 className="mb-4" data-aos="fade-left">
                  Through our relentless dedication to:
                </h3>
                <div className="content_container">
                  <ul
                    className="list-group"
                    ref={(ref) => listRefs.current.push(ref)}
                  >
                    <li className="list-group-item" data-aos="fade-left">
                      <b>Innovation: </b>
                      We consistently innovate with state-of-the-art technology to streamline intricate GxP processes, cultivating nimbleness and productivity.
                    </li>
                    <li className="list-group-item" data-aos="fade-left">
                      <b>Collaboration: </b>We cultivate collaborative relationships with our clients, comprehending their distinct requirements and crafting tailored solutions that propel achievement.
                    </li>
                    <li className="list-group-item" data-aos="fade-left">
                      <b>Compliance:</b>:We guarantee that our software meets the most stringent GxP criteria, offering assurance and regulatory confidence for our clients' peace of mind.
                    </li>

                    <li className="list-group-item" data-aos="fade-left">
                      <b>Security: </b>We protect sensitive data with robust
                      security measures, mitigating risks and safeguarding patient
                      safety.
                    </li>
                    <li className="list-group-item" data-aos="fade-left">
                      <b>Scalability: </b>
                      We create adaptable solutions that evolve alongside your changing requirements, facilitating your journey of growth.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default About;
