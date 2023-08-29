import { Card } from './Card';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import "../styles/form.css";

export const Form = () => {
  const [data, setData] = useState([])


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(typeof (data), data)
    setData(data)

    fetch('http://localhost:3030/data', {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => console.log("Success:", response));
  }








  return (
    <>
      <section className="container">
        <h1>FORMULARIO</h1>
        <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            {...register("name", {
              required: {
                value: true,
                message: "Nombre es requerido",
              },
              maxLength: 20,
              minLength: 3,
            })}
          />
          {errors.name?.type === "required" && <span>Nombre requerido</span>}
          {errors.name?.type === "maxLength" && (
            <span>Nombre no debe ser mayor a 20 caracteres</span>
          )}
          {errors.name?.type === "minLength" && (
            <span>Nombre debe ser mayor a 2 caracteres</span>
          )}
          <label>Genero</label>
          <select className='select-css' {...register("gender")}>
            <option value="F">Femenino</option>
            <option value="M">Masculino</option>
            <option value="O">Otro</option>
          </select>

          <label>Correo Electrónico:</label>
          <input
            type="email"
            name="email"
            {...register("email", {
              required: {
                value: true,
                message: "Correo es requerido",
              },
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Correo no válido",
              },
            })}
          />
          {errors.email && <span>{errors.email.message}</span>}

          <label>Fecha de Nacimiento:</label>
          <input
            type="date"
            name="birthdate"
            {...register("birthdate", {
              required: {
                value: true,
                message: "Fecha de nacimiento es requerida",
              },
              validate: (value) => {
                const birthdate = new Date(value);
                const fechaActual = new Date();
                const edad =
                  fechaActual.getFullYear() - birthdate.getFullYear();
                return edad >= 18 || "Debes ser mayor de edad";
              },
            })}
          />
          {errors.birthdate && (
            <span>{errors.birthdate.message}</span>
          )}
          <label>Phone</label>
          <input {...register('phone', { required: true })} />
          {errors.Phone && <span>Campo requerido.</span>}
          <input type="submit" />
        </form>
      </section>
      <section className='wall-cards'>
      <Card status={data}
        data={data}/>
      </section>  
    </>
  );
};
