"use strict";

// Tworzy tablicę losowych, niepowtarzających się liczb
function losujTablice(ile, min, max) {
  let tab = [];

  while (tab.length < ile) {
    let liczba = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!tab.includes(liczba)) {
      tab.push(liczba);
    }
  }

  return tab;
}

// Sortowanie bąbelkowe
function sortujBabelkowo(tablica) {
  const t = tablica.slice();
  const n = t.length;

  for (let i = 1; i <= n - 1; i++) {
    for (let j = 0; j <= n - i - 1; j++) {
      if (t[j] > t[j + 1]) {
        let temp = t[j];
        t[j] = t[j + 1];
        t[j + 1] = temp;
      }
    }
  }

  return t;
}

export { losujTablice, sortujBabelkowo };