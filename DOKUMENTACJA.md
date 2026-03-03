# Dokumentacja – Bubble Sort Generator

## 1. Cel projektu

Celem projektu było stworzenie aplikacji webowej prezentującej działanie algorytmu sortowania bąbelkowego.

Projekt miał na celu utrwalenie wiedzy z zakresu:
- algorytmów sortowania
- generowania danych losowych
- walidacji danych wejściowych
- programowania w JavaScript
- pracy z modułami ES6

---

## 2. Wymagania funkcjonalne

- Program umożliwia podanie ilości elementów tablicy
- Program umożliwia określenie zakresu (min i max)
- Program generuje unikalne liczby losowe
- Program sortuje tablicę metodą bąbelkową
- Program wyświetla tablicę przed i po sortowaniu

---

## 3. Wymagania niefunkcjonalne

- Intuicyjny interfejs użytkownika
- Czytelny układ graficzny
- Działanie w przeglądarce
- Brak potrzeby instalacji dodatkowego oprogramowania
- Poprawna walidacja danych

---

## 4. Opis działania algorytmu

Algorytm sortowania bąbelkowego działa według następujących kroków:

1. Tworzona jest kopia tablicy
2. Program porównuje kolejne elementy tablicy
3. Jeśli element wcześniejszy jest większy od następnego — następuje zamiana miejsc
4. Proces powtarza się wielokrotnie
5. Po każdej iteracji największa wartość „wypływa” na koniec tablicy
6. Algorytm kończy działanie po wykonaniu n-1 przebiegów

Złożoność czasowa algorytmu:  
O(n²)

---

## 5. Testowanie

Przetestowano:

- Małą ilość elementów (np. 3–5)
- Większą ilość elementów (np. 20)
- Zakres minimalny równy maksymalnemu
- Próbę wygenerowania większej ilości liczb niż zakres (walidacja)
- Wielokrotne sortowanie tej samej tablicy

Program działa poprawnie i spełnia założenia projektowe.
