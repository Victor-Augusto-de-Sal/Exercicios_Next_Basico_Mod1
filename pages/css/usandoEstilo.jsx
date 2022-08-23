import Estilo from '../../components/Estilo'
export default function usandoEstilo() {
    return (
        <>
            <Estilo numero={1} color="#999" />
            <Estilo numero={-1} color="#000" direita={true}/>
        </>
    )
}