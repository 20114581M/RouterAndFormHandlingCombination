import { Link, useLocation } from "react-router-dom";
import mobileMenu from "../src/assets/Group 1.svg"
import { useState } from "react";
export default function HeaderMobile(){
    const [mobileDisplaymenu,setMobileDisplayMenu] = useState("none")
    const location = useLocation();
    
    const hideNavContainer = () => {
        setMobileDisplayMenu("none");
    }

    return(
        <>
            <div className="MobileHeaderContainer">
                <div className="MobileLogoandIcon"><div className="LogoContainer">Student Portal</div> <div><img className="MobileMenuIcon" onClick={()=>( mobileDisplaymenu === "none" ? setMobileDisplayMenu("flex") : setMobileDisplayMenu("none") )} src={mobileMenu}/></div> </div>
                <div className="NavContainerMobile" style={{display:mobileDisplaymenu}}>
                    <Link onClick={hideNavContainer} to="/RouterAndFormHandlingCombination" className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination" ? "active" : ""}`}>Home</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination/pages/About" ? "active" : ""}`} to="/RouterAndFormHandlingCombination/pages/About">About</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination/pages/Services" ? "active" : ""}`} to="/RouterAndFormHandlingCombination/pages/Services">Services</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination/pages/Contact" ? "active" : ""}`} to="/RouterAndFormHandlingCombination/pages/Contact">Contact</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination/pages/BookRequest" ? "active" : ""}`} to="/RouterAndFormHandlingCombination/pages/BookRequest">Book Request</Link>
                    <Link onClick={hideNavContainer} className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination/pages/EventFeedback" ? "active" : ""}`} to="/RouterAndFormHandlingCombination/pages/EventFeedback">Event Feeback</Link>
                </div>
            </div>

        </>
    )
}