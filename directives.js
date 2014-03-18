app.directive('item', function() {
    return {
        restrict: 'E',
        scope: {
            title: "@"
        },
        transclude: true,
        template: '<input id="{{title}}" class="css-checkbox" type="checkbox" ng-click="change(title)"><label for="{{title}}" class="css-label">{{title}}</label>  <span ng-transclude></span><br />',
        link: function(scope, element, attrs) {
            scope.$parent.add(scope.title);
            scope.change = function(title) {
                scope.$parent.change(scope.title);
            }
        },   
    }
});

app.directive('tasks', function() {
    return {
        restrict: 'E',
        transclude: true,
        template: '<div class="alert alert-info" ng-transclude></div>'
    }
})