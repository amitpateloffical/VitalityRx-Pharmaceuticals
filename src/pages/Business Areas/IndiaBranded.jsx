import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import './BusinessAreas.css';
import { useEffect, useRef } from 'react';

function IndiaBranded() {
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
                        <img src="https://ajantapharma.com/assets/frontend/images/inner_banner/businessareas_indiabranded.jpg"
                            style={{ maxWidth: '100%' }} />
                    </picture>
                    <div className="container">
                        <div className="innerpageTitle">
                            <div className="row h-100">
                                <div className="col-md-6 align-self-center aos-init aos-animate" >
                                    <h1 data-aos="fade-right">INDIA - BRANDED GENERICS</h1>
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
                                <div className="heading-business m-4" data-aos="fade-left">
                                    At VitalityRx Pharma, we take pride in our standing as one of the top 30 companies in India, achieving the 26th rank as of December 2023 according to IQVIA.
                                </div>
                                <div className="m-4 text-secondary" data-aos="fade-left">
                                    Over the past decade, VitalityRx has surged in the rankings within the Indian market, driven by a steadfast commitment to four rapidly expanding specialty therapeutic segments. This ascent has been fueled by the strategic launch of pioneering products, establishing VitalityRx as a formidable presence. Presently, VitalityRx commands a coveted position across all four major therapeutic segments: Cardiology, Dermatology, Ophthalmology, and Pain Management, with numerous brands holding sway in their respective sub-therapeutic categories. Notably, our growth trajectory has consistently outpaced industry standards across these segments.
                                </div>
                                <div className="m-4 text-secondary" data-aos="fade-left">
                                    VitalityRx possesses a distinct edge in introducing novel products ahead of its competitors, with many of them being pioneers in the market. Among the extensive portfolio of over 300 products launched in India, over half of them represent groundbreaking entries as the first of their kind in the market.
                                </div>
                            </div>
                            <div className="paratwo p-5 mb-4 d-flex">
                                <div className="overview-part2 p-1" data-aos="fade-right">
                                    Within the Ophthalmology sector, VitalityRx has pioneered numerous formulations in the form of eye drops, marking a significant first for the country. Notable among these are Bimat (targeting Anti Glaucoma), Nepaflam (offering Anti-inflammatory properties), Softdrops (serving as a Lubricant), and Olopat (providing Anti-Allergic relief). These innovative products have been successfully introduced to the Indian market. Furthermore, VitalityRx secures the 2nd position in Ophthalmology in India according to the IQVIA MAT ranking for December 2023.
                                </div>
                                <div className="medicineImg p-2 m-20" data-aos="fade-left">
                                    <img src="drop.avif" className="w-75" />
                                </div>
                            </div>
                            <div className="p-5 d-flex">
                                <div className="medicineImg" data-aos="fade-right">
                                    <img src="//www.simpleskincare.in/cdn/shop/files/27274_S1-8901030954054_1000x1000.jpg?v=1687859344" alt="Hydrating Light Moisturiser Lotion 125ml " className="productGallery--loaded-image w-100" />
                                </div>
                                <div className="overview-part2 p-1" data-aos="fade-left">
                                    In the Dermatology arena, VitalityRx commands a formidable position, securing the 15th rank in India according to the IQVIA MAT ranking for December 2023. Within this domain, our products such as Melacare cream, designed to address Melasma concerns; Pacroma, renowned for its topical immune-modulating properties; the Antidandruff shampoo Salisia KT; and the moisturizing lotion Aquasoft, have emerged as leaders in their respective therapeutic niches.
                                </div>
                            </div>
                            <div className="paratwo p-5 mb-4 d-flex">
                                <div className="overview-part2 p-1" data-aos="fade-right">
                                    In the realm of Cardiology, VitalityRx boasts a range of innovative offerings, including MET XL (the first extended-release formulation of Metoprolol), Atorfit CV (a blend of Atorvastatin & Clopidogrel), Antihypertensive Cinod (featuring Cilnidipine), Rosutor Gold (a triple combination of Aspirin, Rosuvastatin & Clopidogrel), Dapalex (an SGLT 2 Inhibitor), and Vilatin (a DDDP4 inhibitor). Each of these products holds a prominent position in its respective sub-segment, garnering significant esteem among medical professionals and establishing robust brand equity. In the Cardiology sector, our standing is at 17th place in India according to the IQVIA MAT ranking for December 2023.
                                </div>
                                <div className="medicineImg p-2 m-20" data-aos="fade-left">
                                    <img src="https://img6.hkrtcdn.com/31403/prd_3140235-TrueBasics-Vitamin-D3-2000iu-50-capsules-Unflavoured_o.jpg" className='w-100' />
                                </div>
                            </div>
                            <div className="p-5 d-flex">
                                <div className="medicineImg" data-aos="fade-right">
                                    <img src="//upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Uloric_40_mg_tablet.jpg/220px-Uloric_40_mg_tablet.jpg" decoding="async" width="220" height="165" className="w-125" data-file-width="288" data-file-height="216" />

                                </div>
                                <div className="overview-part2 p-1" data-aos="fade-left">
                                    In the Pain Management category, VitalityRx holds the 28th position in India according to the IQVIA MAT ranking as of December 2023. Within the realm of anti-gout therapy, VitalityRx's brand Feburic claims the leading spot for the Febuxostat molecule.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndiaBranded
