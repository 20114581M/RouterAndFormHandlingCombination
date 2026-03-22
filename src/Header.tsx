import { Link, useLocation } from "react-router-dom";

export default function Header(){
    const location = useLocation();
    return(
        <>
            <div className="HeaderContainer">
                <div className="LogoContainer">Student Portal</div>
                <div className="NavContainer">
                    <Link to="/RouterAndFormHandlingCombination" className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination" ? "active" : ""}`}>Home</Link>
                    <Link className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination/pages/About" ? "active" : ""}`} to="/RouterAndFormHandlingCombination/pages/About">About</Link>
                    <Link className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination/pages/Services" ? "active" : ""}`} to="/RouterAndFormHandlingCombination/pages/Services">Services</Link>
                    <Link className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination/pages/Contact" ? "active" : ""}`} to="/RouterAndFormHandlingCombination/pages/Contact">Contact</Link>
                    <Link className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination/pages/BookRequest" ? "active" : ""}`} to="/RouterAndFormHandlingCombination/pages/BookRequest">Book Request</Link>
                    <Link className={`NavLinks${location.pathname === "/RouterAndFormHandlingCombination/pages/EventFeedback" ? "active" : ""}`} to="/RouterAndFormHandlingCombination/pages/EventFeedback">Event Feeback</Link>
                </div>
            </div>
        </>
    )
}
