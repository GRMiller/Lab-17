var app = angular.module("myMod", []);

app.controller('portCtrl', function ($scope){

  $scope.projects = [
    {
      headline: 'Shopping Cart',
      img: 'images/ShoppingCart.png',
      description: 'A shopping cart plugin written entirely in vanilla Javascript with a little bit of jQuery.'
    },
    {
      headline: 'Seat Reservation Application',
      img: "images/SeatReservationApp.png",
      description: 'A seat reservation application written mostly in jQuery'
    },
    {
      headline: 'Mad Lib',
      img: 'images/MadLib.png',
      description: 'A Single Page Angular App that was my tool to learn the relationship between Services, Controllers, and the Scope'
    }
    ]
  });

app.directive ('grmPortfolio', function () {
  return {
    restrict: 'A',
    templateUrl: '../partials/portfolio.html'
  }

});
