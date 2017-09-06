   (function () {
     'use strict';

     angular.module('quoteApp', [])
      .controller('appController', appController);

     appController.$inject = ['$scope', '$http'];
     
     function appController($scope, $http){
      
      const onSuccess = function(response){
        $scope.quoteData = response.data;
      }

      const onFailure = function(reason){
        console.log("computer says NO!")
      }

    $scope.getQuote = function() {
      $http.get("http://quotes.stormconsultancy.co.uk/random.json")
       .then(onSuccess, onFailure);
      }

    }


   })();
