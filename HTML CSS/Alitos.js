$(document).ready(function(){

    $(function(){
        $('.bxslider').bxSlider({
          mode: 'fade',
          captions: true,
          slideWidth: 600
        });
      });
console.log("hola");




});

/*
window.addEventListener("load", () => {

    document.querySelector("#contacto").style.display = "none";
    document.querySelector("#productos").style.display = "none";
    document.querySelector("#nosotros").style.display = "none";
    document.querySelector("#puntosVenta").style.display = "none";
    document.querySelector("#inicio").style.display = "block";





    var inicio = document.querySelector("#menuInicio");

    console.log(inicio);


    inicio.addEventListener("click", () => {

        console.log("Inicio");

        document.querySelector("#productos").style.display = "none";
        document.querySelector("#nosotros").style.display = "none";
        document.querySelector("#puntosVenta").style.display = "none";
        document.querySelector("#inicio").style.display = "block";
        document.querySelector("#contacto").style.display = "none";

    });


    var productos = document.querySelector("#menuProductos");

    productos.addEventListener("click", () => {

        console.log("Productos");
        document.querySelector("#inicio").style.display = "none";
        document.querySelector("#nosotros").style.display = "none";
        document.querySelector("#puntosVenta").style.display = "none";
        document.querySelector("#productos").style.display = "block";
        document.querySelector("#contacto").style.display = "none";


    });

    var nosotros = document.querySelector("#menuNosotros");

    nosotros.addEventListener("click", () => {

        console.log("nosotros");
        document.querySelector("#inicio").style.display = "none";
        document.querySelector("#productos").style.display = "none";
        document.querySelector("#puntosVenta").style.display = "none";
        document.querySelector("#nosotros").style.display = "block";
        document.querySelector("#contacto").style.display = "none";


    });



    var puntos = document.querySelector("#menuPuntos");

    puntos.addEventListener("click", () => {
        console.log("Puntos de Venta");

        document.querySelector("#inicio").style.display = "none";
        document.querySelector("#productos").style.display = "none";
        document.querySelector("#nosotros").style.display = "none";
        document.querySelector("#puntosVenta").style.display = "block";
        document.querySelector("#contacto").style.display = "none";
        
    });


    var contacto = document.querySelector("#menuContacto");

    contacto.addEventListener("click", () => {

        console.log("Contacto");
        document.querySelector("#inicio").style.display = "none";
        document.querySelector("#productos").style.display = "none";
        document.querySelector("#nosotros").style.display = "none";
        document.querySelector("#puntosVenta").style.display = "none";
        document.querySelector("#contacto").style.display = "block";


    });



});
*/