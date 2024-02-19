import React from "react";
import "../assets/styles/style.css";
import bloco1 from "../assets/images/soulier.png"
import bloco2 from "../assets/images/ballonor.jpg"
import bloco3 from "../assets/images/tyhebest.jpg"

function Middlepage() {
  return (
    <div>
        <h1 className="titree">Des trophées individuels</h1>
      <div className="containerr">

        <div className="bloc1">
        <img className="bloco1" src={bloco1} alt="" />
        <h2>Soulier d'or</h2>
        <p>Cristiano Ronaldo a été un prétendant constant au Soulier d'Or en raison de ses performances exceptionnelles en tant que buteur. Sa capacité à marquer régulièrement des buts à un niveau élevé, à la fois en club et en équipe nationale, a été un facteur clé. Ronaldo a démontré une remarquable constance dans sa capacité à être parmi les meilleurs buteurs de chaque saison, soulignant son talent inné pour marquer des buts à des moments cruciaux. Son habileté à maintenir une productivité élevée devant le but et à contribuer aux succès de ses équipes ont fait de lui un récipiendaire méritant du Soulier d'Or.</p>
        </div>

        <div className="bloc2">
        <img className="bloco2" src={bloco2} alt="" />
        <h2>Ballon d'or</h2>
        <p>Cristiano Ronaldo a remporté plusieurs Ballons d'Or en raison de sa remarquable cohérence et de ses performances exceptionnelles. Sa maîtrise technique, sa puissance physique et son leadership ont contribué à ses succès au niveau des clubs, notamment avec le Real Madrid et Manchester United. Ronaldo s'est démarqué en marquant des buts cruciaux dans des moments clés, démontrant une constance au plus haut niveau du football. Son éthique de travail acharné et son professionnalisme ont également renforcé sa réputation de l'un des meilleurs joueurs de sa génération.</p>
        </div>

        <div className="bloc3">
        <img className="bloco3" src={bloco3} alt="" />
        <h2>The best </h2>
        <p>Cristiano Ronaldo a régulièrement été considéré pour le prix FIFA "The Best" en raison de ses performances exceptionnelles et de sa contribution significative au football mondial. Sa polyvalence, sa constance au plus haut niveau et ses réussites tant en club qu'en équipe nationale ont joué en sa faveur. Ronaldo a été reconnu pour ses exploits individuels et son impact collectif sur le succès de ses équipes. Son professionnalisme, son leadership sur le terrain et sa capacité à influencer les matchs ont fait de lui un candidat solide pour le prix "The Best" de la FIFA.</p>
        </div>

      </div>

    </div>
  );
}

export default Middlepage;
