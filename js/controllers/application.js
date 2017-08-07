define([
  'progressbar',
  'lodash'
  ], function() {
  ProgressBar.controller('applicationCtrl', function($rootScope,$state, $scope, $location, $idle, $keepalive, $modal, config) {
    $scope.config = config;
  });
});