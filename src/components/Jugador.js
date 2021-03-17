import React from "react";

function Jugador(props) {
  return (
    <div>
      <h1 className="titulo">{props.jugador}</h1>
      <img src={props.imgPrincipal} />
      <div className="flex">
        <img id="escBar" src={props.imgclub}></img>
        <p>{props.parrafo}</p>
        <img id="escArg" src={props.seleccion}></img>
      </div>
      <h2 className="titulo">Balones de oro {props.title}</h2>
      <img id="imgball" src={props.imgbalon} />
      <div></div>
    </div>
  );
}

export default Jugador;
