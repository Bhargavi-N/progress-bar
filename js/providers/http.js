define([
  'lodash',
  'progressbar'
  ], function() {
    // register the interceptor as a service
  ProgressBar.factory('HttpInterceptor', function($q, $location, $rootScope) {
    return {
      // optional method
      'request': function(config) {
        // do something on success
        $rootScope.$broadcast('ajaxLoader', true);
        return config;
      },

      // optional method
     'requestError': function(rejection) {
        $rootScope.$broadcast('ajaxLoader', false);
        // do something on error
        return $q.reject(rejection);
      },

      // optional method
      'response': function(response) {
        $rootScope.$broadcast('ajaxLoader', false);
        if(response.data.error) {
          $rootScope.$broadcast('responseError', response.data);
        }
        return response;
      },

      // optional method
     'responseError': function(rejection) {
        $rootScope.$broadcast('ajaxLoader', false);
        if(_.contains([0, 503, 404, 500, 400], rejection.status)) {
          $rootScope.$broadcast('responseError', rejection);
        } 
        return $q.reject(rejection);
      }
    };
  });
});