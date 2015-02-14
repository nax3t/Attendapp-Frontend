angular.module('starter.controllers', [])

.controller('IndexCtrl', function($scope, $auth, $location) {
  $scope.register = function() {
    $auth.submitRegistration($scope.user)
      .then(function(resp) { 
        $auth.submitLogin({
          email: $scope.user.email,
          password: $scope.user.password
        })
        $location.path('/tab/welcome');
        console.log(resp.config.data.email);
        alert(resp.config.data.email);
      });
  }
});