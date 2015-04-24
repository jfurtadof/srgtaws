/* API LAST.FM
ALBUM  -getInfo
ARTIST -getSimilar, getEvents
EVENT
GEO - XgetEvents
USER - getFriends,getLovedTrack,getPlaylist,getTopArtists
VENUE -getEvents
*/


int nAmigos = 20;
int nTopTracks = 20;
int nPlaylists = 20;
int nTopArtists = 20;

int[] horizontais = { nAmigos, nTopTracks, nPlaylists, nTopArtists };  
int[] verticais = { 50, 20 , 10, 10 };

float xPos, yPos;

Barras[] barrasHorizontais;
Barras[] barrasVerticais;

void setup() {
  //size($(window).width(), $(window).height());
  size(500, 500);
  fill(255, 255, 255);
}

void draw() {
  background(180, 30, 30);
    
  ////////Desenho das Barras Horizontais
  barrasHorizontais = new Barras[horizontais.length];
  for (int i=0; i<barrasHorizontais.length; i++) {
    barrasHorizontais[i] = new Barras();
  }

  for (int i=0; i<horizontais.length; i++) {

    xPos =150;
    yPos = (i*40)+150;

    barrasHorizontais[i].mudaComprimento(horizontais[i]*10);
    barrasHorizontais[i].mudaLocal(xPos, yPos);

    if (mouseX > xPos && mouseY > yPos && mouseX < xPos + horizontais[i]*10 && mouseY < yPos + 20) {
      barrasHorizontais[i].mudaAlpha(255);
    }
    
    barrasHorizontais[i].desenhaBarrasHorizontais();
  

}
  //Desenho das Barras Verticais
    barrasVerticais = new Barras[verticais.length];
  for (int i=0; i<verticais.length; i++) {
    barrasVerticais[i] = new Barras();
  }

  for (int i=0; i<verticais.length; i++) {

    xPos = (i*40)+170;
    yPos = 130;


    barrasVerticais[i].mudaComprimento(verticais[i]*10);
    barrasVerticais[i].mudaLocal(xPos, yPos);

    if (mouseX > xPos && mouseY > yPos && mouseX < xPos + 20 && mouseY < yPos + verticais[i]*10) {
      barrasVerticais[i].mudaAlpha(255);
    } 
    barrasVerticais[i].desenhaBarrasVerticais();
  } 
}

void atualizaDados(int amigos, int topTracks,int playlists, int topArtists,int w,int h){
  alert("asasas");
}

String mandaLink(){
  return link;
}

void teste(){
  alert("teste");
}


class Barras {
  float x, y, compri;  
  int r, g, b, a;

  Barras() {
    x = width/2;
    y = height/2;
    r = 255;
    g = 255;
    b = 255;
    a = 150;
  }

  void mudaLocal(float _x, float _y) {
    x = _x;
    y = _y;
  }

  void mudaComprimento(float _compri) {
    compri = _compri;
  }
  void mudaAlpha(int _a) {
    a = _a;
  }

  void desenhaBarrasHorizontais() {
    noStroke();
    fill(r, g, b, a);
    rectMode(CORNER);
    rect(x, y, compri, 20);
  }

  void desenhaBarrasVerticais() {
    noStroke();
    fill(r, g, b, a);
    rectMode(CORNER);
    rect(x, y, 20, compri);
  }
}


