// start pup of BMW
function showDetail() {
  document.getElementById("pup1").classList.add("open");
}
function hideDetail() {
  document.getElementById("pup1").classList.remove("open");
}
function showDetail2() {
  document.getElementById("pup2").classList.add("open");
}
function hideDetail2() {
  document.getElementById("pup2").classList.remove("open");
}
function showDetail3() {
  document.getElementById("pup3").classList.add("open");
}
function hideDetail3() {
  document.getElementById("pup3").classList.remove("open");
}
function showDetail4() {
  document.getElementById("pup4").classList.add("open");
}
function hideDetail4() {
  document.getElementById("pup4").classList.remove("open");
}
function showDetail5() {
  document.getElementById("pup5").classList.add("open");
}
function hideDetail5() {
  document.getElementById("pup5").classList.remove("open");
}
function showDetail6() {
  document.getElementById("pup6").classList.add("open");
}
function hideDetail6() {
  document.getElementById("pup6").classList.remove("open");
}
function showDetail7() {
  document.getElementById("pup7").classList.add("open");
}
function hideDetail7() {
  document.getElementById("pup7").classList.remove("open");
}
function showDetail8() {
  document.getElementById("pup8").classList.add("open");
}
function hideDetail8() {
  document.getElementById("pup8").classList.remove("open");
}
function showDetail9() {
  document.getElementById("pup9").classList.add("open");
}
function hideDetail9() {
  document.getElementById("pup9").classList.remove("open");
}
function showDetail10() {
  document.getElementById("pup10").classList.add("open");
}
function hideDetail10() {
  document.getElementById("pup10").classList.remove("open");
}
function showDetail11() {
  document.getElementById("pup10").classList.add("open");
}
function hideDetail11() {
  document.getElementById("pup10").classList.remove("open");
}
function showDetail12() {
  document.getElementById("pup10").classList.add("open");
}
function hideDetail12() {
  document.getElementById("pup10").classList.remove("open");
}
// end pup of BMW

// navbar transition
let navBar = document.getElementById("mainNav");
window.onscroll = function () {
  if (this.scrollY >= 500) {
    navBar.style.backgroundColor = "#000";
    navBar.style.borderRadius = "0 0 30px 30px";
  } else {
    navBar.style.backdropFilter = "blur(5px)";
    navBar.style.borderRadius = "0";
    navBar.style.backgroundColor = "transparent";
  }
};

let toggleIcon = document.getElementById("toggle-icon");
let menuBox = document.getElementById("menu-box");

toggleIcon.addEventListener("click", () => {
  menuBox.classList.toggle("show-box");
  menuBox.style.width = "300px";
  menuBox.style.height = "100vh";
});
