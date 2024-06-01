/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function randomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function randomItem(arr) {
  const index = randomIndex(arr);
  return arr[index];
}

window.onload = function() {
  //write your code here

  console.log("Excuse Generator roject");
  const whos = ["The dog", "My brother", "My Aunt", "My Teacher", "My Boss"];
  const whats = ["ate", "destroyed", "lost", "sold"];
  const avoids = ["my homeworks", "my tickets", "my chores", "my check"];
  const whens = ["yesterday", "last week", "last month"];

  const who = randomItem(whos);
  const what = randomItem(whats);
  const avoid = randomItem(avoids);
  const when = randomItem(whens);

  const randomExcuse = who + " " + what + " " + avoid + " " + when;

  const randomExcuse1 = `${who} ${what} ${avoid} ${when}`;

  document.querySelector("h1").innerText = randomExcuse;
  document.querySelector("h2").innerText = randomExcuse1;
};
