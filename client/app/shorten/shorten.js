angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.addLink = function (link) {
    $scope.link = link;
    Links.addOne(link);
  };
});
