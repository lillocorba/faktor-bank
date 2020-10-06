var monto = document.getElementById("rangeMonto").value
var interes = 12
var meses = document.getElementById("rangeMeses").value
var cliente = document.getElementById("checkboxCliente").value
var resultadoCuota = document.getElementById("resultadoCuota")
var resultadoComision = document.getElementById("resultadoComision")
var resultadoInteres = document.getElementById("resultadoInteres")
var resultadoCliente = document.getElementById("checkboxCliente").checked
var resultadoMontoTotal = document.getElementById("prestamoTotal")

function simuladorPrestamo() {

  let monto = document.getElementById("rangeMonto").value
  let interes = 12
  let meses = document.getElementById("rangeMeses").value
  let cliente = document.getElementById("checkboxCliente").value
  let resultadoCuota = document.getElementById("resultadoCuota")
  let resultadoComision = document.getElementById("resultadoComision")
  let resultadoInteres = document.getElementById("resultadoInteres")
  let resultadoCliente = document.getElementById("checkboxCliente").checked
  let resultadoMontoTotal = document.getElementById("prestamoTotal")
  let montoTotalPrestamo = document.querySelector("#prestamoMontoTotalOtorgado")

  /* Interes especial por ser cliente */

  if (resultadoCliente) {
    interes = 9
  } else {
    interes = 12
  }

  let montoSolicitado = parseFloat(monto)
  let calculoInteres = (parseFloat(interes) / 100 / 12)

  /* Calculo cuota mensual */

  let x = Math.pow(1 + calculoInteres, meses)
  let cuotaMensual = ((montoSolicitado * x * calculoInteres) / (x - 1)).toFixed(2)

  /* Calculo monto total préstamo */

  let totalPrestamo = (cuotaMensual * meses).toFixed(2)

  /* Calculo total intereses */

  let totalInteres = (totalPrestamo - montoSolicitado).toFixed(2)

  /* Calculo comision */

  let comision = (totalPrestamo * 0.3).toFixed(2)

  /* Trasladar los resultados a Pantalla */

  resultadoCuota.innerHTML = "$" + cuotaMensual
  resultadoInteres.innerHTML = "Intereses: " + "$" + totalInteres
  resultadoComision.innerHTML = "Comision: " + "$" + comision
  resultadoMontoTotal.innerHTML = "Monto Total: " + "$" + totalPrestamo
  montoTotalPrestamo.innerHTML = "$" + totalPrestamo

  /* Pasar los resultados a JSON y guardarlos en Local Storage */

  let resultadoPrestamoTotal = {
    Cuota: cuotaMensual,
    Comision: comision,
    Interés: totalInteres
  }

  let json = JSON.stringify(resultadoPrestamoTotal)

  localStorage.setItem('ultimoCalculo', json)
}

simuladorPrestamo()

/* VENTANA PRESTAMO OTORGADO */

var ventanaPrestamoOtorgado = document.querySelector(".prestamo__otorgado")
var botonPrestamoOtorgado = document.querySelector("#btnPrestamo")
var botonGracias = document.querySelector("#btnPrestamoGracias")
var montoTotalPrestamo = document.querySelector("#prestamoMontoTotalOtorgado")

botonPrestamoOtorgado.addEventListener("click", function ortorgarPrestamo() {
  ventanaPrestamoOtorgado.classList.add("prestamo__otorgado--active")
})

botonGracias.addEventListener("click", function cerrarPrestamo() {
  ventanaPrestamoOtorgado.classList.remove("prestamo__otorgado--active")
})

