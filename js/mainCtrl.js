angular.module('quoteBook').controller('mainCtrl', function($scope, myFactory) {

$scope.quoteArray = myFactory.getData();

})
