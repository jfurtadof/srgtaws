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






var proc;

var estado2 = new Boolean();

var b = new Array();
var v = new Array();
var a = new Array();

var tamanho = new Array();
var tamanhoV = new Array();

var tamanho2;



function addCenas(b,v,a,tamanho,tamanhoV,tamanho2){
	proc = Processing.getInstanceById('pjs2');	
	proc.enche(b,v,a,tamanho,tamanhoV,tamanho2);
}

function recebeLink(){
	proc = Processing.getInstanceById('pjs2');	
	var li = proc.mandaLink();
	return li;
}







/*
function recebeEstado(){
	proc = Processing.getInstanceById('pjs2');	
	estado2 = proc.mandaEstado();
	return estado2;
}
*/







function vaiArtist(artist) {
	window.location.assign('banda.php?s='+artist);
}

function vaiPessoa(pessoa) {
	window.location.assign('profile.php?s='+pessoa);
}

function vaiAmigo(amigo) {
	window.location.assign('profile.php?s='+amigo);
}




/*

var timer = setInterval(function(){timer2();},7000);

function timer2(){
	recebeEstado();
}


function transEstado(estado2){
	if (estado2 == true){
		alert("oi");
		window.location.assign(google.com);
		estado2 = false;
		proc = Processing.getInstanceById('pjs2');	
		proc.esTransformado(estado2);
	}
}
*/






var proc2;



var f = new Array();
var t = new Array();

function addCenas2(f,t){
	proc2 = Processing.getInstanceById('pjs4');	
	proc2.enche2(f,t);
}






$(document).ready(function(){
	$("#quad").click(function(){
		var s = recebeLink();
		document.location.href = s;
	});

	$( "#pjs2" ).click(function() {
		proc = Processing.getInstanceById('pjs2');
		var artistaB = proc.mandaEstadoB();
		var pessoaV = proc.mandaEstadoV();
		var amigoA = proc.mandaAmigoA();
		
		
		for (var i = 0; i < b.length; i++){
			if(proc.mandaEstadoB() == b[i]){
				vaiArtist(artistaB);
			}
			else if(proc.mandaEstadoV() == v[i]){
				vaiPessoa(pessoaV);
			}
			else if(proc.mandaAmigoA() == a[i]){
				vaiAmigo(amigoA);
			}
		}	 	
	});
});





function procura()
{
	//username = $("#name").val();
	username = username2;
	searching();
	getUserInfo();
}









function getUserInfo()
{
	var data = {
        api_key: apikey,
        method: "user.getInfo",
        user: username,
        format: "json"
    };
    
    $.get(base_url, data).done(processUserInfo).fail(logError("obter info do utilizador "+username));

    getUserFriends(1);
	getTopArtists();
	getTopTags();
	getUserNeighbours();
	//timer2();
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
	$('#tabela').html("<a href='"+url+"'>"+name+"</a><br>"+age+" years old<table></table>");
	
	}

	
}















//-----------------------------------------------AMIGOS
function getUserFriends(pageNumber)
{
	var data = {
		api_key: apikey,
		method: "user.getFriends",
		user: username,
		page: pageNumber,
		limit: 50,
		format: "json"
	};

	$.get(base_url, data).done(processUserFriends).fail(logError("obter amigos do utilizador "+username));

}


function processUserFriends(data)
{
	if(data.friends.total){
		log("Utilizador "+username+"não tem amigos");
		searchAgain();
		return;
	}

	var list = '<ol>';
	for (var i = 0; i < data.friends.user.length; i++) {
	    list += '<li><a href="profile.php?s='+data.friends.user[i].name +'">' + data.friends.user[i].name + '</a></li>';
		a[i] = data.friends.user[i].name;
	}

	//document.getElementById('amigos').innerHTML = list + '</ol>';
}


















