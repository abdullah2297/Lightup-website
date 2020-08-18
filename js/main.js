
/* Start work with jquery */
$(function(){
    'use strict';

    /* This Code Belong To The Section (sec-left) In Header */
if($('header .sec-right').length){

      $('header .sec-right').slick({

        prevArrow: false,

        nextArrow: false,

        autoplay: true,

        spead: 50,

        pauseOnFocus: false,

        dots: true,

        infinite: true,

        fade: true,

        cssEase: 'linear',

        rtl: true

      });
}
    /* Slider Our Clients in About page  */


if($('.about-slider').length){

    $('.about-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows:false,
        autoplay:1,
        autoplayspeed:500,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      });
    
}

    /* to top button */ 


    // show when scroll top > 1500px
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1000) {
            $('.to-top').fadeIn();
        }else {
            $('.to-top').fadeOut();
        };
    });


    // when click
    $('.to-top').on('click',function () {
        $('html,body').animate({
            scrollTop:0
        },700);
    });

    /* End To top button */

    /* Start Counter */
    var coun = $('#counter');
    var a = 0;
    $(window).scroll(function() {
        if (coun.length) {
            var oTop = $('#counter').offset().top - window.innerHeight;
            if (a == 0 && $(window).scrollTop() > oTop) {
                $('.counter-value').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                    },
        
                    {
        
                    duration: 2000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(this.countNum);
                    }
        
                    });
                });
                a = 1;
            }
        
        }


    });

    /* End Counter */


/* Start vedio About Us */

var vid = document.getElementById("My_Video");
var pauseButton = document.getElementById("My_Btn");

if (window.matchMedia('(prefers-reduced-motion)').matches) {
    vid.removeAttribute("autoplay");
    vid.pause();
    pauseButton.innerHTML = "Paused";
}

function vidFade() {
  vid.classList.add("stopfade");
}

vid.addEventListener('ended', function()
{
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
}); 

pauseButton.addEventListener("click", function() {
  vid.classList.toggle("stopfade");
  if (vid.paused) {
    vid.play();
    pauseButton.innerHTML = "Stop Video";
  } else {
    vid.pause();
    pauseButton.innerHTML = "Play Video";
  }
})

/* End vedio About Us */

    // button .click to send me to next section in About US
    $('.nav-about .nav-link,.agency a').click(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop:$('#' + $(this).data('scroll')).offset().top -140
        },500)
    });


});

/* End jequery customize */


/* start up-bar */


var account = document.getElementById('myAcc'),
    sign = document.getElementsByClassName('sign-up');

account.addEventListener('click',showSign);


function showSign() {
    if (sign[0].style.display == 'block') {
        return sign[0].style.display = 'none',account.style.color = 'rgb(243, 211, 228)'
    }else {
        return sign[0].style.display = 'block',account.style.color = '#3B1A52'
    }   
}

document.onclick = function() {
    sign[0].style.display = 'none'
    account.style.color = 'rgb(243, 211, 228)'
}
sign[0].onclick = function(e) {
    e.stopPropagation();
}
account.onclick = function(e) {
    e.stopPropagation();
}
document.onkeyup = function(e){
    if (e.keyCode == 27){
        sign[0].style.display = 'none'
        account.style.color = 'rgb(243, 211, 228)'    
    }
}

/* End up bar */



/* Start nav bar */

// Scroll

var upBar = document.getElementsByClassName('up-bar'),
    myNav = document.getElementById('myNav'),
    logo = document.getElementById('logo-src')

window.addEventListener('scroll',targetNav)
function targetNav() {
    if (window.pageYOffset > 60){
        return myNav.classList.add('scroll-nav'),upBar[0].style.marginTop = '-60px',logo.src = 'images/logos.png';
    }else {
        return myNav.classList.remove('scroll-nav'),upBar[0].style.marginTop = '0',logo.src = 'images/logo.png';
    }
}

// library in nav bar 

var library = document.getElementById('library'),
    libraryMenu = document.getElementById('library-menu');
    library.addEventListener('click',changeColor);
    library.addEventListener('blur',changeColor);
    function changeColor() {
        if (libraryMenu.classList.contains('show')) {
            library.style.color = '#fff'
        }else {
            library.style.color = '#3B1A52'
        }   
    }
    document.onkeydown = function(e) {
        if (e.keyCode == 27) {
            return library.style.color = '#fff',
            libraryMenu.classList.remove('show');
        }
    }
    
/// Search 

var search = document.getElementById('search'),
    searchWindow = document.getElementById('search-window'),
    close = document.getElementById('close-search');

search.addEventListener('click',showSearch)
close.addEventListener('click',closeSearch)
function showSearch() {
    return searchWindow.style.transform = 'translateY(0)',
    close.style.transform = 'translateY(0)'
}

// handle close foe search

function closeSearch() {
    return searchWindow.style.transform = 'translateY(-130%)' ,close.style.transform = 'translateY(-130%)'
}

document.onkeyup = function(e) {
    if (e.keyCode === 27) {
        return searchWindow.style.transform = 'translateY(-130%)',close.style.transform = 'translateY(-130%)'
    }
}


// handle toggler button in nav bar 

var toggler = document.getElementsByClassName('navbar-toggler')[0];
if(toggler){
    toggler.addEventListener('click',fixed);
}
function fixed() {
        return myNav.classList.add('scroll-nav'),this.children[0].classList.toggle('fa-times');
}

// validate log in form in up bar 

function formValidate(){
    var user = document.forms.logForm.user.value,
        pass = document.forms.logForm.password.value;
        if (user == ''){
            document.forms['logForm']['user'].style.border = '2px solid #F00'
            return false
        }else if (pass.length < 5){
            document.forms['logForm']['password'].style.border = '2px solid #F00'
            return false;
        }else {
            return true;
        }
}
/* End nav bar */ 


// fixed nav in about page

if (true){
    var nav_about = document.getElementById('nav-about');
}

const off = nav_about.offsetTop;
window.addEventListener('scroll',navAboutFixed);
function navAboutFixed() {
    if (true){
        if (window.pageYOffset >= off-60 - (nav_about.offsetHeight)){
            nav_about.classList.add('fixed')
        }else{
            nav_about.classList.remove('fixed')
        }
    }
}