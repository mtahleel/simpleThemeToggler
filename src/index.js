//import "./styles.css";
var btn = document.getElementById("btn");
var span = document.getElementById("span");
// var app = document.getElementById("app");
var body = document.getElementById("body");
var toggle = false;

btn.addEventListener("click", function () {
  if (!toggle) {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    span.style = "left:auto; right:-10%;";
    btn.style = "box-shadow: 0 0 10px 2px white";
    toggle = true;
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    span.style = "right:auto; left:15%;";
    btn.style = "box-shadow: 0 0 10px 2px black";
    toggle = false;
  }
});
