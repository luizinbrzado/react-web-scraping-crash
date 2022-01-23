import React from 'react';
import './style.scss';

const HorariosPorCasas = ({ array, casas }) => {
    return (
        <>
            <h3>LOSS com EXATAS {casas} casas SEGUIDAS</h3>
            <div className="casas">
                {
                    array.map((e) => {
                        return <span key={e.time.concat(e.result)} className="horario">{e.result} às {e.time}</span>
                    })
                }
            </div>
        </>
    );
};

export default HorariosPorCasas;
