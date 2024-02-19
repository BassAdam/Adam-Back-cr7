import React from "react";
import '../assets/styles/style.css';
import logoImage from "../assets/images/facebook.svg";
import logoImage2 from "../assets/images/twitter.svg";
import logoImage3 from "../assets/images/instagram.svg";
import { Link } from "react-router-dom";

function Footer(){
    return(

     <div className="foot-container">
            <div className="icons">
            <a href=""><img className="logofb" src={logoImage} alt="" /></a>
            <a href=""><img className="logotw" src={logoImage2} alt="" /></a>
            <a href=""><img className="logoin" src={logoImage3} alt="" /></a>
            </div>
            <div className="foot-liste">
                <ul>             
                    <li><Link to={"/"}>Notre équipe</Link></li>
                    <li><Link to={"/"}>Contact</Link></li>
                </ul>
            </div>
            <div className="foot-copy">
            <p>Copyright &copy;2024 Designed by <a href="https://github.com/BassAdam" target="blank">BassAdam</a></p>
            </div>

    </div>
    )
}

export default Footer;