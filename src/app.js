/* eslint-disable */
import "bootstrap";
import "./style.css";
window.onload = function() {
  //write your code here
  function RamdomIndex(array) {
    let ArrayIndex = Math.floor(Math.random() * array.length);
    return array[ArrayIndex];
  }

  let pinta = ["♤", "♡", "♧", "♢"];
  let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let pintaCarta = RamdomIndex(pinta);
  let numeroCarta = RamdomIndex(number);
  let elementpintaCarta = document.querySelector("#pintaA");
  let elementpintaCartaAb = document.querySelector("#pintaAb");
  let elementnumeroCarta = document.querySelector("#numberCard");

  elementpintaCarta.innerHTML = pintaCarta;
  elementpintaCartaAb.innerHTML = pintaCarta;
  elementnumeroCarta.innerHTML = numeroCarta;

  elementpintaCartaAb.style.transform = "rotate(180deg)";

  if (pintaCarta == "♡" || pintaCarta == "♢") {
    elementpintaCarta.style.color = "red";
    elementpintaCartaAb.style.color = "red";
  }
};
