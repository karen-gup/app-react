import "./App.css"
import { useState } from "react";

export default function App() {
  const [user, setUser] = useState("");

  function handleClick() {
  //  inputRef.current.focus();
  console.log(user)
  }

  return (
    <>
    <section className="main">
          <input  onChange={(e) => { setUser(e.target.value); } }/>
      <button onClick={handleClick}>
        Enviar nombre
      </button>
    </section>  
    </>
  );
}
