import React from 'react';
import HorariosPorCasas from './components/HorariosPorCasas';

import './style.scss';

const QuantidadeLossPorCor = ({ resultados }) => {

    var badUm = 0;
    var badDois = 0;
    var badTres = 0;
    var badQuatro = 0;
    var badCinco = 0;
    var badSeis = 0;
    var badSete = 0;
    var badOito = 0;
    var badNove = 0;
    var badDez = 0;
    var badOnze = 0;
    var badDoze = 0;
    var badTreze = 0;
    var badQuatorze = 0;
    var badQuinze = 0;
    var badDezesseis = 0;
    var badDezessete = 0;
    var badDezoito = 0;
    var badDezenove = 0;
    var badVinte = 0;


    var goodUm = 0;
    var goodDois = 0;
    var goodTres = 0;
    var goodQuatro = 0;
    var goodCinco = 0;
    var goodSeis = 0;
    var goodSete = 0;
    var goodOito = 0;
    var goodNove = 0;
    var goodDez = 0;
    var goodOnze = 0;
    var goodDoze = 0;
    var goodTreze = 0;
    var goodQuatorze = 0;
    var goodQuinze = 0;
    var goodDezesseis = 0;
    var goodDezessete = 0;
    var goodDezoito = 0;
    var goodDezenove = 0;
    var goodVinte = 0;

    const arrayBadNove = [];
    const arrayBadDez = [];
    const arrayBadOnze = [];
    const arrayBadDoze = [];
    const arrayBadTreze = [];
    const arrayBadQuatorze = [];

    var arrayX = [];
    var countLoss = 0;
    var countWin = 0;

    resultados.reverse().map((e, i) => {
        if (e.result <= 2) {
            countLoss++;
        } else {
            arrayX.unshift(countLoss);

            if (countLoss === 1) {
                badUm++;
            } else if (countLoss === 2) {
                badDois++;
            } else if (countLoss === 3) {
                badTres++;
            } else if (countLoss === 4) {
                badQuatro++;
            } else if (countLoss === 5) {
                badCinco++;
            } else if (countLoss === 6) {
                badSeis++;
            } else if (countLoss === 7) {
                badSete++;
            } else if (countLoss === 8) {
                badOito++;
            } else if (countLoss === 9) {
                arrayBadNove.unshift(arrayBadNove.unshift({ time: resultados[i - 1].time, result: resultados[i - 1].result }));
                badNove++;
            } else if (countLoss === 10) {
                arrayBadDez.unshift(arrayBadDez.unshift({ time: resultados[i - 1].time, result: resultados[i - 1].result }));
                badDez++;
            } else if (countLoss === 11) {
                arrayBadOnze.unshift(arrayBadOnze.unshift({ time: resultados[i - 1].time, result: resultados[i - 1].result }));
                badOnze++;
            } else if (countLoss === 12) {
                arrayBadDoze.unshift(arrayBadDoze.unshift({ time: resultados[i - 1].time, result: resultados[i - 1].result }));
                badDoze++;
            } else if (countLoss === 13) {
                arrayBadTreze.unshift(arrayBadTreze.unshift({ time: resultados[i - 1].time, result: resultados[i - 1].result }));
                badTreze++;
            } else if (countLoss === 14) {
                arrayBadQuatorze.unshift(arrayBadQuatorze.unshift({ time: resultados[i - 1].time, result: resultados[i - 1].result }));
                badQuatorze++;
            } else if (countLoss === 15) {
                badQuinze++;
            } else if (countLoss === 16) {
                badDezesseis++;
            } else if (countLoss === 17) {
                badDezessete++;
            } else if (countLoss === 18) {
                badDezoito++;
            } else if (countLoss === 19) {
                badDezenove++;
            } else if (countLoss >= 20) {
                badVinte++;
            }

            countLoss = 0;
        }

        if (e.result > 2) {
            countWin++;
        } else {
            arrayX.unshift(countWin);

            if (countWin === 1) {
                goodUm++;
            } else if (countWin === 2) {
                goodDois++;
            } else if (countWin === 3) {
                goodTres++;
            } else if (countWin === 4) {
                goodQuatro++;
            } else if (countWin === 5) {
                goodCinco++;
            } else if (countWin === 6) {
                goodSeis++;
            } else if (countWin === 7) {
                goodSete++;
            } else if (countWin === 8) {
                goodOito++;
            } else if (countWin === 9) {
                goodNove++;
            } else if (countWin === 10) {
                goodDez++;
            } else if (countWin === 11) {
                goodOnze++;
            } else if (countWin === 12) {
                goodDoze++;
            } else if (countWin === 13) {
                goodTreze++;
            } else if (countWin === 14) {
                goodQuatorze++;
            } else if (countWin === 15) {
                goodQuinze++;
            } else if (countWin === 16) {
                goodDezesseis++;
            } else if (countWin === 17) {
                goodDezessete++;
            } else if (countWin === 18) {
                goodDezoito++;
            } else if (countWin === 19) {
                goodDezenove++;
            } else if (countWin >= 20) {
                goodVinte++;
            }

            countWin = 0;
        }

        return null;
    })

    return (
        <>
            <section className="qtd-loss">
                <h2>Quantidade de casas seguidas com</h2>
                <div className="cores">
                    <div>
                        <span className="bad">LOSS</span>
                        <div className="cor">
                            <span className={`valor${badUm === 0 ? ' zerado' : ''}`}>1: {badUm}</span>
                            <span className={`valor${badDois === 0 ? ' zerado' : ''}`}>2: {badDois}</span>
                            <span className={`valor${badTres === 0 ? ' zerado' : ''}`}>3: {badTres}</span>
                            <span className={`valor${badQuatro === 0 ? ' zerado' : ''}`}>4: {badQuatro}</span>
                            <span className={`valor${badCinco === 0 ? ' zerado' : ''}`}>5: {badCinco}</span>
                            <span className={`valor${badSeis === 0 ? ' zerado' : ''}`}>6: {badSeis}</span>
                            <span className={`valor${badSete === 0 ? ' zerado' : ''}`}>7: {badSete}</span>
                            <span className={`valor${badOito === 0 ? ' zerado' : ''}`}>8: {badOito}</span>
                            <span className={`valor${badNove === 0 ? ' zerado' : ''}`}>9: {badNove}</span>
                            <span className={`valor${badDez === 0 ? ' zerado' : ''}`}>10: {badDez}</span>
                            <span className={`valor${badOnze === 0 ? ' zerado' : ''}`}>11: {badOnze}</span>
                            <span className={`valor${badDoze === 0 ? ' zerado' : ''}`}>12: {badDoze}</span>
                            <span className={`valor${badTreze === 0 ? ' zerado' : ''}`}>13: {badTreze}</span>
                            <span className={`valor${badQuatorze === 0 ? ' zerado' : ''}`}>14: {badQuatorze}</span>
                            <span className={`valor${badQuinze === 0 ? ' zerado' : ''}`}>15: {badQuinze}</span>
                            <span className={`valor${badDezesseis === 0 ? ' zerado' : ''}`}>16: {badDezesseis}</span>
                            <span className={`valor${badDezessete === 0 ? ' zerado' : ''}`}>17: {badDezessete}</span>
                            <span className={`valor${badDezoito === 0 ? ' zerado' : ''}`}>18: {badDezoito}</span>
                            <span className={`valor${badDezenove === 0 ? ' zerado' : ''}`}>19: {badDezenove}</span>
                            <span className={`valor${badVinte === 0 ? ' zerado' : ''}`}>20: {badVinte}</span>
                        </div>
                    </div>
                    <span className="vl"></span>
                    <div>
                        <span className="good">WIN</span>
                        <div className="cor">
                            <span className={`valor${goodUm === 0 ? ' zerado' : ''}`}>1: {goodUm}</span>
                            <span className={`valor${goodDois === 0 ? ' zerado' : ''}`}>2: {goodDois}</span>
                            <span className={`valor${goodTres === 0 ? ' zerado' : ''}`}>3: {goodTres}</span>
                            <span className={`valor${goodQuatro === 0 ? ' zerado' : ''}`}>4: {goodQuatro}</span>
                            <span className={`valor${goodCinco === 0 ? ' zerado' : ''}`}>5: {goodCinco}</span>
                            <span className={`valor${goodSeis === 0 ? ' zerado' : ''}`}>6: {goodSeis}</span>
                            <span className={`valor${goodSete === 0 ? ' zerado' : ''}`}>7: {goodSete}</span>
                            <span className={`valor${goodOito === 0 ? ' zerado' : ''}`}>8: {goodOito}</span>
                            <span className={`valor${goodNove === 0 ? ' zerado' : ''}`}>9: {goodNove}</span>
                            <span className={`valor${goodDez === 0 ? ' zerado' : ''}`}>10: {goodDez}</span>
                            <span className={`valor${goodOnze === 0 ? ' zerado' : ''}`}>11: {goodOnze}</span>
                            <span className={`valor${goodDoze === 0 ? ' zerado' : ''}`}>12: {goodDoze}</span>
                            <span className={`valor${goodTreze === 0 ? ' zerado' : ''}`}>13: {goodTreze}</span>
                            <span className={`valor${goodQuatorze === 0 ? ' zerado' : ''}`}>14: {goodQuatorze}</span>
                            <span className={`valor${goodQuinze === 0 ? ' zerado' : ''}`}>15: {goodQuinze}</span>
                            <span className={`valor${goodDezesseis === 0 ? ' zerado' : ''}`}>16: {goodDezesseis}</span>
                            <span className={`valor${goodDezessete === 0 ? ' zerado' : ''}`}>17: {goodDezessete}</span>
                            <span className={`valor${goodDezoito === 0 ? ' zerado' : ''}`}>18: {goodDezoito}</span>
                            <span className={`valor${goodDezenove === 0 ? ' zerado' : ''}`}>19: {goodDezenove}</span>
                            <span className={`valor${goodVinte === 0 ? ' zerado' : ''}`}>20: {goodVinte}</span>
                        </div>
                    </div>
                </div>
                <div className="loss-horarios">
                    {
                        arrayBadNove[0] !== undefined && <HorariosPorCasas array={arrayBadNove} casas={'9'} />
                    }
                    {
                        arrayBadDez[0] !== undefined && <HorariosPorCasas array={arrayBadDez} casas={'10'} />
                    }
                    {
                        arrayBadOnze[0] !== undefined && <HorariosPorCasas array={arrayBadOnze} casas={'11'} />
                    }
                    {
                        arrayBadDoze[0] !== undefined && <HorariosPorCasas array={arrayBadDoze} casas={'12'} />
                    }
                    {
                        arrayBadTreze[0] !== undefined && <HorariosPorCasas array={arrayBadTreze} casas={'13'} />
                    }
                    {
                        arrayBadQuatorze[0] !== undefined && <HorariosPorCasas array={arrayBadQuatorze} casas={'14'} />
                    }
                </div>
            </section>
        </>
    );
};

export default QuantidadeLossPorCor;