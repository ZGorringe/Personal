var app = angular.module('personal');

app.service('parseService', function($http, $q){

  this.postData = function(message) {
    return $http({
      method: 'POST',
      url:'https://api.parse.com/1/classes/myblog',
      data: message
    })
  }

  this.getData = function () {
    return $http({
      method: 'GET',
      url: 'https://api.parse.com/1/classes/myblog?order=-createdAt'
    })
    .then(function(res) {
      return res.data.results;
    })
  }

});