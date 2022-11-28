const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load", function () {

  showPopup();
  setTimeout(function () {
    loginPopup.classList.add("show");
  }, 300000)

})

function showPopup() {
  const timeLimit = 120 // seconds;
  let i = 0;
  const timer = setInterval(function () {
    i++;
    if (i == timeLimit) {
      clearInterval(timer);
      loginPopup.classList.add("show");
    }
    console.log(i)
  }, 1000);
}


close.addEventListener("click", function () {
  loginPopup.classList.remove("show");
})

