import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Link, NavLink, } from "react-router-dom";

// function Header() {


//   return (
//     <>
//       {/* <!-- Navbar Start --> */}


//        <div className="p-3">
//           <nav className="navbar gap-4 navbar-expand-lg navbar-dark ">
//             <div className="d-flex col-5 ">  
//              <Link to="/" className="navbar-brand a-index">
//               <img className="" style={{  width: "100px",  }} src="vitailogo1.png" alt="Life Link Digital" />
//             </Link>
//               <Link to="/" className="" >
//                 <p className="logo123"> VITAI'YRX Pharmaceuticals</p>
//               </Link></div>

//             <div className="col-7">
//               <div className="collapse navbar-collapse" id="navbarCollapse">
//                 <div className="navbar-nav ms-auto">
//                   <NavLink to="/" className="nav-item nav-link">
//                     Home
//                   </NavLink>
//                   <NavLink to="/businessareas" className="nav-item nav-link">
//                   Business Area
//                 </NavLink>
//                   <NavLink to="/manufacturing" className="nav-item nav-link">
//                     Manufacturing
//                   </NavLink>
//                   <NavLink to="/features" className="nav-item nav-link">
//                     R & D
//                   </NavLink>
//                   <NavLink to="/about" className="nav-item nav-link">
//                     About Us
//                   </NavLink>
//                   <NavLink to="/contact" className="nav-item nav-link">
//                     Contact us
//                   </NavLink>
//                 </div>
//                 <button
//                   type="button"
//                   className="btn text-white p-0 d-none d-lg-block"
//                   data-bs-toggle="modal"
//                   data-bs-target="#searchModal"
//                 >
//                   <i className="fa fa-search"></i>
//                 </button>
//               </div></div>
//           </nav>
//           </div>

//       {/* <!-- Navbar End --> */}
//     </>
//   );
// }

// export default Header;



// function Header() {

//   const [fontSize, setFontSize] = useState(22); // Default font size
//   const [logoSize, setLogoSize] = useState(100)
//   const [navLinkSize,setNavLinkSize]=useState(6)
//   useEffect(() => {
//     const handleResize = () => {
//       // Update font size based on viewport width
//       if (window.innerWidth <= 600) {
//         setFontSize(12);
//         setLogoSize(50)
//         setNavLinkSize(4)
//       } else {
//         setFontSize(22);
//         setLogoSize(100)
//       }
//     };

//     // Call handleResize when the window is resized
//     window.addEventListener('resize', handleResize);

//     // Initial call to set font size
//     handleResize();

//     // Cleanup event listener
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
//   return (
//     <div className="container-fluid p-3">
//       {/* <!-- Navbar Start --> */}
//       <nav className="navbar  navbar-expand-lg navbar-dark">
//         <div className="d-flex col-lg-6 align-items-center">
//           <Link to="/" className="navbar-brand a-index d-flex">
//             <img
//               className="me-3"
//               style={{ width: `${logoSize}px` }}
//               src="vitailogo1.png"
//               alt="Life Link Digital"
//             />
//             <p className="  d-flex align-items-center" style={{
//               paddingTop: "20px", fontWeight: "700", fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
//               fontStyle: "italic",
//               color: "rgb(42, 6, 134)", fontSize: `${fontSize}px`
//             }}> VITAI'YRX Pharmaceuticals</p>
//           </Link>
//         </div>

//         {/* <div className="col-lg-7">
//           <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
//             <div className="navbar-nav">
//               <NavLink to="/" className="nav-item nav-link">
//                 Home
//               </NavLink>
//               <NavLink to="/businessareas" className="nav-item nav-link">
//                 Business Area
//               </NavLink>
//               <NavLink to="/manufacturing" className="nav-item nav-link">
//                 Manufacturing
//               </NavLink>
//               <NavLink to="/features" className="nav-item nav-link">
//                 R & D
//               </NavLink>
//               <NavLink to="/about" className="nav-item nav-link">
//                 About Us
//               </NavLink>
//               <NavLink to="/contact" className="nav-item nav-link">
//                 Contact us
//               </NavLink>
//             </div>
//             <button
//               type="button"
//               className="btn text-white p-0 d-none d-lg-block"
//               data-bs-toggle="modal"
//               data-bs-target="#searchModal"
//             >
//               <i className="fa fa-search"></i>
//             </button>
//           </div>
//         </div> */}

//         <div className={`col-lg-${navLinkSize}  w-auto`}>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
//             <div className="navbar-nav">

//               <NavLink to="/" className="nav-item nav-link ">
//                 Home
//               </NavLink>
//               <NavLink to="/businessareas" className="nav-item nav-link">
//                 Business Area
//               </NavLink>
//               <NavLink to="/manufacturing" className="nav-item nav-link">
//                 Manufacturing
//               </NavLink>
//               <NavLink to="/features" className="nav-item nav-link">
//                 R & D
//               </NavLink>
//               <NavLink to="/about" className="nav-item nav-link">
//                 About Us
//               </NavLink>
//               <NavLink to="/contact" className="nav-item nav-link">
//                 Contact us
//               </NavLink>
//             </div>
//             {/* <button
//               type="button"
//               className="btn text-white p-0 d-none d-lg-block"
//               data-bs-toggle="modal"
//               data-bs-target="#searchModal"
//             >
//               <i className="fa fa-search"></i>
//             </button> */}
//           </div>
//         </div>
//       </nav>
//       {/* <!-- Navbar End --> */}
//     </div>
//   );
// }

// export default Header;


function Header(){
  return(
  <div className="header12">
    <div className="d-flex   ">
    <img
               className="me-3 header-logo"
               src="vitailogo1.png"
               alt="Life Link Digital"
            />
    <p className="logo123">VITAI'YRX Pharmaceuticals</p>
    </div>
    <div className="  d-flex  ">
      <a href="/" className="header-a">Home</a>
      <a href="" className="header-a">Business Area</a>
      <a href="" className="header-a">Manufacturing</a>
      <a href="" className="header-a">R & D</a>
      <a href="" className="header-a">About Us</a>
      <a href="" className="header-a ">Contact Us</a>
    </div>
  </div>

  )
  
  
}

 export default Header;
