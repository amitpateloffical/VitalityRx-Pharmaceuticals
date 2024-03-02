import React from 'react'
import "./Home.css";
const Manufacturing = () => {
    return (
        <div className=''>
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
                                <h1 data-aos="fade-right">Manufacturing</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className='Manufacturing-head'>   
         <h1 className='manufacturing-heading'>Manufacturing</h1>
     </div> */}

            <div className="container-fluid p-5 hero-header  mt-4">
                <div >
                    <div className=" g-5 align-items-center slider-img">
                        <div className=" " >
                            <div className="">
                                <img width="1200px" style={{ borderRadius: "15px 50px", boxShadow: "-5px -5px 9px rgba(184, 184, 184, 0.45) 5px 5px 9px rgba(78, 88, 104, 0.3)" }} className="img-fluid" src="data:image/jpeg;base64,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" />
                            </div>
                        </div>
                        <div

                        >
                            {/* <div className="home-head rounded-pill  px-3 mb-3">
                Business Area
              </div> */}
                            <h1 className="Manu-about">At Vitai'yrx Pharma we are passionate about every product we deliver to our customers</h1>
                            <p className="Manu-para">" we're dedicated to ensuring the highest standards
                             in pharmaceutical manufacturing. We operate under strict quality control measures 
                             and utilize cutting-edge technology to produce safe and effective medications. 
                             Our team is committed to innovation, compliance, and sustainability,
                             working tirelessly to meet the healthcare needs of patients around the world.."</p>


                        </div>
                    </div>
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