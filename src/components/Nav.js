import React, {useState, useEffect} from "react";
import "../assets/styles/style.css";
import logoImage from "../assets/images/cr7.jpg";
import { Link } from "react-router-dom";

function Nav({ espaceperso }) {

  const [users, setUsers] = useState()
  useEffect(() => {
    const user = localStorage.getItem('islogin')
    user && setUsers(user)
  }, [])
  return (
      <nav className="header">
        <img className="logo" src={logoImage} alt="" />

        <div className="navbar">
          <Link to={"/"}>Acceuil</Link>
        <Link to={"/Apropos"}>A propos</Link> 
          
          {espaceperso ? (<Link to={"/EspacePerso"}>Espace Perso</Link>):(<Link to={"/Connexion"}>Connexion</Link>)}
        </div>
      </nav>
  );
}

export default Nav;
