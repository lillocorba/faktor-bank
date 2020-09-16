var monto = 10000 // Acá iría el valor que elige el usuario en el simulador de la web (Falta la clase de DOM)
var interes = 12 // Porcentaje de interés anual fijado previamente
var anos = 5 // Acá iría la cantidad de años en el cual devolvería el préstamo el usuario (Falta la clase de DOM)
var cuotaMensual // Valor de cuota mensual. Se modifica en tiempo real de acuerdo a los parámetros que elija el usuario. (Falta la clase de DOM)
var comision // Porcentaje de comisión de acuerdo al monto del préstamo. (Falta la clase de DOM)
var cliente = false // Si el usuario confirma que es cliente del banco en el simulador, tiene un interés anual especial del 9% (Falta la clase de DOM)

function simuladorPrestamo() {

    /* Interes especial por ser cliente */
    
    if (cliente == true) {
        interes = 9
    }
   
    var montoSolicitado = parseFloat(monto)
    var calculoInteres = (parseFloat(interes) / 100 / 12)
    var calculoPagos = parseFloat(anos) * 12

   /* Calculo cuota mensual */

    var x = Math.pow(1 + calculoInteres, calculoPagos)
    var cuotaMensual = ((montoSolicitado * x * calculoInteres) / (x - 1)).toFixed(2)


    /* Calculo monto total préstamo */

    var totalPrestamo = (cuotaMensual * calculoPagos).toFixed(2)

    /* Calculo total intereses */

    var totalInteres = (totalPrestamo - montoSolicitado).toFixed(2)
   
    console.log(cuotaMensual)
    console.log(totalPrestamo)
    console.log(totalInteres)
  }

simuladorPrestamo()