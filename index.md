<!DOCTYPE html>
<html ng-app="pdi">
	<head>
		<meta charset="UTF-8">
		<title>PDI</title>
		<link rel="stylesheet" href="./css/reset.css">
		<link rel = "stylesheet" href="./css/main.css">
		<link href="https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
		<script src="./js/libs/angular.min.js"></script>
		<script src="./js/libs/angular-animate.min.js"></script>
		<script src="./js/libs/angular-cookies.min.js"></script>
		<script src="./js/libs/angular-resource.min.js"></script>
		<script src="./js/libs/angular-route.min.js"></script>
		<script src="./js/main.js"></script>
		<script src="./js/controllers/main-controller.js"></script>
	</head>

	<body>
		<header>
			<div class="header">
				<div class="logo">
					<a href="#!/home"><img class="logo-img" src="img/logo.png"></a>
				</div>
				<nav>
					<ul>
						<li><a href = "#!/home">Home</a></li>
						<li><a href = "#!/objetivos">Objetivos</a></li>
						<li><a href = "#!/pontosFortes">Pontos fortes</a></li>
						<li><a href = "#!/pontosFracos">Pontos fracos</a></li>
						<li><a href = "#!/proximosPassos">Próximos passos</a></li>
					</ul>
				</nav>
			</div>
		</header>

		<main>
		<ng-view></ng-view>
		</main>

		<footer class="footer">
			<div class="footer-block">
				<div class="contato">
					<p>becharalucas@hotmail.com</p>
				</div>
				<div class="links">
					<a class="logo-link" href="https://br.linkedin.com/in/lucas-bechara-paschoalato-0a83661aa"><img class="rede-social" src="https://image.flaticon.com/icons/svg/174/174857.svg"></a>
					<a class="logo-link" href="https://br.linkedin.com/in/lucas-bechara-paschoalato-0a83661aa"><img class="rede-social" src="https://image.flaticon.com/icons/svg/174/174848.svg"></a>
					<a class="logo-link" href="https://br.linkedin.com/in/lucas-bechara-paschoalato-0a83661aa"><img class="rede-social" src="https://image.flaticon.com/icons/svg/174/174855.svg"></a>
				</div>
			</div>
		</footer>			
	</body>
