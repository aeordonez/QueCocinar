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