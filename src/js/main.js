angular.module('pdi', ['ngAnimate', 'ngRoute'])
.config(function($routeProvider) {

    $routeProvider.
    when("/objetivos",{
        templateUrl : "objetivos.html",
        controller: "MainController"
    }).
    when("/home", {
        templateUrl: "home.html",
        controller: "MainController"
    }).
    when("/pontosFortes", {
        templateUrl: "pontosFortes.html",
        controller: "MainController"
    }).
    when("/pontosFracos", {
        templateUrl: "pontosFracos.html",
        controller: "MainController"
    }).
    when("/proximosPassos", {
        templateUrl: "proximosPassos.html",
        controller: "MainController"
    }).
    otherwise ({
        redirectTo: '/home'
    });
});