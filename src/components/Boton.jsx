import { useState } from "react"
import "./misestilos.css"
const Boton = ()=> {
    //valor de la variable //manejador de la variable
    const [contador1,setContador1] = useState(0)
    const [contador2,setContador2] = useState(0)
    const [resultado,setResultado] = useState(0)

    const aumentarContador1 =() =>{
        // contador = contador + 1; en otrso frameworks
        setContador1(contador1+1)
    }

    const aumentarContador2 =() =>{
        setContador2(contador2+1)
    }

    const sumarContadores =() =>{
        setResultado(contador1+contador2)
    }



    return(
        <>
        <h1>BOTON</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam consequatur saepe ad. Numquam iusto, consectetur, laudantium voluptatum esse assumenda laborum natus, qui et explicabo libero voluptates quo commodi cumque!</p>
        
        <button onClick={aumentarContador1} class="btn-primary">CONTADOR 1</button>
        <h3>{contador1}</h3>

        <button onClick={aumentarContador2} class="btn-primary">CONTADOR 2</button>
        <h3>{contador2}</h3>

        <button onClick={sumarContadores}class="btn-primary"> RESULTADO CONTENEDORES </button>
        <h3>RESULTADO: {resultado}</h3>
        </>
    )
}

export {Boton}