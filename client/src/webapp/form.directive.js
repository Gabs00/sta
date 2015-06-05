angular.module('webapp.form', [])
.controller('WebAppFormController', ['$scope', function($scope){
  $scope.webapp = {
    search: null,
    date: null,
  };

  $scope.submissions = [];

  $scope.showNum = 5;
}])
.directive('webappForm', [function(){
  return {
    restrict: 'EA',
    controller: 'WebAppFormController',
    templateUrl: 'src/webapp/webapp.template.html',
    link: function(scope, elem, attrs){
      scope.submitForm = function(){
        var d = angular.copy(scope.webapp);
        d.date = new Date(Date.now());
        scope.submissions.push(d);
      }

      scope.showing = function(num){
        var max = scope.submissions.length;
        scope.showNum = (num < 0) ? 0: (num >= max) ? max:num;
      }
    }
  }
}]);
