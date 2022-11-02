/* eslint-disable-next-line*/
import React from "react";
import './Header.css';
import CompanyLogo from "../../images/CompanyLogo.jpg";

const Header=()=>{
return(
    <>
     <nav>
         <div class="logo">
         <a href="#"><img src={CompanyLogo} width={65} height={65} alt="Images not found" /> Global eAuction</a>
         </div>
         <div>
             <ul id="navbar">
                 <li><h3><i class="fa-solid fa-phone"></i> 1800456394</h3></li>
                 <li><h3><i class="fa-solid fa-envelope"></i> eauctionglobal@mail.com</h3></li>
             </ul>
         </div>
     </nav>

    </>
)
}

export default Header;