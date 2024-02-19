import React from 'react'
import gogo1 from "../assets/images/crnasr.png"
import "../assets/styles/apropos.css";


function Alnasr() {
  return (
    <div className='testi'>
        <h1>Une carrière inachevée</h1>
        <div className="containnasr">
        <h2>
    <span className="first-line">20 buts</span> <br />
    <span className="second-line">9 passes décisives</span>
        </h2>
           
      <img className='gogo1' src={gogo1} alt="" />
        </div>
        <p>La saison de Ronaldo à la Nasr a été tout simplement sensationnelle, marquant un chapitre mémorable dans sa carrière légendaire. Son talent inégalé a illuminé le terrain, avec une performance exceptionnelle de 20 buts qui a ébloui les fans du monde entier. Ses 9 passes décisives ont ajouté une dimension stratégique à son jeu, démontrant une vision et une précision incomparables. En arborant les couleurs de la Nasr, Ronaldo a transcendé les attentes, devenant rapidement l'icône incontestée du club. Son impact va au-delà des statistiques, inspirant une nouvelle génération de footballeurs et consolidant sa place dans l'histoire du sport. Ronaldo à la Nasr, c'est bien plus qu'une saison exceptionnelle.</p>

    </div>
  )
}

export default Alnasr
