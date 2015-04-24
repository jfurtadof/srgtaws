// URL base para pedidos à API do Last.fm
var base_url = "http://ws.audioscrobbler.com/2.0/"

// chave API
var apikey = "5a429fc03f1015f9fe983a57b5d54e97";

// URL base para pedidos à API do Last.fm - concatenar em cada pedido com nome do método a invocar e parâmetros do mesmo
var base_request = "http://ws.audioscrobbler.com/2.0/?api_key=5a429fc03f1015f9fe983a57b5d54e97&format=json&method=";


// Nome do utilizador a analisar
var username;

// Array associativo com nome do utilizador como chave e valor de amizade como valor
var amigos = {};

var banda;

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
	}
	else{

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
var w = new Array();
var h = new Array();

function addData(amigos, topTracks, playlists, topArtists, w, h){
	proc = Processing.getInstanceById('pjs');
	proc.atualizaDados(amigos, topTracks, playlists, topArtists, w, h);
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
	$.get(base_url, data).done(addData(amigos.length, topTracks, playlists, topArtists, w, h));
}
