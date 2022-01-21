// import React, { useEffect, useState } from "react";

import UltimosRoleta from '../../components/UltimosRoleta';
import InfosBranco from './components/InfosBranco';
import Maximas from '../../components/Maximas';
import QuantidadeLossPorCor from '../../components/QuantidadeLossPorCor';

import useAxios from "../../Hooks/useAxios";

import '../../App.scss';
import './hoje.scss';
import Sequencias from './components/Sequencias';

export default function App() {

  var resultados = useAxios(`/hoje`);

  var branco = 0;
  var vermelho = 0;
  var preto = 0;

  var brancoSeq = [];
  var vermelhoSeq = [];
  var pretoSeq = [];

  var vermelhoUm = 0;
  var vermelhoDois = 0;
  var vermelhoTres = 0;
  var vermelhoQuatro = 0;
  var vermelhoCinco = 0;
  var vermelhoSeis = 0;
  var vermelhoSete = 0;
  var vermelhoOito = 0;
  var vermelhoNove = 0;
  var vermelhoDez = 0;
  var vermelhoOnze = 0;
  var vermelhoDoze = 0;
  var vermelhoTreze = 0;
  var vermelhoQuatorze = 0;
  var vermelhoQuinze = 0;
  var vermelhoDezesseis = 0;
  var vermelhoDezessete = 0;
  var vermelhoDezoito = 0;
  var vermelhoDezenove = 0;
  var vermelhoVinte = 0;


  var pretoUm = 0;
  var pretoDois = 0;
  var pretoTres = 0;
  var pretoQuatro = 0;
  var pretoCinco = 0;
  var pretoSeis = 0;
  var pretoSete = 0;
  var pretoOito = 0;
  var pretoNove = 0;
  var pretoDez = 0;
  var pretoOnze = 0;
  var pretoDoze = 0;
  var pretoTreze = 0;
  var pretoQuatorze = 0;
  var pretoQuinze = 0;
  var pretoDezesseis = 0;
  var pretoDezessete = 0;
  var pretoDezoito = 0;
  var pretoDezenove = 0;
  var pretoVinte = 0;

  resultados.length !== 0 && resultados.map((e, i) => {
    var valor = parseInt(e.result);

    if (valor === 0) {
      brancoSeq.unshift(branco);
      vermelho++;
      preto++;
      branco = 0;
    } else if (valor > 0 && valor < 8) {
      branco++;
      vermelhoSeq.unshift(vermelho);
      preto++;
      vermelho = 0;
    } else if (valor >= 8) {
      branco++;
      vermelho++;
      pretoSeq.unshift(preto);
      preto = 0;
    }


    return null;
  })

  vermelhoSeq.map((e, i) => {
    if (e === 1) {
      vermelhoUm++
    } else if (e === 2) {
      vermelhoDois++
    } else if (e === 3) {
      vermelhoTres++
    } else if (e === 4) {
      vermelhoQuatro++
    } else if (e === 5) {
      vermelhoCinco++
    } else if (e === 6) {
      vermelhoSeis++
    } else if (e === 7) {
      vermelhoSete++
    } else if (e === 8) {
      vermelhoOito++
    } else if (e === 9) {
      vermelhoNove++
    } else if (e === 10) {
      vermelhoDez++
    } else if (e === 11) {
      vermelhoOnze++
    } else if (e === 12) {
      vermelhoDoze++
    } else if (e === 13) {
      vermelhoTreze++
    } else if (e === 14) {
      vermelhoQuatorze++
    } else if (e === 15) {
      vermelhoQuinze++
    } else if (e === 16) {
      vermelhoDezesseis++
    } else if (e === 17) {
      vermelhoDezessete++
    } else if (e === 18) {
      vermelhoDezoito++
    } else if (e === 19) {
      vermelhoDezenove++
    } else if (e === 20) {
      vermelhoVinte++
    }

    return null;
  })

  pretoSeq.map((e, i) => {
    if (e === 1) {
      pretoUm++
    } else if (e === 2) {
      pretoDois++
    } else if (e === 3) {
      pretoTres++
    } else if (e === 4) {
      pretoQuatro++
    } else if (e === 5) {
      pretoCinco++
    } else if (e === 6) {
      pretoSeis++
    } else if (e === 7) {
      pretoSete++
    } else if (e === 8) {
      pretoOito++
    } else if (e === 9) {
      pretoNove++
    } else if (e === 10) {
      pretoDez++
    } else if (e === 11) {
      pretoOnze++
    } else if (e === 12) {
      pretoDoze++
    } else if (e === 13) {
      pretoTreze++
    } else if (e === 14) {
      pretoQuatorze++
    } else if (e === 15) {
      pretoQuinze++
    } else if (e === 16) {
      pretoDezesseis++
    } else if (e === 17) {
      pretoDezessete++
    } else if (e === 18) {
      pretoDezoito++
    } else if (e === 19) {
      pretoDezenove++
    } else if (e === 20) {
      pretoVinte++
    }

    return null;
  })

  return (
    <>
      {
        resultados.length !== 0 ?
          <div className="App">
            <h1>HOJE - {new Date().toLocaleDateString('pt-br')}</h1>

            <UltimosRoleta resultados={resultados} />
            <InfosBranco resultados={resultados} />
            <Maximas resultados={resultados} />
            {/* <Sequencias resultados={resultados} /> */}
            <QuantidadeLossPorCor resultados={resultados} />
          </div>
          :
          <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      }
    </>
  );
}