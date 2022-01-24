import React from 'react';
import './style.scss';

const HorariosPorCasas = ({ array, casas }) => {
    return (
        <>
            <h3>LOSS com EXATAS {casas} casas SEGUIDAS</h3>
            <div className="casas">
                {
                    array.map((e) => {
                        var retornar;

                        typeof e === 'object' && (retornar = <span key={`${e.time + e.result}`} className="horario">{e.result} às {e.time}</span>)

                        return retornar;
                    })
                }
            </div>
        </>
    );
};

export default HorariosPorCasas;
