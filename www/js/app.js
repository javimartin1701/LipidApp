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
var ldltransactual="";
var ldlobjetivo="0";
var score_calculado="-";
var vih="no";
var objetivo_vih=0;
var contra_abs_estatina=null;
var contra_rel_estatina=null;
var contra_abs_ezetimibe=null;
var contra_abs_fibratos=null;
var contra_abs_resinas=null;
var contra_abs_ipcsk9=null;
var quitar_estatina=false;
var quitar_ezetimibe=false;
var quitar_fibratos=false;
var quitar_resinas=false;
var quitar_ipcsk9=false;



angular.module('starter', ['ionic','ui.router','firebase'])

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
    var config = {
      apiKey: "AIzaSyAXx_Kp0wEDLonlMBTo5NgfkuWxEVHwU9M",
      authDomain: "lipid-app.firebaseapp.com",
      databaseURL: "https://lipid-app.firebaseio.com",
      storageBucket: "lipid-app.appspot.com",
    };
    firebase.initializeApp(config);

    firebase.auth().signInAnonymously();
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



.state('riesgobajo_vih',{
    cache: false,
    url:'/riesgobajo_vih',
    templateUrl:'templates/riesgobajo_vih.html',
    controller: 'RiesgoBajoVIH'
  })

   .state('riesgoalto_vih',{
    cache: false,
    url:'/riesgoalto_vih',
    templateUrl:'templates/riesgoalto_vih.html',
    controller: 'RiesgoAltoVIH'
  })


   .state('riesgomoderadoalto_vih',{
    cache: false,
    url:'/riesgomoderadoalto_vih',
    templateUrl:'templates/riesgomoderadoalto_vih.html',
    controller: 'RiesgoModeradoAltoVIH'
  })

   .state('riesgomoderadobajo_vih',{
    cache: false,
    url:'/riesgomoderadobajo_vih',
    templateUrl:'templates/riesgomoderadobajo_vih.html',
    controller: 'RiesgoModeradoBajoVIH'
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

      .state('tratamientoprevio',{
    cache: false,
    url:'/tratamientoprevio',
    templateUrl:'templates/tratamientoprevio.html',
    controller: 'TratamientoPrevio'
  })

       .state('tratamientopreviomedicamentos',{
    cache: false,
    url:'/tratamientopreviomedicamentos',
    templateUrl:'templates/tratamientopreviomedicamentos.html',
    controller: 'TratamientoPrevioMedicamentos'
  })
  //      .state('tratamientopreviomedicamentos_vih',{
  //   cache: false,
  //   url:'/tratamientopreviomedicamentos_vih',
  //   templateUrl:'templates/tratamientopreviomedicamentos_vih.html',
  //   controller: 'TratamientoPrevioMedicamentos_vih'
  // })

       .state('tratamientoinicio',{
    cache: false,
    url:'/tratamientoinicio',
    templateUrl:'templates/tratamientoinicio.html',
    controller: 'TratamientoInicio'
  })
       .state('tratamientoinicio_sin_estatina',{
    cache: false,
    url:'/tratamientoinicio_sin_estatina',
    templateUrl:'templates/tratamientoinicio_sin_estatina.html',
    controller: 'TratamientoInicioSinEstatina'
  })


       .state('tratamientoinicio_sin_resina',{
    cache: false,
    url:'/tratamientoinicio_sin_resina',
    templateUrl:'templates/tratamientoinicio_sin_resina.html',
    controller: 'TratamientoInicioSinResina'
  })

       .state('tratamientoinicio_sin_fibratos',{
    cache: false,
    url:'/tratamientoinicio_sin_fibratos',
    templateUrl:'templates/tratamientoinicio_sin_fibratos.html',
    controller: 'TratamientoInicioSinFibratos'
  })

       .state('tratamientoinicio_sin_ipcsk9',{
    cache: false,
    url:'/tratamientoinicio_sin_ipcsk9',
    templateUrl:'templates/tratamientoinicio_sin_ipcsk9.html',
    controller: 'TratamientoInicioSinIPCSK9'
  })

       .state('tratamientoinicio_sin_ipcsk9_ni_resinas',{
    cache: false,
    url:'/tratamientoinicio_sin_ipcsk9_ni_resinas',
    templateUrl:'templates/tratamientoinicio_sin_ipcsk9_ni_resinas.html',
    controller: 'TratamientoInicioSinIPCSK9NiResinas'
  })

       .state('tratamientoinicio_sin_ezetimive',{
    cache: false,
    url:'/tratamientoinicio_sin_ezetimive',
    templateUrl:'templates/tratamientoinicio_sin_ezetimive.html',
    controller: 'TratamientoInicioSinEzetimive'
  })











       .state('tratamientoinicio2',{
    cache: false,
    url:'/tratamientoinicio2',
    templateUrl:'templates/tratamientoinicio2.html',
    controller: 'TratamientoInicio2'
  })

       .state('contraindicaciones',{
    cache: false,
    url:'/contraindicaciones',
    templateUrl:'templates/contraindicaciones.html',
    controller: 'Contraindicaciones'
  })

       .state('estatinas',{
    cache: false,
    url:'/estatinas',
    templateUrl:'templates/estatinas.html',
    controller: 'Estatinas'
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
    document.getElementById("ldl-actual").value=ldltransactual;

    $scope.irfactorriesgo = function(){
        ldltransactual=document.getElementById("ldl-actual").value;
        $state.go('factorriesgocardio');
    }

    $scope.irfuncionrenal = function(){
        ldltransactual=document.getElementById("ldl-actual").value;
        $state.go('funcionrenal');
    }

    $scope.ircalcscore = function(){
        ldltransactual=document.getElementById("ldl-actual").value;
        $state.go('calcscore');
    }



    $scope.comprofinal = function(){
    ecvcheck = document.getElementById("ecvdoc");
    renalindex=document.getElementById('funcion_renal').options.selectedIndex;
    scoreindex=document.getElementById('selector-score').options.selectedIndex;
    tiene_vih=document.getElementById('VIH');
    ldlactual = document.getElementById("ldl-actual").value;

    


    if (tiene_vih.checked){
      if(cardio=="2"||ecvcheck.checked||scoreindex=="1"){
      // alert("RiesgoMuyAlto");
      alert("Riesgo alto");
      objetivo_vih=70;

    }
    if(cardio=="1"||scoreindex=="2"){
      // alert("RiesgoAlto");
      alert("Riesgo moderado-alto");
      objetivo_vih=100;
    }
    if(cardio=="1"||scoreindex=="3"){
      // alert("RiesgoModerado");
      alert("Riesgo moderado-bajo");
      objetivo_vih=130;
    }
    if(cardio=="1"){
      // alert("RiesgoBajo");
      alert("Riesgo bajo");
      objetivo_vih=130;
    }
    }
    else{
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
        vih="yes";
        ldltransactual=document.getElementById("ldl-actual").value;
        
        renalindex=document.getElementById('funcion_renal').options.selectedIndex;
        scoreindex=document.getElementById('selector-score').options.selectedIndex;

        if(renalindex==0){
          resultadofiltradoredond=70;
        }

        if(renalindex==1){
          resultadofiltradoredond=40;
        }

        if(renalindex==2){
         resultadofiltradoredond=25;
        }

        if(renalindex==3){
          resultadofiltradoredond="inicio";
        }



        // if(scoreindex==0){
        //   resultadofiltradoredond=70;
        // }

        if(scoreindex==1){
          score_calculado=25;
        }

        if(scoreindex==2){
         score_calculado=15;
        }

        if(scoreindex==3){
          score_calculado=8;
        }
        if(scoreindex==4){
         score_calculado=3;
        }

        if(scoreindex==0){
          score_calculado="-";
        }

    }

if(vih=="yes"){    
document.getElementById('VIH').checked=true;
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



   if (score_calculado>19) {
    $("select#selector-score").val("20");
  }
  if (score_calculado>9&&score_calculado<20) {
    $("select#selector-score").val("10-20");
  }
    if (score_calculado>4&&score_calculado<10) {
    $("select#selector-score").val("5-9");
  }
  if (score_calculado>1&&score_calculado<5) {
    $("select#selector-score").val("1-4");
  }
  if (score_calculado<2) {
    $("select#selector-score").val("1");
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

.controller('CalcScore',function($scope,$state){


  


  $scope.calculoScore = function() {
    var sexoscore=document.getElementById("sexoscore").value;
    var tabaquismoscore=document.getElementById("tabaquismoscore").value;
    var edadscore=document.getElementById("edadscore").value;
    var PAS=document.getElementById("PAS").value;
    var colesterolscore2=document.getElementById("colesterolscore2").value;
    var checkPais = document.getElementById("selector_alto_riesgo");

   


  

if(checkPais.checked){
  if(sexoscore=="M")
  {

    // alert(sexoscore+tabaquismoscore+edadscore+PAS+colesterolscore2);
    if(tabaquismoscore=="NF"){

      if(edadscore=="49"){

        if(PAS=="PAS120"){
          
          if(colesterolscore2=="4"){
              score_calculado="0";
              
          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
          
      }
      if(edadscore=="50-54"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }

          
      }
      if(edadscore=="55-59"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="3";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="3";

          }
          if(colesterolscore2=="7"){
              score_calculado="3";

          }
          if(colesterolscore2=="8"){
              score_calculado="4";

          }
        }
          
      }
      if(edadscore=="60-64"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="1";            


          }
          if(colesterolscore2=="5"){
              score_calculado="1";            


          }
          if(colesterolscore2=="6"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="2"; 

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="5"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="6"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="3"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="3";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="3";

          }
          if(colesterolscore2=="5"){
            score_calculado="3";

          }
          if(colesterolscore2=="6"){
            score_calculado="3";

          }
          if(colesterolscore2=="7"){
            score_calculado="4";

          }
          if(colesterolscore2=="8"){
            score_calculado="5";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="4";

          }
          if(colesterolscore2=="5"){
            score_calculado="4";

          }
          if(colesterolscore2=="6"){
            score_calculado="5";

          }
          if(colesterolscore2=="7"){
            score_calculado="6";

          }
          if(colesterolscore2=="8"){
            score_calculado="7";

          }
        }
          
      }
      if(edadscore=="65"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
            score_calculado="2";

          }
          if(colesterolscore2=="5"){
            score_calculado="2";

          }
          if(colesterolscore2=="6"){
            score_calculado="3";

          }
          if(colesterolscore2=="7"){
            score_calculado="3";

          }
          if(colesterolscore2=="8"){
            score_calculado="4";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="3";

          }
          if(colesterolscore2=="5"){
            score_calculado="3";

          }
          if(colesterolscore2=="6"){
            score_calculado="4";

          }
          if(colesterolscore2=="7"){
            score_calculado="5";

          }
          if(colesterolscore2=="8"){
            score_calculado="6";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="5";

          }
          if(colesterolscore2=="5"){
            score_calculado="5";

          }
          if(colesterolscore2=="6"){
            score_calculado="6";

          }
          if(colesterolscore2=="7"){
            score_calculado="7";

          }
          if(colesterolscore2=="8"){
            score_calculado="8";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="7";

          }
          if(colesterolscore2=="5"){
            score_calculado="8";

          }
          if(colesterolscore2=="6"){
            score_calculado="9";

          }
          if(colesterolscore2=="7"){
            score_calculado="10";

          }
          if(colesterolscore2=="8"){
            score_calculado="12";

          }
        }
          
      }

    }
      if(tabaquismoscore=="F"){
        

      if(edadscore=="49"){

        if(PAS=="PAS120"){
          
          if(colesterolscore2=="4"){
              score_calculado="0";
              
          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
          
      }
      if(edadscore=="50-54"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="3";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="3";

          }
          if(colesterolscore2=="7"){
              score_calculado="3";

          }
          if(colesterolscore2=="8"){
              score_calculado="4";

          }
        }

          
      }
      if(edadscore=="55-59"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="3";

          }
          if(colesterolscore2=="8"){
              score_calculado="3";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="3";

          }
          if(colesterolscore2=="5"){
              score_calculado="3";

          }
          if(colesterolscore2=="6"){
              score_calculado="4";

          }
          if(colesterolscore2=="7"){
              score_calculado="4";

          }
          if(colesterolscore2=="8"){
              score_calculado="5";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="4";

          }
          if(colesterolscore2=="5"){
              score_calculado="5";

          }
          if(colesterolscore2=="6"){
              score_calculado="5";

          }
          if(colesterolscore2=="7"){
              score_calculado="6";

          }
          if(colesterolscore2=="8"){
              score_calculado="7";

          }
        }
          
      }
      if(edadscore=="60-64"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="2";            


          }
          if(colesterolscore2=="5"){
              score_calculado="3";            


          }
          if(colesterolscore2=="6"){
            score_calculado="3"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="4"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="4"; 

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="3"; 

          }
          if(colesterolscore2=="5"){
            score_calculado="4"; 

          }
          if(colesterolscore2=="6"){
            score_calculado="5"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="5"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="6";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="5";

          }
          if(colesterolscore2=="5"){
            score_calculado="6";

          }
          if(colesterolscore2=="6"){
            score_calculado="7";

          }
          if(colesterolscore2=="7"){
            score_calculado="8";

          }
          if(colesterolscore2=="8"){
            score_calculado="9";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="8";

          }
          if(colesterolscore2=="5"){
            score_calculado="9";

          }
          if(colesterolscore2=="6"){
            score_calculado="10";

          }
          if(colesterolscore2=="7"){
            score_calculado="11";

          }
          if(colesterolscore2=="8"){
            score_calculado="13";

          }
        }
          
      }
      if(edadscore=="65"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
            score_calculado="4";

          }
          if(colesterolscore2=="5"){
            score_calculado="5";

          }
          if(colesterolscore2=="6"){
            score_calculado="5";

          }
          if(colesterolscore2=="7"){
            score_calculado="6";

          }
          if(colesterolscore2=="8"){
            score_calculado="7";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="6";

          }
          if(colesterolscore2=="5"){
            score_calculado="7";

          }
          if(colesterolscore2=="6"){
            score_calculado="8";

          }
          if(colesterolscore2=="7"){
            score_calculado="9";

          }
          if(colesterolscore2=="8"){
            score_calculado="11";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="9";

          }
          if(colesterolscore2=="5"){
            score_calculado="10";

          }
          if(colesterolscore2=="6"){
            score_calculado="12";

          }
          if(colesterolscore2=="7"){
            score_calculado="13";

          }
          if(colesterolscore2=="8"){
            score_calculado="16";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="13";

          }
          if(colesterolscore2=="5"){
            score_calculado="15";

          }
          if(colesterolscore2=="6"){
            score_calculado="17";

          }
          if(colesterolscore2=="7"){
            score_calculado="19";

          }
          if(colesterolscore2=="8"){
            score_calculado="22";

          }
        }
          
      }

        
      }
    
  }


  else if(sexoscore=="V")
  {
    // alert(sexoscore+tabaquismoscore+edadscore+PAS+colesterolscore2);
    if(tabaquismoscore=="NF"){

      if(edadscore=="49"){

        if(PAS=="PAS120"){
          
          if(colesterolscore2=="4"){
              score_calculado="0";
              
          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
          
      }
      if(edadscore=="50-54"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="3";

          }
          if(colesterolscore2=="8"){
              score_calculado="3";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="3";

          }
          if(colesterolscore2=="6"){
              score_calculado="3";

          }
          if(colesterolscore2=="7"){
              score_calculado="4";

          }
          if(colesterolscore2=="8"){
              score_calculado="5";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="4";

          }
          if(colesterolscore2=="5"){
              score_calculado="4";

          }
          if(colesterolscore2=="6"){
              score_calculado="5";

          }
          if(colesterolscore2=="7"){
              score_calculado="6";

          }
          if(colesterolscore2=="8"){
              score_calculado="7";

          }
        }

          
      }
      if(edadscore=="55-59"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="3";

          }
          if(colesterolscore2=="7"){
              score_calculado="3";

          }
          if(colesterolscore2=="8"){
              score_calculado="4";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="3";

          }
          if(colesterolscore2=="5"){
              score_calculado="3";

          }
          if(colesterolscore2=="6"){
              score_calculado="4";

          }
          if(colesterolscore2=="7"){
              score_calculado="5";

          }
          if(colesterolscore2=="8"){
              score_calculado="6";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="4";

          }
          if(colesterolscore2=="5"){
              score_calculado="5";

          }
          if(colesterolscore2=="6"){
              score_calculado="6";

          }
          if(colesterolscore2=="7"){
              score_calculado="7";

          }
          if(colesterolscore2=="8"){
              score_calculado="8";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="6";

          }
          if(colesterolscore2=="5"){
              score_calculado="7";

          }
          if(colesterolscore2=="6"){
              score_calculado="8";

          }
          if(colesterolscore2=="7"){
              score_calculado="10";

          }
          if(colesterolscore2=="8"){
              score_calculado="12";

          }
        }
          
      }
      if(edadscore=="60-64"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="3";            


          }
          if(colesterolscore2=="5"){
              score_calculado="3";            


          }
          if(colesterolscore2=="6"){
            score_calculado="4"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="5"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="6"; 

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="4"; 

          }
          if(colesterolscore2=="5"){
            score_calculado="5"; 

          }
          if(colesterolscore2=="6"){
            score_calculado="6"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="7"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="9";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="6";

          }
          if(colesterolscore2=="5"){
            score_calculado="7";

          }
          if(colesterolscore2=="6"){
            score_calculado="9";

          }
          if(colesterolscore2=="7"){
            score_calculado="10";

          }
          if(colesterolscore2=="8"){
            score_calculado="12";
          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="9";

          }
          if(colesterolscore2=="5"){
            score_calculado="11";

          }
          if(colesterolscore2=="6"){
            score_calculado="13";

          }
          if(colesterolscore2=="7"){
            score_calculado="15";

          }
          if(colesterolscore2=="8"){
            score_calculado="18";

          }
        }
          
      }
      if(edadscore=="65"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
            score_calculado="4";

          }
          if(colesterolscore2=="5"){
            score_calculado="5";

          }
          if(colesterolscore2=="6"){
            score_calculado="6";

          }
          if(colesterolscore2=="7"){
            score_calculado="7";

          }
          if(colesterolscore2=="8"){
            score_calculado="9";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="6";

          }
          if(colesterolscore2=="5"){
            score_calculado="8";

          }
          if(colesterolscore2=="6"){
            score_calculado="9";

          }
          if(colesterolscore2=="7"){
            score_calculado="11";

          }
          if(colesterolscore2=="8"){
            score_calculado="13";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="9";

          }
          if(colesterolscore2=="5"){
            score_calculado="11";

          }
          if(colesterolscore2=="6"){
            score_calculado="13";

          }
          if(colesterolscore2=="7"){
            score_calculado="15";

          }
          if(colesterolscore2=="8"){
            score_calculado="16";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="14";

          }
          if(colesterolscore2=="5"){
            score_calculado="16";

          }
          if(colesterolscore2=="6"){
            score_calculado="19";

          }
          if(colesterolscore2=="7"){
            score_calculado="22";

          }
          if(colesterolscore2=="8"){
            score_calculado="26";

          }
        }
          
      }

    }
      if(tabaquismoscore=="F"){
        

      if(edadscore=="49"){

        if(PAS=="PAS120"){
          
          if(colesterolscore2=="4"){
              score_calculado="1";
              
          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="3";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="3";

          }
          if(colesterolscore2=="7"){
              score_calculado="3";

          }
          if(colesterolscore2=="8"){
              score_calculado="4";

          }
        }
          
      }
      if(edadscore=="50-54"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="2"){
              score_calculado="1";

          }
          if(colesterolscore2=="3"){
              score_calculado="1";

          }
          if(colesterolscore2=="3"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="4";

          }
          if(colesterolscore2=="8"){
              score_calculado="5";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="3";

          }
          if(colesterolscore2=="5"){
              score_calculado="4";

          }
          if(colesterolscore2=="6"){
              score_calculado="5";

          }
          if(colesterolscore2=="7"){
              score_calculado="6";

          }
          if(colesterolscore2=="8"){
              score_calculado="7";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="5";

          }
          if(colesterolscore2=="5"){
              score_calculado="6";

          }
          if(colesterolscore2=="6"){
              score_calculado="7";

          }
          if(colesterolscore2=="7"){
              score_calculado="8";

          }
          if(colesterolscore2=="8"){
              score_calculado="10";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="7";

          }
          if(colesterolscore2=="5"){
              score_calculado="8";

          }
          if(colesterolscore2=="6"){
              score_calculado="10";

          }
          if(colesterolscore2=="7"){
              score_calculado="12";

          }
          if(colesterolscore2=="8"){
              score_calculado="14";

          }
        }

          
      }
      if(edadscore=="55-59"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="4";

          }
          if(colesterolscore2=="5"){
              score_calculado="4";

          }
          if(colesterolscore2=="6"){
              score_calculado="5";

          }
          if(colesterolscore2=="7"){
              score_calculado="6";

          }
          if(colesterolscore2=="8"){
              score_calculado="8";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="5";

          }
          if(colesterolscore2=="5"){
              score_calculado="6";

          }
          if(colesterolscore2=="6"){
              score_calculado="8";

          }
          if(colesterolscore2=="7"){
              score_calculado="9";

          }
          if(colesterolscore2=="8"){
              score_calculado="11";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="8";

          }
          if(colesterolscore2=="5"){
              score_calculado="9";

          }
          if(colesterolscore2=="6"){
              score_calculado="11";

          }
          if(colesterolscore2=="7"){
              score_calculado="13";

          }
          if(colesterolscore2=="8"){
              score_calculado="16";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="12";

          }
          if(colesterolscore2=="5"){
              score_calculado="13";

          }
          if(colesterolscore2=="6"){
              score_calculado="16";

          }
          if(colesterolscore2=="7"){
              score_calculado="19";

          }
          if(colesterolscore2=="12"){
              score_calculado="22";

          }
        }
          
      }
      if(edadscore=="60-64"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="6";            


          }
          if(colesterolscore2=="5"){
              score_calculado="7";            


          }
          if(colesterolscore2=="6"){
            score_calculado="8"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="10"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="12"; 

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="8"; 

          }
          if(colesterolscore2=="5"){
            score_calculado="10"; 

          }
          if(colesterolscore2=="6"){
            score_calculado="12"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="14"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="17";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="12";

          }
          if(colesterolscore2=="5"){
            score_calculado="14";

          }
          if(colesterolscore2=="6"){
            score_calculado="17";

          }
          if(colesterolscore2=="7"){
            score_calculado="20";

          }
          if(colesterolscore2=="8"){
            score_calculado="24";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="18";

          }
          if(colesterolscore2=="5"){
            score_calculado="21";

          }
          if(colesterolscore2=="6"){
            score_calculado="24";

          }
          if(colesterolscore2=="7"){
            score_calculado="28";

          }
          if(colesterolscore2=="8"){
            score_calculado="33";

          }
        }
          
      }
      if(edadscore=="65"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
            score_calculado="9";

          }
          if(colesterolscore2=="5"){
            score_calculado="10";

          }
          if(colesterolscore2=="6"){
            score_calculado="12";

          }
          if(colesterolscore2=="7"){
            score_calculado="14";

          }
          if(colesterolscore2=="8"){
            score_calculado="17";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="13";

          }
          if(colesterolscore2=="5"){
            score_calculado="15";

          }
          if(colesterolscore2=="6"){
            score_calculado="17";

          }
          if(colesterolscore2=="7"){
            score_calculado="20";

          }
          if(colesterolscore2=="8"){
            score_calculado="24";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="18";

          }
          if(colesterolscore2=="5"){
            score_calculado="21";

          }
          if(colesterolscore2=="6"){
            score_calculado="25";

          }
          if(colesterolscore2=="7"){
            score_calculado="29";

          }
          if(colesterolscore2=="8"){
            score_calculado="34";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="26";

          }
          if(colesterolscore2=="5"){
            score_calculado="30";

          }
          if(colesterolscore2=="6"){
            score_calculado="35";

          }
          if(colesterolscore2=="7"){
            score_calculado="41";

          }
          if(colesterolscore2=="8"){
            score_calculado="47";

          }
        }
          
      }

        
      }
    
  }
}
else{
  if(sexoscore=="M")
  {

    // alert(sexoscore+tabaquismoscore+edadscore+PAS+colesterolscore2);
    if(tabaquismoscore=="NF"){

      if(edadscore=="49"){

        if(PAS=="PAS120"){
          
          if(colesterolscore2=="4"){
              score_calculado="0";
              
          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
          
      }
      if(edadscore=="50-54"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }

          
      }
      if(edadscore=="55-59"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
          
      }
      if(edadscore=="60-64"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="1";            


          }
          if(colesterolscore2=="5"){
              score_calculado="1";            


          }
          if(colesterolscore2=="6"){
            score_calculado="1"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="1"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="1"; 

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="1"; 

          }
          if(colesterolscore2=="5"){
            score_calculado="1"; 

          }
          if(colesterolscore2=="6"){
            score_calculado="1"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="2";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="2";

          }
          if(colesterolscore2=="5"){
            score_calculado="2";

          }
          if(colesterolscore2=="6"){
            score_calculado="2";

          }
          if(colesterolscore2=="7"){
            score_calculado="2";

          }
          if(colesterolscore2=="8"){
            score_calculado="3";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="3";

          }
          if(colesterolscore2=="5"){
            score_calculado="3";

          }
          if(colesterolscore2=="6"){
            score_calculado="3";

          }
          if(colesterolscore2=="7"){
            score_calculado="4";

          }
          if(colesterolscore2=="8"){
            score_calculado="4";

          }
        }
          
      }
      if(edadscore=="65"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
            score_calculado="1";

          }
          if(colesterolscore2=="5"){
            score_calculado="1";

          }
          if(colesterolscore2=="6"){
            score_calculado="2";

          }
          if(colesterolscore2=="7"){
            score_calculado="2";

          }
          if(colesterolscore2=="8"){
            score_calculado="2";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="2";

          }
          if(colesterolscore2=="5"){
            score_calculado="2";

          }
          if(colesterolscore2=="6"){
            score_calculado="2";

          }
          if(colesterolscore2=="7"){
            score_calculado="3";

          }
          if(colesterolscore2=="8"){
            score_calculado="3";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="3";

          }
          if(colesterolscore2=="5"){
            score_calculado="3";

          }
          if(colesterolscore2=="6"){
            score_calculado="4";

          }
          if(colesterolscore2=="7"){
            score_calculado="4";

          }
          if(colesterolscore2=="8"){
            score_calculado="5";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="4";

          }
          if(colesterolscore2=="5"){
            score_calculado="5";

          }
          if(colesterolscore2=="6"){
            score_calculado="6";

          }
          if(colesterolscore2=="7"){
            score_calculado="6";

          }
          if(colesterolscore2=="8"){
            score_calculado="7";

          }
        }
          
      }

    }
      if(tabaquismoscore=="F"){
        

      if(edadscore=="49"){

        if(PAS=="PAS120"){
          
          if(colesterolscore2=="4"){
              score_calculado="0";
              
          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
          
      }
      if(edadscore=="50-54"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }

          
      }
      if(edadscore=="55-59"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="3";

          }
          if(colesterolscore2=="8"){
              score_calculado="3";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="3";

          }
          if(colesterolscore2=="5"){
              score_calculado="3";

          }
          if(colesterolscore2=="6"){
              score_calculado="3";

          }
          if(colesterolscore2=="7"){
              score_calculado="4";

          }
          if(colesterolscore2=="8"){
              score_calculado="4";

          }
        }
          
      }
      if(edadscore=="60-64"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="1";            


          }
          if(colesterolscore2=="5"){
              score_calculado="2";            


          }
          if(colesterolscore2=="6"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="3"; 

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="5"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="6"){
            score_calculado="3"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="3"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="4";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="3";

          }
          if(colesterolscore2=="5"){
            score_calculado="4";

          }
          if(colesterolscore2=="6"){
            score_calculado="4";

          }
          if(colesterolscore2=="7"){
            score_calculado="5";

          }
          if(colesterolscore2=="8"){
            score_calculado="5";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="5";

          }
          if(colesterolscore2=="5"){
            score_calculado="5";

          }
          if(colesterolscore2=="6"){
            score_calculado="6";

          }
          if(colesterolscore2=="7"){
            score_calculado="7";

          }
          if(colesterolscore2=="8"){
            score_calculado="8";

          }
        }
          
      }
      if(edadscore=="65"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
            score_calculado="3";

          }
          if(colesterolscore2=="5"){
            score_calculado="3";

          }
          if(colesterolscore2=="6"){
            score_calculado="3";

          }
          if(colesterolscore2=="7"){
            score_calculado="4";

          }
          if(colesterolscore2=="8"){
            score_calculado="4";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="4";

          }
          if(colesterolscore2=="5"){
            score_calculado="4";

          }
          if(colesterolscore2=="6"){
            score_calculado="5";

          }
          if(colesterolscore2=="7"){
            score_calculado="6";

          }
          if(colesterolscore2=="8"){
            score_calculado="7";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="6";

          }
          if(colesterolscore2=="5"){
            score_calculado="6";

          }
          if(colesterolscore2=="6"){
            score_calculado="7";

          }
          if(colesterolscore2=="7"){
            score_calculado="8";

          }
          if(colesterolscore2=="8"){
            score_calculado="10";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="9";

          }
          if(colesterolscore2=="5"){
            score_calculado="9";

          }
          if(colesterolscore2=="6"){
            score_calculado="11";

          }
          if(colesterolscore2=="7"){
            score_calculado="12";

          }
          if(colesterolscore2=="8"){
            score_calculado="14";

          }
        }
          
      }

        
      }
    
  }


  else if(sexoscore=="V")
  {
    // alert(sexoscore+tabaquismoscore+edadscore+PAS+colesterolscore2);
    if(tabaquismoscore=="NF"){

      if(edadscore=="49"){

        if(PAS=="PAS120"){
          
          if(colesterolscore2=="4"){
              score_calculado="0";
              
          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="0";

          }
          if(colesterolscore2=="8"){
              score_calculado="0";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
          
      }
      if(edadscore=="50-54"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="3";

          }
          if(colesterolscore2=="7"){
              score_calculado="3";

          }
          if(colesterolscore2=="8"){
              score_calculado="4";

          }
        }

          
      }
      if(edadscore=="55-59"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="3";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="3";

          }
          if(colesterolscore2=="7"){
              score_calculado="3";

          }
          if(colesterolscore2=="8"){
              score_calculado="4";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="3";

          }
          if(colesterolscore2=="5"){
              score_calculado="4";

          }
          if(colesterolscore2=="6"){
              score_calculado="4";

          }
          if(colesterolscore2=="7"){
              score_calculado="5";

          }
          if(colesterolscore2=="8"){
              score_calculado="6";

          }
        }
          
      }
      if(edadscore=="60-64"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="2";            


          }
          if(colesterolscore2=="5"){
              score_calculado="2";            


          }
          if(colesterolscore2=="6"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="3"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="3"; 

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="2"; 

          }
          if(colesterolscore2=="5"){
            score_calculado="3"; 

          }
          if(colesterolscore2=="6"){
            score_calculado="3"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="4"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="4";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="3";

          }
          if(colesterolscore2=="5"){
            score_calculado="4";

          }
          if(colesterolscore2=="6"){
            score_calculado="5";

          }
          if(colesterolscore2=="7"){
            score_calculado="5";

          }
          if(colesterolscore2=="8"){
            score_calculado="6";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="5";

          }
          if(colesterolscore2=="5"){
            score_calculado="6";

          }
          if(colesterolscore2=="6"){
            score_calculado="7";

          }
          if(colesterolscore2=="7"){
            score_calculado="8";

          }
          if(colesterolscore2=="8"){
            score_calculado="9";

          }
        }
          
      }
      if(edadscore=="65"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
            score_calculado="2";

          }
          if(colesterolscore2=="5"){
            score_calculado="3";

          }
          if(colesterolscore2=="6"){
            score_calculado="3";

          }
          if(colesterolscore2=="7"){
            score_calculado="4";

          }
          if(colesterolscore2=="8"){
            score_calculado="5";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="4";

          }
          if(colesterolscore2=="5"){
            score_calculado="4";

          }
          if(colesterolscore2=="6"){
            score_calculado="5";

          }
          if(colesterolscore2=="7"){
            score_calculado="6";

          }
          if(colesterolscore2=="8"){
            score_calculado="7";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="5";

          }
          if(colesterolscore2=="5"){
            score_calculado="6";

          }
          if(colesterolscore2=="6"){
            score_calculado="7";

          }
          if(colesterolscore2=="7"){
            score_calculado="8";

          }
          if(colesterolscore2=="8"){
            score_calculado="10";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="8";

          }
          if(colesterolscore2=="5"){
            score_calculado="9";

          }
          if(colesterolscore2=="6"){
            score_calculado="10";

          }
          if(colesterolscore2=="7"){
            score_calculado="12";

          }
          if(colesterolscore2=="8"){
            score_calculado="14";

          }
        }
          
      }

    }
      if(tabaquismoscore=="F"){
        

      if(edadscore=="49"){

        if(PAS=="PAS120"){
          
          if(colesterolscore2=="4"){
              score_calculado="0";
              
          }
          if(colesterolscore2=="5"){
              score_calculado="0";

          }
          if(colesterolscore2=="6"){
              score_calculado="0";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="0";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="1";

          }
          if(colesterolscore2=="8"){
              score_calculado="1";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="1";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
          
      }
      if(edadscore=="50-54"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="1";

          }
          if(colesterolscore2=="5"){
              score_calculado="1";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="2";

          }
          if(colesterolscore2=="8"){
              score_calculado="2";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="2";

          }
          if(colesterolscore2=="7"){
              score_calculado="3";

          }
          if(colesterolscore2=="8"){
              score_calculado="3";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="3";

          }
          if(colesterolscore2=="6"){
              score_calculado="3";

          }
          if(colesterolscore2=="7"){
              score_calculado="4";

          }
          if(colesterolscore2=="8"){
              score_calculado="5";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="4";

          }
          if(colesterolscore2=="5"){
              score_calculado="4";

          }
          if(colesterolscore2=="6"){
              score_calculado="5";

          }
          if(colesterolscore2=="7"){
              score_calculado="6";

          }
          if(colesterolscore2=="8"){
              score_calculado="7";

          }
        }

          
      }
      if(edadscore=="55-59"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="2";

          }
          if(colesterolscore2=="5"){
              score_calculado="2";

          }
          if(colesterolscore2=="6"){
              score_calculado="3";

          }
          if(colesterolscore2=="7"){
              score_calculado="3";

          }
          if(colesterolscore2=="8"){
              score_calculado="4";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
              score_calculado="3";

          }
          if(colesterolscore2=="5"){
              score_calculado="3";

          }
          if(colesterolscore2=="6"){
              score_calculado="4";

          }
          if(colesterolscore2=="7"){
              score_calculado="5";

          }
          if(colesterolscore2=="8"){
              score_calculado="6";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
              score_calculado="4";

          }
          if(colesterolscore2=="5"){
              score_calculado="5";

          }
          if(colesterolscore2=="6"){
              score_calculado="6";

          }
          if(colesterolscore2=="7"){
              score_calculado="7";

          }
          if(colesterolscore2=="8"){
              score_calculado="8";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
              score_calculado="6";

          }
          if(colesterolscore2=="5"){
              score_calculado="7";

          }
          if(colesterolscore2=="6"){
              score_calculado="8";

          }
          if(colesterolscore2=="7"){
              score_calculado="10";

          }
          if(colesterolscore2=="12"){
              score_calculado="4";

          }
        }
          
      }
      if(edadscore=="60-64"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
              score_calculado="3";            


          }
          if(colesterolscore2=="5"){
              score_calculado="4";            


          }
          if(colesterolscore2=="6"){
            score_calculado="4"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="5"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="6"; 

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="5"; 

          }
          if(colesterolscore2=="5"){
            score_calculado="5"; 

          }
          if(colesterolscore2=="6"){
            score_calculado="6"; 

          }
          if(colesterolscore2=="7"){
            score_calculado="7"; 

          }
          if(colesterolscore2=="8"){
            score_calculado="9";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="7";

          }
          if(colesterolscore2=="5"){
            score_calculado="8";

          }
          if(colesterolscore2=="6"){
            score_calculado="9";

          }
          if(colesterolscore2=="7"){
            score_calculado="11";

          }
          if(colesterolscore2=="8"){
            score_calculado="13";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="10";

          }
          if(colesterolscore2=="5"){
            score_calculado="11";

          }
          if(colesterolscore2=="6"){
            score_calculado="13";

          }
          if(colesterolscore2=="7"){
            score_calculado="15";

          }
          if(colesterolscore2=="8"){
            score_calculado="18";

          }
        }
          
      }
      if(edadscore=="65"){
                if(PAS=="PAS120"){
          if(colesterolscore2=="4"){
            score_calculado="5";

          }
          if(colesterolscore2=="5"){
            score_calculado="5";

          }
          if(colesterolscore2=="6"){
            score_calculado="6";

          }
          if(colesterolscore2=="7"){
            score_calculado="8";

          }
          if(colesterolscore2=="8"){
            score_calculado="9";

          }
        }
        if(PAS=="PAS140"){
          if(colesterolscore2=="4"){
            score_calculado="7";

          }
          if(colesterolscore2=="5"){
            score_calculado="8";

          }
          if(colesterolscore2=="6"){
            score_calculado="9";

          }
          if(colesterolscore2=="7"){
            score_calculado="11";

          }
          if(colesterolscore2=="8"){
            score_calculado="13";

          }
        }
        if(PAS=="PAS160"){
          if(colesterolscore2=="4"){
            score_calculado="10";

          }
          if(colesterolscore2=="5"){
            score_calculado="12";

          }
          if(colesterolscore2=="6"){
            score_calculado="14";

          }
          if(colesterolscore2=="7"){
            score_calculado="16";

          }
          if(colesterolscore2=="8"){
            score_calculado="19";

          }
        }
        if(PAS=="PAS180"){
          if(colesterolscore2=="4"){
            score_calculado="15";

          }
          if(colesterolscore2=="5"){
            score_calculado="17";

          }
          if(colesterolscore2=="6"){
            score_calculado="20";

          }
          if(colesterolscore2=="7"){
            score_calculado="23";

          }
          if(colesterolscore2=="8"){
            score_calculado="26";

          }
        }
          
      }

        
      }
    
  }
}
score_calculado=parseInt(score_calculado);
$state.go('formulariodislipemia');
}

  

})

