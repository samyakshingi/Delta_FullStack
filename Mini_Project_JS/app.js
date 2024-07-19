let gameSeq = [];
let userSeq = [];

let btns = ["red", "green", "yellow", "purple"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");
document.addEventListener("keypress", function () {
  if (started == false) {
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randColor = btns[Math.floor(Math.random() * 3)];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randBtn);
}

function chkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h3.innerText = `Game over! Level${level}`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  btnFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  chkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  userSeq = [];
  gameSeq = [];
  level = 0;
  started = false;
}
