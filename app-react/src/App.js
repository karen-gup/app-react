import React from "react";
import "./App.css"



function Greet1 (props){

  

  return (
    <>
    <section className="main">
      <h1>Hola {props.nombre}, mucho gusto</h1>
    </section>  
    </>
  );
}
class Greet2 extends React.Component {
  constructor(props){
    super(props)
    this.state = {nombre:props.nombre}
  }

  render(){
    return (
      <>
      <section className="main">
        <h1>Hola, {this.state.nombre} mucho gusto</h1>
      </section>  
      </>
    );
  }
}


function App() {


  const handleSend = (e) => { 
   console.log(e.target.value)
  }

  return (
    
    <>
    <Greet1 nombre="Ana"/>  


    <Greet2 nombre="Karen"/>
  
    </>
  );
}
export default App