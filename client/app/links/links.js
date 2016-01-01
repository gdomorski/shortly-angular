angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  $scope.data = getLinks();
  console.log($scope.data);
});
