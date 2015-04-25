int nAmigos = 0;
int nTopTracks = 0;
int nPlaylists = 0;
int nTopArtists = 0;
int nEventos = 0;
int nVizinhos = 0;
int nTopAlbuns = 0;
int nTopTags = 0;

int[] verticais = {
  nAmigos, nTopTracks, nPlaylists, nTopArtists, nEventos, nVizinhos, nTopAlbuns, nTopTags
};

float xPos, yPos;

Barras[] barrasVerticais = new Barra[verticais.length];

void setup() {
  size(700, 700);
  background(180, 30, 30);
}

void draw() {  

  for (int i=0; i<8; i++) {
    xPos = (i*40)+180;
    yPos = 350-(verticais[i]*5);


    barrasVerticais[i] = new Barras(verticais[i]*5);

    barrasVerticais[i].mudaLocal(xPos, yPos);

    barrasVerticais[i].desenhaBarrasVerticais();
  }
}

class Barras {
  float x, y;
  int r, g, b, compri;

  Barras(int _compri) {
    x = width/2;
    y = height/2;
    r = 255;
    g = 255;
    b = 255;
    compri = _compri;
  }

  void mudaLocal(float _x, float _y) {
    x = _x;
    y = _y;
  }

  void mudaCor(int _r, int _g, int _b) {
    r = _r;
    g = _g;
    b = _b;
  }

  void desenhaBarrasVerticais() {
    noStroke();
    fill(r, g, b);
    rectMode(CORNER);
    rect(x, y, 20, compri);
  }
}

void atualizaDados(int amigos, int topTracks, int playlists, int topArtists, int eventos, int vizinhos, int topAlbuns, int topTags) {
  nAmigos = amigos;
  nTopTracks = topTracks;
  nPlaylists = playlists;
  nTopArtists = topArtists;
  nEventos = eventos;
  nVizinhos = vizinhos;
  nTopAlbuns = topAlbuns;
  nTopTags = topTags;

 int[] verticais = { nAmigos, nTopTracks, nPlaylists, nTopArtists, nEventos, nVizinhos, nTopAlbuns, nTopTags};
}
