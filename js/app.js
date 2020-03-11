(function($){
  var titledbApp = angular.module('dsshop', ['angular-loading-bar'])
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
    cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
  }]);

  titledbApp.controller('TitleListController', function TitleListController($scope, $http) {
    $http.get('https://multimegamander.github.io/DSShop/list0.json').then(function(response){
      $scope.titles = response.data.sort(function(a, b){
        if(a.name.toUpperCase() < b.name.toUpperCase()) return -1;
        if(a.name.toUpperCase() > b.name.toUpperCase()) return 1;
        return 0;
      });
    });
  });

  //Filesize filter, credit to https://gist.github.com/yrezgui/5653591
  titledbApp.filter( 'filesize', function () {
    var units = [
      'bytes',
      'KB',
      'MB',
      'GB',
      'TB',
      'PB'
    ];

    return function( bytes, precision ) {
      if ( isNaN( parseFloat( bytes )) || ! isFinite( bytes ) ) {
        return '?';
      }

      var unit = 0;

      while ( bytes >= 1024 ) {
        bytes /= 1024;
        unit ++;
      }

      return bytes.toFixed( + precision ) + ' ' + units[ unit ];
    };
  });
})();

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}