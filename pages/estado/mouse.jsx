import { useState } from "react"

export default function Mouse() {
    const [x, setX] = useState(0)

    const arrayY = useState(0)
    let y = arrayY[0]
    const alterarY = arrayY[1]
    
    const estilo = {
        backgroundColor: "#fff", color: "#222", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"
    }

    function quandoMover(e) {
        setX(e.clientX)
        alterarY(e.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <div>Eixo X: {x}</div>
            <div>Eixo Y: {y}</div>
        </div>
    )
}