$.validator.setDefaults({
	highlight : function(input) {
		$(input).addClass("ui-state-highlight");
	},
	unhighlight : function(input) {
		$(input).removeClass("ui-state-highlight");
	}
});

$(document).ready(function() {	


	$().ready(function() {
		// validate the comment form when it is submitted
		$("#from2").validate();

		// validate signup form on keyup and submit
		$("#form2").validate({
			rules: {

				nom: {
					required: true,
					minlength: 2,
				},
				
				prenom: {
					required: true,
					minlength: 2,
				},

				email: {
					required: true,
					email: true,
				},
				
				confemail: {
					required: true,
					equalTo: '#email',
					email: true,
				},

				date: {
					required: true,
					date: true,
				},
				
				
				agree: "required",
			
				
				remarque: {
					required: false,
					
				},
				
				pays: {
				required: true,
				maxlength: 1
				},

				"matieres[]": {
				required: true,
				minlength: 2
				},
				
				civilite: {
				required: true,
				minlength: 1
				},
			},
			
			ignore: "ignore",
			
 			messages: {

 				nom: {
 					required: "Entrez votre Nom",
 					minlength: "Nom non valide"
 				},
				
				 prenom: {
 					required: "Entrez votre Prenom",
 					minlength: "Prenom non valide"
 				},
 				
 				email: {
 					required: "Entrez un email valide",
 					minlength: "email non valide",
					email: "Email non valide"
 				},
				
				confemail: {
 					required: "Entrez un email valide",
 					minlength: "email non valide",
					equalTo: "Email non valide"
 				},

 				
 				date: {
 					required: "Entrez votre date de naissance",
 					minlength: "Date non valide"
 				},
 				
 				agree: {
 					required: "Veuillez accepter les conditions",
 				},
				
				pays: {
				required: "Veuillez pr&eacute;ciser votre pays de naissance",
				minlength: "Saisie incorrecte"
				},
		
				"matieres[]": {
				required: "Choisissez vos pr&eacute;f&eacute;rences",
				minlength: "Vous n'avez pas choisis vos préférences"
				},
				
				civilite: {
				required: "Choisissez votre civilit&eacute;",
				minlength: "Vous n'avez choisis aucune civilit&eacute;"
				},
 				
 			
 			},
 			
 			success : (function(label){
 				label.html("Ok").addClass("checked");
 				})
 			
 				
		});
		
		$("#date").datepicker();
		
		$("#pays").multiselect({
				header: "Choisir votre pays de naissance",
				noneSelectedText: "S&eacute;l&eacute;ctionner un pays",
				selectedlist: 1
		});
	
		$("#matieres").multiselect({
			   header: "Choisir vos centre d'int&eacute;rets",
			   noneSelectedText: "Pr&eacute;cisez vos centres d'int&eacute;rets",
			   
		});	
		
		$("#civilite").multiselect({
				header: "Choisir votre civilit&eacute;",
			   noneSelectedText: "Pr&eacute;cisez votre civilit&eacute;",
			   selectedlist: 1
		});

	});
	

		


});