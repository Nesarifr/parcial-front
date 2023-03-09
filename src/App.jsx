import { useState } from 'react'
import './App.css'
import {Formulario} from './components/Formularios'
import {Card} from './components/Card'


function App() {
  const [nombre, setNombre] = useState("")
  const [color, setColor] = useState("")
  const [valido, setValido] = useState(false)

  function handleInfo(valor){
    setNombre(valor.nombre)
    setColor(valor.color)
    setValido(valor.valido)
  }

  return (
    <>
      <Formulario onSubmit={handleInfo}></Formulario>
      <div>
        {valido ? <Card nombre={nombre} color={color} ></Card> : ""}
      </div>
      

    </>
  )
}

export default App
