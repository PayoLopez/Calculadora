import Display from "./components/Display";
import Button from "./components/Button";
import ButtonPanel from "./components/ButtonPanel";
import "./App.css";
import { useState } from "react";
import { isNumber } from "./utils/validateNumber";
import { multiplicacion,divicion,resta,suma } from "./operaciones";
function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState();
  const [resultado, setResultado] = useState();
  const [operador,setOperador] = useState();

  const buttonHandler = (evento) => {
    let botonclick = evento.target.textContent;

    if (botonclick === "AC") {
      setNumero1(0);
      setNumero2();
      setResultado();
    }
   
   
    if(isNumber(botonclick)){
        setNumero1(numero1+botonclick)
    }

    if(!isNumber(botonclick)){
        setOperador(botonclick)    
    }

    if(operador !== undefined && numero1 !== undefined){
        setNumero2(numero2+botonclick)
    }
    if(numero1 !== undefined && operador !== undefined && numero2 !== undefined && botonclick == "="){
        let resultado;
        setResultado()

        if(operador == "X" ){
            
            resultado=multiplicacion(numero1, numero2)

            setResultado(resultado);
           

        }

        if(operador == "/" ){
            
            resultado=divicion(numero1, numero2)

            setResultado(resultado);
           

        }
        if(operador == "+" ){
            
            resultado=suma(numero1, numero2)

            setResultado(resultado);
           

        }
        if(operador == "-" ){
            
            resultado=resta(numero1, numero2)

            setResultado(resultado);
           

        }
  }
  };

  

  return (
    <div>
      <Display result={resultado} />
      <ButtonPanel buttonHandler={buttonHandler} />
    </div>
  );
}

export default App;
