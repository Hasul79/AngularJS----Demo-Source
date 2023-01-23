(function(){
    'use strict'
    angular.module("code.demo").directive("projectRow", projectRowDirective);

    function projectRowDirective()
    {
        return {
            templateUrl:'/logic/project_box.html',
            restrict:'E',
            controller: ['$scope','$http',function($scope,$http){

                $scope.delete = function()
                {
                    $scope.$parent.projects
                    for(let i = 0; i < $scope.$parent.projects.length; i++)
                    {
                        if ($scope.$parent.projects[i].id == $scope.project.id)
                        {
                            $scope.$parent.projects.splice(i, 1);
                        }
                    
                    }
                    $scope.$parent.update_totals();
                }

               

            }],

        }
    }

})();
