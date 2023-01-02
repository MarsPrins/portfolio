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
  
    if (lastKnownScrollPosition > 550) {
      firstTitle[0].classList.add("active");
    } else {
      firstTitle[0].classList.remove("active");
    }  
    if (lastKnownScrollPosition > 980) {
      firstText[0].classList.add("active");
    } else {
      firstText[0].classList.remove("active");
    }
    if (lastKnownScrollPosition > 1250) {
      firstFiverrTop[0].classList.add("active");
    } else {
      firstFiverrTop[0].classList.remove("active");
    } 
    if (lastKnownScrollPosition > 1683) {
      document.querySelector('.fiverrTopP').classList.add('hovered')
      document.querySelector('.fiverrTopH2Contain').classList.add('hovered')
      document.querySelector('.fiverrTopH2').classList.add('hovered')
      document.querySelector('.fa-paper-plane').classList.add('hovered')
    } else {
      document.querySelector('.fiverrTopH2').classList.remove('hovered')
      document.querySelector('.fiverrTopH2Contain').classList.remove('hovered')
      document.querySelector('.fa-paper-plane').classList.remove('hovered')
      document.querySelector('.fiverrTopP').classList.remove('hovered')
    } 
    if (lastKnownScrollPosition > 1750) {
      firstFiverrBottom[0].classList.add("active");
    } else {
      firstFiverrBottom[0].classList.remove("active");
    }
    if (lastKnownScrollPosition > 2100) {
      document.querySelector('.myWork').classList.add('active')
    } else {
      document.querySelector('.myWork').classList.remove('active')
    }
    if (lastKnownScrollPosition > 2300) {
      document.querySelector('.work1Pic').classList.add('active')
    } else if(lastKnownScrollPosition < 2100){
      document.querySelector('.work1Pic').classList.remove('active')
    }
    if (lastKnownScrollPosition > 2500) {
      document.querySelector('.work1Text').classList.add('active')
    } else if(lastKnownScrollPosition < 2100){
      document.querySelector('.work1Text').classList.remove('active')
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
  
    doSomething()
  }, 10);
  
  setInterval(() => {
    if (screen.width > 500) {
        window.location = "../";
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
      landNav1: 'Wat Wij Voor U Zullen Doen',
      landNav2: 'Ons Werk',
      landNav3: 'Persoonlijke Reviews',
      landNav5: 'Pakketten',
      firstPartTextPara: 'Wij zullen u helpen met uw website ideeën en zal ze uitvoeren als het mogelijk is! <br/> Wij zullen voor u en uw bedrijf een website maken vanaf maar <strong class="price">€9</strong><strong>.99!</strong>',
      fiverrTopH2: ' Contact <br/><var>Bericht <br/>Benader <br/>Werk Met </var>',
      fiverrTopParagraph: "Contact ons over wat u van plan bent en dan zullen we u zo snel mogelijk terug mailen over <strong>wat wij voor u kunnen beteken!</strong> Weet u nog niet zeker wat u gedaan wil hebben?<strong> Wij helpen u!</strong>",
      fiverrBottomPara: 'Alternatief, Kunt u ons berichten op <a href="https://www.fiverr.com/share/EormkD" target="_blank">Fiverr</a>',
      myWork: 'Ons Werk',
      workParagraph1: 'Een website voor de startende producer <strong>Livian Beats</strong> voor hem om zijn muziek te uploaden en te verkopen voor het publiek',
      reviewText1: 'WebCheek heeft een prachtige website gemaakt voor mij die ik nodig had voor mijn business. Nu kan ik mijn product verkopen vanaf mijn eigen website in plaats van van een dere partij bedrijf. Zij waren goed om mee te werken en blij om mij te helpen met nieuwe ideeën (het was ook fijn dat zij mijn moeder taal spreken, nederlands)',
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
      li19: "<i class='fa-solid fa-check'></i>Anything you want<b class='mark'>*<span id='tooltip2' class='tooltip2'>As long as it's to our expertise</span></b>",
      li20: '<i class="fa-solid fa-check"></i>Alles van de andere pakketten',
      basicPack: 'Basis Pakket',
      standardPack: 'Standaard Pakket',
      customPack: 'Custom Pakket',
      fifthPartHead: 'Pakketten',
      deliveryTime: 'Aflever tijd kan verschillen met de moeilijkheid van de taak',
      messageLabel: 'Wat heb je van ons nodig (Vertel in detail)',
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
  
  openDeal()
  
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
  
  // var countDownDate = new Date().getTime() + 1000 * 60 * 60;
  // // Update the count down every 1 second
  // var x = setInterval(function() {
  
  //   // Get today's date and time
  //   var now = new Date().getTime();
  
  //   // Find the distance between now and the count down date
  //   var distance = countDownDate - now;
  
  //   // Time calculations for days, hours, minutes and seconds
  //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  //   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  //   // Display the result in the element with id="demo"
  //   document.getElementById("discountHead").innerHTML = hours + "h "
  //   + minutes + "m " + seconds + "s ";
  
  //   // If the count down is finished, write some text
  //   if (distance <= 0) {
  //     clearInterval(x);
  //     console.log('done')
  //   }
  // }, 1000);
  
  
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