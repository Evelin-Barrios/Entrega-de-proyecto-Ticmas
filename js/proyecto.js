
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        //console.log(data.results['0'])
        foto.innerHTML = `
        <img src="${data.results['0'].picture.large} " width="200px" id="foto" class="rounded-circle">           
        `
    })



    
    fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => {
        //console.log(data.results['0'])
        nombre.innerHTML = `
        <h1>${data.results['0'].name.first + "  " + data.results['0'].name.last} </h1> `
    })


    var menu_visible = false;
    let menu = document.getElementById("nav");
    function mostrarOcultarMenu(){
        if(menu_visible==false){
            menu.style.display = "block";
            menu_visible = true;
        }
        else{
            menu.style.display = "none";
            menu_visible = false;
        }
    }
 // oculto menu cuando selecciono una opcion

 let links = document.querySelector("nav a");
 for(var x = 0; x <links.lenght;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
 }


 function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
 }



let html = document.getElementById("html");
crearBarra(html);


let javascript = document.getElementById("javascript");
crearBarra(javascript);


let python = document.getElementById("python");
crearBarra(python);


let php = document.getElementById("php");
crearBarra(php);


let react = document.getElementById("react");
crearBarra(react);

let bootstrap = document.getElementById("bootstrap");
crearBarra(bootstrap);


let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;

function efectoHabilidades(){
    var habiliades  = document.getElementById("habilidades");
    var distancia_skill = window.innerHeight - habiliades.getBoundingClientRect().top;
    if(distancia_skill>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);

        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(html,11, 1, intervalJavascript);

        },100);
    }
}


function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}


window.onscroll = function(){
    efectoHabilidades();
}