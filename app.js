

	$("#button").click(function(){
		var ligne =$("#ligne").val()
		var colonne = $("#colonne").val()

		 for (var i = 0 ; i < ligne; i++) {
		 	$("#tb").append('<tr></tr>');
		 	for (var j = 0; j < colonne ; j++) {
		 		$("#tb tr:last-child").append("<td id=x"+i+"y"+j+" data-coord=x"+i+"y"+j+"></td>");
			}
		}
<<<<<<< HEAD
	}


     var ord = Math.round(Math.random()*ligne);
     var abs = Math.round(Math.random()*colonne);
     console.log(ord);
});
=======
var ord = Math.round(Math.random()*ligne);
var abs = Math.round(Math.random()*colonne);
console.log(ord)
$("#x"+ord+"y"+abs+"").append("#=#:");

console.log(ord)
console.log(abs)
	});




var ligne =$("#ligne").val()
var colonne = $("#colonne").val()


>>>>>>> 44f4d97e52db1f142238e7085d31611210d9d924


