import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import "./App.css";
import { useState } from "react";
import { isNumber } from "./utils/validateNumber";
import { multiplicacion, divicion, resta, suma } from "./operaciones";

function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState();
  const [operador, setOperador] = useState();

  const getNumberToDisplay = () => {
    if (numero2 === 0 && operador === undefined) {
      return numero1;
    }

    if (numero1 !== 0 && operador !== undefined) {
      return numero2;
    }

    return resultado;
  };

  const buttonHandler = (evento) => {
    let botonclick = evento.target.textContent;

    if (botonclick === "AC") {
      setNumero1(0);
      setNumero2(0);
      setOperador();
      setResultado();
    }

    if (isNumber(botonclick) && operador === undefined) {
      console.log(numero1 + botonclick);
      setNumero1(numero1 + botonclick);
    }

    if (
      !isNumber(botonclick) &&
      botonclick !== "AC" &&
      botonclick !== "=" &&
      numero1 !== undefined
    ) {
      console.log("seteando operador", botonclick);
      setOperador(botonclick);
    }

    if (
      operador !== undefined &&
      numero1 !== undefined &&
      botonclick !== "=" &&
      botonclick !== "AC"
    ) {
      console.log("setendo num2", numero2 + botonclick);
      setNumero2(numero2 + botonclick);
    }
    if (
      numero1 !== undefined &&
      operador !== undefined &&
      numero2 !== undefined &&
      botonclick === "="
    ) {
      let resultado;

      if (operador === "X") {
        resultado = multiplicacion(numero1, numero2);
        setResultado(resultado);
      }

      if (operador === "/") {
        resultado = divicion(numero1, numero2);

        setResultado(resultado);
      }
      if (operador === "+") {
        resultado = suma(numero1, numero2);

        setResultado(resultado);
      }
      if (operador === "-") {
        resultado = resta(numero1, numero2);

        setResultado(resultado);
      }
    }
  };

  return (
    <div>
      <Display result={resultado !== undefined ? resultado : getNumberToDisplay()} />
      <ButtonPanel buttonHandler={buttonHandler} />
    </div>
  );
}

export default App;
