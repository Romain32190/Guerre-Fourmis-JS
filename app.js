$("#button").click(function(){
	var ligne =$("#ligne").val()
	var colonne = $("#colonne").val()

	 for (var i = 0 ; i < ligne; i++) {
	 	$("#tb").append('<tr></tr>');
	 	for (var j = 0; j < colonne ; j++) {
	 		$("#tb tr:last-child").append("<td data-coord=x"+i+"y"+j+"></td>");
		}
	console.log(ligne);
	console.log(colonne);
	}

});


