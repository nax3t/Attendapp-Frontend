angular.module('starter.controllers', [])

.controller('IndexCtrl', function($scope, $auth) {
  $scope.register = function() {
    $auth.submitRegistration($scope.user)
      .then(function(resp) { 
        console.log("*************");
        console.log(resp);
        alert(resp);
      })
      .catch(function(resp) { 
        // handle error response
      });
  }
});