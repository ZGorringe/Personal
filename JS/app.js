var app = angular.module('personal', ['ngRoute', 'ngAnimate']);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});