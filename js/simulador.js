var monto = document.getElementById("rangeMonto").value
var interes = 12
var meses = document.getElementById("rangeMeses").value
var cliente = document.getElementById("checkboxCliente").value
var resultadoCuota = document.getElementById("resultadoCuota")
var resultadoComision = document.getElementById("resultadoComision")
var resultadoInteres = document.getElementById("resultadoInteres")
var resultadoCliente = document.getElementById("checkboxCliente").checked

function simuladorPrestamo() {

  var monto = document.getElementById("rangeMonto").value
  var interes = 12
  var meses = document.getElementById("rangeMeses").value
  var cliente = document.getElementById("checkboxCliente").value
  var resultadoCuota = document.getElementById("resultadoCuota")
  var resultadoComision = document.getElementById("resultadoComision")
  var resultadoInteres = document.getElementById("resultadoInteres")
  var resultadoCliente = document.getElementById("checkboxCliente").checked

  /* Interes especial por ser cliente */

  if (resultadoCliente) {
    interes = 9
  } else {
    interes = 12
  }

  var montoSolicitado = parseFloat(monto)
  var calculoInteres = (parseFloat(interes) / 100 / 12)

  /* Calculo cuota mensual */

  var x = Math.pow(1 + calculoInteres, meses)
  var cuotaMensual = ((montoSolicitado * x * calculoInteres) / (x - 1)).toFixed(2)

  /* Calculo monto total préstamo */

  var totalPrestamo = (cuotaMensual * meses).toFixed(2)

  /* Calculo total intereses */

  var totalInteres = (totalPrestamo - montoSolicitado).toFixed(2)

  /* Calculo comision */

  var comision = (totalPrestamo * 0.3).toFixed(2)

  resultadoCuota.innerHTML = "$" + cuotaMensual
  resultadoInteres.innerHTML = "Interes: " + "$" + totalInteres
  resultadoComision.innerHTML = "Comision: " + "$" + comision
}

simuladorPrestamo()

/* var planes = [
{
  nombre: "Plan Basico",
  monto: 10000,
  interesAnual: 15
},
{
  nombre: "Plan Medium",
  monto: 50000,
  interesAnual: 17
},
{
  nombre: "Plan Premium",
  monto: 100000,
  interesAnual: 21
}
] */
