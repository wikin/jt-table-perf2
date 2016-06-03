'use strict';

var ngApp = angular.module('list', []);
ngApp.controller('ListCtrl', ['$scope', function ($scope) {
    $scope.items = [];
    $scope.fill = function (n) {
        var i;
        for (i = 0; i < n; i += 1) {
            $scope.items.push(new item(i));
        }
    };
    $scope.update = function (n) {
        var i,
        items = $scope.items;
        for (i = 0; i < n; i += 1) {
            items[i].val += ' ' + items[i].val;
        }
    };
    $scope.insert = function (n) {
        $scope.items.splice(n, 0, new item('xx'))
    };

}]);
ngApp.fill = function (n, callback) {
    var scope = angular.element($('#ng-list')).scope();
    scope.$apply(function () {
        scope.fill(n);
    });
    callback();
};
ngApp.update = function (n, callback) {
    var scope = angular.element($('#ng-list')).scope();
    scope.$apply(function () {
        scope.update(n);
    });
    callback();
};
ngApp.insert = function (n, callback) {
    var scope = angular.element($('#ng-list')).scope();
    scope.$apply(function () {
        scope.insert(n);
    });
    callback();
};
ngApp.clear = function (callback) {
    var scope = angular.element($('#ng-list')).scope();
    scope.$apply(function () {
        scope.items = [];
    });
    callback();
};

function item(i){
    this.num = i;
    this.val = i;
    this.val3 = i;
}

ENV.append({
    code: 'angularjs-2',
    clear: ngApp.clear,
    fill: ngApp.fill,
    update: ngApp.update,
    insert: ngApp.insert
})
