int nAmigos = 20;
int nTopTracks = 20;
int nPlaylists = 20;
int nTopArtists = 20;
int nEventos = 20;
int nVizinhos = 20;
int nTopAlbuns = 20;
int nTopTags = 20;

int[] horizontais = {
  nAmigos, nTopTracks, nPlaylists, nTopArtists, nEventos, nVizinhos, nTopAlbuns, nTopTags
};

float xPos, yPos;

Barras[] barrasHorizontais = new Barra[horizontais.length];

void setup() {
  size(700, 700);
//  background(180, 30, 30);
  background(0, 0, 255);
}

void draw() {
  for (int i=0; i<8; i++) {
    xPos = 225;
    yPos = (i*40)+150;

    barrasHorizontais[i] = new Barras(horizontais[i]*5);

    barrasHorizontais[i].mudaLocal(xPos, yPos);

    if (mouseX > xPos && mouseY > yPos && mouseX < xPos + horizontais[i]*10 && mouseY < yPos + 20) {
      barrasHorizontais[i].mudaAlpha(255);
    }
    barrasHorizontais[i].desenhaBarrasHorizontais();
  }
}


class Barras {
  float x, y;
  int r, g, b, a, compri;

  Barras(int _compri) {
    x = width/2;
    y = height/2;
    r = 255;
    g = 255;
    b = 255;
    a = 150;
    compri = _compri;
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

void atualizaDados(int amigos, int topTracks, int playlists, int topArtists, int eventos, int vizinhos, int topAlbuns, int topTags) {
  /*nAmigos = amigos;
  nTopTracks = topTracks;
  nPlaylists = playlists;
  nTopArtists = topArtists;
  nEventos = eventos;
  nVizinhos = vizinhos;
  nTopAlbuns = topAlbuns;
  nTopTags = topTags;*/

  //horizontais = { nAmigos, nTopTracks, nPlaylists, nTopArtists, nEventos, nVizinhos, nTopAlbuns, nTopTags };
  alert(horizontais);
}
