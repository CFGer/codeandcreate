var app = angular.module('IntroductionApp', []);

app.controller('ContentController', function($scope, $sce) {
    $scope.items = [];
    $scope.data = {htmlString:"", trustedVersion:""}

    $scope.$watch("data.htmlString", function(newValue) {
        //debugger;
        $scope.data.trustedVersion = $sce.trustAsHtml(newValue);
    }, true);

    $scope.editorOptions = {
        lineWrapping : true,
        theme : 'twilight',
        lineNumbers: true,
        mode: 'htmlmixed',
        viewportMargin: 1000
    };

    $scope.add = function(title) {
        var item = {title: title, completed: false}
        $scope.items.push(item);
    }
    $scope.change = function(title) {
        //find element
        var element = null;
        for(var i = 0; i < $scope.items.length; i++) {
            var e = $scope.items[i];
            if(e.title == title) {
                element = e;
            }
        }
        element.completed = !element.completed;
    }
   $scope.completedPercentage = function() {
        var completed = 0;
        for(var i = 0; i < $scope.items.length; i++) {
            if($scope.items[i].completed) {
                completed++;
            }
        }
        return (completed/$scope.items.length)*100;
    }
});

app.controller('NavController', function($scope, $anchorScroll) {

});
