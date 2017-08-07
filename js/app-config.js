define([
    'domReady!',
    'states/progress',
    'states/progress-details',
    'utils/constants',
    'controllers/application',
    'providers/http'
  ], function(document, ProgressDetailsState,ProgressState, Constants) {

  ProgressBar.run(function($rootScope, $state) {
        event.preventDefault(); 
        $state.go("progress-details");
  });

  ProgressBar.config(function($stateProvider, $urlRouterProvider, $httpProvider,  $provide) {
    $stateProvider
      .state('progress-details', ProgressDetailsState)
      .state('progress', ProgressState)
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/');
    //Control all ajax request/responses
    $httpProvider.interceptors.push('HttpInterceptor');
  });
});