import { Link } from 'react-router-dom';
import './BusinessAreas.css';
import { useEffect, useRef, } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../../components/Footer';

function EmergingMarkets() {
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
                <section className="innerBanner">
                    <picture>
                        <img src="https://ajantapharma.com/assets/frontend/images/inner_banner/emerging_markets_branded_generics.jpg" style={{ maxWidth: '100%' }} />

                    </picture>

                    <div className="container">
                        <div className="innerpageTitle">
                            <div className="row h-100">
                                <div className="col-md-6 align-self-center aos-init aos-animate" >
                                    <h1 data-aos="fade-right">EMERGING MARKETS - BRANDED GENERICS
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='businesspage'>
                    <div className="row">
                        <div className="linkerItem col-md-3">
                            <div className="container mt-5">
                                <div className="card p-4 bg-light">
                                    <div className='d-flex flex-column align-items-start'>
                                        <Link to="/businessareas" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Overview</button></Link>
                                        <Link to="/indiabranded" data-aos="fade-right"> <button className='btn btn-warning mb-1'>India-Branding Generics</button></Link>
                                        <Link to="/emergingmarkets" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Emerging Markets - Branded Generics</button></Link>
                                        <Link to="/usgenerics" data-aos="fade-right"> <button className='btn btn-warning mb-1'>USA - Generics</button></Link>
                                        <Link to="/africainstitution" data-aos="fade-right"> <button className='btn btn-warning mb-1'>Africa - Institution Business</button> </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="container">
                                <div className="medicineImg p-2 m-20 d-flex" data-aos="fade-left">
                                    <div className="medicineImg p-2 m-20" data-aos="fade-left">
                                        <img src="https://geology.com/world/the-united-states-of-america-map.gif" className="w-75" />
                                    </div>
                                    <div className="heading-business m-4" data-aos="fade-left">
                                        VitalityRx Pharma has solidified its position as a key player in emerging markets, operating across over 30 countries spanning Africa, South East Asia, West Asia, and the CIS region.
                                    </div>
                                </div>
                                <div className="m-4 text-secondary" data-aos="fade-left">
                                    Currently, Vitality maintains a robust on-the-ground presence across these markets, with brand promotion handled directly by our dedicated sales teams. Our expansive portfolio boasts over 200 brands in these regions, with a significant portion of them commanding substantial market share and holding top positions within their respective categories.
                                </div>
                            </div>
                            <div className="paratwo p-5 mb-4 d-flex">
                                <div className="overview-part2 p-1" data-aos="fade-right">
                                    Vitality has developed formidable expertise in pinpointing market voids, securing regulatory clearances for new products, and subsequently introducing them with great success, transforming them into significant brands. Our sales and marketing prowess are unmatched, driven by an unwavering commitment to precise execution.
                                </div>
                                <div className="medicineImg p-2 m-20" data-aos="fade-left">
                                    <img src="https://ajantapharma.com//images/emerging_markets_branded_generics_2.jpg" className="w-75" />
                                </div>
                            </div>
                            <div className="p-5 d-flex">
                                <div className="overview-part2 p-1" data-aos="fade-left">
                                    Within Emerging Markets, our footprint extends across a diverse spectrum of therapeutic segments including Cardiology, Anti-Diabetes, Ophthalmology, Antibiotic, Anti-Malarial, Pain Management, Respiratory, Gynaecology, Paediatrics, and General Health products.
                                </div>
                            </div>
                            <div className="paratwo p-5 mb-4 d-flex">
                                <div className="overview-part2 p-1" data-aos="fade-right">
                                    Our robust product pipeline, currently undergoing regulatory approval processes in these markets, is poised to strengthen our dominant positions within both sub-therapeutic and therapeutic segments, further solidifying our leadership status.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EmergingMarkets
