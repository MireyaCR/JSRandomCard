/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

window.onload = function() {
  //write your code here
  function deckBuilder() {
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
    const cards = [];
    for (let s = 0; s < suits.length; s++) {
      for (let v = 0; v < values.length; v++) {
        const value = values[v];
        const suit = suits[s];
        cards.push({ value, suit });
      }
    }
    return cards;
  }
  function randomCard(cards) {
    const random = Math.floor(Math.random() * 51);
    const cardValue = cards[random].value;
    const cardSuit = cards[random].suit;
    let entity;
    cardSuit === "Diamonds"
      ? (entity = "&diams;")
      : (entity = "&" + cardSuit.toLowerCase() + ";");

    const card = document.createElement("div");
    card.classList.add("card", cardSuit.toLowerCase());
    card.classList.add("mx-auto");
    card.classList.add("align-middle");
    card.innerHTML =
      '<span class="card-value-suit top">' +
      entity +
      "</span>" +
      '<span class="card-suit">' +
      cardValue +
      "</span>" +
      '<span class="card-value-suit bot">' +
      entity +
      "</span>";
    document.querySelector("#container").appendChild(card);
  }
  const cards = deckBuilder();
  randomCard(cards);
  const boton = document.querySelector("#boton");
  boton.addEventListener("click", function() {
    randomCard(cards);
  });
};
