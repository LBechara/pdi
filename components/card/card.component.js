angular.module('card').component('card', function component() {
  return {
    bindings: {
      titulo: "@",
      descricao: "=",
    },
    controllerAs: 'ctrl',
    templateUrl: '/components/card/card.component.html',
  };
}());
