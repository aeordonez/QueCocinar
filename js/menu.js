let Mostrar = true;

function MostrarMenuMobile(){
    // document.getElementById('menu_principal_mobile_opciones').setAttribute('display','block');
    var pDisplay='';
    if (Mostrar==true){
        pDisplay='block';
    } else {
        pDisplay='none';
    }
    document.getElementById('menu_principal_mobile_opciones').style.display = pDisplay;
    // document.getElementById('menu_principal_mobile_opciones').style.height = "100px";
    Mostrar = !Mostrar;
}

function OcultarMenuMobile(){
    Mostrar = true;
    document.getElementById('menu_principal_mobile_opciones').style.display = 'none';
}




// obtener la url actual
const currentUrl = window.location.href;


function abrirReceta(pReceta){
    // alert(pTituloReceta.querySelector("h2").innerHTML)

    //extrae la url base
    let baseUrl = currentUrl.substring(0,currentUrl.lastIndexOf("/"))

    //nueva url
    let newUrl = baseUrl + "/receta.html"

    // abrir en una nueva pestaña
    // window.open("receta.html")

    // abrir en la misma pestaña
    window.location.assign(newUrl)

    //Almacena en clave tituloReceta en SessionStorage el título de la receta 
    sessionStorage.setItem("tituloReceta", pReceta.querySelector("h2").innerHTML)

    //Almacena en clave fotoReceta en SessionStorage la ruta (src) de la receta 
    sessionStorage.setItem("fotoReceta",pReceta.querySelector("img").src)

    //Almacena en clave tiempoReceta en SessionStorage el tiempo de la receta 
    sessionStorage.setItem("tiempoReceta",pReceta.querySelector("i").innerHTML)
}

if (currentUrl.substring(currentUrl.lastIndexOf("/")+1) == 'receta.html'){
    //Si la página que está cargando es receta.html

    //setea variable para apuntar al elemento h1 de la página receta.html
     let h1 = document.querySelector("main").querySelector("h1")

     //Setea al elemento h1 el valor de la clave tituloReceta almacenado previamente en sessionStorage 
     h1.innerHTML = sessionStorage.getItem("tituloReceta")  

    //setea variable para apuntar al elemento img de la página receta.html
    let imagen = document.querySelector("main").querySelector("img")

     //Setea al elemento img el valor de la clave fotoReceta almacenado previamente en sessionStorage 
     imagen.src = sessionStorage.getItem("fotoReceta")

    //setea variable para apuntar al elemento i de la página receta.html
    let i = document.querySelector("main").querySelector("i")

     //Setea al elemento img el valor de la clave fotoReceta almacenado previamente en sessionStorage 
     i.innerHTML = sessionStorage.getItem("tiempoReceta")
}