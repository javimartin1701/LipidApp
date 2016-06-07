// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ui.router'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });


})




.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('home',{
    url:'/home',
    templateUrl:'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('formulariodislipemia',{
    url:'/formulariodislipemia',
    templateUrl:'templates/formulariodislipemia.html',
    controller: 'DislipFormCtrl'
  })

   .state('factorriesgocardio',{
    url:'/factorriesgocardio',
    templateUrl:'templates/factorriesgocardio.html',
    controller: 'FactorRiesgoCardio'
  })

   .state('calculadoraimc',{
    url:'/calculadoraimc',
    templateUrl:'templates/calculadoraimc.html',
    controller: 'CalculadoraIMC'
  })

   .state('modalcardiodoc',{
    url:'/modalcardiodoc',
    templateUrl:'templates/modalcardiodoc.html',
    controller: 'ModalCardioDoc'
  })

   .state('modalvih',{
    url:'/modalvih',
    templateUrl:'templates/modalvih.html',
    controller: 'ModalVIH'
  })

  .state('presentacion',{
    url:'/presentacion',
    templateUrl:'templates/presentacion.html',
    controller: 'Presentacion'
  })

  .state('funcionrenal',{
    url:'/funcionrenal',
    templateUrl:'templates/funcionrenal.html',
    controller: 'FuncionRenal'
  })
  .state('calcscore',{
    url:'/calcscore',
    templateUrl:'templates/calcscore.html',
    controller: 'CalcScore'
  })

  .state('paisesaltoriesgo',{
    url:'/paisesaltoriesgo',
    templateUrl:'templates/paisesaltoriesgo.html',
    controller: 'PaisesAltoRiesgo'
  })

  // .state('vista2',{
  //   url:'/vista2',
  //   template:'<div class="padding"><h2>Vista 2</h2><button class="button button-positive" ui-sref="vista1">A vista1</button></div>'
  // })

  $urlRouterProvider.otherwise('/home');

})

.controller('HomeCtrl',function($scope){
 

})




.controller('DislipFormCtrl',function($scope,$state){
  $scope.govih = function() {
       
        
        check = document.getElementById("VIH");
        if (check.checked) {
             $state.go('modalvih');
        }
        
    }

  

})



.controller('FactorRiesgoCardio',function($scope){
  

})

.controller('CalculadoraIMC',function($scope){
  

})

.controller('ModalCardioDoc',function($scope){
  

})

.controller('ModalVIH',function($scope){

  

})

.controller('Presentacion',function($scope){

  

})

.controller('FuncionRenal',function($scope){

  

})

.controller('CalcScore',function($scope){

  

})

.controller('PaisesAltoRiesgo',function($scope){

  

})









