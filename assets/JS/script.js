$(function(){ 

  

   /*desvanecer titulo*/ 
$("h1").hover(function  () {
    $("h1").fadeOut(8000);
  });

  /* Boton Animado */
 $("#esconder").click(function () {
    if ($('li').is(':visible')) {
      $('li').hide(1200);
      $("#esconder").text("mostrar");
      
    } else {
      $('li').show(1200);
      $("#esconder").text("Esconder");
      
    }
  });

/* Cambio de Color*/

$("#btn-cambiarColor").click(function () {
   $("li").toggleClass("modo-color");
   });


}); 