.controller('PaisesAltoRiesgo',function($scope){

  

})

.controller('RiesgoBajo',function($scope,$state){



  document.getElementById("ldl_act_res_bajo").value=ldlactual;
  document.getElementById("ldl_obj_res_bajo").value="115";
  ldlobjetivo=115;

  $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }

  var unidad=document.getElementById("unidades_totales_bajo").value;

  $( "#unidades_totales_alto" ).change(function() {
  var factor = parseFloat(document.getElementById("unidades_totales_bajo").value);
  
  var ldl = parseFloat(document.getElementById("ldl_act_res_bajo").value);
  var ldl2 = parseFloat(document.getElementById("ldl_obj_res_bajo").value);
  var ldlconv=ldl*factor;
  var ldlconv2=ldl2*factor;
  document.getElementById("ldl_act_res_bajo").value=ldlconv.toFixed(2);
  document.getElementById("ldl_obj_res_bajo").value=ldlconv2.toFixed(2);
  
});

})


.controller('RiesgoMuyAlto',function($scope,$state){

  document.getElementById("ldl_act_res").value=ldlactual;
  document.getElementById("ldl_obj_res").value="70";
  ldlobjetivo=70;

     $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }

    var unidad=document.getElementById("unidades_totales").value;

  $( "#unidades_totales" ).change(function() {
  var factor = parseFloat(document.getElementById("unidades_totales").value);
  
  var ldl = parseFloat(document.getElementById("ldl_act_res").value);
  var ldl2 = parseFloat(document.getElementById("ldl_obj_res").value);
  var ldlconv=ldl*factor;
  var ldlconv2=ldl2*factor;
  document.getElementById("ldl_act_res").value=ldlconv.toFixed(2);
  document.getElementById("ldl_obj_res").value=ldlconv2.toFixed(2);
  
});
  
  
 
})



