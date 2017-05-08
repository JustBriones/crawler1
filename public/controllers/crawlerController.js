angular.module('crawlerApp')
  .controller('crawlerController', function($scope, $http) {


      $scope.getJobs = function() {
        $http.get('/jobs')
        .success(function(response) {
          $scope.jobs = response
            console.log(response);
        })
        .error(function (error) {
          console.log(error);
        })
      };

      //new function that works on click
      $scope.addJob = function() {
        console.log("add button works on click")
      }
  });
