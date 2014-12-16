var app = angular.module('personal');

app.controller('mainCtrl', function($scope, parseService){

  $scope.hideBlog = false;
  $scope.blogText = false;
  $scope.aboutMe = false;
  $scope.aboutMeText = false;
  $scope.hideBlogInput = false;
  $scope.loginText = false;
  $scope.projectText = false;

  $scope.showProjectText = function() {
    $scope.projectText = !$scope.projectText;
  }

  $scope.showProjects = function() {
    $scope.projects = !$scope.projects;
    if ($scope.hideBlog = !$scope.hideBlog) {
      $scope.hideBlog = !$scope.hideBlog;
    }
    if ($scope.hideBlogInput = !$scope.hideBlogInput) {
      $scope.hideBlogInput = !$scope.hideBlogInput;
    }
    if ($scope.aboutMe = !$scope.aboutMe) {
      $scope.aboutMe = !$scope.aboutMe;
    }
  }

  $scope.showBlogInput = function() {
    $scope.hideBlogInput = !$scope.hideBlogInput;
    if ($scope.hideBlog = !$scope.hideBlog) {
      $scope.hideBlog = !$scope.hideBlog;
    }
    if ($scope.aboutMe = !$scope.aboutMe) {
      $scope.aboutMe = !$scope.aboutMe;
    }
    if ($scope.projects = !$scope.projects) {
      $scope.projects = !$scope.projects;
    }
  }

  $scope.showLoginText = function() {
    $scope.loginText = !$scope.loginText;
  }

  $scope.showBlog = function() {
    $scope.hideBlog = !$scope.hideBlog;
    if ($scope.aboutMe = !$scope.aboutMe) {
      $scope.aboutMe = !$scope.aboutMe;
    }
    if ($scope.hideBlogInput = !$scope.hideBlogInput) {
      $scope.hideBlogInput = !$scope.hideBlogInput;
    }
    if ($scope.projects = !$scope.projects) {
      $scope.projects = !$scope.projects;
    }
  };

  $scope.showBlogText = function() {
    $scope.blogText = !$scope.blogText;
  };

  $scope.showAboutMe = function() {
    $scope.aboutMe = !$scope.aboutMe;
    if ($scope.hideBlog = !$scope.hideBlog) {
      $scope.hideBlog = !$scope.hideBlog;
    }
    if ($scope.hideBlogInput = !$scope.hideBlogInput) {
      $scope.hideBlogInput = !$scope.hideBlogInput;
    }
    if ($scope.projects = !$scope.projects) {
      $scope.projects = !$scope.projects;
    }
  };

  $scope.showAboutMeText = function() {
    $scope.aboutMeText = !$scope.aboutMeText;
  };

  $scope.sendMessage = function () {
    debugger;
    parseService.postData($scope.message)
  }

  $scope.getParseData = function (){
    parseService.getData()
    .then(function(data) {
      $scope.messages = data;
    })
  }

});