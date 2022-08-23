import listaProdutos from '../../data/listaProdutos'

export default function Repeticao2() {
    function renderizarLinhas() {
        return listaProdutos.map(produtos => {
            return (
                <tr key={produtos.id}>
                    <td>{produtos.id}</td>
                    <td>{produtos.nome}</td>
                    <td>{produtos.preco}</td>
                </tr>
            )
        } )
    }
    return (
        <div>
            <table style={{border: '1px solid white'}}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}