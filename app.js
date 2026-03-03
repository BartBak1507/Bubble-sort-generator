"use strict";

import { losujTablice, sortujBabelkowo } from "./utils.js";

const miejsceWyniku = document.querySelector(".right");
const poleIlosc = document.getElementById("elements");
const poleMin = document.getElementById("minimum");
const poleMax = document.getElementById("maximum");
const btnUtworz = document.getElementById("createArray");
const btnSortuj = document.getElementById("sortArray");
const btnReset = document.getElementById("reset");
const obrazek = document.getElementById("imageSort");

let tablica = null;
let czyPosortowana = false;

// Sprawdzenie czy zakres pozwala na stworzenie unikalnych liczb
function sprawdzZakres(ilosc, min, max) {
  return ilosc <= (max - min + 1);
}

// Pobranie danych z inputów
function pobierzDane() {
  return {
    ilosc: parseInt(poleIlosc.value),
    min: parseInt(poleMin.value),
    max: parseInt(poleMax.value),
  };
}

// Wyświetlanie tablicy
function pokazTablice(tab) {
  const html = `<strong>Tablica nieposortowana:</strong> [ ${tab.join(
    ", "
  )} ]`;
  ukryjObrazek();
  ustawWynik(html);
}

// Ustawia zawartość HTML w prawej sekcji
function ustawWynik(html) {
  miejsceWyniku.innerHTML = html;
}

// Wyświetlanie posortowanej tablicy
function pokazTablicePosortowana(tab) {
  const html = `<br><strong>Tablica posortowana:</strong> [ ${tab.join(
    ", "
  )} ]`;
  dopiszWynik(html);
}

// Dopisuje tekst do istniejącego wyniku
function dopiszWynik(html) {
  miejsceWyniku.innerHTML += html;
}

// Chowa obrazek
function ukryjObrazek() {
  obrazek.hidden = true;
}

// Czy można sortować
function moznaSortowac() {
  return !czyPosortowana && tablica !== null;
}

// Obsługa kliknięcia "Utwórz tablicę"
function klikUtworz(e) {
  e.preventDefault();

  const { ilosc, min, max } = pobierzDane();

  if (sprawdzZakres(ilosc, min, max)) {
    tablica = losujTablice(ilosc, min, max);
    pokazTablice(tablica);
    czyPosortowana = false;
  }
}

// Obsługa kliknięcia "Sortuj tablicę"
function klikSortuj(e) {
  e.preventDefault();

  if (moznaSortowac()) {
    pokazTablicePosortowana(sortujBabelkowo(tablica));
    czyPosortowana = true;
  }
}

// Obsługa resetu
function klikReset(e) {
  e.preventDefault();
  location.reload();
}

// Nasłuchiwacze
btnUtworz.addEventListener("click", klikUtworz);
btnSortuj.addEventListener("click", klikSortuj);
btnReset.addEventListener("click", klikReset);