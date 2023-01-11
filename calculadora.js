function calcular() {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;
  const operacion = document.getElementById("operacion").value;
  const numero1 = parseInt(num1);
  const numero2 = parseInt(num2);
  let resultado = 0;

  switch (operacion) {
    case "+":
      resultado = numero1 + numero2;
      break;
    case "-":
      resultado = numero1 - numero2;
      break;
    case "*":
      resultado = numero1 * numero2;
      break;
    case "/":
      resultado = numero1 / numero2;
      break;
    default:
        alert('Por favor seleccione una operacion');
      return;
  };

  document.getElementById("resultado").textContent = resultado;
};