.controller('RiesgoAlto',function($scope,$state){



  document.getElementById("ldl_act_res_alto").value=ldlactual;
  document.getElementById("ldl_obj_res_alto").value="100";
  ldlobjetivo=100;

  $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }

  var unidad=document.getElementById("unidades_totales_alto").value;

  $( "#unidades_totales_alto" ).change(function() {

  var factor = parseFloat(document.getElementById("unidades_totales_alto").value);
  
  var ldl = parseFloat(document.getElementById("ldl_act_res_alto").value);
  var ldl2 = parseFloat(document.getElementById("ldl_obj_res_alto").value);
  var ldlconv=ldl*factor;
  var ldlconv2=ldl2*factor;
  document.getElementById("ldl_act_res_alto").value=ldlconv.toFixed(2);
  document.getElementById("ldl_obj_res_alto").value=ldlconv2.toFixed(2);
  
});

})


.controller('RiesgoMedio',function($scope,$state){



  document.getElementById("ldl_act_res_medio").value=ldlactual;
  document.getElementById("ldl_obj_res_medio").value="115";
  ldlobjetivo=115;

  $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }

  var unidad=document.getElementById("unidades_totales_medio").value;

  $( "#unidades_totales_medio" ).change(function() {

  var factor = parseFloat(document.getElementById("unidades_totales_medio").value);
  
  var ldl = parseFloat(document.getElementById("ldl_act_res_medio").value);
  var ldl2 = parseFloat(document.getElementById("ldl_obj_res_medio").value);
  var ldlconv=ldl*factor;
  var ldlconv2=ldl2*factor;
  document.getElementById("ldl_act_res_medio").value=ldlconv.toFixed(2);
  document.getElementById("ldl_obj_res_medio").value=ldlconv2.toFixed(2);
  
});

})

