// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var totalimcRounded="0";
var sexoimc="1";
var resultadofiltradoredond="inicio";
var cardio="0";
var ldlactual="0";
var renalindex="9";
var scoreindex="9";

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
    cache: false,
    url:'/home',
    templateUrl:'templates/home.html',
    controller: 'HomeCtrl'
  })

  .state('formulariodislipemia',{
    cache: false,
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
    cache: false,
    url:'/calculadoraimc',
    templateUrl:'templates/calculadoraimc.html',
    controller: 'CalculadoraIMC'
  })

   .state('modalcardiodoc',{
    cache: false,
    url:'/modalcardiodoc',
    templateUrl:'templates/modalcardiodoc.html',
    controller: 'ModalCardioDoc'
  })

   .state('modalvih',{
    cache: false,
    url:'/modalvih',
    templateUrl:'templates/modalvih.html',
    controller: 'ModalVIH'
  })

  .state('presentacion',{
    cache: false,
    url:'/presentacion',
    templateUrl:'templates/presentacion.html',
    controller: 'Presentacion'
  })

  .state('funcionrenal',{
    cache: false,
    url:'/funcionrenal',
    templateUrl:'templates/funcionrenal.html',
    controller: 'FuncionRenal'
  })
  .state('calcscore',{
    cache: false,
    url:'/calcscore',
    templateUrl:'templates/calcscore.html',
    controller: 'CalcScore'
  })

  .state('paisesaltoriesgo',{
    cache: false,
    url:'/paisesaltoriesgo',
    templateUrl:'templates/paisesaltoriesgo.html',
    controller: 'PaisesAltoRiesgo'
  })

   .state('riesgobajo',{
    cache: false,
    url:'/riesgobajo',
    templateUrl:'templates/riesgobajo.html',
    controller: 'RiesgoBajo'
  })

   .state('riesgomuyalto',{
    cache: false,
    url:'/riesgomuyalto',
    templateUrl:'templates/riesgomuyalto.html',
    controller: 'RiesgoMuyAlto'
  })


   .state('riesgoalto',{
    cache: false,
    url:'/riesgoalto',
    templateUrl:'templates/riesgoalto.html',
    controller: 'RiesgoAlto'
  })

   .state('riesgomedio',{
    cache: false,
    url:'/riesgomedio',
    templateUrl:'templates/riesgomedio.html',
    controller: 'RiesgoMedio'
  })

   .state('htasevera',{
    cache: false,
    url:'/htasevera',
    templateUrl:'templates/htasevera.html',
    controller: 'HTASevera'
  })

      .state('reduccion',{
    cache: false,
    url:'/reduccion',
    templateUrl:'templates/reduccion.html',
    controller: 'Reduccion'
  })

  // .state('vista2',{
  //   url:'/vista2',
  //   template:'<div class="padding"><h2>Vista 2</h2><button class="button button-positive" ui-sref="vista1">A vista1</button></div>'
  // })

  $urlRouterProvider.otherwise('/home');

})

.controller('HomeCtrl',function($scope){
  var totalimcRounded="0";
var sexoimc="1";
var resultadofiltradoredond="inicio";
var cardio="0";

var renalindex="9";
var scoreindex="9";
 

})




.controller('DislipFormCtrl',function($scope,$state){



    $scope.comprofinal = function(){
    ecvcheck = document.getElementById("ecvdoc");
    renalindex=document.getElementById('funcion_renal').options.selectedIndex;
    scoreindex=document.getElementById('selector-score').options.selectedIndex;

    ldlactual = document.getElementById("ldl-actual").value;

    
    if(cardio=="1"||ecvcheck.checked||renalindex=="2"||scoreindex=="1"||scoreindex=="2"){
      // alert("RiesgoMuyAlto");
      $state.go('riesgomuyalto');

    }
    if(cardio=="2"||renalindex=="1"||scoreindex=="3"){
      // alert("RiesgoAlto");
      $state.go('riesgoalto');
    }
    if(scoreindex=="4"){
      // alert("RiesgoModerado");
      $state.go('riesgomedio');
    }
    if(scoreindex=="5"){
      // alert("RiesgoBajo");
      $state.go('riesgobajo');
    }

  }



  

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



  if (resultadofiltradoredond>60) {
    $("select#funcion_renal").val("1");
  }
  else if(resultadofiltradoredond<30){
    $("select#funcion_renal").val("3");
  }
  else if(resultadofiltradoredond=="inicio"){
    $("select#funcion_renal").val("4");
  }
  else{
    $("select#funcion_renal").val("2");
  }
  
  

})



.controller('FactorRiesgoCardio',function($scope,$state){


  
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



  $scope.compro1 = function(){
  
        $state.go('formulariodislipemia');
        
        check1 = document.getElementById("diabetes");
        check2 = document.getElementById("lod");
        check3 = document.getElementById("frcv");
        check4 = document.getElementById("hiperfam");
        check5 = document.getElementById("htasevera");


        if ((check1.checked&&check2.checked)||(check1.checked&&check3.checked)) {
            cardio="1";
            
             
        }

        // if (check1.checked&&check3.checked) {
        //     cardiomuyalto="1";
             
        // }

        if(((check1.checked&&!check2.checked)&&(check1.checked&&!check3.checked))||check4.checked||check5.checked){
          cardio="2";
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

.controller('RiesgoBajo',function($scope,$state){

  document.getElementById("ldl_act_res").value=ldlactual;

  document.getElementById("ldl_obj_res").value="115";

  $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }



})


.controller('RiesgoMuyAlto',function($scope,$state){

  document.getElementById("ldl_act_res").value=ldlactual;
  document.getElementById("ldl_obj_res").value="70";

     $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }
  
  
 
})



.controller('RiesgoAlto',function($scope,$state){



  document.getElementById("ldl_act_res").value=ldlactual;
  document.getElementById("ldl_obj_res").value="100";

  $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }

  

})


.controller('RiesgoMedio',function($scope,$state){

  document.getElementById("ldl_act_res").value=ldlactual;
  document.getElementById("ldl_obj_res").value="115";

  $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }

  

})

.controller('HTASevera',function($scope){

  

})


.controller('Reduccion',function($scope){
var ldlobjetivo=document.getElementById("ldl_obj_res").value;
document.getElementById("ldl_act_red").value=ldlactual;
  document.getElementById("ldl_obj_red").value=ldlobjetivo;  
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red").value=porc_reducc+"%";



})









