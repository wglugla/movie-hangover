# [PL] Struktura aplikacji movie-hangover

## Przeznaczenie aplikacji

Aplikacja przeznaczona dla osób, które czują **`filmowego kaca`** po świetnym, ostatnio obejrzanym filmie i nie mogą sobie poradzić z tęsknotą za bohaterami lub fabułą.

Po wpisaniu tytułu _(lub jego częścią)_, aplikacja **wyszuka film z bazy**.
Kolejny krok, to wyświetlenie informacji o **reżyserze** oraz **aktorach** występujących w filmie.

**Aplikacja stara się podpowiedzieć, jakie filmy obejrzeć.**
_(podpowiedzi dotyczą filmów tego samego gatunku filmu, reżysera lub tych samych aktorów)_

Użytkownik może użyć filtrów, które pozwalają mu na sprawniejsze przeglądanie listy filmów.

## Użyte narzędzia

- **`react`**
- **`react-redux`**
- **`redux`**
- **`redux-thunk`**
- **`prop-types`**
- **`redux-sga`**
- **`ramda`**
- **`redux-form`**

## Funkcje, które zamierzam zaimplementować

- [x] Formularz, dzięki któremu użytkownik otrzymuje odpowiedź od tmbD API z listą tytułów filmów zawierających wskazaną frazę.
- [x] Lista filmów zgodnych z wyszukiwaną frazą
- [x] Szczegółowe informacje o filmie
- [x] Lista filmów polecanych przez aplikację na podstawie danego filmu
- [ ] Sortowanie listy filmów polecanych na podstawie oceny użytkowników tmbD lub nazwy, gatunku, trafności aktorów (trafność - ilość aktorów, którzy wystąpili w wybranym oraz poleconym filmie)
- [ ] Filtry do listy filmów polecanych, pozwalających na przegląd filmów skojarzonych z gatunkiem, reżyserem bądź danym aktorem

