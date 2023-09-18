// API APOD + BOTOES 

const apiKey = "vdu70esjaX6AvxMuTIa4UnmHFVY261gUE5AqlmDV";
const url = "https://api.nasa.gov/planetary/apod?";

let container = document.querySelector("main");
let button = document.getElementById("fetch-image");

button.addEventListener("click", () => {
  getImage("normal");
});

let hdButton = document.getElementById("fetch-hd");
hdButton.addEventListener("click", () => {
  getImage("hd");
});

function getImage(value) {
  let imageContainer = document.querySelector(".image-container");
  imageContainer.remove();

  let newImageContainer = document.createElement("div");
  newImageContainer.classList.add("image-container");

  container.append(newImageContainer);

  let dateInput = document.querySelector(".details-input input");
  let date = dateInput.value;

  let request = new XMLHttpRequest();
  request.open("GET", url + "date=" + date + "&api_key=" + apiKey, true);
  request.send();
  request.onload = function () {
    if (request.status === 200) {
      let data = JSON.parse(request.responseText);
      let imageUrl;
      if (value === "hd") {
        imageUrl = data.hdurl;
      } else {
        imageUrl = data.url;
      }
      let image = document.createElement("img");
      image.src = imageUrl;
      newImageContainer.append(image);
    } else {
      window.alert("Coloque um formato de data correto! Ex: (2023-09-16).");
    }
  };
}


// Botao auto scroll down home

const botao = document.querySelector('#botao-arrow')

botao.addEventListener('click', () => {
  window.scroll({top: window.innerHeight, behavior: "smooth"})
  botao.style.display = 'none'
});











// VOU UTILIZAR SCRIPTS  ABAIXO AINDA!!!!

// ------------------------------------------------------------------------------------>

// FADE DE ROLAGEM

/* let sections = document.querySelectorAll("#principal");
window.onscroll = function fadeIn() {
    sections.forEach(section => {
        let sectionSize = section.getBoundingClientRect();
        let bottomPart = sectionSize.bottom;
        if (window.scrollY >= bottomPart) {
            section.style.opacity = "1";
            section.style.transform = "translateX(0)";
            section.style.transition = "1s ease-in-out";
        } else {
            section.style.opacity = "0";
            section.style.transform = "translateX(-10px)";
            section.style.transition = "1s ease-in-out";
        }
    });
} */


// --------------------------------------------------------------------------------->

// outra tentativa de scroll

// $(function() {
/*  $('.scroll-down').click (function() {
    $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
    return false;
  });
 }); */

// ---------------------------------------------------------------------------------->

// smooth

/*
const body = document.body,
      jsScroll = document.getElementsByClassName('principal')[0],
      height = jsScroll.getBoundingClientRect().height - 1,
      speed = 0.05

var offset = 0

body.style.height = Math.floor(height) + "px"

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed

    var scroll = "translateY(-" + offset + "px) translateZ(0)"
    jsScroll.style.transform = scroll
    
    raf = requestAnimationFrame(smoothScroll)
}
smoothScroll()

*/








