import { useState } from "react";
import React from "react";
import "./App.css"


const Count = () => {
  console.log('Renderiza Count')
  const [counter, setCounter] = useState(0);


  return (
    
    <>
    <section className="counter">
      <button className={counter<=0?"button-dis":"button-act"} onClick={()=> counter>0?setCounter(counter-1):setCounter(0)}>-</button>
        <p>{counter}</p>
      <button className="button-act" onClick={()=> setCounter(counter+1)}>+</button>
    </section>
    </>
  );
}


function App() {
 console.log("Renderiza App")

 return <Count/>
}
export default App