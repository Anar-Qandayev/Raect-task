 import React from "react";
 import { Link } from "react-router-dom"
 import "../../style/main.scss";
 
 const Header = () => {
   return (
       <header>
         <ul className="ul1">
           <li>
            <img src="https://websitedemos.net/organic-shop-02/wp-content/uploads/sites/465/2019/06/organic-store-logo5.svg"
             alt="logoImage"/>
           </li>
           <li><Link to="/home">Home</Link> </li>
           <li><Link to="/form">Forms</Link> </li>
           <li><Link to="/products">Products</Link> </li>
         </ul>
         <ul className="ul2">
           <li> About</li>
           <li> Contact</li>
           <li> £25.00 </li>
           <li> </li>
         </ul>
       </header>
   );
 };
export default Header;