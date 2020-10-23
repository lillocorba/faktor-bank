var monto = document.getElementById("rangeMonto").value
var interes = 12
var meses = document.getElementById("rangeMeses").value
var cliente = document.getElementById("checkboxCliente").value
var nombreCliente = document.getElementById("inputNombre").value
var resultadoCuota = document.getElementById("resultadoCuota")
var resultadoComision = document.getElementById("resultadoComision")
var resultadoInteres = document.getElementById("resultadoInteres")
var resultadoCliente = document.getElementById("checkboxCliente").checked
var resultadoMontoTotal = document.getElementById("prestamoTotal")
var ultimaCotizacion = localStorage.ultimoCalculo ? JSON.parse(localStorage.ultimoCalculo) : null;

/* ULTIMA COTIZACIÓN LOCAL STORAGE EN PANTALLA */

document.addEventListener('DOMContentLoaded', cotizacionCliente)

 function cotizacionCliente() {

  if (ultimaCotizacion) {
    resultadoCuota.textContent = "$" + ultimaCotizacion.cuota
    resultadoInteres.textContent = "Intereses: " + "$" + ultimaCotizacion.interes
    resultadoComision.textContent = "Comision: " + "$" + ultimaCotizacion.comision
    resultadoMontoTotal.textContent = "Monto Total: " + "$" + ultimaCotizacion.montoTotal
  } else {
    return
  }
 }

 cotizacionCliente()

/* OBJETO RESULTADOS PARCIALES */

var resultadosParciales = {
  montoMensual: 0,
  interes: 0,
  comision: 0,
  prestamoTotal: 0
}

function simuladorPrestamo() {

  let monto = document.getElementById("rangeMonto").value
  let interes = 12
  let meses = document.getElementById("rangeMeses").value
  let cliente = document.getElementById("checkboxCliente").value
  let nombreCliente = document.getElementById("inputNombre").value
  let resultadoCuota = document.getElementById("resultadoCuota")
  let resultadoComision = document.getElementById("resultadoComision")
  let resultadoInteres = document.getElementById("resultadoInteres")
  let resultadoCliente = document.getElementById("checkboxCliente").checked
  let resultadoMontoTotal = document.getElementById("prestamoTotal")
  let montoTotalPrestamo = document.querySelector("#prestamoMontoTotalOtorgado")
  let clientePrestamo = document.querySelector("#clientePrestamoOtorgado")

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
  resultadosParciales.montoMensual = cuotaMensual

  /* Calculo monto total préstamo */

  let totalPrestamo = (cuotaMensual * meses).toFixed(2)
  resultadosParciales.prestamoTotal = totalPrestamo

  /* Calculo total intereses */

  let totalInteres = (totalPrestamo - montoSolicitado).toFixed(2)
  resultadosParciales.interes = totalInteres

  /* Calculo comision */

  let comision = (totalPrestamo * 0.3).toFixed(2)
  resultadosParciales.comision = comision

  /* Trasladar los resultados a Pantalla */

  resultadoCuota.innerHTML = "$" + cuotaMensual
  resultadoInteres.innerHTML = "Intereses: " + "$" + totalInteres
  resultadoComision.innerHTML = "Comision: " + "$" + comision
  resultadoMontoTotal.innerHTML = "Monto Total: " + "$" + totalPrestamo
  montoTotalPrestamo.innerHTML = "$" + totalPrestamo
  clientePrestamo.textContent = nombreCliente

  /* Pasar los resultados a JSON y guardarlos en Local Storage */

  let resultadoPrestamoTotal = {
    cuota: cuotaMensual,
    comision: comision,
    interes: totalInteres,
    montoTotal: totalPrestamo,
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
var clientePrestamo = document.querySelector("#clientePrestamoOtorgado")

botonPrestamoOtorgado.addEventListener("click", function ortorgarPrestamo() {
  ventanaPrestamoOtorgado.classList.add("prestamo__otorgado--active")
})

botonGracias.addEventListener("click", function cerrarPrestamo() {
  ventanaPrestamoOtorgado.classList.remove("prestamo__otorgado--active")
})