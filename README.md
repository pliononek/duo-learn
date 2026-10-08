<div align="center">

# 🦉 DuoLearn 🇩🇪
### Interaktywna platforma do nauki w stylu Duolingo

[![Live Demo](https://img.shields.io/badge/Demo-pliononek.github.io%2Fduo--learn-58cc02?style=for-the-badge&logo=githubpages&logoColor=white)](https://pliononek.github.io/duo-learn/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Vanilla JS](https://img.shields.io/badge/Vanilla_JS-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)]()
[![No Dependencies](https://img.shields.io/badge/Dependencies-Zero-1cb0f6?style=for-the-badge)]()

**[🎮 Zagraj teraz na żywo](https://pliononek.github.io/duo-learn/)** • **[📖 Dokumentacja](#-kluczowe-funkcjonalności)** • **[➕ Własny materiał](#-dodawanie-własnego-materiału)**

---

</div>

## 📌 O Projekcie

**DuoLearn** to nowoczesna, w pełni statyczna aplikacja webowa do nauki języków z naciskiem na grywalizację i natychmiastowy feedback. Wizualnie i funkcjonalnie czerpie z najlepszych wzorców **Duolingo**: dynamiczna reagująca maskotka, dźwięki syntezatora, licznik dni z rzędu (Streak 🔥), serca ❤️ i zróżnicowane typy zadań.

Domyślny kurs skupia się na kompleksowej nauce **języka niemieckiego**:
- Odmiana czasowników posiłkowych ***haben*** i ***sein*** w czasie teraźniejszym
- Niemieckie zaimki pytające (***Fragewörter***)
- Czas przeszły ***Perfekt*** i zasady tworzenia ***Partizip II*** (czasowniki regularne, końcówki `-et`, `-ieren`, czasowniki rozdzielnie i nierozdzielnie złożone)
- Praktyczne ćwiczenia oparte na autentycznych kartach pracy

---

## ✨ Kluczowe Funkcjonalności

- 🦉 **Dynamiczna Maskotka Sowa (SVG)**  
  Wektorowa postać reagująca na żywo na stan nauki: cieszy się z trafnych odpowiedzi, smuci przy pomyłce, kibicuje podczas trudniejszych pytań i zakłada czapeczkę imprezową na ekranie sukcesu!

- 🔊 **Wbudowany Syntezator Audio (Web Audio API)**  
  Autorskie, czyste efekty dźwiękowe generowane proceduralnie (dwutonowy dzwonek sukcesu, niski buzzer pomyłki, kliknięcia kafelków, fanfara wygranej) – **0 zewnętrznych plików MP3**.

- 🗣️ **Niemiecki Lektor (Web Speech API)**  
  Automatyczne odczytywanie niemieckich zdań i zwrotów z poprawnym akcentem (`de-DE`).

- 🔥 **Mechaniki Grywalizacji**:
  - **Streak 🔥** – licznik dni nauki z rzędu zapisywany w `localStorage`.
  - **Serca ❤️** – 5 żyć odnawiających się w trakcie sesji.
  - **Kryształy 💎 & XP ⚡** – punkty doświadczenia z dziennym celem.
  - **Ścieżka Lekcji (Tree)** – wijąca się ścieżka z odblokowywanymi poziomami i koronami.

---

## 🎯 5 Trybów Zadań

| Typ Zadania | Opis | Sterowanie |
| :--- | :--- | :--- |
| **🧩 Łączenie Par (Match Pairs)** | Dwukolumnowe parowanie słówek i form gramatycznych w czasie rzeczywistym. | Myszka / Dotyk |
| **🔤 Bank Słów (Word Bank)** | Układanie zdań z interaktywnych klocków z automatyczną detekcją szyku. | Klikanie kafelków |
| **📝 Wpisywanie (Type-In)** | Wpisywanie formy ze sprawdzaniem wariantów (np. sam imiesłów lub z posiłkowym). | Klawiatura + `Enter` |
| **🔘 Wielokrotny Wybór** | Klasyczny test z natychmiastowym podświetleniem poprawnej odpowiedzi. | Klawisze `1`-`4` lub klik |
| **🎧 Zadania ze Słuchu** | Odsłuchiwanie wymowy lektora i wybór właściwego zapisu. | Odsłuch + Wybór |

---

## 📚 Struktura Wbudowanego Kursu Niemieckiego

### **Dział 1: Odmiana haben, sein & Zaimki pytające**
- **Lekcja 1:** Odmiana czasowników *haben* i *sein* (*ich habe/bin*, *du hast/bist*, *er hat/ist*, *wir haben/sind*, *ihr habt/seid*, *sie haben/sind*).
- **Lekcja 2:** Niemieckie zaimki pytające (*wer*, *was*, *wie*, *wo*, *wohin*, *wann*, *warum*, *wem*, *wen*, *mit wem*).

### **Dział 2: Czas Perfekt & Tworzenie Partizip II**
- **Lekcja 3:** Czasowniki regularne: reguła `ge-` + temat + `-t` (*machen ➔ gemacht*, *tanzen ➔ getanzt*, *lernen ➔ gelernt*, *kochen ➔ gekocht*...).
- **Lekcja 4:** 4 grupy wyjątków:
  1. Końcówka `-et` dla tematów na `-t/-d/-chn` (*arbeiten ➔ gearbeitet*, *warten ➔ gewartet*).
  2. Końcówka `-ieren` bez przedrostka `ge-` (*studieren ➔ studiert*, *fotografieren ➔ fotografiert*).
  3. Czasowniki nierozdzielne bez `ge-` (*besuchen ➔ besucht*, *verkaufen ➔ verkauft*).
  4. Czasowniki rozdzielnie złożone (*aufmachen ➔ aufgemacht*, *einkaufen ➔ eingekauft*).
- **Lekcja 5:** Szyk zdania w Perfekt (*haben* na 2. miejscu, a *Partizip II* na końcu zdania).

### **Dział 3: Trening z Kart Pracy**
- **Lekcja 6 & 7:** Pełny zestaw 14 praktycznych zdań kontekstowych z kart pracy (imprezy, studia w Krakowie, sprzedaż auta, portrety, sprzątanie domu).

---

## ➕ Dodawanie Własnego Materiału

Aplikacja posiada wbudowany **inteligentny parser**. Kliknij przycisk **➕ Własny materiał** w prawym górnym rogu strony i wklej dowolną listę słówek:

```text
Apple = Jabłko
Dog = Pies
Cat = Kot
Good morning = Dzień dobry
Thank you very much = Dziękuję bardzo
```

System automatycznie wygeneruje z Twojej listy:
1. Pytania wielokrotnego wyboru z automatycznie dobranymi błędnymi odpowiedziami.
2. Dwukolumnowe kafelki do łączenia par.
3. Zadania pisemne (Type-In).
4. Bank słów (Word Bank) dla dłuższych wyrażeń.

---

## 💻 Uruchomienie Lokalne

Aplikacja nie wymaga procesu budowania (Zero Build / Pure Web Standards):

```bash
# 1. Klonowanie repozytorium
git clone https://github.com/pliononek/duo-learn.git
cd duo-learn

# 2. Uruchomienie dowolnego serwera HTTP, np.:
python -m http.server 8000
# lub
npx serve .
```

Otwórz w przeglądarce: `http://localhost:8000` (lub po prostu kliknij dwukrotnie w `index.html`).

---

## 📄 Licencja

Projekt wydany na warunkach otwartoźródłowej licencji [MIT](LICENSE).  
Copyright (c) 2026 **pliononek**.
