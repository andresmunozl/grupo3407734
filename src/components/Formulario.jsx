import { useState } from 'react'

const Formulario = () => {

    const [numero1, setNumero1] = useState('')
    const [numero2, setNumero2] = useState('')
    const [resultado, setResultado] = useState(null)

    const sumarDosNumeros = () => {
        setResultado(parseInt(numero1) + parseInt(numero2))
    }
    
    return (
        <>
            <h1>FORMULARIO CON REACT</h1>

            <input
                type="number"
                placeholder="Escriba un numero"
                value={numero1}
                onChange={(evento) => setNumero1(evento.target.value)}
            />

            <br />
            <br />

            <input
                type="number"
                placeholder="Escriba un numero"
                value={numero2}
                onChange={(evento) => setNumero2(evento.target.value)}
            />

            <br />
            <br />

            <button onClick={sumarDosNumeros}>SUMAR</button>

            <h5>{numero1}</h5>
            <h5>{numero2}</h5>
            <h2>La suma de los dos numeros es: {resultado}</h2>
            <hr />

        </>

    )
}

export { Formulario }
