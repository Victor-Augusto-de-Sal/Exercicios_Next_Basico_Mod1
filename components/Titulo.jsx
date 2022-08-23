export default function Titulo(props) {

    /*  if (props.pequeno) {
          return (
              <>
                  <p>{props.primario}</p>
                  <p>{props.secundario}</p>
              </>
          )
      } else {
          return (
              <>
                  <h1>{props.primario}</h1>
                  <h2>{props.secundario}</h2>
              </>
          )
      }*/

    return props.pequeno ? (
        <>
            <p>{props.primario}</p>
            <p>{props.secundario}</p>
        </>
    ) : (
        <>
            <h1>{props.primario}</h1>
            <h2>{props.secundario}</h2>
        </>
    )
}