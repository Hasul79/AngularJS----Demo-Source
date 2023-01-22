(function(){
    'use strict'
   angular.module('code.demo',[]).controller("CodeController",['$scope', CodeController]);

   function CodeController($scope)
   {
     $scope.status_choices  = [
        "to do",
        "in progress",
        "completed",
     ]

     $scope.total_tasks = 5
     $scope.to_do = 3
     $scope.in_progress = 2
     $scope.completed = 0

   
     $scope.projects = [
        {
                id:1,
              name:"Web Application",
            status:$scope.status_choices[0]
        },
        {
                id:2,
              name:"Web Design",
            status:$scope.status_choices[1]
        },
        {
                id:3,
              name:"Mobile Application ",
            status:$scope.status_choices[2]
        },

     ]
   }
})();