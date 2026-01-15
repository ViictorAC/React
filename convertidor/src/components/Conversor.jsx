import React, { useState } from 'react'
import Moneda from './Moneda'

const Conversor = ({canvi}) => {
    const [euro, setEuro] = useState(1);
    const [dolar, setDolar] = useState(canvi);
    const convertir = (moneda, valor ) =>{
        console.log(moneda, valor)
        if (moneda == "Euro"){
            setEuro(valor)
            setDolar((valor * canvi).toFixed(2))
        }else{
            setDolar(valor)
            setEuro((valor / canvi).toFixed(2))
        }
    }
  return (
    <div>
        <h1>Conversor de moneda</h1>
        <Moneda title="Euro" valor = {euro} convertir={convertir}/>
        <Moneda title="Dolar" valor = {dolar} convertir={convertir}/>
    </div>
  )
}

export default Conversor