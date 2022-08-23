export default function NumerosDisplay(props) {
    return (
        <div style={{ height: '200px', width: '200px', borderRadius:"100px", fontSize: '100px', display: 'flex', alignItems:'center', justifyContent: 'center', backgroundColor: 'white', color: 'black'}}>
            {props.numero}
        </div>
    )
}