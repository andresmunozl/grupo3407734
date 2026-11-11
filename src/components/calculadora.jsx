import { useState } from 'react'
import './misestilos.css'

const Calculadora = () => {

    const [numero, setNumero] = useState('0')
    const [numero1, setNumero1] = useState(null)
    const [operacion, setOperacion] = useState(null)
    const [nuevo, setNuevo] = useState(false)
    const [mostrarOperacion, setMostrarOperacion] = useState('')

    const agregarNumero = (n) => {
        if (numero === '0' || nuevo) {
            setNumero(n)
            setNuevo(false)
        } else {
            setNumero(numero + n)
        }
    }

    const elegirOperacion = (op) => {
        setNumero1(parseFloat(numero))
        setOperacion(op)
        setMostrarOperacion(numero + ' ' + op)
        setNuevo(true)
    }

    const calcular = () => {
        let resultado = 0
        const numero2 = parseFloat(numero)

        if (operacion === '+') {
            resultado = numero1 + numero2
        } else if (operacion === '-') {
            resultado = numero1 - numero2
        } else if (operacion === '*') {
            resultado = numero1 * numero2
        } else if (operacion === '/') {
            resultado = numero1 / numero2
        }

        setMostrarOperacion(mostrarOperacion + ' ' + numero2 + ' =')

        if (operacion === '/' && numero2 === 0) {
            setNumero('Error')
        } else {
            setNumero(String(resultado))
        }

        setNumero1(null)
        setOperacion(null)
        setNuevo(true)
    }

    const limpiar = () => {
        setNumero('0')
        setNumero1(null)
        setOperacion(null)
        setNuevo(false)
        setMostrarOperacion('')
    }

    const cambiarSigno = () => {
        setNumero(String(parseFloat(numero) * -1))
    }

    const porcentaje = () => {
        setNumero(String(parseFloat(numero) / 100))
    }

    const decimal = () => {
        if (!numero.includes('.')) {
            setNumero(numero + '.')
        }
    }

    return (
        <>
            <h1>MI CALCULADORA</h1>
            <div className="calculadora">
                <div className="pantalla">
                    <p>{mostrarOperacion}</p>
                    <h1>{numero}</h1>
                </div>
                <div className="botones">
                    <button onClick={limpiar}>AC</button>
                    <button onClick={cambiarSigno}>+/−</button>
                    <button onClick={porcentaje}>%</button>
                    <button onClick={() => elegirOperacion('/')}>÷</button>
                    <button onClick={() => agregarNumero('7')}>7</button>
                    <button onClick={() => agregarNumero('8')}>8</button>
                    <button onClick={() => agregarNumero('9')}>9</button>
                    <button onClick={() => elegirOperacion('*')}>×</button>
                    <button onClick={() => agregarNumero('4')}>4</button>
                    <button onClick={() => agregarNumero('5')}>5</button>
                    <button onClick={() => agregarNumero('6')}>6</button>
                    <button onClick={() => elegirOperacion('-')}>−</button>
                    <button onClick={() => agregarNumero('1')}>1</button>
                    <button onClick={() => agregarNumero('2')}>2</button>
                    <button onClick={() => agregarNumero('3')}>3</button>
                    <button onClick={() => elegirOperacion('+')}>+</button>
                    <button className="cero" onClick={() => agregarNumero('0')}>0</button>
                    <button onClick={decimal}>.</button>
                    <button onClick={calcular}>=</button>
                </div>
            </div>
        </>
    )
}

export { Calculadora }