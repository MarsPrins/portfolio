

// jQuery

(function($) {
	$.fn.extend({
		jParallax: function(opt) {
			var defaults = { moveFactor: 5, targetContainer: 'body' },
				o = $.extend(defaults, opt);
			return this.each(function() {
				var background = $(this);
				$(o.targetContainer).on('mousemove', function(e){
					mouseX = e.pageX;
					mouseY = e.pageY;
					windowWidth = $(window).width();
					windowHeight = $(window).height();
					percentX = (0-((mouseX/windowWidth)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
					percentY = (0-((mouseY/windowHeight)*o.moveFactor) - (o.moveFactor/2)+o.moveFactor)/2;
					background[0].style.transform = "translate("+percentX+"%,"+percentY+"%)";
				});
			});
		}					
	});
}(jQuery));


$(".blueBG").jParallax({ moveFactor: -3, targetContainer: ".landingPart" });
$(".cloudContainer").jParallax({ moveFactor: 3, targetContainer: ".landingPart" });
$(".cloud").jParallax({ moveFactor: 8, targetContainer: ".landingPart" });
$(".cloud2").jParallax({ moveFactor: 13, targetContainer: ".landingPart" });
$(".cloud3").jParallax({ moveFactor: 19, targetContainer: ".landingPart" });
$(".cloud4").jParallax({ moveFactor: 25, targetContainer: ".landingPart" });

$(".mouse-background").jParallax({ moveFactor: -5, targetContainer: ".landingPart" });
$(".mouse-middle").jParallax({ moveFactor: -10, targetContainer: ".landingPart" });
$(".mouse-for").jParallax({ moveFactor: -15, targetContainer: ".landingPart" });

// end of jQuery


function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

const faviconTag = document.getElementById("faviconTag");
const isDark = window.matchMedia("(prefers-color-scheme: dark)");

const changeFavicon = () => {
  if (isDark.matches) faviconTag.href = "img/favicon.png";
  else faviconTag.href = "img/favicon-light.png";
};

changeFavicon();

setInterval(changeFavicon, 1000);

var submitted = false;


if (localStorage.getItem('d1u2t3c4h5?') == 'y1e2s') {
  location.hash = '#ned'
  localStorage.setItem('d1u2t3c4h5?', 'n1o')
}


var togglebtn = document.querySelector('.toggle-btn');
function headnav1() {
  document.querySelector('.firstPart').scrollIntoView()
  togglebtn.classList.toggle('change');
  document.getElementById('sidebar').classList.toggle('active');
}
function headnav2() {
  document.querySelector('.secondPart').scrollIntoView()
  togglebtn.classList.toggle('change');
  document.getElementById('sidebar').classList.toggle('active');
}
function headnav3() {
  document.querySelector('.thirdPart').scrollIntoView()
  togglebtn.classList.toggle('change');
  document.getElementById('sidebar').classList.toggle('active');
}
function headnav4() {
  document.querySelector('.fourthPart').scrollIntoView()
  togglebtn.classList.toggle('change');
  document.getElementById('sidebar').classList.toggle('active');
}
function headnav5() {
  document.querySelector('.fifthPart').scrollIntoView()
  togglebtn.classList.toggle('change');
  document.getElementById('sidebar').classList.toggle('active');
}

function landNavv1() {
  document.querySelector('.firstPart').scrollIntoView()
}
function landNavv2() {
  document.querySelector('.secondPart').scrollIntoView()
}
function landNavv3() {
  document.querySelector('.thirdPart').scrollIntoView()
}
function landNavv4() {
  document.querySelector('.fourthPart').scrollIntoView()
}
function landNavv5() {
  document.querySelector('.fifthPart').scrollIntoView()
}


function english() {
  delay(200).then(() => 
  localStorage.setItem('wanted-language', 'english'))
}

function nederlands() {
  delay(200).then(() => 
  localStorage.setItem('wanted-language', 'nederlands'))
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


setInterval(() => {
  if (document.querySelector(".firstPartFiverrTop:hover") != null) {
      fiverrTopH2Contain[0].classList.add("hovered");
      fiverrH2[0].classList.add("hovered");
      fiverrTopP[0].classList.add("hovered");
      paperPlane[0].classList.add("hovered");
  } else {
    fiverrTopH2Contain[0].classList.remove("hovered");
    fiverrH2[0].classList.remove("hovered");
    fiverrTopP[0].classList.remove("hovered");
    paperPlane[0].classList.remove("hovered");
  }

  var para = document.querySelector('#firstPartTextPara');
  var h = document.querySelector('#firstPartTextHead');
  var firstText = document.querySelector('.firstPartText');

  if (document.querySelector(".firstPartText:hover") != null) {
    para.classList.add('hovered')
    h.classList.add('hovered')
    firstText.classList.add('hovered')
  } else {
    para.classList.remove('hovered')
    h.classList.remove('hovered')
    firstText.classList.remove('hovered')
  }
  doSomething()

}, 10);


setInterval(() => {
  if (screen.width < 500) {
    window.location = "phone";
  }
}, 1000);

function contact() {
  document.getElementById('fourthPart').scrollIntoView();
}

function fiverr() {
  window.open('https://www.fiverr.com/share/EormkD', '_blank')
}


var dataReload = document.querySelectorAll("[data-reload]");

var language = {
  ned: {
    landNav1: 'Wat Wij Voor U Gaan Doen',
    landNav2: 'Ons Werk',
    landNav3: 'Persoonlijke Reviews',
    landNav5: 'Pakketten',
    firstPartTextPara: 'Wij gaan u helpen met uw website ideeën en zal ze uitvoeren als het mogelijk is! <br/> Wij gaan voor u en uw bedrijf een website maken vanaf maar <strong class="price">€9</strong><small class="raleway">.99!</small>',
    fiverrTopH2: ' Contact <br/><var>Bericht <br/>Benader <br/>Werk Met </var>',
    fiverrTopParagraph: "Contact ons over wat u van plan bent en dan zullen we u zo snel mogelijk terug mailen over <strong>wat wij voor u kunnen beteken!</strong> Weet u nog niet zeker wat u gedaan wil hebben?<strong> Wij helpen u!</strong>",
    fiverrBottomPara: 'Alternatief, Kunt u ons berichten op <a href="https://www.fiverr.com/share/EormkD" target="_blank">Fiverr</a>',
    myWork: 'Ons Werk',
    workParagraph1: 'Een website voor de startende producer <strong>Livian Beats</strong> voor hem om zijn muziek te uploaden en te verkopen voor het publiek',
    reviewText1: 'WebCheek heeft een prachtige website gemaakt voor mij die ik nodig had voor mijn business. Nu kan ik mijn product verkopen vanaf mijn eigen website in plaats van van een derde partij bedrijf. Zij waren goed om mee te werken en blij om mij te helpen met nieuwe ideeën (het was ook fijn dat zij mijn moeder taal spreken, nederlands)',
    reviewText2: 'Ik had een idee voor een website maar toen bedacht ik me dat ik helemaal geen website kan maken. Dus ik nam contact op met WebCheek om mijn idee uit te voeren, zij hielpen mij met de puntjes op de i en leverde een mooie en goed werkende website af. Ik ben heel blij met me uitkomst',
    fullName: 'Hele naam...',
    text: 'Wat Heb Je Nodig...',
    discountCode: 'Kortings Code...',
    submit: 'Opsturen',
    dealHead: '<strong class="sale">30% KORTING<b class="mark">* <span class="markSpan">10% korting vanaf €15, 30% korting vanaf €30 op uw eerste bestelling</span></b></strong>',
    dealP: 'Wanneer u de code hieronder gebruikt...',
    dealButt: 'Krijg mijn 30% KORTING!',
    dealDenie: 'Nee bedankt, ik betaal liever de hele prijs',
    discountHead: 'KRIJG TOT 30% KORTING<b class="mark">* <span class="markSpan">10% off from €15, 30% off from €30 op uw eerste bestelling</span></b> met code <b class="discountCode">XMAS</b>',
    li1: '<i class="fa-solid fa-yellow fa-check"></i>1 pagina',
    li2: '<i class="fa-solid fa-check"></i>Goedkoop',
    li3: '<i class="fa-solid bad fa-x"></i>Niet Interactief',
    li4: '<i class="fa-solid bad fa-x"></i>Geen custom content',
    li5: '<i class="fa-solid bad fa-x"></i>Niet responsive',
    li6: "<i class='fa-solid fa-yellow fa-check'></i>3 pagina's",
    li7: '<i class="fa-solid fa-check"></i>Interactief',
    li8: '<i class="fa-solid fa-check"></i>Custom content',
    li9: '<i class="fa-solid fa-yellow fa-check"></i>Responsive',
    li10: '<i class="fa-solid fa-yellow fa-check"></i>Data lokaal opslaan',
    li11: '<i class="fa-solid bad fa-x"></i>Geen SEO',
    li17: "<i class='fa-solid fa-check'></i>Oneindige pagina's",
    li18: '<i class="fa-solid fa-check"></i>Domein + Hosting',
    li19: "<i class='fa-solid fa-check'></i>Alles wat u wilt<b class='mark'>*<span id='tooltip2' class='tooltip2'>As long as it's to our expertise</span></b>",
    li20: '<i class="fa-solid fa-check"></i>Alles van de andere pakketten',
    basicPack: 'Basis Pakket',
    standardPack: 'Standaard Pakket',
    customPack: 'Custom Pakket',
    fifthPartHead: 'Pakketten',
    deliveryTime: 'Aflever tijd kan verschillen met de moeilijkheid van de taak',
    messageLabel: 'Wat heb je van ons nodig (Vertel in detaill)',
    tooltip: 'Prijs ligt aan de taak',
    tooltip2: 'Zolang het in ons skillvak valt',
  }
};

if (window.location.hash) {
  if (window.location.hash === "#ned") {
    nederlands()
    landNav1.textContent = language.ned.landNav1;
    headNav1.textContent = language.ned.landNav1;
    landNav2.textContent = language.ned.landNav2;
    headNav2.textContent = language.ned.landNav2;
    landNav3.textContent = language.ned.landNav3;
    headNav3.textContent = language.ned.landNav3;
    headNav5.textContent = language.ned.landNav5;
    landNav5.textContent = language.ned.landNav5;
    firstPartTextPara.innerHTML = language.ned.firstPartTextPara;
    firstTitle1.textContent = language.ned.landNav1 + ";";
    firstTitle2.textContent = language.ned.landNav1 + ";";
    fiverrTopH2.innerHTML = language.ned.fiverrTopH2;
    fiverrTopParagraph.innerHTML = language.ned.fiverrTopParagraph;
    fiverrTopParagraph.innerHTML = language.ned.fiverrTopParagraph;
    fiverrBottomPara.innerHTML = language.ned.fiverrBottomPara;
    myWork.textContent = language.ned.myWork;
    workParagraph1.innerHTML = language.ned.workParagraph1;
    reviewText1.textContent = language.ned.reviewText1;
    reviewText2.textContent = language.ned.reviewText2;
    fullName.placeholder = language.ned.fullName;
    text.placeholder = language.ned.text;
    discountCode.placeholder = language.ned.discountCode;
    submit.value = language.ned.submit;
    dealHead.innerHTML = language.ned.dealHead;
    dealP.textContent = language.ned.dealP;
    dealButt.innerText = language.ned.dealButt;
    dealDenie.textContent = language.ned.dealDenie;
    discountHead.innerHTML = language.ned.discountHead;
    li1.innerHTML = language.ned.li1;
    li2.innerHTML = language.ned.li2;
    li3.innerHTML = language.ned.li3;
    li4.innerHTML = language.ned.li4;
    li5.innerHTML = language.ned.li5;
    li6.innerHTML = language.ned.li6;
    li7.innerHTML = language.ned.li7;
    li8.innerHTML = language.ned.li8;
    li9.innerHTML = language.ned.li9;
    li10.innerHTML = language.ned.li10;
    li11.innerHTML = language.ned.li11;
    li17.innerHTML = language.ned.li17;
    li18.innerHTML = language.ned.li18;
    li19.innerHTML = language.ned.li19;
    li20.innerHTML = language.ned.li20;
    basicPackage.textContent = language.ned.basicPack;
    standardPackage.textContent = language.ned.standardPack;
    customPackage.textContent = language.ned.customPack;
    fifthPartHead.textContent = language.ned.fifthPartHead;
    deliveryTime.textContent = language.ned.deliveryTime;
    MessageLabel.textContent = language.ned.messageLabel;
    tooltip.textContent = language.ned.tooltip;
    tooltip2.textContent = language.ned.tooltip2;
  }
  if (window.location.hash === "#eng") {
    english()
  } 
}

var faX = document.querySelector('.fa-x');
var faax = document.querySelector('.fax');
var dealBG = document.querySelector('.dealBG');
var discountSmall = document.querySelector('.discountSmall');
var dealButton = document.querySelector('.dealButton');
var fourthPart = document.querySelector('#fourthPart');
var landPart = document.querySelector('.landingPart');
var denieButt = document.querySelector('.dealDenie');

faX.addEventListener('click', closeDeal)
faax.addEventListener('click', closeSmallDeal)
dealButton.addEventListener('click', scrollDown)
denieButt.addEventListener('click', closeDeal)

// openDeal()

function closeDeal() {
  dealBG.classList.remove('shown')
  openSmallDeal()
}
function openDeal() {
  dealBG.classList.add('shown')
  closeSmallDeal()
}
function openSmallDeal() {
  discountSmall.classList.remove('hidden')
}
function scrollDown() {
  dealBG.classList.remove('shown')
  fourthPart.scrollIntoView()
}
function closeSmallDeal() {
  discountSmall.classList.add('hidden')
}


// if (localStorage.getItem('hour')) {
  
// }





// if (localStorage.getItem('AMOPOST') >= '1111') {
//   alert('calm down there')
//   delay(5000).then(() => 
//   localStorage.setItem('AMOPOST', '1'))
// }

// if (localStorage.getItem('AMOPOST') = '11') {
//   if (!localStorage.getItem('date')) {
//     var countDownDate = new Date().getTime() + 1000 * 60 * 10;
//     localStorage.setItem('date', countDownDate)
//   }
  
  
//   var x = setInterval(function() {
//     var downDate = Number(localStorage.getItem('date'))
  
//     var now = new Date().getTime();
  
//     var distance = downDate - now;
  
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
//     document.getElementById("discountHead").innerHTML = hours + "h "
//     + minutes + "m " + seconds + "s ";
  
  
//     if (distance <= 0) {
//       clearInterval(x);
//       alert('done')
//       localStorage.removeItem('date')
//     }
//   }, 1000);
// }


var ms = document.querySelector('.text')
var basicPackk = document.querySelector('.PC1')
var standardPackk = document.querySelector('.PC2')
var customPackk = document.querySelector('.PC4')

basicPackk.addEventListener('click', basicPack)
standardPackk.addEventListener('click', standardPack)
customPackk.addEventListener('click', customPack)


function basicPack() {
  if (window.location.hash === '#ned') {
    ms.textContent = 'Ik wil het basis pakket en...    '
    ms.scrollIntoView()
  }else {
    ms.scrollIntoView()
    ms.textContent = 'I want the basic package and...    '
  }
}
function standardPack() {
  if (window.location.hash === '#ned') {
    ms.textContent = 'Ik wil het standaard pakket en...    '
    ms.scrollIntoView()
  }else {
    ms.scrollIntoView()
    ms.textContent = 'I want the standard package and...    '
  }
}
function customPack() {
  if (window.location.hash === '#ned') {
    ms.textContent = 'Ik wil het custom pakket en...    '
    ms.scrollIntoView()
  }else {
    ms.textContent = 'I want the custom package and...    '
    ms.scrollIntoView()
  }
}

for (i = 0; i <= dataReload.length; i++) {
  dataReload[i].onclick = function() {
    delay(200).then(() => location.reload(true))
  }
}