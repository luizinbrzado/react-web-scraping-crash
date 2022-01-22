import React from 'react';

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

    resultados.reverse().map((e, i) => {
        if (e.result <= 2) {
            badUm++
            if (resultados[i - 1] !== undefined && resultados[i - 1].result <= 2) {
                badDois++;
                if (resultados[i - 2] !== undefined && resultados[i - 2].result <= 2) {
                    badTres++;
                    if (resultados[i - 3] !== undefined && resultados[i - 3].result <= 2) {
                        badQuatro++;
                        if (resultados[i - 4] !== undefined && resultados[i - 4].result <= 2) {
                            badCinco++;
                            if (resultados[i - 5] !== undefined && resultados[i - 5].result <= 2) {
                                badSeis++;
                                if (resultados[i - 6] !== undefined && resultados[i - 6].result <= 2) {
                                    badSete++;
                                    if (resultados[i - 7] !== undefined && resultados[i - 7].result <= 2) {
                                        badOito++;
                                        if (resultados[i - 8] !== undefined && resultados[i - 8].result <= 2) {
                                            badNove++;
                                            if (resultados[i - 9] !== undefined && resultados[i - 9].result <= 2) {
                                                badDez++;
                                                if (resultados[i - 10] !== undefined && resultados[i - 10].result <= 2) {
                                                    badOnze++;
                                                    if (resultados[i - 11] !== undefined && resultados[i - 11].result <= 2) {
                                                        badDoze++;
                                                        if (resultados[i - 12] !== undefined && resultados[i - 12].result <= 2) {
                                                            badTreze++;
                                                            if (resultados[i - 13] !== undefined && resultados[i - 13].result <= 2) {
                                                                badQuatorze++;
                                                                if (resultados[i - 14] !== undefined && resultados[i - 14].result <= 2) {
                                                                    badQuinze++;
                                                                    if (resultados[i - 15] !== undefined && resultados[i - 15].result <= 2) {
                                                                        badDezesseis++;
                                                                        if (resultados[i - 16] !== undefined && resultados[i - 16].result <= 2) {
                                                                            badDezessete++;
                                                                            if (resultados[i - 17] !== undefined && resultados[i - 17].result <= 2) {
                                                                                badDezoito++;
                                                                                if (resultados[i - 18] !== undefined && resultados[i - 18].result <= 2) {
                                                                                    badDezenove++;
                                                                                    if (resultados[i - 19] !== undefined && resultados[i - 19].result <= 2) {
                                                                                        badVinte++;
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        if (e.result > 2) {
            goodUm++
            if (resultados[i - 1] !== undefined && resultados[i - 1].result > 2) {
                goodDois++;
                if (resultados[i - 2] !== undefined && resultados[i - 2].result > 2) {
                    goodTres++;
                    if (resultados[i - 3] !== undefined && resultados[i - 3].result > 2) {
                        goodQuatro++;
                        if (resultados[i - 4] !== undefined && resultados[i - 4].result > 2) {
                            goodCinco++;
                            if (resultados[i - 5] !== undefined && resultados[i - 5].result > 2) {
                                goodSeis++;
                                if (resultados[i - 6] !== undefined && resultados[i - 6].result > 2) {
                                    goodSete++;
                                    if (resultados[i - 7] !== undefined && resultados[i - 7].result > 2) {
                                        goodOito++;
                                        if (resultados[i - 8] !== undefined && resultados[i - 8].result > 2) {
                                            goodNove++;
                                            if (resultados[i - 9] !== undefined && resultados[i - 9].result > 2) {
                                                goodDez++;
                                                if (resultados[i - 10] !== undefined && resultados[i - 10].result > 2) {
                                                    goodOnze++;
                                                    if (resultados[i - 11] !== undefined && resultados[i - 11].result > 2) {
                                                        goodDoze++;
                                                        if (resultados[i - 12] !== undefined && resultados[i - 12].result > 2) {
                                                            goodTreze++;
                                                            if (resultados[i - 13] !== undefined && resultados[i - 13].result > 2) {
                                                                goodQuatorze++;
                                                                if (resultados[i - 14] !== undefined && resultados[i - 14].result > 2) {
                                                                    goodQuinze++;
                                                                    if (resultados[i - 15] !== undefined && resultados[i - 15].result > 2) {
                                                                        goodDezesseis++;
                                                                        if (resultados[i - 16] !== undefined && resultados[i - 16].result > 2) {
                                                                            goodDezessete++;
                                                                            if (resultados[i - 17] !== undefined && resultados[i - 17].result > 2) {
                                                                                goodDezoito++;
                                                                                if (resultados[i - 18] !== undefined && resultados[i - 18].result > 2) {
                                                                                    goodDezenove++;
                                                                                    if (resultados[i - 19] !== undefined && resultados[i - 19].result > 2) {
                                                                                        goodVinte++;
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        return null;
    })

    return (
        <section className="qtd-loss">
            <h2>Quantidade de casas sem</h2>
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
        </section>
    );
};

export default QuantidadeLossPorCor;