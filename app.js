function showSidebar(){
    let sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    let sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// About Profile Pic

const $card = document.querySelector('.about-pic');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  $card.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance)* 2}deg
    )
  `;
  
  $card.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width/2}px
      ${center.y * 2 + bounds.height/2}px,
    //   #ffffff55,
    //   #0000000f
    )
  `;
}

$card.addEventListener('mouseenter', () => {
  bounds = $card.getBoundingClientRect();
  document.addEventListener('mousemove', rotateToMouse);
});

$card.addEventListener('mouseleave', () => {
  document.removeEventListener('mousemove', rotateToMouse);
  $card.style.transform = '';
  $card.style.background = '';
});

// Resume Modal
function showResume() {
  let showResume = document.querySelector('.resume-modal')
  showResume.style.display = 'block'
  let sidebar = document.querySelector(".sidebar")
  sidebar.style.display = 'none'
}

function hideResume() {
  let hideResume = document.querySelector('.resume-modal')
  hideResume.style.display = 'none'
}

// Loader Spinner
setTimeout(function(){
  document.querySelector(".loader").style.display = "none"; 
 }, 1200);
 setTimeout(function(){
  document.getElementById('spinner').style.display = "none"; 
 }, 1200);

//  Light & Dark Mode
function darkMode() {
  let lightMode = document.querySelector('.lightMode')
  lightMode.style.display = 'Block'
  let darkMode = document.querySelector('.darkMode')
  darkMode.style.display = 'none'

  let lightModeChange = document.querySelector('.lightMode-change')
  lightModeChange.style.display = 'Block'
  let darkModeChange = document.querySelector('.darkMode-change')
  darkModeChange.style.display = 'none'

  let bodyTheme = document.getElementById('theme')
  bodyTheme.style.backgroundColor = "black";

  let aboutTheme = document.getElementById('about-container')
  aboutTheme.style.backgroundColor = '#3a3434'
  let introductionText = document.querySelector('.introduction-my-self')
  introductionText.style.color = 'white'
}

function lightMode() {
  let lightMode = document.querySelector('.lightMode')
  lightMode.style.display = 'none'
  let darkMode = document.querySelector('.darkMode')
  darkMode.style.display = 'block'

  let lightModeChange = document.querySelector('.lightMode-change')
  lightModeChange.style.display = 'none'
  let darkModeChange = document.querySelector('.darkMode-change')
  darkModeChange.style.display = 'block'

  let bodyTheme = document.getElementById('theme')
  bodyTheme.style.backgroundColor = "#f3ecec";

  let aboutTheme = document.getElementById('about-container')
  aboutTheme.style.backgroundColor = '#ebe0e0'
  let introductionText = document.querySelector('.introduction-my-self')
  introductionText.style.color = 'black'
}

//Project
let projectContent = document.getElementById('project-container')
let aboutContent = document.getElementById('about-container')
let textContent = document.getElementById('text-animated-container')
let hideSideSocial = document.getElementById('side-social-icon')

function showProject() {
  projectContent.style.display = 'block'
  aboutContent.style.display = 'none'
  textContent.style.display = 'none'

  let sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}

// About
function showAbout() {
  projectContent.style.display = 'none'
  aboutContent.style.display = 'block'
  textContent.style.display = 'block'

  let sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}
