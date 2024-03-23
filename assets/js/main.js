const click = document.getElementById("click");
const bttn__expand = document.getElementById("bttn--expand");
const sec = document.getElementById("sec");
click.addEventListener("click", function () {
    sec.classList.toggle("anim");
    bttn__expand.classList.toggle("hidden");
});

const click1 = document.getElementById("click1");
const bttn__expand1 = document.getElementById("bttn--expand1");
const sec1 = document.getElementById("sec1");
click1.addEventListener("click", function () {
    sec1.classList.toggle("anim");
    bttn__expand1.classList.toggle("hidden");
});

const click2 = document.getElementById("click2");
const bttn__expand2 = document.getElementById("bttn--expand2");
const sec2 = document.getElementById("sec2");
click2.addEventListener("click", function () {
    sec2.classList.toggle("anim");
    bttn__expand2.classList.toggle("hidden");
});

const click3 = document.getElementById("click3");
const bttn__expand3 = document.getElementById("bttn--expand3");
const sec3 = document.getElementById("sec3");
click3.addEventListener("click", function () {
    sec3.classList.toggle("anim");
    bttn__expand3.classList.toggle("hidden");
});