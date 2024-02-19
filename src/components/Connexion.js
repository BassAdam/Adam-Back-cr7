import React, { useState } from "react";
import "../assets/styles/connexion.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";



function Connexion({ setEspacePerso }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const data = {
       email: email,
       password: password
     }
     fetch("http://localhost:3001/userRoute/connection", {
       method: "POST", 
       headers: {
         "Content-Type": "application/json"
       },
       body: JSON.stringify(data)
     })
     .then((response) => {
        response.json()
     .then(data => {
      console.log('data', data)
      localStorage.setItem("islogin",JSON.stringify(data))
      setEspacePerso(true)
      setLoggedIn(true)
      
      
     })
     .catch(error => {
      console.log("erreur")
     })
     })
     .catch(error => {
      console.log("erreur")
     })
      
   
  };

  return (
    <div>
        <h1 className="coco">Espace connexion</h1>
    <div className="corps">
        
      {loggedIn ? (
         <Navigate to="/" />
      ) : (
        <>
          
        
          <div>
            <label htmlFor="username">Email:</label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div>
            <label htmlFor="password">Mot de passe:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          

          <button className="connecter" onClick={handleLogin}>Se connecter</button>
          
        </>
        
      )}
      <p>ou</p>
      <Link className="inscri" to={"/Inscription"}>Inscription</Link>
    </div>
    </div>
  );
}

export default Connexion;
