// URL base para pedidos à API do Last.fm
var base_url = "http://ws.audioscrobbler.com/2.0/"

// chave API
var apikey = "d12e1581683ed053db4bbe44c615ac37";

// URL base para pedidos à API do Last.fm - concatenar em cada pedido com nome do método a invocar e parâmetros do mesmo
var base_request = "http://ws.audioscrobbler.com/2.0/?api_key=d12e1581683ed053db4bbe44c615ac37&format=json&method=";


// Nome do utilizador a analisar
var username;

// Array associativo com nome do utilizador como chave e valor de amizade como valor
var amigos = {};

var banda;


function getUserInfo()
{
	var data = {
        api_key: apikey,
        method: "user.getInfo",
        user: username,
        format: "json"
    };

		alert ("antes do ajax");
    $.get(base_url, data).done(processUserInfo).fail(logError("obter info do utilizador "+username));
		alert(username);
}


function logError() {
	alert (this);
}

function log () {
	alert (this);
}

function processUserInfo(info)
{
	if(info.error){
		log("Erro: "+info.message);
		searchAgain();
	}
	else{

	var name = info.user.name;
	var age = info.user.age;
	var url = info.user.url;
	var local = info.user.country;

	//var tabela = document.getElementById("tabela");
	//$('#tabela').html("<a href='"+url+"'>"+name+"</a><br>"+age+" years old<table></table>");

	}
}
