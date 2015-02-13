angular.module('starter.controllers', [])

.controller('IndexCtrl', function($scope, $auth) {
  $scope.handleRegBtnClick = function() {
    $auth.submitRegistration($scope.registrationForm)
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