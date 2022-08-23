import { useState } from "react"

export default function Formulario() {
    const [valor, setValor] = useState("incial")
    function alterarValor() {
        setValor(valor + "!")
    }
    return (
        <div style={{ display: "flex", flexDirection: "column"}}>
            <input type="text" value={valor} onChange={e => setValor(e.target.value)} />
            <span>{valor}</span>
            <button onClick={alterarValor}>Alterar</button>
        </div>
    )
}