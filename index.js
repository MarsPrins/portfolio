// function reveal() {
//     const reveal = document.querySelectorAll(".reveal");
//     const firstImage = document.querySelectorAll(".firstImage")
//     const firstText = document.querySelectorAll("firstText")

//     for (var i = 0; i < reveal.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveal[i].getBoundingClientRect().top;
//       var elementVisible = 200;
  
//       if (elementTop < windowHeight - elementVisible) {
//         aboutMe[i].classList.add("active");
//       } else {
//         aboutMe[i].classList.remove("active");
//       }

//       // var FMelementVisible = 350;
//       // if (elementTop < windowHeight - FMelementVisible) {
//       //   firstImage[i].classList.add("active");
//       //   firstText[i].classList.add("active")
//       // } else {
//       //   firstImage[i].classList.remove("active");
//       //   firstText[i].classList.remove("active")
//       //   }
//     }
//   }
  
//   window.addEventListener("scroll", reveal);


function myFunction(x) {
  x.classList.toggle('change');
  document.getElementById('sidebar').classList.toggle('active');
}
 
var lastKnownScrollPosition = 0;
let ticking = false;

var landTitle = document.getElementsByClassName("landTitle");
var landNav = document.getElementsByClassName("landNav");
var header = document.getElementsByClassName("header");
var sidebar = document.getElementById("sidebar")
var firstTitle = document.getElementsByClassName("firstPartTitle")
var firstText = document.getElementsByClassName("firstPartText")
var firstFiverrTop = document.getElementsByClassName("firstPartFiverrTop")
var firstFiverrBottom = document.getElementsByClassName("firstPartFiverrBottom")

function doSomething() {
  // console.log(lastKnownScrollPosition)
  // console.log(ticking)

  if (!sidebar.classList.contains('active')) {
    // title & nav
    if (lastKnownScrollPosition > 600) {
      landTitle[0].classList.add("active");
      landNav[0].classList.add("active");
      header[0].classList.add("active");
    } else {
      landTitle[0].classList.remove("active");
      landNav[0].classList.remove("active");
      header[0].classList.remove("active");
    }
  }

  if (lastKnownScrollPosition > 450) {
    firstTitle[0].classList.add("active");
    firstFiverrTop[0].classList.add("active");
    firstFiverrBottom[0].classList.add("active");
  } else {
    firstTitle[0].classList.remove("active");
    firstFiverrTop[0].classList.remove("active");
    firstFiverrBottom[0].classList.remove("active");
  }  
  if (lastKnownScrollPosition > 600) {
    firstText[0].classList.add("active");
  } else {
    firstText[0].classList.remove("active");
  }
}

document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
});

var fiverrTopH2Contain = document.getElementsByClassName("fiverrTopH2Contain");
var fiverrTopH2 = document.getElementsByClassName("fiverrTopH2");
var fiverrTopP = document.getElementsByClassName("fiverrTopP");
var briefcase = document.getElementsByClassName("fa-briefcase");

setInterval(() => {
  if (document.querySelector(".firstPartFiverrTop:hover") != null) {
      fiverrTopH2Contain[0].classList.add("hovered");
      fiverrTopH2[0].classList.add("hovered");
      fiverrTopP[0].classList.add("hovered")
      briefcase[0].classList.add("hovered")
  } else {
    fiverrTopH2Contain[0].classList.remove("hovered");
    fiverrTopH2[0].classList.remove("hovered");
    fiverrTopP[0].classList.remove("hovered")
    briefcase[0].classList.remove("hovered")
  }
}, 10);