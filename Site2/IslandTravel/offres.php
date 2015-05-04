<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<title>islandtravel/offres</title>
		<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="css/offres.css" />
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="js/modernizr.custom.js"></script>
		<script src="js/fonctionscroll.js"></script>
		<script src="js/jquery.mixitup.min.js"></script>
		<script src="js/jquery.mixitup.js"></script>
		<script src="js/test.js"></script>
	</head>
<body>

<div class="toppage">
	<?PHP include ('menuoffres.php'); ?>
</div>

<div class="filtres">

<form class="controls" id="Filters">
  <!-- We can add an unlimited number of "filter groups" using the following format: -->
  <h1>Sélectionnez les critères de votre voyage:</h1>
  <fieldset>
    <h4>Nombre voyageurs</h4>
    <div class="checkbox">
      <input type="checkbox" value=".2p"/>
      <label>2 personne</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" value=".3p"/>
      <label>3 personnes</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" value=".4p"/>
      <label>4 personnes</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".6p"/>
      <label>6 personnes</label>
    </div>
  </fieldset>
  
  <fieldset>
    <h4>Formule</h4>
    <div class="checkbox">
      <input type="checkbox" value=".1r"/>
      <label>1 repas</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" value=".1r1d"/>
      <label>1 repas + 1 dejeuner</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" value=".2r"/>
      <label>2 repas</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".pc"/>
      <label>Pension complète</label>
    </div>
  </fieldset>
  
  <fieldset>
    <h4>Activités</h4>
    <div class="checkbox">
      <input type="checkbox" value=".to"/>
      <label>Tourisme</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" value=".pl"/>
      <label>Plongée</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".su"/>
      <label>Surf</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".go"/>
      <label>Golf</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".spo"/>
      <label>Salle de sport</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".sp"/>
      <label>Spa</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".ca"/>
      <label>Casino</label>
    </div>
  </fieldset>
  
    <fieldset>
    <h4>Prix</h4>
    <div class="checkbox">
      <input type="checkbox" value=".prix1"/>
      <label>100 - 250</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" value=".prix2"/>
      <label>250 - 500</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".prix3"/>
      <label>500 - 750</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".prix4"/>
      <label>750 - 1000</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".prix5"/>
      <label>> 1000</label>
    </div>
  </fieldset>
  
  <fieldset>
    <h4>Durée du voyage</h4>
    <div class="checkbox">
      <input type="checkbox" value=".1j"/>
      <label>1 jour</label>
    </div>
    <div class="checkbox">
      <input type="checkbox" value=".2j"/>
      <label>Weekend</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".4j"/>
      <label>4 jours</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".7j"/>
      <label>1 semaine</label>
    </div>
	<div class="checkbox">
      <input type="checkbox" value=".14j"/>
      <label>2 semaines</label>
    </div>
  </fieldset>
  
  <button id="Reset">Supprimer les filtres</button>
</form>
</div>

<div id="Container" class="container">

  <div class="fail-message"><span>Aucune offre ne correspond aux critères sélectionés</span></div>


  <a href="http://www.evao.fr/recherche.php?destination=BAH1&depart=0&date_depart=&type=260&budget=0&AGENCE=E06&rechercher.x=32&rechercher.y=8" target="_blank"><div class="mix bahamas 2p 4j pc prix4 go pl su sp"></div></a>
  <a href="http://bali.promovacances.com/" target="_blank"><div class="mix bali 2p 7j pc prix5 go to pl te ca su"></div></a>
  <a href="http://sejour.lastminute.com/polynesie-francaise/bora-bora.html" target="_blank"><div class="mix borabora 2p 2j 2r prix3 to pl su sp spo"></div></a>
  <a href="http://www.voyageursdumonde.fr/voyage-sur-mesure/recherche-voyage-tag/voyage-ile-paradisiaque" target="_blank"><div class="mix corse 4p 7j 1r1d prix4 to pl"></div></a>
  <a href="http://www.evao.fr/recherche.php?destination=CRE1&depart=0&date_depart=&type=260&budget=0&AGENCE=E06&rechercher.x=53&rechercher.y=18" target="_blank"><div class="mix crete 2p 7j pc prix3 to pl sp spo"></div></a>
  <a href="http://www.kuoni.ch/fr/oceanie/mers-du-sud/les-iles-fidji/" target="_blank"><div class="mix fidji 2p 7j pc prix5 go to pl sp spo"></div></a>
  <a href="http://www.evao.fr/recherche.php?destination=GUA1&depart=0&date_depart=&type=260&budget=0&AGENCE=E06&rechercher.x=26&rechercher.y=15" target="_blank"><div class="mix guadeloupe 2p 4j 1r prix5 su pl sp spo"></div></a>
  <a href="http://www.evaneos.com/hawai/" target="_blank"><div class="mix hawai 3p 1j 1r1d prix1 su pl"></div></a>
  <a href="http://sejour.lastminute.com/sejour-espagne/sejour-iles-baleares/sejour-ibiza.html" target="_blank"><div class="mix ibiza 4p 2j pc prix4 su pl"></div></a>
  <a href="http://www.voyageursdumonde.fr/voyage-sur-mesure/recherche-voyage/voyage-galapagos/equateur" target="_blank"><div class="mix ilesgalapagos 3p 4j pc prix3 su pl sp "></div></a>
  <a href="http://www.evao.fr/recherche.php?destination=ILE1&depart=0&date_depart=&type=260&budget=0&AGENCE=E06&rechercher.x=36&rechercher.y=19" target="_blank"><div class="mix ilemaurice 2p 2j 1r prix5 go pl su sp ca spo"></div></a>
  <a href="http://www.look-voyages.fr/look/sejour/voyage-iles.aspx" target="_blank"><div class="mix maldives 6p 2j pc prix4 pl su"></div></a>
  <a href="http://www.nouvelles-frontieres.fr/voyages_sejours_circuits_nouvelle-zelande/" target="_blank"><div class="mix nouvellezelande 2p 2j 2r prix3 to pl su"></div></a>
  <a href="http://www.nouvelles-frontieres.fr/voyages_sejours_circuits_la-reunion/" target="_blank"><div class="mix reunion 6p 4j 2r prix5 to pl su sp spo ca"></div></a>
  <a href="http://www.look-voyages.fr/look/sejour/voyage-iles.aspx" target="_blank"><div class="mix republiquedominicaine 3p 14j pc prix5 to pl su sp spo ca"></div></a>
  <a href="http://www.evao.fr/recherche.php?destination=SEY1&depart=0&date_depart=&type=260&budget=0&AGENCE=E06&rechercher.x=62&rechercher.y=11" target="_blank"><div class="mix seychelles 3p 1j 1r prix2 to go pl su"></div></a>
  <a href="http://www.evao.fr/voyages/destination/TAH1-polynesie/260-voyages-de-noces/tous-nos-voyages-de-noces-en-polynesie.php" target="_blank"><div class="mix tahiti 4p 14j pc prix5 pl su sp"></div></a>
  
  <div class="gap"></div>
  <div class="gap"></div>
  <div class="gap"></div>
  <div class="gap"></div>
</div>

</div>
	<?PHP include ('footer.php'); ?>
</body>
</html>