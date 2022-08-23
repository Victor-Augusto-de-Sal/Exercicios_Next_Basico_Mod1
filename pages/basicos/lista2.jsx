function gerarLista(value) {
    const lista = [];
    for (let i = 1; i <= value; i++) {
        lista.push(<span>{i},</span>)
    }
    return lista
}


export default function lista2() {
    return (
        <div>
            {gerarLista(10)}
        </div>
    )
}