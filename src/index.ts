import "./styles.css";
function potencia(base: number, exponente: number) {
  let resultadoExponente: number;
  if (exponente >= 0) {
    return alert(Math.pow(base, exponente));
  } else {
    alert("El exponente no puede ser menor que 0 ");
  }
}
//--------------------------------- programa-------------------------
let base = Number(prompt("Ingrese la base"));
let exponente = Number(prompt("Ingrese el exponente"));
potencia(base, exponente);
