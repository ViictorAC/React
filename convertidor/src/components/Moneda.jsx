import React from 'react'

const Moneda = ({title, valor, convertir}) => {
    const handleChange = (e) => {
        convertir (title,e.target.value)
    }
  return (
    <div>
        <h3>{title}</h3>
        <input 
            type="number" 
            value={valor}
            onChange= {(e) => {handleChange(e)}}
         />
    </div>
  )
}

export default Moneda