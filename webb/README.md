# webbyra

Gruppuppgift

1. Commit-regler
   Använd meningsfulla commit-meddeladen.
   Små och frekventa commits.
   Kontrollera din kod innan du gör commits.
   Bra struktur för commit-meddelanden.

2. GitFlow
   För att effektivt se hur vi har arbetat med GitFlow kan man se vårt flöde här:
   Vi har en main där den slutgiltliga koden kommer hamna.

Develop: All kod som hamnar här har vi gjort en PR för att godkänna innan vi mergar från andra branches och
kollar så att allt fungerar innan det mergas in till main branchen.

Feature-branches: I feature-branches arbetar vi med ny kod och utvecklar dess olika delar.
feature-"namn" ska också innehålla en kort beskrivning av vad det är man utvecklar.
När man är klar med en feature-branch så gör vi en PR som ska mergas till developer branchen.

3. Pull Request (PR-Rutiner)
   Vi ska alltid göra pull requests innan vi mergar från en feature-branch till developer branchen.
   Försök att hålla sig till mindre Pull Requests för att inte merga för stora commits.
   Man mergar inte sin egen PR, det gör någon annan som först granskar.
