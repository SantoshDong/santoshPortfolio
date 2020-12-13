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
    var item1 = document.querySelector(".__san_project_ls");
    
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

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  $(document).ready(function(){
    $(window).scroll(function(){
       var wScroll = $(this).scrollTop();
       $('.sl-bg-computer').css({
         'transform' : 'translate(0px, '+ wScroll /6 +'%)'
       })
       $('.sl-bg-cofee').css({
        'transform' : 'translate(0px, -'+ wScroll /2.8 +'%)'
      })
      $('#sl-profile').css({
        'transform' : 'translate(0px, -'+ wScroll /6+'%)'
      })
    })
  });


  $(document).ready(function(){
    // Add smooth scrolling to all links
    $(".sl-nav-item a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });

    $("#sl-go-up").on('click',function(){
      $("html, body").animate({ 
        scrollTop: 0 
    }, "slow");
    return false;
    });
  });