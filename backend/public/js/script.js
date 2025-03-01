/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Software Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/* -- HOME -- */
sr.reveal(".featured-text-card", {});
sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".featured-text-info", { delay: 200 });
sr.reveal(".featured-text-btn", { delay: 200 });
sr.reveal(".social_icons", { delay: 200 });
sr.reveal(".featured-image", { delay: 300 });

/* -- PROJECT BOX -- */
sr.reveal(".project-box", { interval: 200 });

/* -- HEADINGS -- */
sr.reveal(".top-header", {});

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: "left",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: "right",
  distance: "80px",
  duration: 2000,
  reset: true,
});

srRight.reveal(".skills-box", { delay: 100 });
srRight.reveal(".form-control", { delay: 100 });

/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);



const downloadBtn = document.getElementById("btn");
const downloadBtn2 = document.getElementById("btn2");
const downloadBtn3 = document.getElementById("btn3");


function downloadResume(e) {
  const resumeURL = e.target.dataset.resume;
  const aTag = document.createElement("a");
  aTag.href = resumeURL;
  aTag.download = "Mofik Ahmed Resume.pdf";
  document.body.appendChild(aTag);
  aTag.click();
}

downloadBtn.addEventListener("click", (e) => downloadResume(e));
downloadBtn2.addEventListener("click", (e) => downloadResume(e));
downloadBtn3.addEventListener("click", (e) => downloadResume(e)); 
  

document.getElementById('form').addEventListener('submit',  (e) => {
  e.preventDefault();
  
  const formData = new FormData(e.target);
  console.log(e.target);
  const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      userText: formData.get('userText')
  };
  async function sendData(baseURL, data) {
    try {
      const requestHeader = {
        method : 'POST',
        body : JSON.stringify(data),
        headers : {
          'Content-Type' : 'application/json',
        },
      };
      const respose = await fetch(`${baseURL}/api/data`, requestHeader);
      if(!respose.ok){
        throw new Error(`Error at sendData function:`, respose.statusText);
      }
      console.log(`Data processed successfully`);
      alert("thanks for filling the form your successfully send , honor will contact you as soon as possible");
    } catch (error) {
      console.log(error);
      alert("internal server error try after some time");
    }
  }
  
  sendData("https://portfoliyo-jyzi.onrender.com" , data)
});

