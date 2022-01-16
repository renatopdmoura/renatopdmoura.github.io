<!-- <!DOCTYPE html> -->
<html>
<head>
	<meta charset="UTF-8">
	<meta name="description" content="Referência de biblioteca Pura">
	<meta name="keywords" content="Programação, OpenGL, Game Engine, C++, C, Games, Gráficos 3D, Wiki, Referência, Pura">
	<meta name="author" content="Renato Moura">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="stylesheet.css" type="text/css">
	<title>Pura | Wiki</title>
</head>
<body>

<header class="col-s-12 col-12 main-header">
	<h1 class="col-s-12 col-8 main-title">Pura - Biblioteca Gráfica</h1>
	<nav class="col-s-12 row main-menu">
		<ul>
			<li class="item-menu"><a href="#" accesskey="a" class="link-menu">Apresentação</a></li>
			<li class="item-menu"><a href="#" accesskey="r" class="link-menu">Referência</a></li>
			<li class="item-menu"><a href="#" accesskey="t" class="link-menu">Tutoriais</a></li>
		</ul>
	</nav>
</header>

<section class="col-s-12 presentation">
	<h1>O que é Pura</h1>
	<p>Pura é um conjunto de arquivos programados em C++ que fornecem uma série de recursos pertencentes ao pipeline de renderização gráfica. 
	Definem as seguintes caracteriticas:</p>

	<ol>
		<li>Gerenciador de sombreadores</li>
			<ul>
				<p>Funcionalidade atribuida a classe SRW, nela funções como geração de sombreadores e objetos de programa mais inicialização de dados uniformes
				são realizadas. SRW funciona como classe base para a grande maioria das demais classes.</p>
			</ul>
		<li>Carregador de modelos</li>
			<ul>
				<p>A classe Object é responsável por realizar o carregamento de modelos 3D a partir da interpretação de arquivos .obj. É classe derivada de SRW, carregamentos
				texturas e/ou definição de cores uniformes são feitas a partir das chamadas as funções de inicialização de uniformes da classe base.</p>
			</ul>
		<li>Carregador de terrenos</li>
			<ul>
				<p>Classe Terrain, terrenos são carregados a partir de mapas de altura em formato ".raw" - como no photoshop, ou ".r8" - alternativamente do krita. É classe derivada de SRW, uniformes são inicializados a partir de chamadas as funções da classe base</p>
			</ul>
		<li>Renderização de textos</li>
			<ul>
				<p>Classe Text, usa FreeType como núcleo de funcionalidade. Permite carregamento de texto de forma otimizada usando um identificador de texturas, ou métodos que 
				carregam caracteres em tempo de execução - como comandos de console.
				</p>
			</ul>
	</ol>

	<h2>Tecnologias</h2>
	<ul>
		<li class="tech-item">OpenGL</li>
		<li class="tech-item">SDL</li>
		<li class="tech-item">FreeType</li>
	</ul>
</section>

<footer class="col-s-12 col-12">
		<h3>Copyright Coffee Soul Labs</h3>
</footer>

</body>
</html>