import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
   return (
      <React.Fragment>
         <div className="navigation">
            <Link className="logo-container" to="/">
               <div>
                  <Logo className="logo" />
               </div>
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to="/shop/">
                  Shop
               </Link>
               <Link className="nav-link" to="/hats/">
                  Hats
               </Link>
               <Link className="nav-link" to="/signin/">
                  Sign In
               </Link>
            </div>
         </div>
         <Outlet />
      </React.Fragment>
   );
};

export default Navigation;
