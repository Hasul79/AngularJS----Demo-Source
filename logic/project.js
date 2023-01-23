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

     $scope.total_tasks = 0
     $scope.to_do = 0
     $scope.in_progress = 0
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

// create project

     $scope.create = function($event) {
        $event.stopPropagation();
        let newProject = {
            id: $scope.projects.length > 0 ?  $scope.projects[$scope.projects.length-1].id+1 : 1,
          name: $scope.projectName,
          status: $scope.status,       
        }

        $scope.projects.push(newProject);
        $scope.projectName = "";
        $scope.status = "";

        $scope.update_totals();
     }

//  update project

     $scope.update_totals = function(){
       let to_do = 0;
       let in_progress = 0;
       let completed = 0;
       let total = $scope.projects.length;

       for (let i=0; i<$scope.projects.length; i++){
        if($scope.projects[i].status == $scope.status_choices[0])
        {
            to_do += 1;
        }else if ($scope.projects[i].status == $scope.status_choices[1])
        {
            in_progress += 1;
        }else if ($scope.projects[i].status == $scope.status_choices[2])
        {
            completed += 1;
        }
       }

       $scope.to_do = to_do;
       $scope.in_progress = in_progress;
       $scope.completed = completed;
       $scope.total_tasks = total;
     }

     $scope.update_totals();
   }
})();