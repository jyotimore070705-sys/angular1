// Define the AngularJS module
var app = angular.module("studentApp", []);

// Define the controller
app.controller("StudentController", function ($scope) {
    $scope.student = {
        name: "NEHAA",
        roll: "3026",
        course: "CSE"
    };
});
