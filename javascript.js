// Escrito por Renato Moura em 16 de Janeiro de 2021

let w = window.innerWidth;

function window_size_changed(){
	document.location.reload();
}

function catch_text(id){
	index = "text-" + id;
	return document.getElementById('text-' + id).innerHTML;
}

function clear_text(){
	var item_count = document.getElementById('func-list').childElementCount;
	for(var i = 1; i < item_count + 1; i++){
		if(w >= 1366)
			document.getElementById('desktop-view-' + i).innerHTML = "";
		else
			document.getElementById('mobile-view-' + i).innerHTML = "";
		document.getElementById('btn-func-ls-' + i).style.backgroundColor = "#eee";
	}
	if(w >= 1366)
		return 'desktop-view-';
	else
		return 'mobile-view-';
}

function switch_article(id){
	let label_id = clear_text() + id;
	document.getElementById('btn-func-ls-' + id).style.backgroundColor = "#ddf";
	document.getElementById(label_id).innerHTML = catch_text(id);
	if(w >= 1366)
		window.scrollTo(0, 0);
}
