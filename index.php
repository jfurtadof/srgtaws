<!DOCTYPE html><html><head>	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">	<meta name="keywords" content="html5,css3,javascript,processing,SérgioMartins©">	<title>TAENIA</title>	<!-- jQuery -->	<script type="text/javascript" src="jquery-1.11.0.min.js"></script>	<!-- Processing.js -->	<script type="text/javascript" src="processing-1.4.8.min.js"></script>	<!-- Ficheiro JavaScript -->	<script type="text/javascript" src="javascript.js"></script>	<link rel="stylesheet" type="text/css" href="css/style.css"></head><body>	<div id="header" class="teamlogo">		<img src="images/logo.png" alt="Logo">	</div>	<div id="formulario" class="fo">		<form action="#" method="post" id="login">			<input type="text" id="fname" placeholder="Last.fm username"><br>			<input type="submit" value="submit" id="submit">		</form>	</div><script>$(function() {	$('#login').submit(function (event) {		// o evento default que acontece neste metodo não é chamado (não vai para o action do form)		event.preventDefault();		username = $("#fname").val();		getUserInfo();		var url = "profile.php?s="+username;						window.location.assign(url);	});});</script></body></html>