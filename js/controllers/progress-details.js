define([
  'services/progress-details',
  'progressbar'
  ], 
  function() {
  ProgressBar.controller('ProgressDetailsContoller', function($scope, $state, $stateParams, $http, ProgressDetailsService) {
  
    $scope.init = function() {
      ProgressDetailsService.getProgressDetails().then(function(response){
        $scope.progressSelected = 0;
      if(response && response.bars){
        $scope.bars = response.bars; 
        $scope.buttons = response.buttons;   
      } else{
        $scope.errorMessage = "Something went wrong";
      }                 
    }, function(error) { 
      if(error){
        $scope.errorMessage = "Something went wrong";
      }     
    });
    };

    //set the selected item to 'role' dropdown
    $scope.OnPogressSelectClick = function(index) {
      console.log(index);
      if(index) {
         $scope.progressSelected = index;
       } else {
          index = 0;
          $scope.progressSelected = 0;
       }     
      $('.dropdown').find('.dropdown-toggle-org').text("Progress " + (index+1));
    };

    $scope.OnProgressButtonClick = function(buttonValue) {
      console.log(buttonValue);
      $scope.buttonValue = buttonValue;
      if($scope.bars) {
        angular.forEach($scope.bars, function(value,key){
          console.log(key);
          console.log($scope.progressSelected);
          if(key == $scope.progressSelected) {
            $scope.bars[key] = (value + buttonValue) ;
          }
        });
      }
    };
  })
});