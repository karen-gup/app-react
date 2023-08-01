import "../styles/button.css"

export function Button({estado, type, clic }){
    const dumie= () => {
        clic()
    }

    return(
        <>
        <button className="button-count" disabled={estado}onClick={dumie}>{type}</button>    
        </>
    )
}