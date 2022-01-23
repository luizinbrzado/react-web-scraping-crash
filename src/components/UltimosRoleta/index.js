import React from 'react';

import './style.scss';

const UltimosRoleta = ({ resultados }) => {

    const linhas = 3;

    var bad = 0;
    var good = 0;

    resultados.map((e, i) => {

        if (i > resultados.length - (18 * linhas - (linhas - 1)))
            resultados[i].result <= 2 ? bad++ : good++;

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
                            valor = <li data-hover={e.time} className={`resultados ${e.result <= 2 ? 'bad' : 'good'}`
                            } key={e._id}>{e.result}x</li>

                        return valor;
                    })
                }

            </ul>
            <h3>Quantidade maior OU menor ou igual a 2</h3>
            <div className="ultimos__qtd">
                <span className="ultimos__qtd__cor good">{good}</span>
                <span className="ultimos__qtd__cor bad">{bad}</span>
            </div>
        </section>
    );
};

export default UltimosRoleta;
