# XXXMas

Oscar Tafvelin 2025-02-17

## Inledning

Syftet med arbetet var att lära oss mer om spelprogrammering och javascript och detta gjorde vi genom att programmera och skapa ett spel i javascript med hjälp av grafik som esteteleverna skapade till oss. Vi använde oss av en spelmotor som vi tillsammans med Jens hade skapat före projektet startat, (Vi behövde ändå göra om hela motorn i princip så det var inte en så stor headstart som vi trodde). Sedan programmerade vi spelet i VS-Code och hostade det med Github.

## Bakgrund

Jag cloneade spelmotorn vi hade jobbat med fram tills dess, installerade vite och alla andra plugins som behövdes för hostingen osv. Sedan började arbetet med att försöka göra om spelmotorn så att den skulle fungera till vår spelgenre, (alltså dating sim). 

började med att försöka komma på hur själva systemet med scenbyte och dialog skulle fungera. Jens kom med en ide om att systemet skulle bestå av en "scenes"-fil som innehöll alla platser, dialog och dialogval som man kunde göra, och en "scenemanager"-fil som höll reda på vars man var och i vilken dialog-path man befann sig i. När jag hade den grunden i princip klar så började jag med att försöka rita ut bilder och karaktärer på skärmen utifrån vilken scen som var aktiv enligt scenemanagern. 

Alla js-filer sammankopplades med Game.js filen så att man genom den kan komma åt allting man behöver för att få logiken att fungera. På det sättet behövs endast Game.js inkluderas i konstruktorn för varje js-fil och man kan ändå komma åt allting. Då kunde jag i background.js komma åt variabeln "activeScene" i scenemanager så att jag kunde programmera en if-sats som ritade ut en specifik bakgrund beroende på den aktiva scenen. Jag fixade också så att karaktären och dialogrutans sprites ritades ut men det krävdes inte lika mycket strul eftersom vi minskat på projektets scope och därmed så behövde jag inte programmera logiken kring vilken karaktär som skulle ritas ut också, (även om det skulle gjorts på ungefär samma sätt som bakgrunden). 

Sedan fixade jag så att text kunde skrivas ut på skärmen och detta gjordes genom att inuti filen Dialoge.js skapa en funktion som skapade ett nytt html-element som innehöll text. När jag sedan ville att texten skulle ändras så hade jag en separat funktion som bara gick in och ändrade på textinnehållet. När allt detta var klart var det dags att få inputen, eller knapparna, att fungera. Detta gjorde jag genom att inuti en ny js-fil, ("Buttons.js"), skapa en forEach-loop som skapade nya html-element i index.html-filen. Denna loop skapade knappar som innehöll text från min scenes.js-fil samt en div för att innehålla dessa knappar. Jag gav också dessa knappar funktioner, (vissa knappar kopplades till Dialogue.js och fortsatte dialogen medan en annan kopplades till SceneManager.js och ändrade scenen). 

Sedan fixade jag så att dialogen faktiskt resettades när man bytte scen och EN ending som man kommer till oavsett vad, (Jag hann inte / orkade inte fixa så att de olika dialogvalen faktiskt ledde till olika dialog-paths/endings). Efter det var jag i princip klar, eller i alla fall så klar som jag orkade bli med detta projekt.

Efter spelet var klart så hostades det på github med hjälp av github-actions och efter lite felsökning på varför bilderna inte laddades in, (Jens sa att de behövde ligga i public mappen), så fungerade allting.

## Positiva erfarenheter

Att jobba tillsammans med esteteleverna var väldigt lärorikt och en bra erfarenhet för framtiden då man kanske också måste arbeta i grupp med andra personer. Vi fick bolla fram och tillbaka med ideer, de fick ge feedback på vad som de ansåg vara genomförbart och inte, och på det sättet formades projektet. Det var väldigt lärorikt att samarbeta med de som har andra arbetsområden än mitt eget för man fick många olika synvinklar och det är någotning som jag borde göra mer i framtiden.

## Negativa erfarenheter

Jag tycker att mycket tid slösades av mig på grund av felsökning eftersom jag inte helt förstod hur man skulle gå tillväga med att implementera vissa saker. Allting som jag lade till fungerade inte i början och då spenderade jag kanske en halv lektion åt gången med att försöka felsöka problemen. I framtida projekt kanske jag borde spendera lite mer tid med att försöka förstå mig på grundkoncepten innan jag börjar med mina egna saker.

## Sammanfattning

Det här projektet har gått... Meh.... Jag har lärt mig mycket och det är en bra sak, men jag kom inte så långt med själva spelet. Vi trodde det skulle vara mycket enklare än det var att göra en dating sim. "Det är ju bara att rita ut bilder och text." sa vi, och sedan spenderade vi typ 4 veckor på att rita ut bilder och text. Jag tror mycket av detta kom från att vi inte riktigt förstod grundkoden från början och detta gjorde det mycket svårare att göra framsteg. Herman lyckades komma ganska långt och gjorde 4 olika endings och det var för att han valde ett annat tillvägagångssätt när det kom till hur dialogen skulle hanteras än mig. Han byggde hela dialogen i Dialoge.js, (tror jag), och sket i scene-transitions, medan jag envisade mig om att fortsätta på det sättet Jens sa att man skulle göra det och på grund av detta blev det mycket svårare för mig att felsöka eftersom jag behövde komma ihåg hur all filer hängde ihop och gå fram och tillbaka mellan de olika filerna hela tiden och se till att jag hade refererat rätt osv. Men med det sagt så är jag nöjd med hur mycket jag lärt mig under detta projekt.