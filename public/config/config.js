var app = angular.module('myMod');

app.config(function($routeProvider){

  $routeProvider
  .when('/input', {
  controller: 'inCtrl',
  templateUrl: 'input.html'
})
  .when('/output', {
    controller: 'outCtrl',
    templateUrl: 'output.html'

  })

      .otherwise({redirectTo:'/input'});
});
