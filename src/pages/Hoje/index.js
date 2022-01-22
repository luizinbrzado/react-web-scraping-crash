// import React, { useEffect, useState } from "react";

import UltimosRoleta from '../../components/UltimosRoleta';
import Maximas from '../../components/Maximas';
import QuantidadeLossPorCor from '../../components/QuantidadeLossPorCor';

import useAxios from "../../Hooks/useAxios";

import '../../App.scss';
import './hoje.scss';

export default function App() {

  var resultados = useAxios(`/hoje`);

  return (
    <>
      {
        resultados.length !== 0 ?
          <div className="App">
            <h1>HOJE - {new Date().toLocaleDateString('pt-br')}</h1>

            <UltimosRoleta resultados={resultados} />
            {/* <Maximas resultados={resultados} /> */}
            <QuantidadeLossPorCor resultados={resultados} />
          </div>
          :
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      }
    </>
  );
}