/** @format */

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
