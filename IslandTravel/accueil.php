<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width">
		<title>islandtravel/accueil</title>
		<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="css/accueil.css" />
		<link rel="stylesheet" href="css/slider.css">
		<link rel="stylesheet" href="css/slider_responsive.css">
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="js/modernizr.custom.js"></script>
		<script src="js/fonctionscroll.js"></script>
		<script src="js/jquery.mixitup.min.js"></script>
		<script src="js/jquery.mixitup.js"></script>
		<script src="js/test.js"></script>
		<script src="js/jquery.slides.min.js"></script>
		<script src="js/slider.js"></script>
		<script src="js/mappemonde.js"></script>
		

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>	
    <script src="http://maps.google.com/maps/api/js?sensor=false"type="text/javascript"></script>
	<link rel="stylesheet" href="css/mappemonde.css"/>
		
		
	<script type="text/javascript">
      var script = '<script type="text/javascript" src="http://google-maps-' +
          'utility-library-v3.googlecode.com/svn/trunk/infobubble/src/infobubble';
      if (document.location.search.indexOf('compiled') !== -1) {
        script += '-compiled';
      }
      script += '.js"><' + '/script>';
      document.write(script); 
    </script>
	
	
	</head>
<body>

<div class="toppage">
	<?PHP include ('menuaccueil.php'); ?>
</div>

<div class="fondcontainer">

<div class="tfc">Actualités</div>

<div class="container">
    <div id="slides">
      <img src="images/slide1.png">
      <img src="images/slide2.png">
      <img src="images/slide3.png">
      <img src="images/slide4.png">
    </div>
  </div>
  
  <div class="fondmap">
  <div class="tfc1">Trouvez votre destinations</div>
  <div id="map"></div>
  </div>
  
</div>

	<?PHP include ('footer.php'); ?>

 <style>
    
  </style>
	
</body>
</html>