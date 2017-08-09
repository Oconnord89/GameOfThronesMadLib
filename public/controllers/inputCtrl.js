var app = angular.module('myMod');

app.controller('inCtrl', function($scope, wordFactory, $location){

$scope.submitWords = function(wordsObj) {
    wordFactory.inputWords(wordsObj);
    $location.path('/output');

}

});
