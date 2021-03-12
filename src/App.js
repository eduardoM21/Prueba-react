import React from "react";
import Messi from "./components/Jugador";
import "./App.css";
import Jugador from "./components/Jugador";

function App() {
  return (
    /* <div>
      <img src="https://media.tenor.com/images/b1fd8847d0fbb511ce135a4aae93a01d/tenor.gif" />
      <h1 class="titulo">Leonel Messi</h1>
      <p>
        Lionel Andrés Messi Cuccittini, conocido como Leo Messi, ​ es un
        futbolista argentino que juega como delantero o centrocampista.​​ Ha
        desarrollado toda su carrera en el F. C. Barcelona de la Primera
        División de España y en la selección de Argentina, equipos de los que es
        capitán.​​
      </p>
      <h2 class="titulo">Balones de oro x6</h2>
      <img
        id="imgball"
        src="https://i.eurosport.com/2019/12/02/2728921-56400430-2560-1440.jpg"
      />
      <img
        id="escBar"
        src="https://i.pinimg.com/originals/c2/3f/37/c23f371c7924ad8f501362b1f70edb04.jpg"
      ></img>
      <img
        id="escArg"
        src="https://cdn.ligadegamers.com/imagenes/escudo-argentina-dls.jpg"
   ></img>*/
    <div>
      <Jugador
        imgPrincipal="https://www.fcbarcelonanoticias.com/uploads/s1/11/84/73/7/leo-messi-en-una-imagen-de-archivo-2_4_641x361.jpeg"
        jugador="Leonel Messi"
        parrafo="Lionel Andrés Messi Cuccittini, conocido como Leo Messi, ​ es un
              futbolista argentino que juega como delantero o centrocampista.​​ Ha
              desarrollado toda su carrera en el F. C. Barcelona de la Primera
              División de España y en la selección de Argentina, equipos de los que es
              capitán.​​"
        title="X6"
        imgbalon="https://www.mundodeportivo.com/r/GODO/MD/p6/Barca/Imagenes/2019/12/02/Recortada/3ef3fe6193554e4996154d144f5cfc51-k0bC-U472022470741EqC-980x554@MundoDeportivo-Web.jpg"
        imgclub="http://assets.stickpng.com/images/584a9b3bb080d7616d298777.png"
        seleccion="https://cdn.ligadegamers.com/imagenes/escudo-argentina-dls.jpg"
      />
      <Jugador
        imgPrincipal="https://www.ecestaticos.com/image/clipping/7f9859887bc693e63a5edc2b9e3bb8a6/el-supuesto-cambio-de-planes-de-la-juventus-para-evitar-la-detencion-de-cristiano-ronaldo.jpg"
        jugador="Cristiano Ronaldo"
        parrafo="Cristiano Ronaldo dos Santos Aveiro, GOIH, ComM​​​, más conocido como Cristiano Ronaldo, es un futbolista portugués que juega como delantero en la Juventus F. C. de la Serie A de Italia y en la selección de Portugal, de la cual es su capitán"
        title="X5"
        imgbalon="https://elpais.com/deportes/imagenes/2017/12/08/actualidad/1512731536_228620_1512737833_noticia_fotograma.jpg"
        imgclub="http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/29.png"
        seleccion="https://i.pinimg.com/originals/a0/68/0e/a0680e656be35d50484060701fb1535b.png"
      />
    </div>
  );
}

export default App;
