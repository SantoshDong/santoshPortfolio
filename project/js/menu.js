let menuBtn = document.querySelector('.ham-btn');
let menuNavbar = document.querySelector('.navbar');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add('close');
        menuNavbar.classList.add('show');
        menuNavbar.classList.remove('hide');
        showMenu = true;
    }else{
        menuNavbar.classList.add('hide');
        menuBtn.classList.remove('close');
        menuNavbar.classList.remove('show');
        showMenu = false;
    }
}

window.onscroll = function() {
    myFunction();
    scrollFunction();
};

function myFunction() {
    // alert("hero");
    var item1 = document.querySelector(".__san_profile_ls");
    
    // console.log(profile2.offsetTop);
    if (window.pageYOffset  >= 750) {
        item1.classList.add("sticky_sic")
      } 
    if(window.pageYOffset  >= 2694) {
        item1.classList.remove("sticky_sic");
      }
}

var goup = document.querySelector('#sl-go-up');
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      goup.style.display = "block";
    } else {
      goup.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }