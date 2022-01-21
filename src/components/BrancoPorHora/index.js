import React from 'react';
import './style.scss';

const BrancoPorHora = ({ resultados, horas }) => {
    const porHora = (a, minutos, segundos) => {
        var essaHora = new Date();
        var umaHoraAMais = new Date();
        essaHora.setHours(horas)
        umaHoraAMais.setHours(horas + 1)
        essaHora.setMinutes(0)
        essaHora.setSeconds(0)

        var brancos = 0;

        resultados.map((e, i) => {
            if (e.time > essaHora.toLocaleTimeString('pt-br') && e.time < umaHoraAMais.toLocaleTimeString('pt-br'))
                if (e.result === 0)
                    brancos++;

            return null;
        })

        if (a === 1)
            return essaHora.toLocaleTimeString('pt-br').slice(0, 2)
        else
            return brancos;
    }

    return (
        <span>{`${porHora(1)} > ${porHora()}`}</span>
    );
};

export default BrancoPorHora;
