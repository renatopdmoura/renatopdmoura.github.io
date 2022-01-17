// Escrito por Renato Moura em 16 de Janeiro de 2021

function catch_text(id){
	index = "text-" + id;
	return document.getElementById('text-' + id).innerHTML;
}

function clear_text(){
	var item_count = document.getElementById("func-list").childElementCount;
	for(var i = 0; i < item_count + 1; i++){
		document.getElementById(i).innerHTML = "";
	}
}

function switch_article(id){
	clear_text();
	switch(id){		
		case 1:
			document.getElementById(id).innerHTML = catch_text(id);
			break;
		case 2:
			document.getElementById(id).innerHTML = catch_text(id);
			break;
		case 3:
			document.getElementById(id).innerHTML = catch_text(id);
			break;
	}
}