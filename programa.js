let musica1 = { titulo: 'After Dark', artitas: 'AKFG', albums: 'World World World' }
let musica2 = { titulo: 'Lutar pelo que é meu', artitas: 'Charlie Brown JR', albums: 'Transpiração Continua Prolongada' }
let musica3 = { titulo: 'Iron Man', artitas: 'Black Sabbath', albums: 'Paranoid' }
let musica4 = { titulo: 'Pink Venom', artitas: 'BlackPink', albums: 'BornPink' }
let musica5 = { titulo: 'Californication', artitas: 'Red Hot Chilli Peppers', albums: 'Californication' }
let musica6 = { titulo: 'Come As You Are', artitas: 'Nirvana', albums: 'Nevermind' }
let musica7 = { titulo: 'Red Flavor', artitas: 'Red Velvet', albums: 'The Red Summer' }
let musica8 = { titulo: 'Há Tempos', artitas: 'Legião Urbana', albums: 'As Quatro Estações' }
let musica9 = { titulo: 'Akumunoomake', artitas: 'gesunokiwamiotome', albums: 'Akumunoomake' }
let musica10 = { titulo: 'Metropolis', artitas: 'ALI', albums: 'LOVE, MUSIC AND DANCE' }

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
        <div class="card"> 
            <div class= 'titulo'>${PlayList[i].titulo}</div>
            <div class= 'artista'>${PlayList[i].artitas}</div>
            <div class= 'album'>${PlayList[i].albums}</div>
        </div>
    `)
 
}