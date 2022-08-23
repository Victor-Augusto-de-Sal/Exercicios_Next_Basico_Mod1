import Titulo from "../../components/Titulo"
export default function UsandoTitulo() {
    return (
        <>
            <div>
                <h1>Usando Titulo</h1>
                <Titulo primario="Página de Cadastro" secundario="Incluir, alterar e excluir coisas!" />
                <Titulo primario="Página de login" secundario="Informe seu e-mail e senha" pequeno={true}/>
            </div>
        </>
    )
}