.controller('HTASevera',function($scope){

  

})


.controller('Reduccion',function($scope){


document.getElementById("ldl_act_red").value=ldlactual;
  document.getElementById("ldl_obj_red").value=ldlobjetivo;  
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red").value=porc_reducc+"%";



})


.controller('TratamientoPrevio',function($scope){

  

})

.controller('TratamientoPrevioMedicamentos',function($scope,$state){

 

jQuery('.linea_atorvastatina').on( "click", function() { 

           jQuery('.cuadro_atorvastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {   

           jQuery('.cuadro_atorvastatina').hide(); //muestro mediante clase
         });
jQuery('.cancelar1').on( "click", function() { 
          jQuery("#atorv_10").prop('checked', false);
          jQuery("#atorv_20").prop('checked', false);
          jQuery("#atorv_40").prop('checked', false);
          jQuery("#atorv_80").prop('checked', false);  
           jQuery('.cuadro_atorvastatina').hide(); //muestro mediante clase
         });


jQuery('.linea_rosuvastatina').on( "click", function() {    
           jQuery('.cuadro_rosuvastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_rosuvastatina').hide(); //muestro mediante clase
         });
jQuery('.cancelar2').on( "click", function() { 
          jQuery("#rosuv_5").prop('checked', false);
          jQuery("#rosuv_10").prop('checked', false);
          jQuery("#rosuv_20").prop('checked', false);
           jQuery('.cuadro_rosuvastatina').hide(); //muestro mediante clase
         });



jQuery('.linea_simvastatina').on( "click", function() {    
           jQuery('.cuadro_simvastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_simvastatina').hide(); //muestro mediante clase
         });
jQuery('.cancelar4').on( "click", function() { 
          jQuery("#simv_10").prop('checked', false);
          jQuery("#simv_20").prop('checked', false);
          jQuery("#simv_40").prop('checked', false);
          jQuery("#simv_80").prop('checked', false);
           jQuery('.cuadro_simvastatina').hide(); //muestro mediante clase
         });


jQuery('.linea_pitavastatina').on( "click", function() {    
           jQuery('.cuadro_pitavastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_pitavastatina').hide(); //muestro mediante clase
         });
jQuery('.cancelar3').on( "click", function() { 
          jQuery("#pitv_1").prop('checked', false);
          jQuery("#pitv_2").prop('checked', false);
          jQuery("#pitv_4").prop('checked', false);
           jQuery('.cuadro_pitavastatina').hide(); //muestro mediante clase
         });

jQuery('.linea_pravastatina').on( "click", function() {    
           jQuery('.cuadro_pravastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_pravastatina').hide(); //muestro mediante clase
         });
jQuery('.cancelar5').on( "click", function() { 
          jQuery("#prav_10").prop('checked', false);
          jQuery("#prav_20").prop('checked', false);
          jQuery("#prav_40").prop('checked', false);
          jQuery("#prav_80").prop('checked', false);
           jQuery('.cuadro_pravastatina').hide(); //muestro mediante clase
         });

jQuery('.linea_fluvastatina').on( "click", function() {    
           jQuery('.cuadro_fluvastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_fluvastatina').hide(); //muestro mediante clase
         });
jQuery('.cancelar6').on( "click", function() { 
          jQuery("#fluv_20").prop('checked', false);
          jQuery("#fluv_40").prop('checked', false);
          jQuery("#fluv_80").prop('checked', false);
           jQuery('.cuadro_fluvastatina').hide(); //muestro mediante clase
         });

jQuery('.linea_lovastatina').on( "click", function() {    
           jQuery('.cuadro_lovastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_lovastatina').hide(); //muestro mediante clase
         });
jQuery('.cancelar7').on( "click", function() { 
          jQuery("#lov_20").prop('checked', false);
          jQuery("#lov_40").prop('checked', false);
           jQuery('.cuadro_lovastatina').hide(); //muestro mediante clase
         });

jQuery('.linea_ezetimibe').on( "click", function() {    
           jQuery('.cuadro_ezetimibe').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {

           jQuery('.cuadro_ezetimibe').hide(); //muestro mediante clase
         });
jQuery('.cancelar8').on( "click", function() { 
          jQuery("#ezet_10").prop('checked', false);
           jQuery('.cuadro_ezetimibe').hide(); //muestro mediante clase
         });

jQuery('.linea_alirocumab').on( "click", function() {    
           jQuery('.cuadro_alirocumab').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_alirocumab').hide(); //muestro mediante clase
         });
jQuery('.cancelar9').on( "click", function() { 
          jQuery("#aliroc_75").prop('checked', false);
          jQuery("#aliroc_150").prop('checked', false);
           jQuery('.cuadro_alirocumab').hide(); //muestro mediante clase
         });

jQuery('.linea_evolocumab').on( "click", function() {    
           jQuery('.cuadro_evolocumab').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_evolocumab').hide(); //muestro mediante clase
         });
jQuery('.cancelar10').on( "click", function() { 
          jQuery("#evoloc_140").prop('checked', false);
          jQuery("#evoloc_420").prop('checked', false);
           jQuery('.cuadro_evolocumab').hide(); //muestro mediante clase
         });

jQuery('.linea_colestiramina').on( "click", function() {    
           jQuery('.cuadro_colestiramina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_colestiramina').hide(); //muestro mediante clase
         });
jQuery('.cancelar11').on( "click", function() { 
          jQuery("#colestir_4").prop('checked', false);
           jQuery('.cuadro_colestiramina').hide(); //muestro mediante clase
         });

jQuery('.linea_colestipol').on( "click", function() {    
           jQuery('.cuadro_colestipol').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_colestipol').hide(); //muestro mediante clase
         });
jQuery('.cancelar12').on( "click", function() { 
          jQuery("#colestip_5").prop('checked', false);
           jQuery('.cuadro_colestipol').hide(); //muestro mediante clase
         });

jQuery('.linea_fenofibrato').on( "click", function() {    
           jQuery('.cuadro_fenofibrato').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_fenofibrato').hide(); //muestro mediante clase
         });
jQuery('.cancelar13').on( "click", function() { 
          jQuery("#fenof_200").prop('checked', false);
           jQuery('.cuadro_fenofibrato').hide(); //muestro mediante clase
         });

jQuery('.linea_gemfibrozilo').on( "click", function() {    
           jQuery('.cuadro_gemfibrozilo').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_gemfibrozilo').hide(); //muestro mediante clase
         });
jQuery('.cancelar13').on( "click", function() { 
          jQuery("#gemf_900").prop('checked', false);
          jQuery("#gemf_600").prop('checked', false);
           jQuery('.cuadro_gemfibrozilo').hide(); //muestro mediante clase
         });

$scope.sumar = function() {
var atorv_10v=atorv_20v=atorv_40v=atorv_80v=rosuv_5v=rosuv_10v=rosuv_20v=pitv_1v=pitv_2v=pitv_4v=simv_10v=simv_20v=simv_40v=simv_80v=prav_10v=prav_20v=prav_40v=prav_80v=fluv_20v=fluv_40v=fluv_80v=lov_20v=lov_40v=ezet_10v=aliroc_75v=aliroc_150v=evoloc_140v=evoloc_420v=colestir_4v=colestip_5v=fenof_200v=gemf_900v=gemf_600v=0;

// atorv_10v=document.getElementById("atorv_10").value;

// atorv_20v=parseInt(document.getElementById("atorv_20").value);

if ($('#atorv_10').is(":checked")){atorv_10v=35;}
if ($('#atorv_20').is(":checked")){atorv_20v=41;}
if ($('#atorv_40').is(":checked")){atorv_40v=47;}
if ($('#atorv_80').is(":checked")){atorv_80v=53;}

if ($('#rosuv_5').is(":checked")){rosuv_5v=41;}
if ($('#rosuv_10').is(":checked")){rosuv_10v=47;}
if ($('#rosuv_20').is(":checked")){rosuv_20v=53;}

if ($('#pitv_1').is(":checked")){pitv_1v=35;}
if ($('#pitv_2').is(":checked")){pitv_2v=41;}
if ($('#pitv_4').is(":checked")){pitv_4v=47;}

if ($('#simv_10').is(":checked")){simv_10v=29;}
if ($('#simv_20').is(":checked")){simv_20v=34;}
if ($('#simv_40').is(":checked")){simv_40v=41;}
if ($('#simv_80').is(":checked")){simv_80v=47;}

if ($('#prav_10').is(":checked")){prav_10v=20;}
if ($('#prav_20').is(":checked")){prav_20v=26;}
if ($('#prav_40').is(":checked")){prav_40v=33;}
if ($('#prav_80').is(":checked")){prav_80v=44;}

if ($('#fluv_20').is(":checked")){fluv_20v=20;}
if ($('#fluv_40').is(":checked")){fluv_40v=26;}
if ($('#fluv_80').is(":checked")){fluv_80v=33;}

if ($('#lov_20').is(":checked")){lov_20v=25;}
if ($('#lov_40').is(":checked")){lov_20v=31;}

if ($('#ezet_10v').is(":checked")){ezet_10v=20;}

if ($('#aliroc_75').is(":checked")){aliroc_75v=53;}
if ($('#aliroc_150').is(":checked")){aliroc_150v=68;}

if ($('#evoloc_140').is(":checked")){evoloc_140v=61;}
if ($('#evoloc_420').is(":checked")){evoloc_420v=61;}

if ($('#colestir_4').is(":checked")){colestir_4v=12;}
if ($('#colestip_5').is(":checked")){colestip_5v=12;}

if ($('#fenof_200').is(":checked")){fenof_200v=10;}

if ($('#gemf_900').is(":checked")){gemf_900v=10;}
if ($('#gemf_600').is(":checked")){gemf_600v=10;}

red_trat=atorv_10v+atorv_20v+atorv_40v+atorv_80v+rosuv_5v+rosuv_10v+rosuv_20v+pitv_1v+pitv_2v+pitv_4v+simv_10v+simv_20v+simv_40v+simv_80v+prav_10v+prav_20v+prav_40v+prav_80v+fluv_20v+fluv_40v+fluv_80v+lov_20v+lov_40v+ezet_10v+aliroc_75v+aliroc_150v+evoloc_140v+evoloc_420v+colestir_4v+colestip_5v+fenof_200v+gemf_900v+gemf_600v;
ldlrectificado=parseFloat(ldlactual)+parseFloat(ldlactual)*(red_trat/100);
ldlactual=ldlrectificado;
$state.go('tratamientoinicio');
}

})












.controller('TratamientoInicio',function($scope,$state, $firebaseArray){
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    

    var ref = firebase.database().ref('dislipemia').orderByChild("porcentaje").startAt(porc_reducc);
    $scope.disp = $firebaseArray(ref);

    $scope.displenias = [];
    var col = null;
    $scope.disp.$loaded(function(){
        angular.forEach($scope.disp, function(value, key){
          var cols = [value.col4, value.col3, value.col2, value.col1];
          //console.log(cols);
          if(key == 0){
            for(var i = 0; i < cols.length; i++){
              if(cols[i]){
                col = i;
                break;
              }
            }
          }
          if(cols[col]){
            $scope.displenias.push(value);
          }
        });
        console.log($scope.displenias);

    });


})



.controller('TratamientoInicioSinEstatina',function($scope,$state, $firebaseArray){
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase


    var ref = firebase.database().ref('dislipemia2').orderByChild("porcentaje").startAt(porc_reducc);
    $scope.disp = $firebaseArray(ref);

    $scope.displenias = [];
    var col = null;
    $scope.disp.$loaded(function(){
        angular.forEach($scope.disp, function(value, key){
          // var cols = [value.col4, value.col3, value.col2, value.col1];
          // //console.log(cols);
          // if(key == 0){
          //   for(var i = 0; i < cols.length; i++){
          //     if(cols[i]){
          //       col = i;
          //       break;
          //     }
          //   }
          //   //console.log(col);
          // }
          // if(cols[col]){
            $scope.displenias.push(value);
          // }
        });
        console.log($scope.displenias);

    });


})








.controller('TratamientoInicioSinEzetimive',function($scope,$state, $firebaseArray){
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    

    var ref = firebase.database().ref('dislipemia').orderByChild("porcentaje").startAt(porc_reducc);
    $scope.disp = $firebaseArray(ref);

    $scope.displenias = [];
    var col = null;
    $scope.disp.$loaded(function(){
        angular.forEach($scope.disp, function(value, key){
          var cols = [value.col4, value.col3, value.col2, value.col1];
          //console.log(cols);
          if(key == 0){
            for(var i = 0; i < cols.length; i++){
              if(cols[i]){
                col = i;
                break;
              }
            }
            //console.log(col);
          }
          if(cols[col]){
            $scope.displenias.push(value);
          }
        });
        console.log($scope.displenias);

    });


})



.controller('TratamientoInicioSinIPCSK9',function($scope,$state, $firebaseArray){
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    

    var ref = firebase.database().ref('dislipemia').orderByChild("porcentaje").startAt(porc_reducc);
    $scope.disp = $firebaseArray(ref);

    $scope.displenias = [];
    var col = null;
    $scope.disp.$loaded(function(){
        angular.forEach($scope.disp, function(value, key){
          var cols = [value.col4, value.col3, value.col2, value.col1];
          //console.log(cols);
          if(key == 0){
            for(var i = 0; i < cols.length; i++){
              if(cols[i]){
                col = i;
                break;
              }
            }
            //console.log(col);
          }
          if(cols[col]){
            $scope.displenias.push(value);
          }
        });
        console.log($scope.displenias);

    });


})



.controller('TratamientoInicioSinIPCSK9NiResinas',function($scope,$state, $firebaseArray){
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    

    var ref = firebase.database().ref('dislipemia').orderByChild("porcentaje").startAt(porc_reducc);
    $scope.disp = $firebaseArray(ref);

    $scope.displenias = [];
    var col = null;
    $scope.disp.$loaded(function(){
        angular.forEach($scope.disp, function(value, key){
          var cols = [value.col4, value.col3, value.col2, value.col1];
          //console.log(cols);
          if(key == 0){
            for(var i = 0; i < cols.length; i++){
              if(cols[i]){
                col = i;
                break;
              }
            }
            //console.log(col);
          }
          if(cols[col]){
            $scope.displenias.push(value);
          }
        });
        console.log($scope.displenias);

    });


})



.controller('TratamientoInicioSinFibratos',function($scope,$state, $firebaseArray){
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    

    var ref = firebase.database().ref('dislipemia').orderByChild("porcentaje").startAt(porc_reducc);
    $scope.disp = $firebaseArray(ref);

    $scope.displenias = [];
    var col = null;
    $scope.disp.$loaded(function(){
        angular.forEach($scope.disp, function(value, key){
          var cols = [value.col4, value.col3, value.col2, value.col1];
          //console.log(cols);
          if(key == 0){
            for(var i = 0; i < cols.length; i++){
              if(cols[i]){
                col = i;
                break;
              }
            }
            //console.log(col);
          }
          if(cols[col]){
            $scope.displenias.push(value);
          }
        });
        console.log($scope.displenias);

    });


})



.controller('TratamientoInicioSinResina',function($scope,$state, $firebaseArray){
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    

    var ref = firebase.database().ref('dislipemia').orderByChild("porcentaje").startAt(porc_reducc);
    $scope.disp = $firebaseArray(ref);

    $scope.displenias = [];
    var col = null;
    $scope.disp.$loaded(function(){
        angular.forEach($scope.disp, function(value, key){
          var cols = [value.col4, value.col3, value.col2, value.col1];
          //console.log(cols);
          if(key == 0){
            for(var i = 0; i < cols.length; i++){
              if(cols[i]){
                col = i;
                break;
              }
            }
            //console.log(col);
          }
          if(cols[col]){
            $scope.displenias.push(value);
          }
        });
        console.log($scope.displenias);

    });


})












.controller('TratamientoInicio2',function($scope,$state,$firebaseArray){

  document.getElementById("ldl_act_tratamiento2").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento2").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento2").value=porc_reducc+"%";
    // Initialize Firebase
    

    var ref = firebase.database().ref('dislipemia').orderByChild("porcentaje").startAt(porc_reducc);
    $scope.disp = $firebaseArray(ref);

    $scope.displenias = [];
    var col = null;
    $scope.disp.$loaded(function(){
        angular.forEach($scope.disp, function(value, key){
          var cols = [value.col4, value.col3, value.col2, value.col1];
          //console.log(cols);
          if(key == 0){
            for(var i = 0; i < cols.length; i++){
              if(cols[i]){
                col = i;
                break;
              }
            }
          }
          if(cols[col]){
            $scope.displenias.push(value);
          }
        });
        console.log($scope.displenias);

    });




})



.controller('Contraindicaciones',function($scope,$state){


  contra_abs_estatina = document.getElementById("contra_abs_estatinas");
  contra_abs_ezetimibe = document.getElementById("contra_abs_ezetimibe");
  contra_abs_fibratos = document.getElementById("contra_abs_fibratos");
  contra_abs_resinas = document.getElementById("contra_abs_resinas");
  contra_abs_ipcsk9 = document.getElementById("contra_abs_ipcsk9");

  $scope.filtro_contra = function() {
      if(contra_abs_estatina.checked){
        quitar_estatina=true;
        $state.go('tratamientoinicio_sin_estatina');
      }
      else if(contra_abs_ezetimibe.checked){
        quitar_ezetimibe=true;
        $state.go('tratamientoinicio_sin_ezetimive');
      }
      else if(contra_abs_fibratos.checked){
        quitar_fibratos=true;
        $state.go('tratamientoinicio_sin_fibratos');
      }
      else if(contra_abs_resinas.checked){
        quitar_resinas=true;
        $state.go('tratamientoinicio_sin_resina');
      }
      else if(contra_abs_ipcsk9.checked){
        quitar_ipcsk9=true;
        $state.go('tratamientoinicio_sin_ipcsk9');
      }
       else if(contra_abs_ipcsk9.checked&&contra_abs_resinas.checked){
        quitar_ipcsk9=true;
        $state.go('tratamientoinicio_sin_ipcsk9_ni_resinas');
      }
      else{
        $state.go('tratamientoinicio2');
        
      }
      console.log(quitar_estatina+","+quitar_ezetimibe+","+quitar_fibratos+","+quitar_resinas+","+quitar_ipcsk9);
  }





})

.controller('Estatinas',function($scope,$state){

  jQuery('#atorv_inter').on( "click", function() {
           jQuery('.sub_atorv_inter').toggle(); //muestro mediante clase

  });

  jQuery('.aco_atorv').on( "click", function() {
           jQuery('.aco+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.ami_atorv').on( "click", function() {
           jQuery('.ami+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.ant_atorv').on( "click", function() {
           jQuery('.ant-cal+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.antia_atorv').on( "click", function() {
           jQuery('.antia+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.antif_atorv').on( "click", function() {
           jQuery('.antif+div').toggle(); //muestro mediante clase
 
  });
    jQuery('.asocl_atorv').on( "click", function() {
           jQuery('.asocl+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.bar_atorv').on( "click", function() {
           jQuery('.bar+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.bez_atorv').on( "click", function() {
           jQuery('.bez+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.boc_atorv').on( "click", function() {
           jQuery('.boc+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.carb_atorv').on( "click", function() {
           jQuery('.carb+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.cicl_atorv').on( "click", function() {
           jQuery('.cicl+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.cil_atorv').on( "click", function() {
           jQuery('.cil+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.colc_atorv').on( "click", function() {
           jQuery('.colc+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.dacl_atorv').on( "click", function() {
           jQuery('.dacl+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.dan_atorv').on( "click", function() {
           jQuery('.dan+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.dron_atorv').on( "click", function() {
           jQuery('.dron+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.feno_atorv').on( "click", function() {
           jQuery('.feno+div').toggle(); //muestro mediante clase
 
  });

                jQuery('.gim_atorv').on( "click", function() {
           jQuery('.gim+div').toggle(); //muestro mediante clase
 
  });

              jQuery('.macro_atorv').on( "click", function() {
           jQuery('.macro+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.res_atorv').on( "click", function() {
           jQuery('.res+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.rif_atorv').on( "click", function() {
           jQuery('.rif+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.sime_atorv').on( "click", function() {
           jQuery('.sime+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.tela_atorv').on( "click", function() {
           jQuery('.tela+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.zumo_atorv').on( "click", function() {
           jQuery('.zumo+div').toggle(); //muestro mediante clase
 
  });

















    jQuery('#fluv_inter').on( "click", function() {
           jQuery('.sub_fluv_inter').toggle(); //muestro mediante clase
  });
jQuery('.faco_fluv').on( "click", function() {
           jQuery('.faco+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.fami_fluv').on( "click", function() {
           jQuery('.fami+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.fant_fluv').on( "click", function() {
           jQuery('.fant-cal+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.fantia_fluv').on( "click", function() {
           jQuery('.fantia+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.fantif_fluv').on( "click", function() {
           jQuery('.fantif+div').toggle(); //muestro mediante clase
 
  });
    jQuery('.fasoco_fluv').on( "click", function() {
           jQuery('.fasoco+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.fbar_fluv').on( "click", function() {
           jQuery('.fbar+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.fbez_fluv').on( "click", function() {
           jQuery('.fbez+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.fboc_fluv').on( "click", function() {
           jQuery('.fboc+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.fcarb_fluv').on( "click", function() {
           jQuery('.fcarb+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.fcicl_fluv').on( "click", function() {
           jQuery('.fcicl+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.fcil_fluv').on( "click", function() {
           jQuery('.fcil+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.fcolc_fluv').on( "click", function() {
           jQuery('.fcolc+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.fdacl_fluv').on( "click", function() {
           jQuery('.fdacl+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.fdan_fluv').on( "click", function() {
           jQuery('.fdan+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.fdron_fluv').on( "click", function() {
           jQuery('.fdron+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.ferit_fluv').on( "click", function() {
           jQuery('.ferit+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.ffen_fluv').on( "click", function() {
           jQuery('.ffen+div').toggle(); //muestro mediante clase
 
  });

                jQuery('.fgem_fluv').on( "click", function() {
           jQuery('.fgem+div').toggle(); //muestro mediante clase
 
  });

              jQuery('.fmacro_fluv').on( "click", function() {
           jQuery('.fmacro+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.fres_fluv').on( "click", function() {
           jQuery('.fres+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.ffluc_fluv').on( "click", function() {
           jQuery('.ffluc+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.fsime_fluv').on( "click", function() {
           jQuery('.fsime+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.ftela_fluv').on( "click", function() {
           jQuery('.ftela+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.fzumo_fluv').on( "click", function() {
           jQuery('.fzumo+div').toggle(); //muestro mediante clase
 
  });






      jQuery('#lov_inter').on( "click", function() {
           jQuery('.sub_lov_inter').toggle(); //muestro mediante clase
  });
 jQuery('.laco_lov').on( "click", function() {
           jQuery('.laco+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.lami_lov').on( "click", function() {
           jQuery('.lami+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.lanta_lov').on( "click", function() {
           jQuery('.lanta+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.lantia_lov').on( "click", function() {
           jQuery('.lantia+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.lantif_lov').on( "click", function() {
           jQuery('.lantif+div').toggle(); //muestro mediante clase
 
  });
    jQuery('.lasocl_lov').on( "click", function() {
           jQuery('.lasocl+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.lbar_lov').on( "click", function() {
           jQuery('.lbar+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.lbez_lov').on( "click", function() {
           jQuery('.lbez+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.lboc_lov').on( "click", function() {
           jQuery('.lboc+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.lcarb_lov').on( "click", function() {
           jQuery('.lcarb+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.lcicl_lov').on( "click", function() {
           jQuery('.lcicl+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.lcil_lov').on( "click", function() {
           jQuery('.lcil+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.lcol_lov').on( "click", function() {
           jQuery('.lcol+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.ldac_lov').on( "click", function() {
           jQuery('.ldac+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.ldan_lov').on( "click", function() {
           jQuery('.ldan+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.ldron_lov').on( "click", function() {
           jQuery('.ldron+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.lfen_lov').on( "click", function() {
           jQuery('.lfen+div').toggle(); //muestro mediante clase
 
  });

                jQuery('.lgem_lov').on( "click", function() {
           jQuery('.lgem+div').toggle(); //muestro mediante clase
 
  });

              jQuery('.lmacro_lov').on( "click", function() {
           jQuery('.lmacro+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.lres_lov').on( "click", function() {
           jQuery('.lres+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.lrif_lov').on( "click", function() {
           jQuery('.lrif+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.lsim_lov').on( "click", function() {
           jQuery('.lsim+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.ltel_lov').on( "click", function() {
           jQuery('.ltel+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.lzumo_lov').on( "click", function() {
           jQuery('.lzumo+div').toggle(); //muestro mediante clase
 
  });







        jQuery('#pitav_inter').on( "click", function() {
           jQuery('.sub_pitav_inter').toggle(); //muestro mediante clase
  });

  jQuery('.paco_pitav').on( "click", function() {
           jQuery('.paco+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.pami_pitav').on( "click", function() {
           jQuery('.pami+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.pant_pitav').on( "click", function() {
           jQuery('.pant-cal+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.pantia_pitav').on( "click", function() {
           jQuery('.pantia+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.pantif_pitav').on( "click", function() {
           jQuery('.pantif+div').toggle(); //muestro mediante clase
 
  });
    jQuery('.pasocl_pitav').on( "click", function() {
           jQuery('.pasocl+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.pasoco_pitav').on( "click", function() {
           jQuery('.pasoco+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.pbar_pitav').on( "click", function() {
           jQuery('.pbar+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.pbez_pitav').on( "click", function() {
           jQuery('.pbez+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.pboc_pitav').on( "click", function() {
           jQuery('.pboc+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.pcarb_pitav').on( "click", function() {
           jQuery('.pcarb+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.pcicl_pitav').on( "click", function() {
           jQuery('.pcicl+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.pcil_pitav').on( "click", function() {
           jQuery('.pcil+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.pcol_pitav').on( "click", function() {
           jQuery('.pcol+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.pdacl_pitav').on( "click", function() {
           jQuery('.pdacl+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.pdan_pitav').on( "click", function() {
           jQuery('.pdan+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.pdrone_pitav').on( "click", function() {
           jQuery('.pdrone+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.pfen_pitav').on( "click", function() {
           jQuery('.pfen+div').toggle(); //muestro mediante clase
 
  });
          jQuery('.perit_pitav').on( "click", function() {
           jQuery('.perit+div').toggle(); //muestro mediante clase
 
  });

                jQuery('.pgem_pitav').on( "click", function() {
           jQuery('.pgem+div').toggle(); //muestro mediante clase
 
  });

              jQuery('.pmacro_pitav').on( "click", function() {
           jQuery('.pmacro+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.pres_pitav').on( "click", function() {
           jQuery('.pres+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.prif_pitav').on( "click", function() {
           jQuery('.prif+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.psim_pitav').on( "click", function() {
           jQuery('.psim+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.ptela_pitav').on( "click", function() {
           jQuery('.ptela+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.pzumo_pitav').on( "click", function() {
           jQuery('.pzumo+div').toggle(); //muestro mediante clase
 
  });










          jQuery('#prav_inter').on( "click", function() {
           jQuery('.sub_prav_inter').toggle(); //muestro mediante clase
  });

jQuery('.praco_prav').on( "click", function() {
           jQuery('.praco+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.prami_prav').on( "click", function() {
           jQuery('.prami+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.prant_prav').on( "click", function() {
           jQuery('.prant-cal+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.prantia_prav').on( "click", function() {
           jQuery('.prantia+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.prantif_prav').on( "click", function() {
           jQuery('.prantif+div').toggle(); //muestro mediante clase
 
  });
    jQuery('.prasocl_prav').on( "click", function() {
           jQuery('.prasocl+div').toggle(); //muestro mediante clase
 
  });
    jQuery('.prasoco_prav').on( "click", function() {
           jQuery('.prasoco+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.prbar_prav').on( "click", function() {
           jQuery('.prbar+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.prbez_prav').on( "click", function() {
           jQuery('.prbez+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.prboc_prav').on( "click", function() {
           jQuery('.prboc+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.prcarb_prav').on( "click", function() {
           jQuery('.prcarb+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.prcicl_prav').on( "click", function() {
           jQuery('.prcicl+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.prcil_prav').on( "click", function() {
           jQuery('.prcil+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.prcolc_prav').on( "click", function() {
           jQuery('.prcolc+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.prdacl_prav').on( "click", function() {
           jQuery('.prdacl+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.prdan_prav').on( "click", function() {
           jQuery('.prdan+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.prdrone_prav').on( "click", function() {
           jQuery('.prdrone+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.prfeno_prav').on( "click", function() {
           jQuery('.prfeno+div').toggle(); //muestro mediante clase
 
  });

                jQuery('.prgem_prav').on( "click", function() {
           jQuery('.prgem+div').toggle(); //muestro mediante clase
 
  });

              jQuery('.prmacro_prav').on( "click", function() {
           jQuery('.prmacro+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.prres_prav').on( "click", function() {
           jQuery('.prres+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.prrif_prav').on( "click", function() {
           jQuery('.prrif+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.prsim_prav').on( "click", function() {
           jQuery('.prsim+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.prtela_prav').on( "click", function() {
           jQuery('.prtela+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.przumo_prav').on( "click", function() {
           jQuery('.przumo+div').toggle(); //muestro mediante clase
 
  });









            jQuery('#rosuv_inter').on( "click", function() {
           jQuery('.sub_rosuv_inter').toggle(); //muestro mediante clase
  });
jQuery('.raco_rosuv').on( "click", function() {
           jQuery('.raco+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.rami_rosuv').on( "click", function() {
           jQuery('.rami+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.rant_rosuv').on( "click", function() {
           jQuery('.rant-cal+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.rantia_rosuv').on( "click", function() {
           jQuery('.rantia+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.rantif_rosuv').on( "click", function() {
           jQuery('.rantif+div').toggle(); //muestro mediante clase
 
  });
    jQuery('.rasocl_rosuv').on( "click", function() {
           jQuery('.rasocl+div').toggle(); //muestro mediante clase
 
  });
    jQuery('.rasoco_rosuv').on( "click", function() {
           jQuery('.rasoco+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.rbar_rosuv').on( "click", function() {
           jQuery('.rbar+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.rbez_rosuv').on( "click", function() {
           jQuery('.rbez+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.rboc_rosuv').on( "click", function() {
           jQuery('.rboc+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.rcarb_rosuv').on( "click", function() {
           jQuery('.rcarb+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.rcicl_rosuv').on( "click", function() {
           jQuery('.rcicl+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.rcil_rosuv').on( "click", function() {
           jQuery('.rcil+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.rcolc_rosuv').on( "click", function() {
           jQuery('.rcolc+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.rdacl_rosuv').on( "click", function() {
           jQuery('.rdacl+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.rdan_rosuv').on( "click", function() {
           jQuery('.rdan+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.rdrone_rosuv').on( "click", function() {
           jQuery('.rdrone+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.rfen_rosuv').on( "click", function() {
           jQuery('.rfen+div').toggle(); //muestro mediante clase
 
  });
                                    jQuery('.rerit_rosuv').on( "click", function() {
           jQuery('.rerit+div').toggle(); //muestro mediante clase
 
  });

                jQuery('.rgem_rosuv').on( "click", function() {
           jQuery('.rgem+div').toggle(); //muestro mediante clase
 
  });

              jQuery('.rmacro_rosuv').on( "click", function() {
           jQuery('.rmacro+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.rres_rosuv').on( "click", function() {
           jQuery('.rres+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.rrif_rosuv').on( "click", function() {
           jQuery('.rrif+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.rsim_rosuv').on( "click", function() {
           jQuery('.rsim+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.rtela_rosuv').on( "click", function() {
           jQuery('.rtela+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.rzumo_rosuv').on( "click", function() {
           jQuery('.rzumo+div').toggle(); //muestro mediante clase
 
  });





              jQuery('#simv_inter').on( "click", function() {
           jQuery('.sub_simv_inter').toggle(); //muestro mediante clase

  });
              jQuery('.saco_simv').on( "click", function() {
           jQuery('.saco+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.sami_simv').on( "click", function() {
           jQuery('.sami+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.santa_simv').on( "click", function() {
           jQuery('.santa+div').toggle(); //muestro mediante clase
 
  });
 jQuery('.santia_simv').on( "click", function() {
           jQuery('.santia+div').toggle(); //muestro mediante clase
 
  });
  jQuery('.santif_simv').on( "click", function() {
           jQuery('.santif+div').toggle(); //muestro mediante clase
 
  });
    jQuery('.sasocl_simv').on( "click", function() {
           jQuery('.sasocl+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.sbarb_simv').on( "click", function() {
           jQuery('.sbarb+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.sbez_simv').on( "click", function() {
           jQuery('.sbez+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.sboce_simv').on( "click", function() {
           jQuery('.sboce+div').toggle(); //muestro mediante clase
 
  });
        jQuery('.scarb_simv').on( "click", function() {
           jQuery('.scarb+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.scicl_simv').on( "click", function() {
           jQuery('.scicl+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.scil_simv').on( "click", function() {
           jQuery('.scil+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.scolc_simv').on( "click", function() {
           jQuery('.scolc+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.sdacl_simv').on( "click", function() {
           jQuery('.sdacl+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.sdan_simv').on( "click", function() {
           jQuery('.sdan+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.sdrone_simv').on( "click", function() {
           jQuery('.sdrone+div').toggle(); //muestro mediante clase
 
  });
                  jQuery('.sfeno_simv').on( "click", function() {
           jQuery('.sfeno+div').toggle(); //muestro mediante clase
 
  });

                jQuery('.sgem_simv').on( "click", function() {
           jQuery('.sgem+div').toggle(); //muestro mediante clase
 
  });

              jQuery('.smacro_simv').on( "click", function() {
           jQuery('.smacro+div').toggle(); //muestro mediante clase
 
  });
                jQuery('.sres_simv').on( "click", function() {
           jQuery('.sres+div').toggle(); //muestro mediante clase
 
  });
      jQuery('.srif_simv').on( "click", function() {
           jQuery('.srif+div').toggle(); //muestro mediante clase
 
  });
            jQuery('.ssim_simv').on( "click", function() {
           jQuery('.ssim+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.stel_simv').on( "click", function() {
           jQuery('.stel+div').toggle(); //muestro mediante clase
 
  });
              jQuery('.szumo_simv').on( "click", function() {
           jQuery('.szumo+div').toggle(); //muestro mediante clase
 
  });



})



.controller('RiesgoAltoVIH',function($scope,$state){



  document.getElementById("ldl_act_res_alto_vih").value=ldlactual;
  document.getElementById("ldl_obj_res_alto_vih").value="100";
  ldlobjetivo=100;

  $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }
    var unidad=document.getElementById("unidades_totales_alto_vih").value;

  $( "#unidades_totales_alto" ).change(function() {
  var factor = parseFloat(document.getElementById("unidades_totales_alto_vih").value);
  
  var ldl = parseFloat(document.getElementById("ldl_act_res_alto_vih").value);
  var ldl2 = parseFloat(document.getElementById("ldl_obj_res_alto_vih").value);
  var ldlconv=ldl*factor;
  var ldlconv2=ldl2*factor;
  document.getElementById("ldl_act_res_alto_vih").value=ldlconv.toFixed(2);
  document.getElementById("ldl_obj_res_alto_vih").value=ldlconv2.toFixed(2);
  
});

})





.controller('RiesgoModeradoAltoVIH',function($scope,$state){



  document.getElementById("ldl_act_res_moderado_alto_vih").value=ldlactual;
  document.getElementById("ldl_obj_res_moderado_alto_vih").value="100";
  ldlobjetivo=100;

  $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }
    var unidad=document.getElementById("unidades_totales_moderado_alto_vih").value;

  $( "#unidades_totales_alto" ).change(function() {
  var factor = parseFloat(document.getElementById("unidades_totales_moderado_alto_vih").value);
  
  var ldl = parseFloat(document.getElementById("ldl_act_res_moderado_alto_vih").value);
  var ldl2 = parseFloat(document.getElementById("ldl_obj_res_moderado_alto_vih").value);
  var ldlconv=ldl*factor;
  var ldlconv2=ldl2*factor;
  document.getElementById("ldl_act_res_moderado_alto_vih").value=ldlconv.toFixed(2);
  document.getElementById("ldl_obj_res_moderado_alto_vih").value=ldlconv2.toFixed(2);
  
});

})


.controller('RiesgoModeradoBajoVIH',function($scope,$state){



  document.getElementById("ldl_act_res_moderado_bajo_vih").value=ldlactual;
  document.getElementById("ldl_obj_res_moderado_bajo_vih").value="130";
  ldlobjetivo=130;

  $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }
    var unidad=document.getElementById("unidades_totales_moderado_bajo_vih").value;

  $( "#unidades_totales_alto" ).change(function() {
  var factor = parseFloat(document.getElementById("unidades_totales_moderado_bajo_vih").value);
  
  var ldl = parseFloat(document.getElementById("ldl_act_res_moderado_bajo_vih").value);
  var ldl2 = parseFloat(document.getElementById("ldl_obj_res_moderado_bajo_vih").value);
  var ldlconv=ldl*factor;
  var ldlconv2=ldl2*factor;
  document.getElementById("ldl_act_res_moderado_bajo_vih").value=ldlconv.toFixed(2);
  document.getElementById("ldl_obj_res_moderado_bajo_vih").value=ldlconv2.toFixed(2);
  
});

})




.controller('RiesgoBajoVIH',function($scope,$state){



  document.getElementById("ldl_act_res_bajo_vih").value=ldlactual;
  document.getElementById("ldl_obj_res_bajo_vih").value="130";
  ldlobjetivo=130;

  $scope.reduccion = function() {

             $state.go('reduccion');
        
        
    }
    var unidad=document.getElementById("unidades_totales_bajo_vih").value;

  $( "#unidades_totales_alto" ).change(function() {
  var factor = parseFloat(document.getElementById("unidades_totales_bajo_vih").value);
  
  var ldl = parseFloat(document.getElementById("ldl_act_res_bajo_vih").value);
  var ldl2 = parseFloat(document.getElementById("ldl_obj_res_bajo_vih").value);
  var ldlconv=ldl*factor;
  var ldlconv2=ldl2*factor;
  document.getElementById("ldl_act_res_bajo_vih").value=ldlconv.toFixed(2);
  document.getElementById("ldl_obj_res_bajo_vih").value=ldlconv2.toFixed(2);
  
});

})


















