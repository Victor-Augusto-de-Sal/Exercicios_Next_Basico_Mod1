export default function SomentePar(props) {
    const numeroPar = props.numero % 2 === 0;

    return numeroPar ? <span style={{ margin: '20px'}}>{props.numero}</span> : null;

    /*
    if (props.numero % 2 === 0) {
        return <span style={{marginLeft: '20px'}}>{props.numero }</span>
    } else {
        return null;
    } 
    */
}