import React, { useState } from 'react';
import BrancoPorHora from '../../../../components/BrancoPorHora';

import './style.scss';

const InfosBranco = ({ resultados }) => {

    const [minutosUsuario, setMinutosUsuario] = useState(60);
    const [horasUsuario, setHorasUsuario] = useState(1);

    const ultimosMinutos = () => {
        var minutos = new Date();
        minutos.setMinutes(minutos.getMinutes() - minutosUsuario)
        minutos.setSeconds(0)
        var brancos = 0;

        resultados.map((e, i) => {
            if (e.time > minutos.toLocaleTimeString('pt-br'))
                if (e.result === 0)
                    brancos++;

            return null;
        })

        return brancos;
    }

    const ultimaHora = (a) => {
        var essaHora = new Date();
        essaHora.setMinutes(0)
        essaHora.setSeconds(0)
        var brancos = 0;

        resultados.map((e, i) => {
            if (e.time > essaHora.toLocaleTimeString('pt-br'))
                if (e.result === 0)
                    brancos++;

            return null;
        })

        if (a === 1)
            return essaHora.toLocaleTimeString('pt-br')
        else
            return brancos;
    }

    const ultimoBranco = (a) => {
        var brancoHora = 999;
        var brancoCasas = 999;

        if (a === 1) {
            for (let index = resultados.length - 1; index >= 0; index--) {
                if (resultados[index].result === 0) {
                    brancoHora = resultados[index].time;
                    break;
                }
            }

            return brancoHora;
        } else {
            for (let index = resultados.length - 1; index >= 0; index--) {
                if (resultados[index].result === 0) {
                    brancoCasas = resultados.length - 1 - index;
                    break;
                }
            }

            return brancoCasas;
        }
    }

    const handleChange = e => {
        if (e.target.name === 'minutos') {
            var agora = new Date();

            var ontem = new Date();
            ontem.setHours(-24);

            var escolhido = new Date();
            escolhido.setMinutes(agora.getMinutes() - e.target.value);

            var autoEscolhido = new Date();


            if (e.target.value > 300) {
                e.target.value = 300;
            } else if (escolhido.toLocaleDateString('pt-br') === ontem.toLocaleDateString('pt-br')) {
                autoEscolhido.setHours(0);
                autoEscolhido.setMinutes(0);
                autoEscolhido.setSeconds(0);

                const now = new Date(); // Data de hoje
                const past = new Date(autoEscolhido); // Outra data no passado

                const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
                const minutos = Math.ceil(diff / (1000 * 60)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
                setMinutosUsuario(minutos);
                setHorasUsuario((minutos / 60).toFixed(2));
                return;
            } else {
                setMinutosUsuario(e.target.value);
                setHorasUsuario((e.target.value / 60).toFixed(2));
            }

        }
    };

    const brancoHora = () => {
        var array = []
        for (let index = 0; index < 24; index++) {
            array.push(<BrancoPorHora key={index} resultados={resultados} horas={index} />)
        }

        return array;
    }


    return (
        <section className="brancos-por-tempo">
            <h2><span>{ultimosMinutos()}</span> brancos nos últimos {
                <input type="number" name="minutos" value={minutosUsuario} min={30} max={60 * 5} onChange={handleChange} />
            } minutos / {
                    <input type="number" name="horas" value={horasUsuario} min={0.5} max={8} onChange={handleChange} disabled />
                } horas
            </h2>
            <div className="ultimos-sessenta">
                {
                    ultimosMinutos() !== 0 && resultados.map((e, i) => {
                        var sessentaMinutos = new Date();
                        sessentaMinutos.setMilliseconds(- (minutosUsuario) * 60 * 1000)

                        if (e.time > sessentaMinutos.toLocaleTimeString('pt-br'))
                            if (e.result === 0)
                                var retornar = <span key={e._id} className="branco">{e.time}</span>
                        return retornar;
                    })
                }
            </div>

            <hr />

            <h2><span>{ultimaHora()}</span> branco{ultimaHora() === 0 ? 's' : ultimaHora() === 1 ? '' : 's'} a partir das {ultimaHora(1).slice(0, 2)}h</h2>
            <div className="ultima-hora">
                {
                    ultimaHora() !== 0 && resultados.map((e, i) => {
                        var essaHora = new Date();
                        essaHora.setMinutes(0)
                        essaHora.setSeconds(0)

                        if (e.time > essaHora.toLocaleTimeString('pt-br'))
                            if (e.result === 0)
                                var retornar = <span key={e._id} className="branco">{e.time}</span>
                        return retornar;
                    })

                }
            </div>

            <h2>Último branco foi às <span>{ultimoBranco(1)}</span> OU <span>{ultimoBranco()}</span> casas sem branco</h2>

            <div className="por-hora">
                {
                    brancoHora()
                }
            </div>
        </section >
    );
};

export default InfosBranco;
