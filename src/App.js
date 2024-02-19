import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
  } from "react-router-dom";
  import React, { useEffect, useState } from "react";
import Apropos from './components/Apropos';
import Connexion from './components/Connexion';
import Home from './components/Home';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Inscription from './components/Inscription';
import EspacePerso from './components/EspacePerso';

function App() {
  const [espaceperso, setEspacePerso] = useState(false);
  return (
  <div className="App">
     
    
<Router>
    <Routes>
          <Route
            path="/Connexion"
            element={<Launch component={<Connexion setEspacePerso={setEspacePerso} />} />}
          />
      <Route path="/" element={<Launch component={<Home />} />} />
      <Route path="/Apropos" element={<Launch component={<Apropos />} />} />
      <Route path="/Inscription" element={<Launch component={<Inscription />} />} />
      <Route path="/EspacePerso" element={<Launch component={<EspacePerso />} />} />
    </Routes>
</Router>
      

  </div>
  );
}

export default App;



const Launch = ({ component, setEspacePerso }) => {
  const [espaceperso, setEspacePersoLocal] = useState(false);
  useEffect(() => {
   setEspacePersoLocal(localStorage.getItem("islogin"))
  })
  return (
    <main>
    <Nav espaceperso={espaceperso} />
    <div>{React.cloneElement(component, { setEspacePerso: setEspacePersoLocal })}</div>
    <Footer />
  </main>
  );
};