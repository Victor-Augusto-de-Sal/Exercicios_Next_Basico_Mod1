import Lista from "../../components/Lista"
import Item from "../../components/Item"

export default function ComponenteComFilho() {
    return (
        <div>
            <Lista>
                <Item conteudo="Item #11"></Item>
                <Item conteudo="Item #12"></Item>
                <Item conteudo="Item #13"></Item>
            </Lista>
        </div>
    )
}