<html>
<head>
<title>CONFORT ZONE</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<script type="text/javascript" src="jquery-1.11.0.min.js"></script>

<!-- Processing.js -->
<script type="text/javascript" src="processing-1.4.1.min.js"></script>

<script type="text/javascript" src="javascript.js"></script>

<link rel="stylesheet" type="text/css" href="style.css">


</head>
<body>


<script>
var username2 ;
$(document).ready(function(){
	username2 = <?echo '"'.$_GET[s].'"';?>;

   //alert(username2);
   //document.write(username2);
   procura();

});
</script>
<div class="fundo">
		<div id="toPjs">
			<canvas id="pjs" data-processing-sources="background/background.pde"></canvas>
		</div>
</div>
<div class="corpo">

	<div id="tabela">
	</div>
	<div id="tags"></div>

	<div class="dados">
		<div id="quad"></div>
		<div id="amigos"></div>
		<div id="vizinhos"></div>
		<div id="topartists"></div>
		<div id="generos"></div>

		<div id="insert"></div>

		<div id="toPjs2">
			<!-- <canvas id="pjs2" data-processing-sources="zonadeconforto/zonadeconforto.pde" style="width: 100%; height: 1200px;  margin-top: 0px; padding-top: 0px;" ></canvas>
			-->
			<canvas id="pjs2" data-processing-sources="zona/zona.pde"></canvas>
		</div>
	</div>
</div>


</body>
</html>
