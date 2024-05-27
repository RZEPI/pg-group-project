import { text } from "@fortawesome/fontawesome-svg-core";

// dummy questions, to temporary replace the API
export default [
    {
        id: 'q0',
        title: "Gospodyni w kuchni",
        text: "Pani Jadzia robi ciasto na pierogi, jej waga kuchenna pokazuje wagę w gramach, a w przepisie jest napisane, że potrzebuje 50 dekagramów mąki. Ile gram musi wskazywać waga żeby wsypać tyle mąki ile jest w przepisie?",
        answers:[500],
        type: "text",
        level: 3,
        image: "/assets/farm.jpg"
    },
    {
        id: 'q1',
        title: "Rolnik z mapą",
        text: "Rolnik po zapakowaniu butelek mleka musi je dostarczyć klientowi, prowadzącemu stację benzynową. Przy dostarczeniu zamówienia Rolnik dostanie rabat na paliwo. Niestety jego samochód pokazuje, że zostało mu paliwa tylko na 40km. Na mapie w skali 1:100000 jego miejscowość jest oddalona o 20cm. Czy Rolnikowi uda się dojechać do klienta bez tankowania?",
        answers:["TAK","NIE"],
        type: "trueFalse",
        level: 5,
        image: "/assets/farma3.jpg"
    },
    {
        id: 'q2',
        title: "Dojenie krowy",
        text: "Rolnik dostał zamówienie na 5 litrów mleka, mleko po wydojeniu od krowy przelewa zawsze do butelek o pojemności 250 mililitrów, ile takich butelek musi dostarczyć zamawiającemu? ",
        answers:[ 
            "20 butelek",
            "10 butelek",
            "2 butelki",
            "15 butelek"
        ],
        type: "abc",
        level: 3,
        image: "/assets/farm.jpg"
    },
    {
        id: 'q3',
        title: "Karmienie zwierząt",
        text: "Jedna kura zjada średnio 100g paszy jednego dnia. Rolnik ma w zapasie 3 tony paszy. Jeśli rolnik ma 120 kur, to na ile dni wystarczy mu paszy?",
        answers:[
            "250",
            "30",
            "45",
            "1200"
        ],
        type: "abc",
        level: 4,
        image: "/assets/farma4.jpeg"
    },
    {
        id:"q4",
        title: "Buda dla psa",
        text: "Pan Kazio pojechał do sklepu kupić deski na nową budę dla psa. Wcześniej obliczył, że potrzebuje 9 metrów desek. Niestety zapomniał zabrać miarki do sklepu. Jedyne co ma pod ręką to karton po mleku, który ma długość 2dm. Ile razy musi odmierzyć deskę kartonem, aby być pewnym, że starczy mu na budę dla psa?",
        answers:[
            "45",
            "75",
            "2,5",
            "450"
        ],
        type: "abc",
        level:5,
        image: "/assets/farma2.jpg"
    },
   
    {
        id:"q5",
        title: "Przewóz dyni",
        text: "Jedna dynia na farmie waży średnio 3 kilogramy. Pan Kazio ma przyczepę o ładowności 2 ton. Ile dyni może zabrać na przyczepę za jednym wyjazdem na pole dyniowe?",
        answers:[666],
        type: "text",
        level: 4,
        image: "/assets/farma3.jpg"
    },
    {
        id:"q6",
        title: "Ciasto marchewkowe",
        text: "Pani Jadzia chce upiec ciasto marchewkowe. Na jedno ciasto przypada 25 dekagramów startej marchewki. Szacujemy, że na jednej grządce jest zasadzone 20 kilogramów marchewek. Ile ciast marchewkowych można upiec z jednej grządki marchewek?",
        answers:[80],
        type: "text",
        level:5,
        image: "/assets/farma3.jpg"
    },
    {
        id:"q7",
        title: "Napełnianie basenu",
        text: "Pan Kazio kupił nowy basen do swojego ogrodu. Chciałby w czasie nalewania wody wykonać inne obowiązki. W związku z tym musi obliczyć za jaki czas należy zakręcić wodę. Zmierzyliśmy, że wąż ogrodowy podaje 400 mililitrów wody na sekundę. Basen ma pojemność 90 hektolitrów. Jak długo będzie się napełniać basen?",
        answers:["6h 15min", "7h 30min", "8h", "6h"],   
        type: "abc",
        level:5,
        image: "/assets/farma2.jpg"
    },
    {
        id:"q8",
        title: "Malowanie wiaty",
        text:"Pan Kazio z Markiem malują wiatę. Wyliczyli, że wszystkie ściany do pomalowania mają 30 metrów kwadratowych. 125 mililitrów farmy starczy na jeden metr kwadratowy powierzchni. Czy 5-litrowa puszka farby im wystarczy?",
        answers:["TAK","NIE"],
        type: "trueFalse",
        level: 4,
        image: "/assets/farm.jpg"
    },
    {
        id:"q9",
        title: "Uciekający autobus",
        text:"Syn rolnika - Marek - wraca ze szkoły autobusem. Przystanek na którym czeka na autobus znajduje się 2 kilometry od wioski. Jednego dnia autobus uciekł Markowi. Marek wie, że długość jego kroku, gdy jest zmęczony, wynosi 20 centymetrów. Ile kroków wykona Marek dochodząc do domu na piechotę?",
        type: "text",
        answers:[10000],
        level: 6,
        image: "/assets/farma4.jpeg"
    },
    {
        id:"q10",
        title: "Zbieranie jabłek",
        text:"Marek wraz z kolegami za każdy kilogram zebranych jabłek w sadzie u sąsiada dostaje złotówkę. Planują kupić dużą pizzę, która kosztuje 36 złotych. Jedno jabłko waży 250g. Ile jabłek muszą zebrać żeby starczyło im na tą pizzę?",
        answers:[144],
        type: "text",
        level:5,
        image: "/assets/farma2.jpg"
    },
    {
        id:"q11",
        title: "Ogradzanie pola",
        text: "Pan Kazio planuje ogrodzić kwadratową działkę mającą powierzchnię 1 hektara. Ile metrów siatki musi kupić żeby to zrobić?",
        answers:[400],
        type: "text",
        level: 8,
        image: "/assets/farma3.jpg"
    },
    {
        id:"q12",
        title: "Afera pszeniczna",
        text: "Pan Kazio sprzeczał się z sąsiadem Waldkiem ile pszenicy można otrzymać z jednego metra kwadratowego pola. Wiadome jest, że na 10000 metrów kwadratowych Pan Kazio zebrał 3,5 tony pszenicy.Według Pana Waldka jest to 3,5kg, a według Pana Kazia 350g. Kto ma rację?",
        answers:["Pan Kazio","Pan Waldek", "Żaden z nich"],
        type: "abc",
        level: 7,
        image: "/assets/farm.jpg"
    },
    {
        id:"q13",
        title: "Słoiki miodu",
        text: "Pszczoły w pasiece sąsiada Waldka produkują 10 litrów miodu rocznie. Ile Waldek ma przygotować słoików o pojemności 500ml?",
        answers:[20, 12, 2, 5],
        type: "abc",
        level: 5,
        image: "/assets/farma4.jpeg"
    },
    {
        id:"q14",
        title: "Bieganie z Markiem",
        text:"Marek stwierdził,  że najwyższy czas wyjść pobiegać. Zdecydował, że przebiegnie 4km. Ile to metrów?",
        answers:[4000],
        type: "text",
        level: 3,
        image: "/assets/farma3.jpg"
    },
    {
        id: "q15",
        title: "Teleturniej",
        text: "Kazio i Jadzia oglądają w telewizji teleturniej. Uczestnik dostał pytanie - Co jest cięższe - 60 mln miligramów piór, czy 45 tys. gramów kamieni? Kazio uważa, że poprawną odpowiedzią są pióra, a Jadzia, że kamienie. Kto ma rację?",
        answers:["Kazio","Jadzia","Oboje", "Żadne z nich"],
        level: 4,
        type: "abc",
        image: "/assets/farma4.jpeg"
    },
    {
        id:"q16",
        title: "Mierzenie wzrostu",
        text:"Marek chce zmierzyć swój wzrost. Ma do dyspozycji miarkę, która odmierza w centymetrach. Markowi wyszło, że ma 145 centymetrów wzrostu. Ile metrów wzrostu ma Marek?",
        answers:[1.45, 14.5, 0.145, 145],
        type: "abc",
        level: 4,
        image: "/assets/farma2.jpg"
    },
    {
        id:"q17",
        title: "Wyprawa wędkarska",
        text:"Kazio ma zamiar pójść na ryby. Ma jednak problem - jego nici wędkarskie są bardzo krótkie. Znalazł 100 decymetrów jednej i 600 centymetrów drugiej. Kazio potrzebuje minimum 15 metrów nici. Czy jeśli połączy te nici, które znalazł, to będzie miał wystarczająco długą nić?",
        answers:["TAK","NIE"],
        type: "trueFalse",
        level: 4,
        image: "/assets/farm.jpg"
    }
];
