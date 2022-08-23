import { useEffect, useState } from "react"
import NumerosDisplay from "../../components/numerosDisplay"
import { mega } from "../../functions/mega"

export default function MegaSena() {
    const [qtde, setQtde] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])

    function renderizarNumeros() {
        return numeros.map(
            numero => <NumerosDisplay key={numero} numero={numero} />
        )
    }

    return (
        <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }} >
            <h1>MegaSena</h1>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {renderizarNumeros()}
            </div>
            <div>
                <input type="number" min={6} max={20} value={qtde} onChange={e => setQtde(e.target.value)} />
                <button onClick={() => setNumeros(mega(qtde))}>Gerar aposta</button>
            </div>
        </div>
    )
}