//-----------------------------------------------VIZINHOS
function getUserNeighbours()
{
	var data = {
		api_key: apikey,
		method: "user.getNeighbours",
		user: username,
		limit: 50,
		format: "json"
	};

	$.get(base_url, data).done(processUserNeighbours).fail(logError("obter amigos do utilizador "+username));
}

function processUserNeighbours(data)
{
	var list = '<ol>';
	for (var i = 0; i < 50; i++) {
	    list += '<li><a href="profile.php?s='+data.neighbours.user[i].name+'">' + data.neighbours.user[i].name + ' - ' + data.neighbours.user[i].match + '</a></li>';
		v[i] = data.neighbours.user[i].name;
		tamanhoV[i] = data.neighbours.user[i].match;

		if (tamanhoV[i] > 0 && tamanhoV[i] < 0.991){
			tamanhoV[i] = 0;
		}
		else if (tamanhoV[i] > 0.991 && tamanhoV[i] < 0.992){
			tamanhoV[i] = 0;
		}
		else if (tamanhoV[i] > 0.992 && tamanhoV[i] < 0.993){
			tamanhoV[i] = 5;
		}
		else if (tamanhoV[i] > 0.993 && tamanhoV[i] < 0.994){
			tamanhoV[i] = 5;
		}
		else if (tamanhoV[i] > 0.994 && tamanhoV[i] < 0.995){
			tamanhoV[i] = 5;
		}
		else if (tamanhoV[i] > 0.995 && tamanhoV[i] < 0.996){
			tamanhoV[i] = 5;
		}
		else if (tamanhoV[i] > 0.996 && tamanhoV[i] < 0.997){
			tamanhoV[i] = 10;
		}
		else if (tamanhoV[i] > 0.997 && tamanhoV[i] < 0.998){
			tamanhoV[i] = 30;
		}
		else if (tamanhoV[i] > 0.998 && tamanhoV[i] < 0.999){
			tamanhoV[i] = 50;
		}
		else if (tamanhoV[i] > 0.999){
			tamanhoV[i] = 70;
		}
		else{
			tamanhoV[i] = 30;
		}
	}

	//document.getElementById('vizinhos').innerHTML = list + '</ol>';
}
























//-----------------------------------------------BANDAS MAIS OUVIDAS 

function getTopArtists(pageNumber)
{
	var data = {
		api_key: apikey,
		method: "user.getTopArtists",
		user: username,
		format: "json"
	};

	$.get(base_url, data).done(processTopArtists).fail(logError("Bandas mais ouvidas por "+username));
	
}


