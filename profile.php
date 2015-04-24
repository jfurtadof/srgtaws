<html>
<head>
<title>FACIO</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<script type="text/javascript" src="jquery-1.11.0.min.js"></script>
<!-- Processing.js -->
<script type="text/javascript" src="processing-1.4.1.min.js"></script>

<link rel="stylesheet" type="text/css" href="style.css">

<script type="text/javascript" src="javascript.js"></script>

</head>
<body>


<script>
var username2 ;
$(document).ready(function(){
	username2 = <?echo '"'.$_GET[s].'"';?>;

   alert(username2);
   //document.write(username2);
   procura();

});
</script>

<div class="corpo">


	<div id="fundo">
		<div id="toPjs">
			<canvas id="pjs" data-processing-sources="facio/facio.pde"></canvas>
		</div>
	</div>

	<div id="tabela"></div>


</div>

</body>
</html>
