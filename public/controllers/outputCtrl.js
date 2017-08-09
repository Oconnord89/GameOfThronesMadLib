var app = angular.module('myMod');

app.controller('outCtrl', function($scope, wordFactory) {

  $scope.retrievedWords = wordFactory.outputWords();

});
