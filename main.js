let content = document.querySelector(".words");
let txt = "Hello in my codepen to show my portfolio";
let i = 0;
window.onload = setTimeout(function hello() {
  if (i < txt.length) {
    content.innerHTML += txt[i];

    i++;
    setTimeout(hello, 70);
  }
  if (i == txt.length) {
    content.style.border = "none";
  }
}, 4700);
