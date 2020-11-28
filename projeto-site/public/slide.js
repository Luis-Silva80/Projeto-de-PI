function sorteia() {
    for (var i = 0; i < 1; i++) {

        var numero_sorteado = parseInt((Math.random() * 7) + 1);

        var mirage = numero_sorteado == 1;
        var overpass = numero_sorteado == 2;
        var inferno = numero_sorteado == 3;
        var dust2 = numero_sorteado == 4;
        var nuke = numero_sorteado == 5;
        var cache = numero_sorteado == 6;


        if (mirage) {


            nome_mapa.innerHTML = 'Mirage';
            mostra('block','none','none','none','none','none','none');

            mapmirage();


        } else if (overpass) {

            nome_mapa.innerHTML = 'Overpass';

            mostra('none','block','none','none','none','none','none');
            mapoverpass();
        } else if (inferno) {

            nome_mapa.innerHTML = 'Inferno';

            mostra('none','none','block','none','none','none','none');
            mapInferno();
        } else if (dust2) {

            nome_mapa.innerHTML = 'Dust2';

            mostra('none','none','none','block','none','none','none');
            mapDust2();
        } else if (nuke) {

            
            nome_mapa.innerHTML = 'Nuke';

            mostra('none','none','none','none','block','none','none');
            mapNuke();

        } else if (cache) {

            
            nome_mapa.innerHTML = 'Cache';

            mostra('none','none','none','none','none','block','none');
            mapCache();

        } else {

            
            nome_mapa.innerHTML = 'Train';

            mostra('none','none','none','none','none','none','block');
            mapTrain();

        }
    }
}


function mostra(a,b,c,d,e,f,g) {
    img_mapas.style.display = a;
    img_mapas2.style.display = b;
    img_mapas3.style.display = c;
    img_mapas4.style.display = d;
    img_mapas5.style.display = e;
    img_mapas6.style.display = f;
    img_mapas7.style.display = g;

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

function overpassB() {
    img_mapas2.src = './imgs/overpass-bB.jpg';
    setTimeout("mapoverpass()", intervalo);
}





function mapInferno() {
    img_mapas3.src = './imgs/map-inferno.jpg';
    setTimeout("infernoA()", intervalo);
}

function infernoA() {
    img_mapas3.src = './imgs/inferno-bA.png';
    setTimeout("infernoMeio()", intervalo);
}

function infernoMeio() {
    img_mapas3.src = './imgs/inferno-meio.jpg';
    setTimeout("infernoBanana()", intervalo);
}

function infernoBanana() {
    img_mapas3.src = './imgs/inferno-banana.jpg';
    setTimeout("infernoB()", intervalo);
}

function infernoB() {
    img_mapas3.src = './imgs/inferno-bB.jpg';
    setTimeout("mapInferno()", intervalo);
}




function mapDust2(){
    img_mapas4.src = './imgs/map-d2.jpg';
    setTimeout("d2A()", intervalo);
}

function d2A(){
    img_mapas4.src = './imgs/d2-bA.jpg';
    setTimeout("d2Fundo()", intervalo);
}

function d2Fundo(){
    img_mapas4.src = './imgs/d2-fundo.jpg';
    setTimeout("d2meioTR()", intervalo);
}

function d2meioTR(){
    img_mapas4.src = './imgs/d2-meioTR.jpg';
    setTimeout("d2meioCT()", intervalo);
}

function d2meioCT(){
    img_mapas4.src = './imgs/d2-meioCT.jpg';
    setTimeout("d2B()", intervalo);
}

function d2B(){
    img_mapas4.src = './imgs/d2-bB.jpg';
    setTimeout("mapDust2()", intervalo);
}






function mapNuke(){
    img_mapas5.src = './imgs/map-nuke.jpg';
    setTimeout("nukeA()", intervalo);
}

function nukeA(){
    img_mapas5.src = './imgs/nuke-bA.jpg';
    setTimeout("nukeMiolo()", intervalo);
}

function nukeMiolo(){
    img_mapas5.src = './imgs/nuke-miolo.jpg';
    setTimeout("nukeFora()", intervalo);
}

function nukeFora(){
    img_mapas5.src = './imgs/nuke-fora.jpg';
    setTimeout("nukeB()", intervalo);
}

function nukeB(){
    img_mapas5.src = './imgs/nuke-bB.jpg';
    setTimeout("mapNuke()", intervalo);
}




function mapCache(){
    img_mapas6.src = './imgs/map-cache.jpg';
    setTimeout("cacheA()", intervalo);
}

function cacheA(){
    img_mapas6.src = './imgs/cache-bA.jpg';
    setTimeout("cacheTR()", intervalo);
}

function cacheTR(){
    img_mapas6.src = './imgs/cache-meioTR.jpg';
    setTimeout("cacheMeio()", intervalo);
}

function cacheMeio(){
    img_mapas6.src = './imgs/cache-meio.jpg';
    setTimeout("cacheB()", intervalo);
}

function cacheB(){
    img_mapas6.src = './imgs/cache-bB.jpg';
    setTimeout("mapCache()", intervalo);
}




function mapTrain(){
    img_mapas7.src = './imgs/map-train.jpg';
    setTimeout("trainA()", intervalo);
}


function trainA(){
    img_mapas7.src = './imgs/train-bA.jpg';
    setTimeout("trainFundo()", intervalo);
}

function trainFundo(){
    img_mapas7.src = './imgs/train-fundo.jpg';
    setTimeout("trainB()", intervalo);
}

function trainB(){
    img_mapas7.src = './imgs/train-bB.jpg';
    setTimeout("mapTrain()", intervalo);
}