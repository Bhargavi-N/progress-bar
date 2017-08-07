define([
  'lodash',
  'angular',
  'progressbar'
], function() {
  ProgressBar.factory('ProgressDetailsService', function($q, $http, config) {
    return ({
      //To get IMAGES BASED ON SEARCH STRING
      getProgressDetails: function() {
        var deferred = $q.defer();
        $http({
          method: "get",
          url: config.apiUrl
        }).
        success(function (data, status, headers, config) {
          deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
          deferred.reject(data);
        });

        return deferred.promise;
      }
    });
  });
});