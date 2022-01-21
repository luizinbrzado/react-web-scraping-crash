import React from 'react';

import './style.scss';

const UltimosRoleta = ({ resultados }) => {

    const linhas = 3;

    var brancos = 0;
    var vermelhos = 0;
    var pretos = 0;

    resultados.map((e, i) => {

        if (i > resultados.length - (18 * linhas - (linhas - 1)))
            resultados[i].result === 0 ? brancos++ : resultados[i].result <= 7 ? vermelhos++ : pretos++;

        return null;
    })


    return (
        <section className="ultimos">
            <h2>Últimos resultados:</h2>
            <ul className="ultimos__roleta">
                {
                    resultados.map((e, i) => {
                        var valor
                        if (i > resultados.length - (18 * linhas - (linhas - 1)))
                            valor = <li data-hover={e.time} className={`resultados ${e.result === 0 ? 'branco' :
                                e.result <= 7 ? 'vermelho' : 'preto'}`
                            } key={e._id} > {e.result}</li>
                        return valor;
                    })
                }

            </ul>
            <h3>Quantidade por cor nos últimos resultados</h3>
            <div className="ultimos__qtd">
                <span className="ultimos__qtd__cor branco">{brancos}</span>
                <span className="ultimos__qtd__cor vermelho">{vermelhos}</span>
                <span className="ultimos__qtd__cor preto">{pretos}</span>
            </div>
        </section>
    );
};

export default UltimosRoleta;
