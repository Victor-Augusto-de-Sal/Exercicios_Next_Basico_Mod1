import { useState } from "react"
import NumerosDisplay from "../../components/numerosDisplay"

export default function Contador() {
    const [numero, setNumero] = useState(0)

    const inc = () => setNumero(numero + 1) 

    const dec = function() {
        setNumero(numero - 1)
    }
    

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent:"center", flexDirection: "column"}}>
            <h1>Contador</h1>
            <NumerosDisplay numero={numero} />
            <div>
            <button onClick={inc} style={{margin: "5px"}}>+</button>
            <button onClick={dec} style={{ margin: "5px"}}>-</button>
            </div>
        </div>
    )
}