var app = angular.module('personal');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': 'ASDno7SsC9LwcXUMQaSJ21FeXLJF4Psjbyc99fce', 'X-Parse-REST-API-Key': 'naoca9PYwpGQm1Bw1qQhnMB1S3AUNDRejFgAlfdM'}
      return config;
    }
  };
});