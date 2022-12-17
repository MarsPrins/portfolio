function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}


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

doSomething

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
var fiverrH2 = document.getElementsByClassName("fiverrTopH2");
var fiverrTopP = document.getElementsByClassName("fiverrTopP");
var paperPlane = document.getElementsByClassName("fa-paper-plane");
var me = document.getElementsByClassName("fiverrTopMe")

setInterval(() => {
  if (document.querySelector(".firstPartFiverrTop:hover") != null) {
      fiverrTopH2Contain[0].classList.add("hovered");
      fiverrH2[0].classList.add("hovered");
      fiverrTopP[0].classList.add("hovered");
      paperPlane[0].classList.add("hovered");
      me[0].classList.add('hovered')
  } else {
    fiverrTopH2Contain[0].classList.remove("hovered");
    fiverrH2[0].classList.remove("hovered");
    fiverrTopP[0].classList.remove("hovered");
    paperPlane[0].classList.remove("hovered");
    me[0].classList.remove('hovered')
  }
}, 10);


function contact() {
  document.getElementById('firstPart').scrollIntoView();
}

function fiverr() {
  window.open('https://www.fiverr.com/share/EormkD', '_blank')
}


var dataReload = document.querySelectorAll("[data-reload]");

var language = {
  ned: {
    landNav1: 'Wat Ik Voor U Zal Doen',
    landNav2: 'Mijn Werk',
    landNav3: 'Kom Bij Het Team!',
    fiverrTopH2: ' Contact <br/><var>Bericht <br/>Benader <br/>Werk Met </var>',
    fiverrTopMe: 'Mij!',
    fiverrTopParagraph: "<strong>Laten we in gesprek gaan!</strong> Vertel wat u van plan bent en dan zullen we praten over <strong>wat ik voor u kan beteken!</strong> Weet u nog niet zeker wat u gedaan wil hebben?<strong> Ik help u!</strong>",
    fiverrBottomPara: 'Alternatief, Kunt u ons berichten op <a href="https://www.fiverr.com/share/EormkD" target="_blank">Fiverr</a>',
  }
};

if (window.location.hash) {
  if (window.location.hash === "#ned") {
    landNav1.textContent = language.ned.landNav1;
    landNav2.textContent = language.ned.landNav2;
    landNav3.textContent = language.ned.landNav3;
    firstTitle1.textContent = language.ned.landNav1 + ";";
    firstTitle2.textContent = language.ned.landNav1 + ";";
    fiverrTopH2.innerHTML = language.ned.fiverrTopH2;
    fiverrTopMe.textContent = language.ned.fiverrTopMe;
    fiverrTopParagraph.innerHTML = language.ned.fiverrTopParagraph;
    fiverrTopParagraph.innerHTML = language.ned.fiverrTopParagraph;
    fiverrBottomPara.innerHTML = language.ned.fiverrBottomPara;
  }
}



for (i = 0; i <= dataReload.length; i++) {
  dataReload[i].onclick = function() {
    delay(200).then(() => location.reload(true))
  }
}
