require.config({
  baseUrl: 'js/',
  waitSeconds: 60,
  paths: {
    'domReady': 'lib/domReady/domReady',
    'angular': 'lib/angular/angular.min',
    'angular-animate': 'lib/angular-animate/angular-animate.min',
    "angular-ui-router": "lib/angular-ui-router/release/angular-ui-router.min",
    'templates': '../templates',
    'text': 'lib/text/text',
    'jquery': 'lib/jquery/dist/jquery.min',
    'bootstrap': 'lib/bootstrap/dist/js/bootstrap.min',
    'lodash': 'lib/lodash/dist/lodash.min',
    'textAngular-rangy': 'lib/textAngular/dist/textAngular-rangy.min',
    'textAngular-sanitize': 'lib/textAngular/dist/textAngular-sanitize.min',
    'textAngular': 'lib/textAngular/dist/textAngular.min',
    'ngIdle': 'lib/ng-idle/angular-idle.min',
    'angular-ui-bootstrab': 'lib/angular-bootstrap/ui-bootstrap-tpls.min',
    'ui-select': 'lib/ui-select/dist/select.min',
    'angular-dialog': 'lib/angular-dialog-service/dist/dialogs.min'
  },

  shim: {
    'angular':           {deps:['jquery'], exports: 'angular'},
    'angular-ui-router': {deps:['angular']},
    'angular-animate':   {deps:['angular'], exports: 'ngAnimate'},
    'rangy-selection':   {deps:['rangy']},
    'textAngular-sanitize': {deps:['angular']},
    'textAngular': {deps:['angular', 'textAngular-rangy'], exports: 'textAngular'},
    'lodash': {exports: '_'},
    'bootstrap': {deps:['jquery']},
    'ngIdle': {deps:['angular']},
    'angular-ui-bootstrab': {deps:['angular', 'bootstrap']},
    'ui-select': {deps:['angular', 'bootstrap']},
    'angular-dialog': {deps:['angular-ui-bootstrab']}
  }
});

define([
    'progressbar'
  ], function() {

  require(['app-config'], function() {
    // Do opertations that is needed after loading of your app configuration
    angular.bootstrap(document, ['progressbar']);
  });
});
