import React from "react";

function Jugador(props) {
  return (
    <div>
      <h1 class="titulo">{props.jugador}</h1>
      <img src={props.imgPrincipal} />
      <p>{props.parrafo}</p>
      <h2 class="titulo">Balones de oro {props.title}</h2>
      <img id="imgball" src={props.imgbalon} />
      <img id="escBar" src={props.imgclub}></img>
      <img id="escArg" src={props.seleccion}></img>
    </div>
  );
}

export default Jugador;
