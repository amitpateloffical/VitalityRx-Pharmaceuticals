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

      <div className="  ">
        <div id='header'>
          <h1 id='header-h1'>About us</h1>
        </div>

        <div className="container py-4">
          <div className="row g-2 align-items-center">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.5s">
              <h3 className=" about-h3 text-center fs-2 pt-3">
                Vitalityrx Pharmaceuticals: Advancing Healthcare through Innovation and Excellence
              </h3>
              <div className="paragraph_container ">
                <p className="paragraph fs-5 pt-2">
                  Vitalityrx Pharmaceuticals stands as a beacon of innovation and excellence in the
                  realm of healthcare. With a steadfast commitment to advancing medical science
                  and improving patient outcomes, Vitalityrx spearheads groundbreaking research and development
                  initiatives. By harnessing cutting-edge technologies and leveraging top-tier expertise, the company
                  pioneers novel treatments for a myriad of diseases and medical conditions.
                </p>
              </div>
              <p className="mb-4"></p>
            </div>
          </div>
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
                <img className="img-fluid" src="https://img.freepik.com/premium-photo/medicine-doctor-holding-blue-helix-dna-structure-hologram-interface-diagnose-healthcare_34200-529.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-left"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="https://img.freepik.com/free-photo/pharmaceutical-factory-woman-worker-protective-clothing-operating-production-line-sterile-environment_645730-305.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="container wow fadeIn" data-wow-delay="0.5s">
        <h3 className=" about-h3 mb-4" data-aos="fade-right">
          By partnering with Vitalityrx Pharmaceuticals, you can:
        </h3>
        <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                    <b className="about-b"> Global Impact: </b> Vitalityrx Pharmaceuticals strives to make a meaningful impact on a global scale by improving access to healthcare and advancing medical science.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b className="about-b"> Ethical Standards: </b> We adhere to the highest ethical standards in all aspects of our operations, ensuring transparency and integrity in our business practices.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                    <b className="about-b">Community Engagement: </b> Committed to giving back to the community, Vitalityrx Pharmaceuticals actively participates in philanthropic initiatives and supports healthcare initiatives in underserved regions.
                  </li>

                  <li className="list-group-item" data-aos="fade-left">
                    <b className="about-b"> Sustainability: </b> We are dedicated to environmentally sustainable practices, minimizing our ecological footprint and promoting eco-friendly solutions in pharmaceutical manufacturing.
                  </li>
                </ul>
              </div>

        <div
          className="ps_paragraph_container mt-2 bg"
          data-aos="fade-right"
        >
          <h5 className="about-h5 ps_paragraph">
            Contact Vitalityrx Pharmaceuticals today to explore our innovative healthcare solutions.


          </h5>
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
                <img className="img-fluid" src="https://img.freepik.com/free-photo/pills-white-surface_144627-3167.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-left"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="https://img.freepik.com/free-photo/doctor-looking-vaccine-recipient-close-up_23-2148755624.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="container wow fadeIn" data-wow-delay="0.5s">
              {/* <div className="btn btn-sm border rounded-pill text-primary px-3 mb-3">About Us</div> */}
              <h3 className="mb-4 about-h3" data-aos="fade-right">
                To achieve these goals, we will:
              </h3>
              <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-right">
                    Allocate resources towards research and development efforts to foster innovation and develop groundbreaking healthcare solutions.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    Establish robust quality management systems to ensure adherence to the highest standards of quality and safety in all pharmaceutical products and processes.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    Promote a culture of continuous improvement within the organization, encouraging employees to identify areas for enhancement and implement innovative solutions.
                  </li>

                  <li className="list-group-item" data-aos="fade-right">
                    Strengthen relationships with customers by actively seeking feedback, understanding their needs, and tailoring products and services to meet their expectations.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    Collaborate with healthcare professionals, research institutions, and industry partners to drive innovation, share knowledge, and advance healthcare outcomes.
                  </li>
                  <li className="list-group-item" data-aos="fade-right">
                    Integrate sustainable practices into operations, including reducing waste, minimizing environmental impact, and promoting eco-friendly initiatives.
                  </li>
                </ul>
              </div>
              <div
                className="ps_paragraph_container mt-2 bg"
                data-aos="fade-right">
                <h5 className="ps_paragraph py-3">
                  We are committed to providing our customers with the highest
                  quality products and services possible. We believe that our
                  quality policy is a key factor in our success and we are
                  committed to its continuous improvement.
                </h5>
              </div>
            </div>


    </>
  );
}

export default About;
