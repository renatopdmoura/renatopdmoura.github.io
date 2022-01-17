
item_1 ="Um gerador de programa de sombreamento de fabrica. É util para definir objetos de programas que serão compartilhados por diferentes instâncias.";
item_2 ="Um gerador de programa de sombreamento para situaçãos em que se faz necessário um sombreador de geometria.";
item_3 ="Um gerador de programa de sombreamento.";


function clear_text(){
	var item_count = document.getElementById("func-list").childElementCount;
	for(var i = 1; i < item_count + 1; i++){
		document.getElementById(i).innerHTML = "";
	}
}

function switch_article(id){
	clear_text();
	switch(id){		
		case 1:
			document.getElementById(id).innerHTML = item_1;
			break;
		case 2:
			document.getElementById(id).innerHTML = item_2;
			break;
		case 3:
			document.getElementById(id).innerHTML = item_3;
			break;
	}
}