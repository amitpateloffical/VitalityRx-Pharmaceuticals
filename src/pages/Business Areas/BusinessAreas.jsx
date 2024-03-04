import { Link } from 'react-router-dom';
import './BusinessAreas.css';
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../../components/Footer';

function BusinessAreas() {
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
            <div className="BusinessArea">

            <div className="businessbackground-img  pt-2 pb-5">
                <h1 className="RD-img1">Business Area </h1>
            </div>


                <div className='businesspage'>
                    <div className="container">
                      
                        <div className="">
                            <div className="container">
                                <div className="heading-business m-4" data-aos="fade-left">
                                    We provide comprehensive range of specialty branded generic products targeting broad spectrum of chronic and acute therapies. We clearly understand our customers’ needs and use cutting-edge technology to present innovative solutions.
                                </div>
                            </div>
                            <div className="paratwo p-5 mb-4">
                                <div className="overview-part2 p-1" data-aos="fade-left">
                                    We carefully identify gaps in our markets and commit ourselves to get the products to market places ahead of the competition giving huge competitive advantage of 1st to market. Our products have the hallmark of technology-based differentiation and cover the full range of dosage forms, including tablets, capsules, injectables, inhalers, ointments, creams and liquids.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}

        </>
    )
}

export default BusinessAreas;
