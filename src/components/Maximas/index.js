import React from 'react';

import './style.scss';

const Maximas = ({ resultados }) => {

    var branco = 0;
    var vermelho = 0;
    var preto = 0;

    var brancoSeq = [];
    var vermelhoSeq = [];
    var pretoSeq = [];

    resultados.map((e) => {
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

    return (
        <section className="maximas">
            <h2>Máximas:</h2>
            <div>
                <div className="resultados branco">
                    <span>
                        {
                            Math.max(...brancoSeq)
                        }
                    </span>
                </div>
                <div className="resultados vermelho">
                    <span>
                        {
                            Math.max(...vermelhoSeq)
                        }
                    </span>
                </div>
                <div className="resultados preto">
                    <span>
                        {
                            Math.max(...pretoSeq)
                        }
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Maximas;
