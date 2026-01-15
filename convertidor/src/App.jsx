import { useState } from 'react'
import Conversor from './components/Conversor'
import Moneda from './components/Moneda'

function App() {
const [canvi, setCanvi] = useState(1.17)

  return (
    <>
      <Conversor canvi={canvi}/>
    </>
  )
}

export default App
