
export  const suma = (num1, num2) => {
  let resultado = parseInt(num1) + parseInt(num2); //Como le están llegando strings 5+5 devuelve 55, por eso es que tenemos que parsearlos a numero

  return resultado;
};

export const resta = (num1, num2) => {
    let resultado = num1 - num2

    return resultado;

};

export const multiplicacion = (num1,num2) => {

    let resultado = num1 * num2

    return resultado;
};

export const divicion = (num1,num2) => {
    let resultado = num1 / num2
    
    return resultado;

};


