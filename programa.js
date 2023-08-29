let musica1 = new Musica ("After Dark",  "AKFG",  "World World World" )
let musica2 = new Musica ("Lutar pelo que é meu",  "Charlie Brown JR",  "Transpiração Continua Prolongada" )
let musica3 = new Musica ("Iron Man",  "Black Sabbath",  "Paranoid" )
let musica4 = new Musica ("Pink Venom",  "BlackPink",  "BornPink" )
let musica5 = new Musica ("Californication",  "Red Hot Chilli Peppers",  "Californication" )
let musica6 = new Musica ("Come As You Are",  "Nirvana",  "Nevermind" )
let musica7 = new Musica ("Red Flavor",  "Red Velvet",  "The Red Summer" )
let musica8 = new Musica ("Há Tempos",  "Legião Urbana",  "As Quatro Estações" )
let musica9 = new Musica ("Akumunoomake",  "gesunokiwamiotome",  "Akumunoomake" )
let musica10 = new Musica ("Metropolis",  "ALI",  "LOVE, MUSIC AND DANCE" )

let PlayList = [
    musica1,
    musica2,
    musica3,
    musica4,
    musica5,
    musica6,
    musica7,
    musica8,
    musica9,
    musica10
];

for (let i = 0; i < PlayList.length; i++) {
    let musica = PlayList[i];
    document.write(`
        <div class="card" </div>
        <div class= 'capa' src= img/ ${PlayList[i].capa}
        
            <div class= '  '>${PlayList[i].  }</div>
            <div class= 'artista'>${PlayList[i].}</div>
            <div class= 'album'>${PlayList[i].}</div>
        </div>
    `)
 
}