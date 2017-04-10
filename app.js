var ligne;
var colonne;
var fourmi;
var ord; 
var abs; 
var randcell; 
var move;
var	fighter = [];

function createArray(ligne, colonne){
	 for (var i = 0 ; i < ligne; i++) {
	 	$("#tb").append("<tr data-row ='"+i+"''></tr>");
	 	for (var j = 0; j < colonne ; j++) {
	 		$("#tb tr:last-child").append("<td data-row ='"+i+"'data-column ='"+j+"'></td>");
		}
	}
};

function createAnt(fourmi){
	var rustine = 0;
	for (var k =0; k<fourmi; k++){
		ord = Math.round(Math.random()*ligne);
		abs = Math.round(Math.random()*colonne);
		randcell = $("td[data-row='"+ord+"'][data-column ='"+abs+"']");
		if (randcell.text() === ""){
			randcell.append("#=#:");
			fighter[k]={"colonne":ord, "ligne":abs};
			rustine++;
						
		}else{
			k--;
		};
	}
};

function destinate(){
	move = Math.round(Math.random()*4);
};

function antMove(matricule){
	destinate();
	console.log(fighter[matricule]);
	if (move === 1){
		fighter[matricule].ligne--;
	}else if (move === 2){
		fighter[matricule].colonne++;
	}else if (move === 3){
		fighter[matricule].ligne++;
	}else {
		fighter[matricule].colonne--;
	};
};



$("#button").click(function(){
	$("#tb").html("");
	ligne =($("#ligne").val());
	colonne = ($("#colonne").val());
	fourmi = ($("#fourmis").val());
	createArray(ligne, colonne);
	createAnt(fourmi);

	setInterval(function(){
		
		for (i=0; i<fourmi; i++){
				antMove(i)
			}
			$("td").text("");
			for(i=0; i<fourmi; i++){
				$("td[data-row='"+fighter[i].ligne+"'][data-column='"+fighter[i].colonne+"']").append("#=#:");
				console.log(fourmi)
			}
		},1000);
});



