// Get all elements with the class "word"
let words = document.querySelectorAll(".word");

// Iterate through each word element
words.forEach((word) => {
  // Split the text content of the word into an array of letters
  let letters = word.textContent.split("");
  // Clear the text content of the word element
  word.textContent = "";

  // Iterate through each letter and create a <span> element for it
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter"; // Corrected the class name to "letter"
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1; // Corrected the variable name to "maxWordIndex"
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  // Iterate through letters of the current word and animate them out
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";

  // Iterate through letters of the next word and animate them in
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 18);
  });

  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);


// circle Skill section ////////////////////////////////////////////////////////////////

const circles = document.querySelectorAll('.circle');
circles.forEach(elem => {
  var dots = elem.getAttribute("data-dots");
  var marked = elem.getAttribute("data-percent");
  var percent = Math.floor((dots * marked) / 100);
  var points = "";
  var rotate = 360 / dots;

  for (let i = 0; i < dots; i++) {
    points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
  }
  elem.innerHTML = points;

   const pointsMarKed = elem.querySelectorAll('.points');
   for(let i = 0; i<percent; i++){
    pointsMarKed[i].classList.add('marked')
   }
});


// mix it up  portfolio section/////////////////////////

var mixer = mixitup('.portfolio-gallery');

// Active menu////////////////////////////////////////////////////

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
  let len = section.length;
  while(--len && window.scrollY + 97 < section[len].offsetTop){}
  menuLi.forEach(sec => sec.classList.remove("active"));
  menuLi[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll",activeMenu);


// Sticky navbar////////////////////////////////////////////////////

const header = document .querySelector("header");
window.addEventListener("scroll",function(){
  header.classList.toggle("sticky".window.scrollY > 50)
})  

// toggle icon navbar////////////////////////////////////////////////////

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navlist.classList.toggle("open");
}

window.onscroll = () => {
  menuIcon.classList.remove('bx-x');
  navlist.classList.remove("open");
}


// parallax////////////////////////////////////////////////

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if (entry.isIntersecting){
      entry.target.classList.add("show-items");
    }else{
      entry.target.classList.remove("show-items");
    }
  });
});


const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));


