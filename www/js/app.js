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

       .state('tratamientoinicio',{
    cache: false,
    url:'/tratamientoinicio',
    templateUrl:'templates/tratamientoinicio.html',
    controller: 'TratamientoInicio'
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

  $( "#unidades_totales_alto" ).change(function() {
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


.controller('TratamientoInicio',function($scope,$state){

  document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";

})

.controller('TratamientoInicio2',function($scope,$state){

  document.getElementById("ldl_act_tratamiento2").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento2").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento2").value=porc_reducc+"%";

})



.controller('Contraindicaciones',function($scope,$state){



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

      jQuery('#lov_inter').on( "click", function() {
           jQuery('.sub_lov_inter').toggle(); //muestro mediante clase
  });

        jQuery('#pitav_inter').on( "click", function() {
           jQuery('.sub_pitav_inter').toggle(); //muestro mediante clase
  });

          jQuery('#prav_inter').on( "click", function() {
           jQuery('.sub_prav_inter').toggle(); //muestro mediante clase
  });

            jQuery('#rosuv_inter').on( "click", function() {
           jQuery('.sub_rosuv_inter').toggle(); //muestro mediante clase
  });

              jQuery('#simv_inter').on( "click", function() {
           jQuery('.sub_simv_inter').toggle(); //muestro mediante clase
  });



})














