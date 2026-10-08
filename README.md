# 🦉 DuoLearn - Aplikacja do Nauki w Stylu Duolingo

Nowoczesna, interaktywna i grywalizacyjna aplikacja webowa do nauki inspirowana platformą **Duolingo**. Aplikacja jest w 100% statyczna, ultraszybka, nie wymaga instalacji żadnych zależności i działa bezpośrednio w przeglądarce oraz na **GitHub Pages**.

---

## ✨ Kluczowe Funkcjonalności

- 🦉 **Dynamiczna Maskotka (SVG)** – interaktywna sowa, która reaguje na Twoje odpowiedzi (radość, brawa, smutek przy pomyłce, czapeczka imprezowa na mecie).
- 🔊 **Wbudowany Syntezator Dźwięków (Web Audio API)** – przyjemne dzwonki przy poprawnej odpowiedzi, fanfare zwycięstwa i efekty kliknięć bez potrzeby pobierania ciężkich plików MP3.
- 🗣️ **Wymowa Lektora (Web Speech API)** – automatyczne odczytywanie zwrotów na głos.
- 🔥 **Grywalizacja Duolingo**:
  - **Streak (Płomień)** – licznik dni nauki z rzędu z automatycznym resetem przy opuszczeniu dnia.
  - **Serca (Życia)** – tracone przy pomyłkach (z opcją regeneracji).
  - **Punkty XP i Kryształy 💎** – nagrody za każdą ukończoną lekcję.
  - **Pasek postępu** – płynnie napełniający się podczas odpowiadania na pytania.
- 🎯 **5 Różnorodnych Typów Zadań**:
  1. **Wielokrotny wybór** (z obsługą klawiszy `1`, `2`, `3`, `4`).
  2. **Bank Słów (Word Bank)** – układanie zdań z interaktywnych kafelków.
  3. **Wpisywanie odpowiedzi (Type-In)** – z inteligentnym sprawdzaniem i podpowiedziami.
  4. **Łączenie par (Match Pairs)** – szybkie dopasowywanie pojęć w parach.
  5. **Zadania ze słuchu (Listening)** – odsłuchaj i wybierz właściwą odpowiedź.
- 🔁 **Powtórka błędów** – błędne pytania trafiają na koniec kolejki lekcji, dopóki ich nie opanujesz.
- ➕ **Kreator i Import Własnego Materiału** – możesz wkleić własną listę słówek lub pytań w formacie `słowo = tłumaczenie` lub JSON, a aplikacja sama wygeneruje z nich pełną lekcję!

---

## 🚀 Jak uruchomić lokalnie

Aplikacja nie wymaga Node.js do działania, ale możesz uruchomić lokalny serwer HTTP:

```bash
# Opcja 1: npx serve
npx serve .

# Opcja 2: Python
python -m http.server 8000

# Opcja 3: Live Server w VS Code lub po prostu dwuklik na index.html
```

---

## 🌐 Publikacja na GitHub Pages

Repozytorium zawiera gotowy proces GitHub Actions (`.github/workflows/deploy.yml`).

1. Zaloguj się do GitHuba w konsoli:
   ```bash
   gh auth login
   ```
2. Utwórz repozytorium i wyślij kod:
   ```bash
   gh repo create duo-learn --public --source=. --remote=origin --push
   ```
3. W ustawieniach repozytorium na GitHubie (**Settings -> Pages**):
   - W sekcji **Build and deployment -> Source** wybierz **GitHub Actions**.
4. Po paru chwilach Twoja strona będzie dostępna pod adresem:
   `https://<twój-login>.github.io/duo-learn/`

---

## 📝 Format wprowadzania własnych materiałów

W aplikacji wystarczy kliknąć przycisk **➕ Własny materiał** w prawym górnym rogu i wkleić swoje pojęcia w dowolnym z formatów:

```text
Jabłko = Apple
Pies = Dog
Kot = Cat
Dzień dobry = Good morning
Dziękuję bardzo = Thank you very much
```

Możesz także użyć separatorów `:` lub `-`. Aplikacja automatycznie utworzy kafelki do łączenia par, testy wyboru, pytania pisemne oraz bank słów!
