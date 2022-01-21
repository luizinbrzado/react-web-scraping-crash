import React, { useEffect, useState } from 'react';
import './style.scss';

const Sequencias = ({ resultados }) => {
    var brancoSeq = [];

    console.log(resultados.length);

    // resultados.reverse().map((e, i) => {
    //     if (brancoSeq.length === 0) {
    //         if (e.result === 0) {
    //             brancoSeq.unshift(i - resultados.length - 1)
    //             console.log(i - resultados.length - 1);
    //         }
    //     } else {
    //         if (e.result === 0) {
    //             console.log(i - resultados.length - 1 - brancoSeq[0]);
    //             brancoSeq.unshift(i - resultados.length - 1 - brancoSeq[0])
    //         }
    //     }

    //     return null;
    // })


    return (
        <section className="sequencias">
            {
                brancoSeq.length && brancoSeq.map((e, i) => {
                    return <span className="tempo-branco" key={i}>{e}</span>
                })
            }
        </section>
    );
};

export default Sequencias;
