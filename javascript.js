// URL base para pedidos à API do Last.fm
var base_url = "http://ws.audioscrobbler.com/2.0/"

// chave API
var apikey = "5a429fc03f1015f9fe983a57b5d54e97";

// URL base para pedidos à API do Last.fm - concatenar em cada pedido com nome do método a invocar e parâmetros do mesmo
var base_request = "http://ws.audioscrobbler.com/2.0/?api_key=5a429fc03f1015f9fe983a57b5d54e97&format=json&method=";

// Nome do utilizador a analisar
var username;

function getUserInfo(){
	var data = {
		api_key: apikey,
		method: "user.getInfo",
		user: username,
		format: "json"
	};
	$.get(base_url, data).done(processUserInfo);
}

function logError() {
	alert("nop");
}

function log () {
	//alert (this);
}

function procura(){
	username = username2;
	getUserInfo();
}


function processUserInfo(info){
	if(info.error){
		log("Erro: "+info.message);
		searchAgain();
	} else {
		var name = info.user.name;
		var age = info.user.age;
		var url = info.user.url;
		var local = info.user.country;

		var tabela = document.getElementById("tabela");
		var formulario = document.getElementById("formulario");

		$('#formulario').css('display', 'none');
		$('#toPjs').css('display', 'block');
		$('#tabela').html("<a href='"+url+"'>"+name+"</a><br>"+age+" years old<table></table>");
		$.get(processUserInfo).done(getUserFriends(1));
	}
}

var proc;

var amigos = new Array();
var topTracks = new Array();
var playlists = new Array();
var topArtists = new Array();
var eventos = new Array();
var vizinhos = new Array();
var topAlbuns = new Array();
var topTags = new Array();


function addData(amigos, topTracks, playlists, topArtists, eventos, vizinhos, topAlbuns, topTags){
	proc = Processing.getInstanceById('pjs');
	proc.atualizaDados(amigos, topTracks, playlists, topArtists, eventos, vizinhos, topAlbuns, topTags);
}

function getUserFriends(pageNumber){
	var data = {
		api_key: apikey,
		method: "user.getFriends",
		user: username,
		page: pageNumber,
		limit: 50,
		format: "json"
	};
	$.get(base_url, data).done(processUserFriends);
}

function processUserFriends(data){
	for (var i = 0; i < data.friends.user.length; i++){
		amigos[i] = data.friends.user[i].name;
	}
	$.get(processUserFriends).done(getLovedTracks());
}

function getLovedTracks(pageNumber){

		var data = {
			api_key: apikey,
			method: "user.getLovedTracks",
			user: username,
			format: "json"
		};
		$.get(base_url, data).done(processLovedTracks);
}

function processLovedTracks(data){
	for (var i = 0; i < data.lovedtracks.track.length; i++){
		topTracks[i] = data.lovedtracks.track[i].name;
	}
	$.get(processUserFriends).done(getTopArtists());
}

function getPlaylists(pageNumber){

		var data = {
			api_key: apikey,
			method: "user.getPlaylists",
			user: username,
			format: "json"
		};
		$.get(base_url, data).done(processPlaylistsTracks);
}

function processPlaylistsTracks(data){
	for (var i = 0; i < data.lovedtracks.track.length; i++){
		topTracks[i] = data.lovedtracks.track[i].name;
	}
	$.get(processUserFriends).done(getTopArtists());
}

function getTopArtists(pageNumber)
{
	var data = {
		api_key: apikey,
		method: "user.getTopArtists",
		user: username,
		format: "json"
	};
	$.get(base_url, data).done(processTopArtists);
}

function processTopArtists(data){
	for (var i = 0; i < data.topartists.artist.length; i++){
		topArtists[i] = data.topartists.artist[i].name;
	}
	$.get(base_url, data).done(getUserEvents());
}

function getUserEvents()
{
	var data = {
		api_key: apikey,
		method: "user.getEvents",
		user: username,
		format: "json"
	};

	$.get(base_url, data).done(processUserEvents);
}


function processUserEvents(data){
		for (var i = 0; i < data.events.event.length; i++) {
			eventos[i] = data.events.event[i].artists.artist;
		}

		$.get(processUserNextEvents).done(getUserNeighbours);
	}
}

function getUserNeighbours()
{
	var data = {
		api_key: apikey,
		method: "user.getNeighbours",
		user: username,
		limit: 50,
		format: "json"
	};

	$.get(base_url, data).done(processUserNeighbours);
}

function processUserNeighbours(data)
{
	if (typeof data.neighbours.user.length == "number"){
		for (var i = 0; i < data.neighbours.user.length; i++) {
			vizinhos[i] = data.neighbours.user[i].name;
		}
	}
	$.get(processUserNeighbours).done(getTopAlbuns());
}

function getTopAlbuns()
{
	var data = {
		api_key: apikey,
		method: "user.getTopAlbuns",
		user: username,
		limit: 50,
		format: "json"
	};

	$.get(base_url, data).done(processTopAlbuns);
}

function processTopAlbuns(data){
	for (var i = 0; i < data.topalbuns.album.length; i++){
		topAlbuns[i] = data.topalbuns.album[i].name;
	}
	$.get(base_url, data).done(getTopTags());
}


function getTopTags()
{
	var data = {
		api_key: apikey,
		method: "user.getTopTags",
		user: username,
		limit: 50,
		format: "json"
	};

	$.get(base_url, data).done(processTopTags);
}

function processTopTags(data){
	for (var i = 0; i < data.toptags.tag.length; i++){
		topTags[i] = data.toptags.tag[i].name;
	}
	$.get(base_url, data).done(addData(amigos, topTracks, playlists, topArtists, eventos, vizinhos, topAlbuns, topTags));
}
