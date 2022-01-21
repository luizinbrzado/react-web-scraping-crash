// import React, { useEffect, useState } from "react";

import '../../App.scss';
import BrancoPorHora from '../../components/BrancoPorHora';
import Maximas from '../../components/Maximas';
import QuantidadeLossPorCor from '../../components/QuantidadeLossPorCor';
import UltimosRoleta from '../../components/UltimosRoleta';

import useAxios from "../../Hooks/useAxios";

export default function App() {

  var resultados = useAxios(`/ontem`);

  var dateFromObjectId = function (objectId) {
    return new Date(parseInt(objectId.substring(0, 8), 16) * 1000);
  };

  const brancoHora = () => {
    var array = []
    for (let index = 0; index < 24; index++) {
      array.push(<BrancoPorHora key={index} resultados={resultados} horas={index} />)
    }

    return array;
  }

  return (
    <>
      {
        resultados.length !== 0 ?
          <div className="App">
            <h1>Ontem - {resultados.length && new Date(dateFromObjectId(resultados[0]._id)).toLocaleDateString('pt-br')}</h1>
            <UltimosRoleta resultados={resultados} />
            <Maximas resultados={resultados} />
            <QuantidadeLossPorCor resultados={resultados} />
            <div className="por-hora">
                {
                    brancoHora()
                }
            </div>
          </div>
          :
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      }
    </>
  );
}