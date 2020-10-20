/* ANIMACIONES HERO */


$(document).ready(function () {

   $("#heroPhone").addClass('hero__phone--active')
   $(".hero__col1").addClass('hero__col1--active')
   $(".hero__arrows").addClass('hero__arrows--active')
   $(".shape__hero").addClass('shape__hero--active')
})

/* ANIMACIONES SIMULADOR */

$(document).scroll(function scrollSimulador() {

   if (window.scrollY > ($(".simulador__h4").offset().top) - (window.innerHeight / 1.5)) {

      $(".simulador__h4").addClass('simulador__h4--active')
      $(".simulador__h3").addClass('simulador__h3--active')
      $(".simulador__colInputNombre").addClass('simulador__colInputNombre--active')
      $(".simulador__colRange1").addClass('simulador__colRange1--active')
      $(".simulador__colRange2").addClass('simulador__colRange2--active')
      $(".simulador__colRange3").addClass('simulador__colRange3--active')
      $(".shape__hero--simulador").addClass('shape__hero--simulador--active')

   }
})

/* ANIMACIONES RESULTADOS SIMULADOR */

$(document).scroll(function scrollSimuladorResultados() {

   if (window.scrollY > ($(".simulador__col3").offset().top) - (window.innerHeight / 1.5)) {

      $(".simulador__col3").addClass('simulador__col3--active')
      $(".simulador__btn").addClass('simulador__btn--active')

   }
})

/* ANIMACIONES CONTACTO */

$(document).scroll(function scrollContacto() {

   if (window.scrollY > ($(".contacto__h4").offset().top) - (window.innerHeight / 1.1)) {

      $(".contacto__h4").addClass('contacto__h4--active')
      $(".contacto__h3").addClass('contacto__h3--active')
      $(".contacto__form").addClass('contacto__form--active')
      $(".shape__hero--contacto").addClass('shape__hero--contacto--active')

   }
})

/* ANIMACIONES NOSOTROS */

$(document).scroll(function scrollNosotros() {

   if (window.scrollY > ($(".nosotros__h4").offset().top) - (window.innerHeight)) {

      $(".nosotros__h4").addClass('nosotros__h4--active')
      $(".nosotros__h3").addClass('nosotros__h3--active')
      $(".nosotros__p").addClass('nosotros__p--active')

   }
})

/* ANIMACIONES FOOTER */

$(document).scroll(function scrollFooter() {

   if (window.scrollY > ($(".footer__p").offset().top) - (window.innerHeight)) {

      $(".footer__p").addClass('footer__p--active')

   }
})


/* ANIMACIONES HOVER */

$("#heroPhone").hover(function () {

   $("#heroPhone").addClass('hero__phone--active--hover')

}, function () {

   $("#heroPhone").removeClass('hero__phone--active--hover')

}
);