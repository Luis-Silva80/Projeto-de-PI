function sorteia() {
    for (var i = 0; i < 1; i++) {
        div_sorteio.innerHTML = '';
        var numero_sorteado = parseInt((Math.random() * 7) + 1);

        var mirage = numero_sorteado == 1;
        var overpass = numero_sorteado == 2;
        var inferno = numero_sorteado == 3;
        var dust2 = numero_sorteado == 4;
        var nuke = numero_sorteado == 5;
        var cache = numero_sorteado == 6;


        div_sorteio.innerHTML += `${numero_sorteado}<br>`

        if (mirage) {


            nome_mapa.innerHTML = 'Mirage';
            resultado.innerHTML = 'mirage';

            img_mapas.style.display = 'block';
            img_mapas2.style.display = 'none';
            img_mapas3.style.display = 'none';
            mapmirage();


        } else if (overpass) {

            nome_mapa.innerHTML = 'Overpass';
            resultado.innerHTML = 'overpass';

            img_mapas.style.display = 'none';
            img_mapas2.style.display = 'block';
            img_mapas3.style.display = 'none';

            mapoverpass();
        } else if (inferno) {

            nome_mapa.innerHTML = 'Inferno';
            resultado.innerHTML = 'inferno';

            img_mapas.style.display = 'none';
            img_mapas2.style.display = 'none';
            img_mapas3.style.display = 'block';

            mapInferno();
        } else if (dust2) {

            nome_mapa.innerHTML = 'Dust2';
            img_mapas.src = './imgs/map-d2.jpg';
            resultado.innerHTML = 'dust2';
        } else if (nuke) {

            img_mapas.src = './imgs/map-nuke.jpg';
            nome_mapa.innerHTML = 'Nuke';
            resultado.innerHTML = 'nuke';
        } else if (cache) {

            img_mapas.src = './imgs/map-cache.jpg';
            nome_mapa.innerHTML = 'Cache';
            resultado.innerHTML = 'Cache';
        } else {

            img_mapas.src = './imgs/map-train.jpg';
            nome_mapa.innerHTML = 'Train';
            resultado.innerHTML = 'train';
        }
    }
}


var intervalo = 2000;

function mapmirage() {
    img_mapas.src = './imgs/map-mirage.jpg';
    setTimeout("mirageA()", intervalo);
}

function mirageA() {
    img_mapas.src = './imgs/mirage-bA.jpg';
    setTimeout("mirageMeio()", intervalo);
}

function mirageMeio() {
    img_mapas.src = './imgs/mirage-meio.jpg';
    setTimeout("mirageB()", intervalo);
}

function mirageB() {
    img_mapas.src = './imgs/mirage-bB.jpg';
    setTimeout("mirageCold()", intervalo);
}
function mirageCold() {
    img_mapas.src = './imgs/mirage-bB-cold.jpg';
    setTimeout("mapmirage()", intervalo);
}






function mapoverpass() {
    img_mapas2.src = './imgs/map-overpass.jpg';
    setTimeout("overpassA()", intervalo);
}

function overpassA() {
    img_mapas2.src = './imgs/overpass-bA.jpg';
    setTimeout("overpassRua()", intervalo);
}

function overpassRua() {
    img_mapas2.src = './imgs/overpass-rua.jpg';
    setTimeout("overpassFundo()", intervalo);
}

function overpassFundo() {
    img_mapas2.src = './imgs/overpass-fundo.jpg';
    setTimeout("overpassB()", intervalo);
}

function overpassB(){
    img_mapas2.src = './imgs/overpass-bB.jpg';
    setTimeout("mapoverpass()", intervalo);
}





function mapInferno(){
    img_mapas3.src = './imgs/map-inferno.jpg';
    setTimeout("infernoA()", intervalo);
}

function infernoA(){
    img_mapas3.src = './imgs/inferno-bA.png';
    setTimeout("infernoMeio()", intervalo);
}

function infernoMeio(){
    img_mapas3.src = './imgs/inferno-meio.jpg';
    setTimeout("infernoBanana()", intervalo);
}

function infernoBanana(){
    img_mapas3.src = './imgs/inferno-banana.jpg';
    setTimeout("infernoB()", intervalo);
}

function infernoB(){
    img_mapas3.src = './imgs/inferno-bB.jpg';
    setTimeout("mapInferno()", intervalo);
}