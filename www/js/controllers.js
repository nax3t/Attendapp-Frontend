angular.module('starter.controllers', [])

.controller('IndexCtrl', function($scope, $auth, $location) {
  $scope.register = function() {
    $auth.submitRegistration($scope.user)
      .then(function(resp) { 
        $auth.submitLogin({
          email: $scope.user.email,
          password: $scope.user.password
        });
        console.dir(resp.config.data.email);
      })
      .catch(function(resp) { 
        // handle error response
      });
  }
});