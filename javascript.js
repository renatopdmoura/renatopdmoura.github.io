// Escrito por Renato Moura em 16 de Janeiro de 2021

function catch_text(id){
	index = "text-" + id;
	return document.getElementById('text-' + id).innerHTML;
}

function clear_text(){
	var item_count = document.getElementById("func-list").childElementCount;
	for(var i = 1; i < item_count + 1; i++){
		document.getElementById('mobile-view-' + i).innerHTML = "";
	}
}

function switch_article(id){
	clear_text();
	switch(id){		
		case 1:
			document.getElementById('mobile-view-' + id).innerHTML = catch_text(id);
			break;
		case 2:
			document.getElementById('mobile-view-' + id).innerHTML = catch_text(id);
			break;
		case 3:
			document.getElementById('mobile-view-' + id).innerHTML = catch_text(id);
			break;
	}
}