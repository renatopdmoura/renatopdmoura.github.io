function switch_article(id){
	switch(id){
		case 0:
			document.getElementById(1).innerHTML = "";
			document.getElementById(id).innerHTML = "Um gerador de programa de sombreamento de fabrica. É util para definir objetos de programas que serão compartilhados por diferentes instâncias.";
			break;
		case 1:
			document.getElementById(0).innerHTML = "";
			document.getElementById(id).innerHTML = "Um gerador de programa de sombreamento para situaçãos em que se faz necessário um sombreador de geometria.";
			break;
	}
}