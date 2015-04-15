var app = angular.module("AMDB", []);

app.controller("MovieCtrl", function($scope, Movies) {
  
	$scope.newMovie = {};
  $scope.movies = Movies;
    
  $scope.addMovie = function(){
    $scope.movies.push($scope.newMovie);
    $scope.newMovie = {};
  };
  
  $scope.toggleStar = function(movie){
    movie.favourite = !movie.favourite;
  };
  
});

app.factory('Movies', function(){
  return [
    {
      title: 'The Shawshank Redemption',
      rating: 9.0,
      favourite: true
    },
    {
      title: 'Frozen',
      rating: 6.9,
      favourite: false
    },
    {
      title: 'Scarface',
      rating: 7.7,
      favourite: true
    },
    {
      title: 'Jurassic Park',
      rating: 7.9,
      favourite: false
    },
    {
      title: 'The Dark Knight Rises',
      rating: 8.1,
      favourite: true
    },
    {
      title: '500 Days of Summer',
      rating: 8.3,
      favourite: true
    }
  ];
});

app.directive('favourite', function(){
  return {
   restrict: 'E',
   scope: {
     item: '=',
     toggle: '&'
   },
   template: '<span ng-hide="item.favourite" ng-click="toggle()" class="glyphicon glyphicon-star-empty"></span>'
    + '<span ng-show="item.favourite" ng-click="toggle()" class="glyphicon glyphicon-star"></span>'
  };
});
