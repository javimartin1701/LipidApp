// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var totalimcRounded="0";
var sexoimc="1";
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
    cache: false,
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

   .state('riesgobajo',{
    url:'/riesgobajo',
    templateUrl:'templates/riesgobajo.html',
    controller: 'RiesgoBajo'
  })

   .state('riesgomuyalto',{
    url:'/riesgomuyalto',
    templateUrl:'templates/riesgomuyalto.html',
    controller: 'RiesgoMuyAlto'
  })


   .state('riesgoalto',{
    url:'/riesgoalto',
    templateUrl:'templates/riesgoalto.html',
    controller: 'RiesgoAlto'
  })

   .state('riesgomedio',{
    url:'/riesgomedio',
    templateUrl:'templates/riesgomedio.html',
    controller: 'RiesgoMedio'
  })

   .state('htasevera',{
    url:'/htasevera',
    templateUrl:'templates/htasevera.html',
    controller: 'HTASevera'
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

var unidad=document.getElementById("ldl-actual-unidades").value;

  $( "#ldl-actual-unidades" ).change(function() {
  var factor = parseFloat(document.getElementById("ldl-actual-unidades").value);
  
  var ldl = parseFloat(document.getElementById("ldl-actual").value);
  var ldlconv=ldl*factor;
  document.getElementById("ldl-actual").value=ldlconv;
  
});







  $scope.govih = function() {


        
        check = document.getElementById("VIH");
        if (check.checked) {
             $state.go('modalvih');
        }
        
    }

  
  $("select#funcion_renal").val("2");
 

})



.controller('FactorRiesgoCardio',function($scope){


  
  if(sexoimc=="1"){
    if (totalimcRounded>25) {
    document.getElementById('sobrepeso').checked=true;
    
    }
    
  }
  else{
    if (totalimcRounded>24) {
    document.getElementById('sobrepeso').checked=true;
    
    }
    
  }
  

})

.controller('CalculadoraIMC',function($scope,$state){

  $( ".M" ).click(function() {
      $( ".M" ).addClass( "activo" );
      $( ".H" ).removeClass( "activo" );
      sexoimc="0";
  });
  $( ".H" ).click(function() {
      $( ".H" ).addClass( "activo" );
      $( ".M" ).removeClass( "activo" );
      sexoimc="1";
  });

  $scope.calculoIMC = function() {
    
    
    var calcPeso = parseInt(document.getElementById("peso").value);
    var calcAltura = parseInt(document.getElementById("altura").value);
    var calcAlturaCuadrado=(calcAltura/100)*(calcAltura/100);

    var totalimc = calcPeso/(calcAlturaCuadrado);

    totalimcRounded = totalimc.toFixed(1);

    document.getElementById("resultado").value=totalimcRounded;
    $("#resultado").css("display", "block");

    
    


}
  // totalimcRounded=90;

})

.controller('ModalCardioDoc',function($scope){
  

})

.controller('ModalVIH',function($scope){

  

})

.controller('Presentacion',function($scope){

  

})

.controller('FuncionRenal',function($scope){

$scope.CKD1 = function() {


var MU=1; 
var NE=1; 
var J=1; 
E=0; 
var e = document.getElementById("edad-filtrado").value; 
e=parseFloat(e); 
var c = document.getElementById("creatinina").value; 
c=parseFloat(c); 
if (document.getElementById("sexo-filtrado").checked ){MU=document.getElementById("sexo-filtrado").value}; 
if (document.getElementById("raza-fintrado").checked) {NE=document.getElementById("raza-fintrado").value}; 
MU = parseFloat (MU); 
NE = parseFloat (NE); 
E=Math.pow(0.993, e); 
if ((c<=0.7) && (MU==1.018)) {J=Math.pow(c/0.7, -0.329)} 
else if ((c>0.7) && (MU==1.018)) {J=Math.pow(c/0.7, -1.209)} 
else if ((c<=0.7) && (MU==1)) {J=Math.pow(c/0.9,-0.411)} 
else {J=Math.pow(c/0.9, -1.209)}; 
resultadofiltrado = 141 * J * E * MU * NE; 
resultadofiltrado= Math.round(resultadofiltrado * 100) / 100;
resultadofiltradoredond=resultadofiltrado.toFixed(1) 
document.getElementById("resultadofiltrado").value = resultadofiltradoredond; 
$("#resultadofiltrado").css("display", "block");
} 

  

})

.controller('CalcScore',function($scope){

  

})

.controller('PaisesAltoRiesgo',function($scope){

  

})

.controller('RiesgoBajo',function($scope, $rootScope){
  a=1;
  b=1;
  c=a+b;
  
  test=c;


})


.controller("RiesgoMuyAlto",["$scope",function($scope) {
  // .controller('RiesgoMuyAlto',function($scope, $rootScope){
  // $rootScope.variable="Gestión de seguros médicos";
  // $scope.mensaje=$rootScope.variable;
  
  
 
}])



.controller('RiesgoAlto',function($scope){

  

})


.controller('RiesgoMedio',function($scope){

  

})

.controller('HTASevera',function($scope){

  

})









