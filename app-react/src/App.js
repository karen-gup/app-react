import React from "react";
import { useState } from "react";
import "./App.css"



function Greet1 (){
const [name, setName] = useState('');

  return (
    <>
    <section className="main">
            <input placeholder="Ingresa tu nombre" onChange={(e) =>{setName(e.target.value)}}></input>
      <h1>Hola {name}, soy un componente funcional</h1>
    </section>  
    </>
  );
}

class Greet2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {name:''};
  }

  render(){

    return (
      <>
      <section className="main">
      <input placeholder="Ingresa tu nombre" onChange={(e) => { this.setState({name: this.state.name=(e.target.value)})
 }}></input>
        <h1>Hola, {this.state.name} soy componente de clase</h1>
      </section>  
      </>
    );
  }
}


function App() {




  return (
    
    <>
    <Greet1 />  


    <Greet2 />
  
    </>
  );
}
export default App