/* API LAST.FM
 ALBUM  -getInfo
 ARTIST -getSimilar, getEvents
 EVENT
 GEO - XgetEvents
 USER - getFriends,getLovedTrack,getPlaylist,getTopArtists
 VENUE -getEvents
 */
 
int nAmigos = 0;
int nTopTracks = 0;
int nPlaylists = 0;
int nTopArtists = 0;
 
int[] horizontais = { 
nAmigos, nTopTracks, nPlaylists, nTopArtists};  

float xPos, yPos;

Barras[] barrasHorizontais = new Barra[horizontais.length];
Barras[] barrasVerticais;

void setup() {
  size(500, 500);
  fill(255, 255, 255);
}

void draw() {
  background(180, 30, 30);

  ////////Desenho das Barras Horizontais
  /*barrasHorizontais = new Barras[horizontais.length];
  for (int i=0; i<barrasHorizontais.length; i++) {
    barrasHorizontais[i] = new Barras(horizontais[i]);
  }*/

  for (int i=0; i<1; i++) {
    xPos = 150;
    yPos = (i*40)+150;
    
    barrasHorizontais[i] = new Barras(amigos[i]);

    barrasHorizontais[i].mudaLocal(xPos, yPos);

    if (mouseX > xPos && mouseY > yPos && mouseX < xPos + horizontais[i]*10 && mouseY < yPos + 20) {
      barrasHorizontais[i].mudaAlpha(255);
    }
    barrasHorizontais[i].desenhaBarrasHorizontais();
  }
}


class Barras {
  float x, y;  
  int r, g, b, a;

  Barras(int compri) {
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

void atualizaDados(int amigos, int topTracks, int playlists, int topArtists, int w, int h) { 
  alert(amigos);
  nAmigos = amigos;
  nTopTracks = topTracks;
  nPlaylists = playlists;
  nTopArtists = topArtists;
}


