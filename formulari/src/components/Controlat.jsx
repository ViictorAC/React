import React, { useState } from 'react'

const Controlat = () => {
  const [dades, setDades] = useState({
    nom : '',
    cognom : ''
  })

  const handleInputChange = (event) => {
    setDades({
      ...dades,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert (`El teu nom es ${dades.nom} i el teu cognom es ${dades.cognom}`)
  }


  return (
    <>
    <div>
      Formulari Controlat
    </div>
    <form>
      <label>
        Nom:
        <input type="text" name="nom" onChange={handleInputChange}/>
      </label>

      <label>
        Cognom:
        <input type="text" name="cognom" onChange={handleInputChange}/>
      </label>
      <input type="submit" value="Enviar" onClick={handleSubmit}/>
    </form>
  </>
  )
}

export default Controlat