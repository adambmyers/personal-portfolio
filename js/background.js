// start header nav
run();

function run() {
  bindNavButtonToNavList();
}

function toggleHide(element) {
  element.classList.toggle('hide');
}

function bindNavButtonToNavList() {
  const navButton = document.querySelector('.nav__button');
  
  navButton.addEventListener('click', function() {
    const navList = document.querySelector('.nav__list');
    toggleHide(navList);
  });
}
// end header nav

var GWmodal = document.querySelector(".modal-display-box-GW");
var GWtrigger = document.querySelector(".GWbutton");
var CBmodal = document.querySelector(".modal-display-box-CB");
var CBtrigger = document.querySelector(".CBbutton");
var KRmodal = document.querySelector(".modal-display-box-KR");
var KRtrigger = document.querySelector(".KRbutton");
var MSmodal = document.querySelector(".modal-display-box-MS");
var MStrigger = document.querySelector(".MSbutton");
var closeButton = document.querySelector(".close-button");
const modalDisplayBoxGw = document.querySelector('.modal-display-box-GW')
const modalDisplayBoxCb = document.querySelector('.modal-display-box-CB')
const modalDisplayBoxKr = document.querySelector('.modal-display-box-KR')
const modalDisplayBoxMs = document.querySelector('.modal-display-box-MS')

function toggleModalGW() {
    GWmodal.classList.toggle("show-GWmodal");
}
function toggleModalCB() { 
    CBmodal.classList.toggle("show-CBmodal");
}   
function toggleModalKR() {
    KRmodal.classList.toggle("show-KRmodal");
}
function toggleModalMS() {
    MSmodal.classList.toggle("show-MSmodal");
}

function windowOnClick(event) {
    if (event.target === GWmodal) {
       toggleModalGW()
    } else if 
        (event.target === CBmodal) {
        toggleModalCB();
    } else if
        (event.target === KRmodal) {
        toggleModalKR();
    } else {
        toggleModalMS();    
    }   
    }

GWtrigger.addEventListener("click", toggleModalGW);
modalDisplayBoxGw.addEventListener('click', toggleModalGW)

CBtrigger.addEventListener("click", toggleModalCB);
modalDisplayBoxCb.addEventListener('click', toggleModalCB)

KRtrigger.addEventListener("click", toggleModalKR);
modalDisplayBoxKr.addEventListener('click', toggleModalKR)

MStrigger.addEventListener("click", toggleModalMS);
modalDisplayBoxMs.addEventListener('click', toggleModalMS)