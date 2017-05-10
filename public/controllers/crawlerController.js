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
  $scope.addJob = function(job) {
    if($scope._jobs.indexOf(job) < 0) {
      $scope._jobs.push(job);
    }
    else {
      console.log("Already here");
    }
    // var inxAdd = $scope.jobs[inx];
    // $scope._jobs.push({
    //   title: inxAdd.title,
    //   url : inxAdd.url
    // });
    // $scope.jobs.splice(inx, 1);
  }

  $scope.deleteJob = function(inx) {
    $scope._jobs.splice(inx,1);
  }

  $scope.saveNote = function(job) {
    job.showNote = true
  }

  $scope.updateNote = function(job) {
    job.showNote = false
  }

  });
