 $(document).ready(function () {
$(function () {
 
 var locations = [
	
	  ['<div id=nom>Tahiti</div> </br> <div id=tahiti><img id=img1 src="images/Tahiti/1.png"> <img id=img2 src="images/Tahiti/2.png"> <img id=img3 src="images/Tahiti/3.png"> <img id=img4 src="images/Tahiti/4.png"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#tahiti">Présentation de la destination</a></div>', -17.730908, -149.353358, 17],
	  ['<div id=nom>Corse</div> </br> <div id=corse> <img id=img1 src="images/Corse/1.jpg"> <img id=img2 src="images/Corse/2.jpg"> <img id=img3 src="images/Corse/3.jpg"> <img id=img4 src="images/Corse/4.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#corse">Aperçu de la destination</a></div>' , 42.106816, 8.888987, 16],
	  ['<div id=nom>Hawaï</div>  </br> <div id=hawai>  <img id=img1 src="images/Hawaï/1.png"> <img id=img2 src="images/Hawaï/2.png"> <img id=img3 src="images/Hawaï/3.png"> <img id=img4 src="images/Hawaï/4.png"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#hawaii">Aperçu de la destination</a></div>', 20.011594, -155.675777, 15],
	  ['<div id=nom>Bora Bora</div>  </br> <div id=bora_bora><img id=img1 src="images/Bora-bora/1.jpg"> <img id=img2 src="images/Bora-bora/2.jpg"> <img id=img3 src="images/Bora-bora/3.jpg"> <img id=img4 src="images/Bora-bora/6.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#borabora">Aperçu de la destination</a></div>', -16.491024, -151.741233, 14],
	  ['<div id=nom>Bahamas</div>  </br> <div id=bahamas><img id=img1 src="images/Bahamas/1.png"> <img id=img2 src="images/Bahamas/2.png"> <img id=img3 src="images/Bahamas/3.png"> <img id=img4 src="images/Bahamas/4.png"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#bahamas">Aperçu de la destination</a></div>', 25.055805, -77.392248, 13],
	  ['<div id=nom>République Dominicaine</div>  </br> <div id=republique_dominicaine><<img id=img1 src="images/République_Dominicaine/1.jpg"> <img id=img2 src="images/République_Dominicaine/2.jpg"> <img id=img3 src="images/République_Dominicaine/3.jpg"> <img id=img4 src="images/République_Dominicaine/4.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(islandtravel)/destinations.php#repdominicaine">Aperçu de la destination</a></div>', 19.580511, -69.888054, 12],
	  ['<div id=nom>Ibiza</div>  </br> <div id=ibiza><img id=img1 src="images/Ibiza/1.jpg"> <img id=img2 src="images/Ibiza/2.jpg"> <img id=img3 src="images/Ibiza/3.jpg"> <img id=img4 src="images/Ibiza/4.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#ibiza">Aperçu de la destination</a></div>', 39.218190, 1.347020, 11],
	  ['<div id=nom>Réunion</div>  </br> <div id=reunion><img id=img1 src="images/Réunion/1.jpg"> <img id=img2 src="images/Réunion/2.jpg"> <img id=img3 src="images/Réunion/3.jpg"> <img id=img4 src="images/Réunion/4.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#reunion">Aperçu de la destination</a></div>', -20.910843, 55.505193, 10],
	  ['<div id=nom>Ile Maurice</div>  </br> <div id=ile_maurice><img id=img1 src="images/Ile_Maurice/1.jpg"> <img id=img2 src="images/Ile_Maurice/2.jpg"> <img id=img3 src="images/Ile_Maurice/3.jpg"> <img id=img4 src="images/Ile_Maurice/4.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#maurice">Aperçu de la destination</a></div>', -20.178295, 57.513452, 9],
	  ['<div id=nom>Seychelles</div>  </br> <div id=seychelles><img id=img1 src="images/Seychelles/1.jpg"> <img id=img2 src="images/Seychelles/2.jpg"> <img id=img3 src="images/Seychelles/3.jpg"> <img id=img4 src="images/Seychelles/4.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#seychelles">Aperçu de la destination</a></div>', -4.778663, 55.462181, 8],
	  ['<div id=nom>Nouvelle Zélande</div>  </br> <div id=nouvelle_zelande><img id=img1 src="images/Nouvelle_Zélande/1.png"> <img id=img2 src="images/Nouvelle_Zélande/2.png"> <img id=img3 src="images/Nouvelle_Zélande/3.png"> <img id=img4 src="images/Nouvelle_Zélande/4.png"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#nouvellezelande">Aperçu de la destination</a></div>', -41.139465, 174.515505, 7],
	  ['<div id=nom>Bali</div>  </br> <div id=bali><img id=img1 src="images/Bali/1.jpg"> <img id=img2 src="images/Bali/2.jpg"> <img id=img3 src="images/Bali/3.jpg"> <img id=img4 src="images/Bali/6.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#bali">Aperçu de la destination</a></div>', -8.348422, 115.059432, 6],
      ['<div id=nom>Crête</div>  </br> <div id=crete><img id=img1 src="images/Crête/1.jpg"> <img id=img2 src="images/Crête/2.jpg"> <img id=img3 src="images/Crête/3.jpg"> <img id=img4 src="images/Crête/4.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#crete">Aperçu de la destination</a></div>', 35.372705, 24.738792, 5],
      ['<div id=nom>Fidji</div>  </br> <div id=fidji><img id=img1 src="images/Fidji/1.jpg"> <img id=img2 src="images/Fidji/2.jpg"> <img id=img3 src="images/Fidji/3.jpg"> <img id=img4 src="images/Fidji/4.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#fidji">Aperçu de la destination</a></div>', -17.666734, 177.582890, 4],
      ['<div id=nom>Guadeloupe</div>  </br> <div id=guadeloupe><img id=img1 src="images/Guadeloupe/1.jpg"> <img id=img2 src="images/Guadeloupe/2.jpg"> <img id=img3 src="images/Guadeloupe/3.jpg"> <img id=img4 src="images/Guadeloupe/4.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#guadeloupe">Aperçu de la destination</a></div>', 16.284514, -61.701321, 3],
      ['<div id=nom>Gualapagos</div>  </br> <div id=gualapagos><img id=img1 src="images/Galapagos/1.png"> <img id=img2 src="images/Galapagos/2.png"> <img id=img3 src="images/Galapagos/3.png"> <img id=img4 src="images/Galapagos/4.png"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#galapagos">Aperçu de la destination</a></div>', -0.639379, -91.003384, 2],
      ['<div id=nom>Maldives</div>  </br> <div id=maldives><img id=img1 src="images/Maldives/1.jpg"> <img id=img2 src="images/Maldives/2.jpg"> <img id=img3 src="images/Maldives/3.jpg"> <img id=img4 src="images/Maldives/4.jpg"></div> <div id=offres><a href="http://localhost/workspace(it)/offres.php">Découvrir les offres</a></div> <div id=offres><a href="http://localhost/workspace(it)/destinations.php#maldives">Aperçu de la destination</a></div>', 1.989942, 73.529580, 1]

    ];
	
	
	
      
	  
      function init() {
        var mapCenter = new google.maps.LatLng(46.779231, 60);
		
          var map = new google.maps.Map(document.getElementById('map'),
                               {
          zoom: 2,
		mapTypeControl: false,

zoomControl:true,
zoomControlOptions: {
  style:google.maps.ZoomControlStyle.LARGE,
},
	
		  streetViewControl: false,
		  panControl: false,
		  keyboardShortcuts: false,
		  scrollwheel: false,
          center: mapCenter,
			// <!-- styles: [{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"simplified"}]},{featureType:"transit",stylers:[{visibility:"simplified"}]},{featureType:"landscape",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"water",stylers:[{color:"#84afa3"},{lightness:52}]},{stylers:[{saturation:-17},{gamma:0.36}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#3f518c"}]}], -->
			styles: [{featureType:"administrative.country",stylers:[{visibility:"on"}]},{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"landscape",stylers:[{"hue":"#047202"}/*couleur pays*/]},{featureType:"road",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{color:"#3b88bf"}]}],
		// <!-- styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}], -->
		// <!-- styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}], -->
		// // <!-- styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":60}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"lightness":30}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ef8c25"},{"lightness":40}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#b6c54c"},{"lightness":40},{"saturation":-40}]},{}], -->
		// <!-- styles: [{"featureType":"landscape","stylers":[{"lightness":16},{"hue":"#ff001a"},{"saturation":-61}]},{"featureType":"road.highway","stylers":[{"hue":"#ff0011"},{"lightness":53}]},{"featureType":"poi.park","stylers":[{"hue":"#00ff91"}]},{"elementType":"labels","stylers":[{"lightness":63},{"hue":"#ff0000"}]},{"featureType":"water","stylers":[{"hue":"#0055ff"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]}], -->
		// <!-- styles: [{"featureType":"water","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]},{"featureType":"landscape","stylers":[{"color":"#f2e5d4"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"administrative","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"road"},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{},{"featureType":"road","stylers":[{"lightness":20}]}], -->
		 // <!-- styles: [{"featureType":"landscape","stylers":[{"hue":"#F1FF00"},{"saturation":-27.4},{"lightness":9.4},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#0099FF"},{"saturation":-20},{"lightness":36.4},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#00FF4F"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FFB300"},{"saturation":-38},{"lightness":11.2},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00B6FF"},{"saturation":4.2},{"lightness":-63.4},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#9FFF00"},{"saturation":0},{"lightness":0},{"gamma":1}]}], -->
		 // <!-- styles: [{"featureType":"water","stylers":[{"color":"#19a0d8"}/*couleur mer*/]},{"featureType":"administrative","elementType":"labels.text.stroke","stylers":[{"color":"transparent"/*couleur fond texte*/},{"weight":0}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#000000"}/*couleur texte*/]},{"featureType":"road.highway","stylers":[{"hue":"#0099FF"},{"saturation":-20},{"lightness":36.4},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#00FF4F"},{"saturation":0},{"lightness":0},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FFB300"},{"saturation":-38},{"lightness":11.2},{"gamma":1}]},{"featureType":"road.highway","elementType":"labels.icon"},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape","stylers":[{"hue":"#F1FF00"}/*couleur pays*/,{"saturation":-27.4},{"lightness":9.4},{"gamma":1}]},{"featureType":"landscape.man_made","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"lightness":-100}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"hue":"#11ff00"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"lightness":100}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"hue":"#4cff00"},{"saturation":58}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-25}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#efe9e4"},{"lightness":-10}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"simplified"}]}], -->
		
		  
        });

		
		var map, infoBubble;
		
		var marker, i;
		
		 
		    for (i = 0; i < locations.length; i++) { 
        var marker= new google.maps.Marker({
          map: map,
          position: new google.maps.LatLng(locations[i][1], locations[i][2], locations[i][3], locations[i][4]),
          draggable: false,
		  icon: "images/marker_8_1.png"
        });
		
		
		
				google.maps.event.addListener(marker,'click',(function(marker, i) {
			return function() {
					map.setZoom(6);
					map.setCenter(marker.getPosition());
					}
				})(marker, i));
			
			
				
					
		
		  var infoBubble = new InfoBubble({
			map: map,
            shadowStyle: 1,
            padding: '10px',
            backgroundColor: '#EFF8FB',
            borderRadius: 8,
            maxWidth: 800,
			maxHeight: 260,
            arrowSize: 10,
            borderWidth: 2,
            borderColor: '#00BFFF',
            disableAutoPan: true,
            hideCloseButton: false,
            arrowPosition: 50,
            pixelOffset: new google.maps.Size(130, 120),
            arrowStyle: 1,
			
  });
		

        
		google.maps.event.addListener(marker, 'click', (function(marker, i) {
		return function (){ 
			infoBubble.setContent(locations[i][0]);
            infoBubble.open(map, marker);
		  }
          })(marker, i));	
		  
		  
		  
		  
		  
		var contentString = '<div id=texte> Cliquez pour un aperçu </div> ';
		
		

			
		 infoBubble2 = new InfoBubble({
		 	content: contentString,  
			map: map,
            shadowStyle: 1,
            padding: '20px',
            backgroundColor: '#EFF8FB',
            borderRadius: 8,
            maxWidth: 300,
            arrowSize: 10,
            borderWidth: 2,
            borderColor: '#00BFFF',
            disableAutoPan: true,
            hideCloseButton: false,
            arrowPosition: 50,
            pixelOffset: new google.maps.Size(130, 120),
            arrowStyle: 2,
			
        });
  
  
  google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
  return function (){
    infoBubble2.open(map,marker);
	}
  })(marker, i));

   google.maps.event.addListener(marker, 'mouseout', (function(marker, i) {
   return function (){
    infoBubble2.close();
	}
  })(marker, i));
  
  

		  
};


      }



      google.maps.event.addDomListener(window, 'load', init);		<!--charge la fonction initialize au chargement de la page-->

  
});

});
