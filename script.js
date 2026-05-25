
const targetElement = document.getElementById("level");
let level = 0;
let currentElement = targetElement;
while (currentElement) {
  level++;
  currentElement = currentElement.parentElement;
}

alert("The level of the element is: " + level);
