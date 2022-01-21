import React from 'react';

import './style.scss';

const QuantidadeLossPorCor = ({ resultados }) => {

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

    resultados.map((e, i) => {
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
        <section className="qtd-loss">
            <h2>Quantidade de casas sem</h2>
            <div className="cores">
                <div>
                    <span className="vermelho">vermelho</span>
                    <div className="cor">
                        <span className={`valor${vermelhoUm === 0 ? ' zerado' : ''}`}>1: {vermelhoUm}</span>
                        <span className={`valor${vermelhoDois === 0 ? ' zerado' : ''}`}>2: {vermelhoDois}</span>
                        <span className={`valor${vermelhoTres === 0 ? ' zerado' : ''}`}>3: {vermelhoTres}</span>
                        <span className={`valor${vermelhoQuatro === 0 ? ' zerado' : ''}`}>4: {vermelhoQuatro}</span>
                        <span className={`valor${vermelhoCinco === 0 ? ' zerado' : ''}`}>5: {vermelhoCinco}</span>
                        <span className={`valor${vermelhoSeis === 0 ? ' zerado' : ''}`}>6: {vermelhoSeis}</span>
                        <span className={`valor${vermelhoSete === 0 ? ' zerado' : ''}`}>7: {vermelhoSete}</span>
                        <span className={`valor${vermelhoOito === 0 ? ' zerado' : ''}`}>8: {vermelhoOito}</span>
                        <span className={`valor${vermelhoNove === 0 ? ' zerado' : ''}`}>9: {vermelhoNove}</span>
                        <span className={`valor${vermelhoDez === 0 ? ' zerado' : ''}`}>10: {vermelhoDez}</span>
                        <span className={`valor${vermelhoOnze === 0 ? ' zerado' : ''}`}>11: {vermelhoOnze}</span>
                        <span className={`valor${vermelhoDoze === 0 ? ' zerado' : ''}`}>12: {vermelhoDoze}</span>
                        <span className={`valor${vermelhoTreze === 0 ? ' zerado' : ''}`}>13: {vermelhoTreze}</span>
                        <span className={`valor${vermelhoQuatorze === 0 ? ' zerado' : ''}`}>14: {vermelhoQuatorze}</span>
                        <span className={`valor${vermelhoQuinze === 0 ? ' zerado' : ''}`}>15: {vermelhoQuinze}</span>
                        <span className={`valor${vermelhoDezesseis === 0 ? ' zerado' : ''}`}>16: {vermelhoDezesseis}</span>
                        <span className={`valor${vermelhoDezessete === 0 ? ' zerado' : ''}`}>17: {vermelhoDezessete}</span>
                        <span className={`valor${vermelhoDezoito === 0 ? ' zerado' : ''}`}>18: {vermelhoDezoito}</span>
                        <span className={`valor${vermelhoDezenove === 0 ? ' zerado' : ''}`}>19: {vermelhoDezenove}</span>
                        <span className={`valor${vermelhoVinte === 0 ? ' zerado' : ''}`}>20: {vermelhoVinte}</span>
                    </div>
                </div>
                <span className="vl"></span>
                <div>
                    <span className="preto">preto</span>
                    <div className="cor">
                        <span className={`valor${pretoUm === 0 ? ' zerado' : ''}`}>1: {pretoUm}</span>
                        <span className={`valor${pretoDois === 0 ? ' zerado' : ''}`}>2: {pretoDois}</span>
                        <span className={`valor${pretoTres === 0 ? ' zerado' : ''}`}>3: {pretoTres}</span>
                        <span className={`valor${pretoQuatro === 0 ? ' zerado' : ''}`}>4: {pretoQuatro}</span>
                        <span className={`valor${pretoCinco === 0 ? ' zerado' : ''}`}>5: {pretoCinco}</span>
                        <span className={`valor${pretoSeis === 0 ? ' zerado' : ''}`}>6: {pretoSeis}</span>
                        <span className={`valor${pretoSete === 0 ? ' zerado' : ''}`}>7: {pretoSete}</span>
                        <span className={`valor${pretoOito === 0 ? ' zerado' : ''}`}>8: {pretoOito}</span>
                        <span className={`valor${pretoNove === 0 ? ' zerado' : ''}`}>9: {pretoNove}</span>
                        <span className={`valor${pretoDez === 0 ? ' zerado' : ''}`}>10: {pretoDez}</span>
                        <span className={`valor${pretoOnze === 0 ? ' zerado' : ''}`}>11: {pretoOnze}</span>
                        <span className={`valor${pretoDoze === 0 ? ' zerado' : ''}`}>12: {pretoDoze}</span>
                        <span className={`valor${pretoTreze === 0 ? ' zerado' : ''}`}>13: {pretoTreze}</span>
                        <span className={`valor${pretoQuatorze === 0 ? ' zerado' : ''}`}>14: {pretoQuatorze}</span>
                        <span className={`valor${pretoQuinze === 0 ? ' zerado' : ''}`}>15: {pretoQuinze}</span>
                        <span className={`valor${pretoDezesseis === 0 ? ' zerado' : ''}`}>16: {pretoDezesseis}</span>
                        <span className={`valor${pretoDezessete === 0 ? ' zerado' : ''}`}>17: {pretoDezessete}</span>
                        <span className={`valor${pretoDezoito === 0 ? ' zerado' : ''}`}>18: {pretoDezoito}</span>
                        <span className={`valor${pretoDezenove === 0 ? ' zerado' : ''}`}>19: {pretoDezenove}</span>
                        <span className={`valor${pretoVinte === 0 ? ' zerado' : ''}`}>20: {pretoVinte}</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuantidadeLossPorCor;