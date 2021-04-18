import React, { useState } from 'react';
export default function Contador(props) {
    const array = useState(0)
    const count = array[0]
    const setCount = array[1]
    var a, b = ''

    if (count === (props.StockFinal)) {

        a = 'SUPERA EL STOCK DISPONIBLE'

    }
    if (count === (props.StockInicial)) {

        b = 'ES MENOS QUE EL STOCK DISPONIBLE'

    }

    function decrementCount() {
        setCount(count - 1)
    }

    function incrementCount() {
        setCount(count + 1)
    }




    return (


        <
        div >
        <
        button onClick = { decrementCount } > bajar < /button>  <
        h1 > { count } < /h1>


        <
        h2 > { a } < /h2> <
        h2 > { b } < /h2>

        <
        button onClick = { incrementCount } > subir < /button>   < /
        div >


    )

}