import BreadCrumb from "../components/BreadCrumb";
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function GxpTrainig() {
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
  }, []);
  return (
    <>
      <BreadCrumb page="Feature" />


<div className=" col-lg-12 Rd-section">
  <div className="RD-img  pt-2 pb-5">
 <h1 className="RD-img1">Research and Development</h1>
  </div>
</div>




<div className="container wow fadeIn py-4" data-wow-delay="0.5s">
        <h3 className=" about-h3 mb-4" data-aos="fade-right">
        At Vitai'yrx,Elevating Healthcare with Our Unparalleled R&D
        </h3>
        <div className="content_container">
                <ul
                  className="list-group"
                  ref={(ref) => listRefs.current.push(ref)}
                >
                  <li className="list-group-item" data-aos="fade-left">
                  <b className="about-b"> Research Focus: </b> Detail the specific areas of research and development that Vitalityrx Pharmaceuticals is working on. This can include drug discovery, preclinical testing, clinical trials, etc.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                  <b className="about-b"> Innovation: </b>  Highlight how Vitalityrx Pharmaceuticals is using cutting-edge technology or novel approaches to develop new treatments or improve existing ones.
                  </li>
                  <li className="list-group-item" data-aos="fade-left">
                  <b className="about-b">Team Expertise: </b>  Briefly discuss the expertise of the team working in R&D, emphasizing their qualifications, experience, and dedication to the field.
                  </li>

                  <li className="list-group-item" data-aos="fade-left">
                  <b className="about-b"> Collaboration: </b>   Mention any partnerships or collaborations with other companies, research institutions, or academia, which can underscore the company's commitment to advancing healthcare through teamwork and shared knowledge.
                  </li>

                  <li className="list-group-item" data-aos="fade-left">
                  <b className="about-b">Future Prospects: </b>  Discuss the potential impact of the research and development activities on healthcare, patients, and society, showcasing the company's vision for the future.
                  </li>
                </ul>
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
                <img className="img-fluid" src="https://img.freepik.com/free-photo/team-scientists-analyzing-liquid-modern-laboratory-with-equipment-generated-by-ai_24640-99961.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>

            <div
              className="col-lg-6 wow fadeIn"
              data-aos="fade-left"
              data-wow-delay="0.1s"
            >
              <div className="abouts">
                <img className="img-fluid" src="https://img.freepik.com/premium-photo/automated-robotic-vitamins-dietary-supplements-medicine-tablets-line-pharmaceutical-production_94255-10078.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid py-5">
        <div className="container" style={{background:"#AFEEEE",paddingLeft:"20px", paddingTop:"30px", paddingBottom:"30px", borderLeft:"4px solid green"}}>
          <div className="row align-items-center g-5">
            <div className="  wow fadeIn" data-wow-delay="0.5s" style={{fontSize: "19px", fontWeight: "500"}}>
            Vitai'yrx is a leader in pioneering research and development (R&D) for medical breakthroughs. 
            Our dedicated team of experts work tirelessly to create innovative treatments that improve the
             lives of patients worldwide. We're committed to pushing the boundaries of science and technology
              to develop safer, more effective therapies, while ensuring rigorous compliance with regulatory standards. 
            Join us on our journey to redefine the future of healthcare
            </div>
          </div>
        </div>
      </div>



    

  
    </>
  );
}
