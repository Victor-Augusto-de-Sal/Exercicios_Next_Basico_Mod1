function acao1() {
    console.log("acao1");
}


export default function Botao() {
    function acao2() {
        console.log("acao2");
    }

    function acao5(e) {
        console.log(e);
    }

    return (
        <div>
            <button style={{ margin: "5px" }} onClick={acao1}>Click #01</button>
            <button style={{ margin: "5px" }} onClick={acao2}>Click #02</button>
            <button style={{ margin: "5px"}} onClick={function () {
                console.log("acao3")
            }}>Click #03</button>
            <button style={{ margin: "5px" }} onClick={() => console.log("acao4")}>Click #04</button>
            <button style={{ margin: "5px" }} onClick={acao5}>Click #05</button>
            <button style={{ margin: "5px" }} onClick={e => acao5(e.altKey)}>Click #05 v2</button>
            <input type="text" style={{ margin: "5px"}} onChange={e =>console.log(e.target.value)}/>
        </div>
    )
}