import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate  } from "react-router-dom";
import "../assets/styles/espaceperso.css";

function EspacePerso() {
  const [nom, setNom] = useState(""); // État pour stocker le nom de l'utilisateur
  const [isLoggedIn, setLoggedIn] = useState(true);
  const [users, setUsers] = useState()
  const nav = useNavigate()

  const handleLogout = () => {
    // Implémentez la logique de déconnexion ici
    setLoggedIn(false);
    localStorage.removeItem('islogin')
    nav('/')
  };

  useEffect(() => {
    const user = localStorage.getItem('islogin')
    user && setUsers(user)
  }, [])

  return (
    <div>
      {isLoggedIn && users ? (
        <div>
          <h1 className="gaga">Bienvenue dans votre espace perso {nom} !</h1>
          <form>
            <label>
              Nom :
              <input
              className="gogo"
                type="text"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
              />
            </label>
          </form>
          <button onClick={handleLogout}>Déconnexion</button>
        </div>
      ) : (
        <div>
          <h1>Vous êtes déconnecté. Connectez-vous pour accéder à votre espace perso.</h1>
          <Link to="/">Retour au menu principal</Link>
        </div>
      )}
    </div>
  );
}

export default EspacePerso;
