angular.module('pdi', ['ngAnimate', 'ngRoute'])
.config(function($routeProvider) {

    $routeProvider.
    when("/objetivos",{
        templateUrl : "./pages/objetivos.html",
        controller: "MainController"
    }).
    when("/home", {
        templateUrl: "./pages/home.html",
        controller: "MainController"
    }).
    when("/pontosFortes", {
        templateUrl: "./pages/pontosFortes.html",
        controller: "MainController"
    }).
    when("/pontosFracos", {
        templateUrl: "./pages/pontosFracos.html",
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