angular.module('quoteBook').controller('mainCtrl', function($scope, myFactory) {

  $scope.quoteArray = myFactory.getData();

  $scope.addQuote = function(author, text) {
    var quoteToAdd = {
      author: author,
      text: text
    };
    myFactory.addData(quoteToAdd);
    $scope.addAuthor = "";
    $scope.addText = "";
  };

  $scope.removeQuote = function(text) {

    myFactory.removeData(text);
    $scope.removeText = "";
  };

})
