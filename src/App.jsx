import { Boton } from "./components/boton"
import { Calculadora } from './components/calculadora'
import { Formulario } from './components/Formulario'
import TarjetaUsuario from "./components/TarjetaUsuario"
import TarjetaProducto from "./components/TarjetaProducto";
import { useState } from "react";
 
function App() {
  //aqui puede ir codigo en jsx
  const [mostrarTarjetaUsuario, setMostrarTarjetaUsuario] = useState(true)
  return (
    <>
      {/*puede ir codigo html + javascript*/}
      <Formulario/>
      <Calculadora />
      <hr/>
      <Boton/>
      <hr/>
      <button onClick= {() => {
      setMostrarTarjetaUsuario(! mostrarTarjetaUsuario)}}>Cambiar estado </button>
      { mostrarTarjetaUsuario ?
      <><p> Mostrar las tarjetas de usarios </p>
      <TarjetaUsuario nombre = {'Felipe'} programa = {'ADSO'}/>
      <TarjetaUsuario nombre = {'Juan'} programa = {'Marroquineria'}/>
      <TarjetaUsuario nombre = {'Santiago'} programa = {'Mecanica'}/>
      </>
      :
      <><p> Mostrar las tarjetas de productos </p>
      <h1>Catálogo de productos</h1>
      <TarjetaProducto
       nombre="Portátil"
       precio={2500000}
       categoria="Tecnología"
       imagen="https://megacomputer.com.co/wp-content/uploads/2026/05/edited1-21.webp"
      />

      <TarjetaProducto
       nombre="Celular"
       precio={1200000}
       categoria="Tecnología"
       imagen="https://www.phonelectrics.com/cdn/shop/files/iPhone16e-5.jpg?v=1742231350&width=1200"
      />

      <TarjetaProducto
       nombre="Zapatos"
       precio={180000}
       categoria="Vestuario"
      imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdQRkX3oi2CHAT47Erb_cxPkiPV-ZgDxtPnrYgZ2R_LA&s=10"
      />
      </>
      }


    </>
  )
}

export default App //sirve para que este componente sea visible en toda la app 