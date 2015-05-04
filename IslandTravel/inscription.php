<!DOCTYPE html>
<html lang="en" class="no-js">
	<head>
		<meta charset="UTF-8" />
		<title>islandtravel/inscription</title>
		<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
		<link href='http://fonts.googleapis.com/css?family=Open+Sans:300' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" type="text/css" href="css/inscription.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="css/formulaire.css" /> 
		<link rel="stylesheet" type="text/css" media="screen" href="http://code.jquery.com/ui/1.10.4/themes/cupertino/jquery-ui.css" />
		<link rel="stylesheet" type="text/css" href="js/lib/jquery.markitup/skins/simple/style.css" />        
        <link rel="stylesheet" type="text/css" href="js/lib/jquery.markitup/sets/default/style.css" />
		<link rel="stylesheet" type="text/css" media="screen" href="js/lib/jquery.multiselect/jquery.multiselect.css" />
		
		
		<script src="js/lib/jquery.markitup/jquery.markitup.js" type="text/javascript"></script>
        <script src="js/lib/jquery.markitup/sets/default/set.js" type="text/javascript"></script>
		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
		<script src="http://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript"></script>
        <script src="http://ajax.aspnetcdn.com/ajax/jquery.validate/1.11.1/jquery.validate.js" type="text/javascript"></script>
        <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js" type="text/javascript"></script>
		<script src="js/lib/jquery.multiselect/jquery.multiselect.min.js" type="text/javascript"></script>		
		<script src="js/formulaire.js" type="text/javascript"></script>
		<script src="js/modernizr.custom.js"></script>
		<script src="js/fonctionscroll.js"></script>
		<script src="js/jquery.mixitup.min.js"></script>
		<script src="js/jquery.mixitup.js"></script>
		<script src="js/test.js"></script> 	

	</head>
<body>

<div class="toppage">
	<?PHP include ('menuinscription.php'); ?>
</div>

<div id="contenuformulaire">
			<form method="post" action="toto.php" id="form2" class="formulaire">
        		<fieldset>

					<div id="titre"> Inscription à notre Newsletter</div>

					<p>
						<label for="nom">Nom (obligatoire)</label>
						<input id="nom" name="nom" />
					</p>
					<p>
						<label for="prenom">Prenom (obligatoire)</label>
						<input id="prenom" name="prenom"/>
					</p>
					<p>
						<label for="email">Email (obligatoire)</label>
						<input id="email" name="email" />
					</p>
					
					<p>
						<label for="confemail">Confirmation email (obligatoire)</label>
						<input id="confemail" name="confemail" />
					</p>

					<p>
						<label for="date">Date de naissance </br>(obligatoire)</label>
						<input id="date" name="date" />
					</p>
					
					<p>
						<label for="civilite"><a class="tips" title="Précisez votre civilité">Civilit&eacute; (obligatoire)</a></label>
						<select name="civilite" id="civilite" multiple="multiple">
								<option value="mat1">Mme</option>
								<option value="mat2">Mlle</option>
								<option value="mat3">Mr</option>						
											
						</select>
					</p>
			
					<p>
						<label for="pays"><a class="tips" title="Précisez votre pays de naissance.">Nationalit&eacute; (obligatoire)</a></label>
						<select name="pays" id="pays" multiple="multiple">
							<option value="pays1">Allemagne</option>
							<option value="pays2">Australie</option>
							<option value="pays3">Autriche</option>
							<option value="pays4">Belgique</option>
							<option value="pays5">Br&eacute;sil</option>
							<option value="pays6">Canada</option>
							<option value="pays7">Chine</option>
							<option value="pays8">Danemark</option>
							<option value="pays9">Espagne</option>
							<option value="pays10">Etats-Unis</option>
							<option value="pays11">Finlande</option>
							<option value="pays12">France</option>
							<option value="pays13">Irlande</option>
							<option value="pays14">Italie</option>
							<option value="pays15">Japon</option>
							<option value="pays16">Monaco</option>
							<option value="pays17">Norvege</option>
							<option value="pays18">Pays-Bas</option>
							<option value="pays19">Portugal</option>
							<option value="pays20">Royaume-Uni</option>
							<option value="pays21">Russie</option>
							<option value="pays22">Suede</option>
							<option value="pays23">Suisse</option>
						</select>
					</p>        			
					<p>
						<label for="matieres"><a class="tips" title="Vos devez choisir 2 centres d'interets parmi la liste proposée">Vos centres d'inter&ecirc;ts </br>(2 choix obligatoires)</a></label>
						<select name="matieres[]" id="matieres" multiple="multiple">
							<optgroup label="Activit&eacute;es Physiques">
								<option value="mat1">Plong&eacute;e</option>
								<option value="mat2">Surf</option>
								<option value="mat3">Tennis</option>								
								<option value="mat4">Golf</option>							
								<option value="mat5">Trail</option>							
							</optgroup>
							<optgroup label="Autres">
								<option value="mat4">Tourisme</option>
								<option value="mat5">Spa</option>
								<option value="mat6">Casino</option>
							</optgroup>						
						</select>
					</p>
					
					<p>
						<label for="agree">J'accepte les conditions d'utilisation</label>
						<input type="checkbox" id="agree" name="agree" />
					</p>
					<p>
						<label for="offres">Je souhaite recevoir les dernières offres</label>
						<input type="checkbox" id="offres" name="offres" />
					</p>
					<p>
						<label for="partenaires">Je souhaite recevoir les offres partenaires</label>
						<input type="checkbox" id="partenaires" name="partenaires" />
					</p>
					
					<p class="center">
						<button class="submit" type="submit"> <a href=""> Valider </a> </button>
					</p>			
					
        		</fieldset>       
        	</form>
        </div>

	<?PHP include ('footer.php'); ?>

</body>
</html>