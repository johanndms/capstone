import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as SiteLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";

/**
 * Main site Navigation stack with an Outlet to render each of the Routes/Pages
 *
 * @returns
 */
const Navigation = () => {
   return (
      <React.Fragment>
         <div className="navigation">
            <Link className="logo-container" to="/">
               <div>
                  <SiteLogo className="logo" />
               </div>
            </Link>
            <div className="nav-links-container">
               <Link className="nav-link" to="/shop/">
                  Shop
               </Link>
               <Link className="nav-link" to="/hats/">
                  Hats
               </Link>
               <Link className="nav-link" to="/auth/">
                  Sign In
               </Link>
            </div>
         </div>
         <Outlet />
      </React.Fragment>
   );
};

export default Navigation;
