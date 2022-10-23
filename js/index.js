// Scroll to top on refresh start
if(history.scrollRestoration) {
    history.scrollRestoration = "manual";
}else{
    onbeforeunload = () => {
        scrollTo(0,0);
    };
}
// Scroll to top on refresh end

const menuPage = document.querySelector('#page-menu');

if(menuPage)
{

    console.log('Kør alt til menusiden')
   
}

// Navbar color change end

// Input tel only use numbers start
function isInputNumber(evt) {
    let ch = String.fromCharCode(evt.which);

    if(!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }
}
// Input tel only use numbers end

// Open modal start
const state = false

function onload() {
    const modal = document.getElementById('mainModal');
    if(state == false){
        modal.style.display = 'none';
    }
}

function openModal() {
    const modal = document.getElementById('mainModal');

    'none' === modal.style.display
    ? modal.style.display = 'block'
    : modal.style.display = 'none'; 
}
// Open modal end

// Scroll to top Btn start
let topButton = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 125) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Scroll to top Btn end

/* 

    Tilføjer Event Listners

*/
// Navbar color change start
window.addEventListener("scroll", () => {
    var nav = document.querySelector("#subNav");
    nav.classList.toggle("sticky", window.scrollY > 0);
})