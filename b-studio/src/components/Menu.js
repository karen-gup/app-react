import "./styles/Header.css"
export function Menu() {

    const options= {
        option1: "Servicios",
        option2: "Costos",
        option3: "Agenda"
    } 
    return(
        <section className="menu-secc">
            <h2 className="optn/menu">{options.option1}</h2>
            <h2 className="optn/menu">{options.option2}</h2>
            <h2 className="optn/menu">{options.option3}</h2>
        </section>
    )
    
}
