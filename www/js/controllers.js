angular.module('starter.controllers', [])

.controller('IndexCtrl', function($scope, $auth, $location) {
  $scope.register = function() {
    $auth.submitRegistration($scope.user)
      .then(function(resp) { 
        $auth.submitLogin({
          email: $scope.user.email,
          password: $scope.user.password
        })
        $location.path('/welcome');
      });
  }
})

.controller('UserSessionsCtrl', function($scope, $auth, $location) {
  $scope.login = function() {
    $auth.submitLogin($scope.login)
      .then(function(resp) { 
        console.log('logged in!');
        console.log(resp.config.data.email);
      })
  }
})