angular.module('pdi', ['ngAnimate', 'ngRoute', 'card'])
.config(function($routeProvider) {

    $routeProvider.
    when("/objetivos", {
        templateUrl : "./pages/objetivos.html",
        controller: "MainController"
    }).
    when("/home", {
        templateUrl: "./pages/home.html",
        controller: "MainController"
    }).
    when("/perfil", {
        templateUrl: "./pages/perfil.html",
        controller: "MainController"
    }).
    when("/proximosPassos", {
        templateUrl: "./pages/proximosPassos.html",
        controller: "MainController"
    }).
    otherwise ({
        redirectTo: '/home'
    });
});