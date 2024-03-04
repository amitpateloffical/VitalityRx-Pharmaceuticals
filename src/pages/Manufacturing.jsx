import React from 'react'
import "./Home.css";
import Slider from 'react-slick';
const Manufacturing = () => {

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
        // prevArrow: <CustomPrevArrow />,
        // nextArrow: <CustomNextArrow />,
    };
    return (
        <div className=''>
            <div className="manufacturingbackground-img  pt-2 pb-5">
                <h1 className="RD-img1">Manufacturing</h1>
            </div>


            <div className='pt-5'>
                <h1 className='Manu-h1 px-5'>At Vitai'yrx Pharma we are passionate about every product we deliver to our customers</h1>

                <div className=" p-5">
                    <div style={{ background: "#AFEEEE", paddingLeft: "20px", paddingTop: "30px", paddingBottom: "30px", borderLeft: "4px solid green" }}>
                        <div className="  wow fadeIn p-2" data-wow-delay="0.5s" style={{ fontSize: "19px", fontWeight: "500" }}>
                            we're dedicated to ensuring the highest standards
                            in pharmaceutical manufacturing. We operate under strict quality control measures
                            and utilize cutting-edge technology to produce safe and effective medications.
                            Our team is committed to innovation, compliance, and sustainability,
                            working tirelessly to meet the healthcare needs of patients around the world.
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <div className='p-5 h-5'>
                    <Slider {...settings} >


                        <img height={"500px"} src="https://img.freepik.com/free-photo/scientist-researcher-wearing-virtual-reality-headset-analyzing-brain-activity-futuristic-holografic-interface-during-chemistry-experiment-biochemistry-hospital-laboratory-neuroscience-research_482257-28273.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />

                        {/* <img height={"500px"} src="https://img.freepik.com/premium-photo/blue-white-capsules-pills-spilled-out-white-plastic-bottle-with-medical-healthcare-icon_33867-2660.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" /> */}
                        <img height={"500px"} src="https://img.freepik.com/premium-photo/medicine-doctor-holding-color-capsule-pill-hand-with-icon-medical-network-connection-medical-technology-network-concept_34200-324.jpg?size=626&ext=jpg&ga=GA1.1.1884802103.1674757283&semt=sph" />

                    </Slider>
                </div>
                <div>

                </div>
            </div>
            <div className=" p-5">
                <div style={{ background: "#AFEEEE", paddingLeft: "20px", paddingTop: "30px", paddingBottom: "30px", borderLeft: "4px solid green" }}>
                    <div className="  wow fadeIn p-2" data-wow-delay="0.5s" style={{ fontSize: "19px", fontWeight: "500" }}>
                        Our pharma manufacturing unit is driven by the pursuit of quality,
                        leveraging modern technology to create medicines that prioritize safety,
                        efficacy, and affordability. We adhere to stringent regulatory guidelines,
                        ensuring every
                        product that leaves our facility meets our exacting standards.
                    </div>
                </div>
            </div>




        </div>
    )
}

export default Manufacturing