angular.module('crawlerApp')
  .controller('crawlerController', function($scope, $http) {

     $scope._jobs = [];
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

      //new function
  $scope.addJob = function(inx) {
    var inxAdd = $scope.jobs[inx];
    $scope._jobs.push({
      title: inxAdd.title,
      url : inxAdd.url
    });
    console.log($scope._jobs);
  }


  });
