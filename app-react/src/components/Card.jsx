import { useState, useEffect } from 'react';
import "../styles/card.css";


export const Card =({status}) => {
const [cards, setCards] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3030/data')
    .then(response => response.json())
    .then(data => setCards(data))
  }, [status]);
console.log(cards)
  

    const getEdad=(dateString) => {
        let hoy = new Date()
        let fechaNacimiento = new Date(dateString)
        let edad = hoy.getFullYear() - fechaNacimiento.getFullYear()
        let diferenciaMeses = hoy.getMonth() - fechaNacimiento.getMonth()
        if (
          diferenciaMeses < 0 ||
          (diferenciaMeses === 0 && hoy.getDate() < fechaNacimiento.getDate())
        ) {
          edad--
        }
        return edad
      }

      const alertRemove = (id) => {
        console.log(id)
      }
    return (
        <>
          {cards.map( card => (
           <section  key={card.id} className="card-container-show">
            <p> Nombre:{card.name}</p>
            <p> {getEdad(card.birthdate)} años  -  Genero: {card.gender}</p>
            <p> Correo: {card.email}</p>
            <p> Numero de contacto: {card.phone}</p>
            <div className='buttons-cntr'>
            <button className='btn-delete'
            onClick={() => alertRemove(card.id)}
            >Eliminar</button>
            <button className='btn-edit'>Editar</button>
            </div>
            </section>
))}
        </>
    )
}