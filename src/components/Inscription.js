import React, { useState } from "react";
import "../assets/styles/connexion.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";


function Inscription() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [RegistredIn, setRegistredIn] = useState(false);
  

  const handleFirstnameChange = (e) => {
    setFirstname(e.target.value);
  };

  const handleLastnameChange = (e) => {
    setLastname(e.target.value);
  };

 const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
   const data = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    }
    fetch("http://localhost:3001/userRoute/newuser", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      setRegistredIn(true)
    })
    .catch(error => {
      console.log("erreur")
     })
  };

  return (
    <>
      {RegistredIn ? (
        <Navigate to="/Connexion" />
      ) : (
        <div>
          <h1 className="coco">Espace inscription</h1>
          <div className="corps">
            <div>
              <label htmlFor="firstname">Prénom :</label>
              <input
                type="text"
                id="username"
                value={firstname}
                onChange={handleFirstnameChange}
              />
            </div>

            <div>
              <label htmlFor="lastname">Nom :</label>
              <input
                type="text"
                id="username"
                value={lastname}
                onChange={handleLastnameChange}
              />
            </div>

            <div>
              <label htmlFor="email">Email :</label>
              <input
                type="text"
                id="username"
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

            <button className="sinscrire" onClick={handleLogin}>
              S'inscrire
            </button>

            <p>ou</p>
            <Link className="connect" to={"/Connexion"}>
              Connexion
            </Link>
          </div>
        </div>
      )}
    </>
  );
}


export default Inscription;