function processTopArtists(data)
{
	var list = '<ol>';
	for (var i = 0; i < data.topartists.artist.length; i++) {
	    list += '<li><a href="banda.php?s='+data.topartists.artist[i].name+'">' + data.topartists.artist[i].name + ' - ' + data.topartists.artist[i].playcount + '</a></li>';
		b[i] = data.topartists.artist[i].name;
		tamanho[i] = data.topartists.artist[i].playcount;
		tamanho2 = data.topartists.artist[0].playcount;

		if (tamanho[i] > 0 && tamanho[i] < 100){
			tamanho[i] = 10;
		}
		else if (tamanho[i] > 100 && tamanho[i] < 200){
			tamanho[i] = 15;
		}
		else if (tamanho[i] > 201 && tamanho[i] < 300){
			tamanho[i] = 25;
		}
		else if (tamanho[i] > 301 && tamanho[i] < 600){
			tamanho[i] = 35;
		}
		else if (tamanho[i] > 601 && tamanho[i] < 900){
			tamanho[i] = 40;
		}
		else if (tamanho[i] > 901 && tamanho[i] < 1200){
			tamanho[i] = 45;
		}
		else if (tamanho[i] > 1201 && tamanho[i] < 1500){
			tamanho[i] = 50;
		}
		else if (tamanho[i] > 1501 && tamanho[i] < 1800){
			tamanho[i] = 55;
		}
		else if (tamanho[i] > 1801 && tamanho[i] < 2100){
			tamanho[i] = 60;
		}
		else if (tamanho[i] > 2101 && tamanho[i] < 2400){
			tamanho[i] = 65;
		}
		else if (tamanho[i] > 2401 && tamanho[i] < 2700){
			tamanho[i] = 70;
		}
		else if (tamanho[i] > 2701){
			tamanho[i] = 75;
		}
		else{
			tamanho[i] = 50;
		}



		if (tamanho2 > 0 && tamanho2 < 300){
			tamanho2 = 70; 
		}
		else if (tamanho2 > 301 && tamanho2 < 600){
			tamanho2 = 80; 
		}
		else if (tamanho2 > 601 && tamanho2 < 900){
			tamanho2 = 90; 
		}
		else if (tamanho2 > 901 && tamanho2 < 1200){
			tamanho2 = 100; 
		}
		else if (tamanho2 > 1201 && tamanho2 < 1500){
			tamanho2 = 120; 
		}
		else if (tamanho2 > 1501 && tamanho2 < 1800){
			tamanho2 = 130; 
		}
		else if (tamanho2 > 1801 && tamanho2 < 2100){
			tamanho2 = 140; 
		}
		else if (tamanho2 > 2101 && tamanho2 < 2400){
			tamanho2 = 150; 
		}
		else if (tamanho2 > 2401 && tamanho2 < 2700){
			tamanho2 = 160; 
		}
		else if (tamanho2 > 2701 && tamanho2 < 3000){
			tamanho2 = 180; 
		}
		else if (tamanho2 > 3001 && tamanho2 < 3300){
			tamanho2 = 190; 
		}
		else if (tamanho2 > 3301 && tamanho2 < 3600){
			tamanho2 = 200; 
		}
		else{
			tamanho2 = 130;
		}
	}

	//document.getElementById('topartists').innerHTML = list + '</ol>';
	addCenas(b,v,a,tamanho,tamanhoV,tamanho2); 
}


















//-----------------------------------------------TAGS 

function getTopTags()
{
	var data = {
		api_key: apikey,
		method: "user.getTopTags",
		user: username,
		format: "json"
	};

	$.get(base_url, data).done(processTopTags).fail(logError("generos mais ouvidos por "+username));
	
}

function processTopTags(data)
{
	var list = '<ol>';
	for (var i = 0; i < 20; i++) {
	    list += '<li><a href="http://www.last.fm/tag/'+data.toptags.tag[i].name+'">' + "- " + data.toptags.tag[i].name + '</a></li>';
	}

	if(data.toptags.tag.length > 0){
		document.getElementById('tags').innerHTML ='<b>' + "tags" + '</b>' + '<br><br>' + list + '</ol>';
	}
}




























// PARTE DE PROCURA E ETC ----------------------------------
function log(message)
{
	$("#status").append(message + "<br/>");
}

function logError(actividade)
{
	return function(data)
	{
		//$("#status").append("Erro ao " + actividade + ": " + data.statusText + "<br/>");
	}
}


function searching()
{
	//$("#procura").hide();
	//$(".load").show();
	//$("#status").empty();
	
	log("Procurando informação sobre " + username); 
}

function searchAgain()
{
	$("#procura").show();
	$("#load").hide();
}

/*function updateTable()
{
	$("#load").hide();
	$("#tabela>table").empty();
	$("#tabela>table").append("<tr><th>Amigo</th><th>Pontuação</th></tr>");
	for(nome in amigos)
		$("#tabela>table").append("<tr><td>" + nome + "</td><td>" + amigos[nome] + "</td></tr>");
		
	$("#tabela>table>tbody>tr>*").css("border", "1px solid");
	$("#tabela>table>tbody>tr>td:first-child").width("150px");
	$("#tabela>table>tbody>tr>td:last-child").width("60px");
}

*/
































































