/** @format */
const mobileMenu = document.querySelector(".mobile-menu");
const mobileMenuBtn = document.querySelector(".mobile-menu-btn");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenuBtn.classList.toggle("active-menu-btn");
  mobileMenu.classList.toggle("slide-out");
  mobileMenu.classList.toggle("slide-in");
  if (mobileMenu.classList.contains("slide-out")) {
    setTimeout(() => {
      mobileMenu.classList.add("display-none");
    }, 1000);
  } else {
    mobileMenu.classList.remove("display-none");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 750) {
    mobileMenu.classList.add("slide-out");
    mobileMenu.classList.remove("slide-in");
    setTimeout(() => {
      mobileMenu.classList.add("display-none");
    }, 1000);
  }
});

let container = document.getElementsByClassName("container-fluid")[0];
console.log(container);
container.onmouseenter = function () {
  let start = Date.now();

  let timer = setInterval(function () {
    let timePassed = Date.now() - start;

    container.style.borderRadius = timePassed / 10 + "px";

    if (timePassed > 1000) clearInterval(timer);
  }, 2);
};

function Submit() {
  let btn = document.getElementsByClassName("submit-btn")[0];
  btn.onclick = () => {
    let modal = document.getElementById("modal");
    document.body.style.opacity = "0.8";
    modal.style.display = "block";
  };
}

function Close() {
  let closeBtn = document.getElementsByClassName("close-btn")[0];
  closeBtn.onclick = () => {
    let modal = document.getElementById("modal");
    document.body.style.opacity = "1";
    modal.style.display = "none";
  };
}
