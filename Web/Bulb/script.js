
const bulb = document.querySelector(".bulb")
const btn = document.getElementById("switchButton")

let isOn = false;

btn.addEventListener("click", function(){
  isOn = !isOn;
  bulb.style.backgroundColor = isOn ? "yellow" : "transparent"
})

