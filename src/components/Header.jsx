import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink,  } from "react-router-dom";

function Header() {
 

  return (
    <>
      {/* <!-- Navbar Start --> */}

     
       <div className="p-3">
          <nav className="navbar gap-4 navbar-expand-lg navbar-dark ">
            <div className="d-flex col-5 ">  
             <Link to="/" className="navbar-brand a-index">
              <img className="" style={{  width: "100px",  }} src="vitailogo1.png" alt="Life Link Digital" />
            </Link>
              <Link to="/" className="" >
                <p className="logo123"> VITAI'YRX Pharmaceuticals</p>
              </Link></div>

            <div className="col-7">
              <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto">
                  <NavLink to="/" className="nav-item nav-link">
                    Home
                  </NavLink>
                  <NavLink to="/businessareas" className="nav-item nav-link">
                  Business Area
                </NavLink>
                  <NavLink to="/manufacturing" className="nav-item nav-link">
                    Manufacturing
                  </NavLink>
                  <NavLink to="/features" className="nav-item nav-link">
                    R & D
                  </NavLink>
                  <NavLink to="/about" className="nav-item nav-link">
                    About Us
                  </NavLink>
                  <NavLink to="/contact" className="nav-item nav-link">
                    Contact us
                  </NavLink>
                </div>
                <button
                  type="button"
                  className="btn text-white p-0 d-none d-lg-block"
                  data-bs-toggle="modal"
                  data-bs-target="#searchModal"
                >
                  <i className="fa fa-search"></i>
                </button>
              </div></div>
          </nav>
          </div>



  

      {/* <!-- Navbar End --> */}
    </>
  );
}

export default Header;



