define([
    'angular',
    'angular-ui-router',
    'textAngular-sanitize',
    'textAngular',
    'angular-ui-bootstrab',
    'ngIdle',
    'angular-dialog'
  ], function() {
  var ProgressBar = angular.module('progressbar', ['ui.router', 'ui.bootstrap', 'ui.select', 'textAngular', 
    'ngSanitize', 'ngIdle', 'dialogs.main']);

  window.ProgressBar = ProgressBar;
  return ProgressBar;
});