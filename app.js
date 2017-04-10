

	$("#button").click(function(){
		var ligne =$("#ligne").val()
		var colonne = $("#colonne").val()
		var fourmi = $("#fourmis").val()

		var rustine = 0;

		 for (var i = 0 ; i < ligne; i++) {
		 	$("#tb").append('<tr></tr>');
		 	for (var j = 0; j < colonne ; j++) {
		 		$("#tb tr:last-child").append("<td id=x"+i+"y"+j+" data-coord=x"+i+"y"+j+"></td>");
			}
		}
		for (var k =0; k<fourmi; k++){


			var ord = Math.round(Math.random()*ligne);
			var abs = Math.round(Math.random()*colonne);
			var randcell = $("#x"+ord+"y"+abs+"");

//			console.log(rustine +' - '+ k +' - '+ randcell.html());
			console.log(randcell.text());

			if (randcell.text() === ""){
				randcell.append("#=#:");
				rustine++;
							
				
			}else{
				k--;
			};
			
		}
		console.log( rustine );
	});

// var ligne =$("#ligne").val()
// var colonne = $("#colonne").val()


	






