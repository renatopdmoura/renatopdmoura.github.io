// Escrito por Renato Moura em 16 de Janeiro de 2021

function catch_text(id){
	index = "text-" + id;
	return document.getElementById('text-' + id).innerHTML;
}

function clear_text(){
	let w = window.innerWidth;
	var item_count = document.getElementById("func-list").childElementCount;
	for(var i = 1; i < item_count + 1; i++){
		if(w >= 1366)
			document.getElementById('desktop-view-' + i).innerHTML = "";
		else
			document.getElementById('mobile-view-' + i).innerHTML = "";
	}
	if(w >= 1366)
		return 'desktop-view-';
	else
		return 'mobile-view-';
}

function switch_article(id){
	let label_id = clear_text() + id;
	switch(id){		
		case 1:
			document.getElementById(label_id).innerHTML = catch_text(id);
			break;
		case 2:
			document.getElementById(label_id).innerHTML = catch_text(id);
			break;
		case 3:
			document.getElementById(label_id).innerHTML = catch_text(id);
			break;
	}
}