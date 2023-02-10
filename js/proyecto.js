
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

 //SECCION HABILIDADES


 function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

 

function iniciarMap(){
    var coord = {lat:-34.5956145 ,lng: -58.4431949};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}












