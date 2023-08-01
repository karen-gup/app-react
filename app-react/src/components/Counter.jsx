import "../styles/counter.css";
import { useState, useEffect } from "react";
import { Button } from "./Button";
import { Multiplo } from "./Multiple";


export const Count = () => {
  const [counter, setCounter] = useState(0);
  const [multiplo, setMultiplo] =useState("")

  useEffect (() =>{
    console.log("Count")
    
    if(counter%5===0 && counter>0){
      setMultiplo("Soy un multiplo de 5")
    } else {
      setMultiplo("")
    } 
  },[counter]);

  return (
    <>
      <section className="counter">
        <Button
          estado={counter <= 0 ? true : false}
          type={"-"}
          clic={() => {
            counter > 0 ? setCounter(counter - 1) : setCounter(0);
          }}
        />
        <h1>{counter}</h1>
        <Button
          estado={false}
          type={"+"}
          clic={() => setCounter(counter + 1)}
        />
      </section>
      <Multiplo 
      estado={multiplo}/>
    </>
  );
};
