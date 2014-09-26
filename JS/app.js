var app = angular.module('personal', []);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});