'use strict';

(function(angular){
  angular
    .module('AssignmentDetailModule')
    .controller('AssignmentDetailController', AssignmentDetailController);

    AssignmentDetailController.$inject = ['$scope', 'Assignment', 'AssignmentDetailService'];

    function AssignmentDetailController($scope, Assignment, AssignmentDetailService){
      var assignment = Assignment.assignment;
      var submissions = Assignment.submissions;

      // console.log(submissions);

      $scope.tabs = [
          {
            tabName: 'Assignment',
            content: assignment,
            defaultView: true
          },
          {
            tabName: 'Submissions',
            content: submissions,
            defaultView: false
          }
      ];

      $scope.groups = [
        {
          title: 'Dynamic Group Header - 1',
          content: 'Dynamic Group Body - 1'
        },
        {
          title: 'Dynamic Group Header - 2',
          content: 'Dynamic Group Body - 2'
        }
      ];

      $scope.items = ['Item 1', 'Item 2', 'Item 3'];

      $scope.addItem = function() {
        var newItemNo = $scope.items.length + 1;
        $scope.items.push('Item ' + newItemNo);
      };

      $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
      };
    }
})(angular);