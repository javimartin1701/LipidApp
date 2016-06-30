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
var quitar_ator_inter=false;
var quitar_fluv_inter=false;
var quitar_lov_inter=false;
var quitar_pito_inter=false;
var quitar_pra_inter=false;
var quitar_rosu_inter=false;
var quitar_sim_inter=false;
var objetivo_vih=null;
var eliminar_sim=false;
var total_score_mialgias=null;
var calc_diabeto_total=null;
var calc_diabeto_total2=null;
var totalimcRounded_diabet=".";
var edad_diabet=".";
var edad_diabet_index=0;
var sexo_diabet_index=0;

var check1_imc = null;
var check2_imc = null;
var check3_imc = null;
var check4_imc = null;
var check5_imc = null;
var check6_imc = null;
var check7_imc = null;
var check8_imc = null;
var check9_imc = null;

var check1_form = null;

var check1_score = null;
var check2_score = null;
var check3_score = null;
var check4_score = null;
var check5_score = null;
var check5b_score = null;
var check6_score = null;
var total_criterios_het = null;



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
    templateUrl:'templates/dislipemia/formulariodislipemia.html',
    controller: 'DislipFormCtrl'
  })

   .state('factorriesgocardio',{
    cache: false,
    url:'/factorriesgocardio',
    templateUrl:'templates/dislipemia/factorriesgocardio.html',
    controller: 'FactorRiesgoCardio'
  })

   .state('calculadoraimc',{
    cache: false,
    url:'/calculadoraimc',
    templateUrl:'templates/dislipemia/calculadoraimc.html',
    controller: 'CalculadoraIMC'
  })

   .state('modalcardiodoc',{
    cache: false,
    url:'/modalcardiodoc',
    templateUrl:'templates/dislipemia/modalcardiodoc.html',
    controller: 'ModalCardioDoc'
  })

   .state('modalvih',{
    cache: false,
    url:'/modalvih',
    templateUrl:'templates/dislipemia/modalvih.html',
    controller: 'ModalVIH'
  })

  .state('presentacion',{
    cache: false,
    url:'/presentacion',
    templateUrl:'templates/dislipemia/presentacion.html',
    controller: 'Presentacion'
  })

  .state('funcionrenal',{
    cache: false,
    url:'/funcionrenal',
    templateUrl:'templates/dislipemia/funcionrenal.html',
    controller: 'FuncionRenal'
  })
  .state('calcscore',{
    cache: false,
    url:'/calcscore',
    templateUrl:'templates/dislipemia/calcscore.html',
    controller: 'CalcScore'
  })

  .state('paisesaltoriesgo',{
    cache: false,
    url:'/paisesaltoriesgo',
    templateUrl:'templates/dislipemia/paisesaltoriesgo.html',
    controller: 'PaisesAltoRiesgo'
  })

   .state('riesgobajo',{
    cache: false,
    url:'/riesgobajo',
    templateUrl:'templates/dislipemia/riesgobajo.html',
    controller: 'RiesgoBajo'
  })

   .state('riesgomuyalto',{
    cache: false,
    url:'/riesgomuyalto',
    templateUrl:'templates/dislipemia/riesgomuyalto.html',
    controller: 'RiesgoMuyAlto'
  })


   .state('riesgoalto',{
    cache: false,
    url:'/riesgoalto',
    templateUrl:'templates/dislipemia/riesgoalto.html',
    controller: 'RiesgoAlto'
  })

   .state('riesgomedio',{
    cache: false,
    url:'/riesgomedio',
    templateUrl:'templates/dislipemia/riesgomedio.html',
    controller: 'RiesgoMedio'
  })



.state('riesgobajo_vih',{
    cache: false,
    url:'/riesgobajo_vih',
    templateUrl:'templates/dislipemia/riesgobajo_vih.html',
    controller: 'RiesgoBajoVIH'
  })

   .state('riesgoalto_vih',{
    cache: false,
    url:'/riesgoalto_vih',
    templateUrl:'templates/dislipemia/riesgoalto_vih.html',
    controller: 'RiesgoAltoVIH'
  })


   .state('riesgomoderadoalto_vih',{
    cache: false,
    url:'/riesgomoderadoalto_vih',
    templateUrl:'templates/dislipemia/riesgomoderadoalto_vih.html',
    controller: 'RiesgoModeradoAltoVIH'
  })

   .state('riesgomoderadobajo_vih',{
    cache: false,
    url:'/riesgomoderadobajo_vih',
    templateUrl:'templates/dislipemia/riesgomoderadobajo_vih.html',
    controller: 'RiesgoModeradoBajoVIH'
  })





   .state('htasevera',{
    cache: false,
    url:'/htasevera',
    templateUrl:'templates/dislipemia/htasevera.html',
    controller: 'HTASevera'
  })

      .state('reduccion',{
    cache: false,
    url:'/reduccion',
    templateUrl:'templates/dislipemia/reduccion.html',
    controller: 'Reduccion'
  })

            .state('reduccion_vih',{
    cache: false,
    url:'/reduccion_vih',
    templateUrl:'templates/dislipemia/reduccion_vih.html',
    controller: 'Reduccion_vih'
  })

      .state('tratamientoprevio',{
    cache: false,
    url:'/tratamientoprevio',
    templateUrl:'templates/dislipemia/tratamientoprevio.html',
    controller: 'TratamientoPrevio'
  })
      .state('tratamientoprevio_vih',{
    cache: false,
    url:'/tratamientoprevio_vih',
    templateUrl:'templates/dislipemia/tratamientoprevio_vih.html',
    controller: 'TratamientoPrevio_vih'
  })

       .state('tratamientopreviomedicamentos',{
    cache: false,
    url:'/tratamientopreviomedicamentos',
    templateUrl:'templates/dislipemia/tratamientopreviomedicamentos.html',
    controller: 'TratamientoPrevioMedicamentos'
  })

       .state('tratamientopreviomedicamentos_vih',{
    cache: false,
    url:'/tratamientopreviomedicamentos_vih',
    templateUrl:'templates/dislipemia/tratamientopreviomedicamentos_vih.html',
    controller: 'TratamientoPrevioMedicamentos_vih'
  })
  //      .state('tratamientopreviomedicamentos_vih',{
  //   cache: false,
  //   url:'/tratamientopreviomedicamentos_vih',
  //   templateUrl:'templates/dislipemia/tratamientopreviomedicamentos_vih.html',
  //   controller: 'TratamientoPrevioMedicamentos_vih'
  // })

       .state('tratamientoinicio',{
    cache: false,
    url:'/tratamientoinicio',
    templateUrl:'templates/dislipemia/tratamientoinicio.html',
    controller: 'TratamientoInicio'
  })

              .state('tratamientoinicio_vih',{
    cache: false,
    url:'/tratamientoinicio_vih',
    templateUrl:'templates/dislipemia/tratamientoinicio_vih.html',
    controller: 'TratamientoInicio_vih'
  })

       .state('tratamientoinicio_sin_estatina',{
    cache: false,
    url:'/tratamientoinicio_sin_estatina',
    templateUrl:'templates/dislipemia/tratamientoinicio_sin_estatina.html',
    controller: 'TratamientoInicioSinEstatina'
  })

       .state('tratamientoinicio_sin_estatina_vih',{
    cache: false,
    url:'/tratamientoinicio_sin_estatina_vih',
    templateUrl:'templates/dislipemia/tratamientoinicio_sin_estatina_vih.html',
    controller: 'TratamientoInicioSinEstatina_vih'
  })


       .state('tratamientoinicio_sin_resina',{
    cache: false,
    url:'/tratamientoinicio_sin_resina',
    templateUrl:'templates/dislipemia/tratamientoinicio_sin_resina.html',
    controller: 'TratamientoInicioSinResina'
  })

       .state('tratamientoinicio_sin_fibratos',{
    cache: false,
    url:'/tratamientoinicio_sin_fibratos',
    templateUrl:'templates/dislipemia/tratamientoinicio_sin_fibratos.html',
    controller: 'TratamientoInicioSinFibratos'
  })

       .state('tratamientoinicio_sin_ipcsk9',{
    cache: false,
    url:'/tratamientoinicio_sin_ipcsk9',
    templateUrl:'templates/dislipemia/tratamientoinicio_sin_ipcsk9.html',
    controller: 'TratamientoInicioSinIPCSK9'
  })

       .state('tratamientoinicio_sin_ipcsk9_ni_resinas',{
    cache: false,
    url:'/tratamientoinicio_sin_ipcsk9_ni_resinas',
    templateUrl:'templates/dislipemia/tratamientoinicio_sin_ipcsk9_ni_resinas.html',
    controller: 'TratamientoInicioSinIPCSK9NiResinas'
  })

       .state('tratamientoinicio_sin_ezetimive',{
    cache: false,
    url:'/tratamientoinicio_sin_ezetimive',
    templateUrl:'templates/dislipemia/tratamientoinicio_sin_ezetimive.html',
    controller: 'TratamientoInicioSinEzetimive'
  })

 .state('tratamientoinicio_sin_ezetimive_vih',{
    cache: false,
    url:'/tratamientoinicio_sin_ezetimive_vih',
    templateUrl:'templates/dislipemia/tratamientoinicio_sin_ezetimive_vih.html',
    controller: 'TratamientoInicioSinEzetimive_vih'
  })











       .state('tratamientoinicio2',{
    cache: false,
    url:'/tratamientoinicio2',
    templateUrl:'templates/dislipemia/tratamientoinicio2.html',
    controller: 'TratamientoInicio2'
  })

       .state('contraindicaciones',{
    cache: false,
    url:'/contraindicaciones',
    templateUrl:'templates/dislipemia/contraindicaciones.html',
    controller: 'Contraindicaciones'
  })


       .state('contraindicaciones_vih',{
    cache: false,
    url:'/contraindicaciones_vih',
    templateUrl:'templates/dislipemia/contraindicaciones_vih.html',
    controller: 'Contraindicaciones_vih'
  })

       .state('estatinas',{
    cache: false,
    url:'/estatinas',
    templateUrl:'templates/dislipemia/estatinas.html',
    controller: 'Estatinas'
  })

       .state('fibratos',{
    cache: false,
    url:'/fibratos',
    templateUrl:'templates/dislipemia/fibratos.html',
    controller: 'Fibratos'
  })

///////////////////////LIMITACIONES/////////////////////////

       .state('limitaciones1',{
    cache: false,
    url:'/limitaciones1',
    templateUrl:'templates/limitaciones/limitaciones1.html',
    controller: 'Limitaciones'
  })

      .state('mialgias1',{
    cache: false,
    url:'/mialgias1',
    templateUrl:'templates/limitaciones/mialgias1.html',
    controller: 'Mialgias1'
  })

      .state('manejo_mialgias',{
    cache: false,
    url:'/manejo_mialgias',
    templateUrl:'templates/limitaciones/manejo_mialgias.html',
    controller: 'ManejoMialgias'
  })

      .state('mialgiasscore',{
    cache: false,
    url:'/mialgiasscore',
    templateUrl:'templates/limitaciones/mialgiasscore.html',
    controller: 'MialgiasScore'
  })

      .state('score_probable',{
    cache: false,
    url:'/score_probable',
    templateUrl:'templates/limitaciones/score_probable.html',
    controller: 'ScoreProbable'
  })
      .state('score_posible',{
    cache: false,
    url:'/score_posible',
    templateUrl:'templates/limitaciones/score_posible.html',
    controller: 'ScorePosible'
  })
      .state('score_improbable',{
    cache: false,
    url:'/score_improbable',
    templateUrl:'templates/limitaciones/score_improbable.html',
    controller: 'ScoreImprobable'
  })

      .state('factor_riesgo_mialgias',{
    cache: false,
    url:'/factor_riesgo_mialgias',
    templateUrl:'templates/limitaciones/factor_riesgo_mialgias.html',
    controller: 'FactorRiesgoMialgias'
  })

        .state('interacciones_mialgias',{
    cache: false,
    url:'/interacciones_mialgias',
    templateUrl:'templates/limitaciones/interacciones_mialgias.html',
    controller: 'InteraccionesMialgias'
  })

        .state('form_diabetogenicidad',{
    cache: false,
    url:'/form_diabetogenicidad',
    templateUrl:'templates/limitaciones/form_diabetogenicidad.html',
    controller: 'FormDiabetogenicidad'
  })
                .state('diabeto_muy_alto',{
    cache: false,
    url:'/diabeto_muy_alto',
    templateUrl:'templates/limitaciones/diabeto_muy_alto.html',
    controller: 'DiabetoMuyAlto'
  })
               .state('diabeto_muy_alto2',{
    cache: false,
    url:'/diabeto_muy_alto2',
    templateUrl:'templates/limitaciones/diabeto_muy_alto2.html',
    controller: 'DiabetoMuyAlto2'
  })

                .state('diabeto_alto',{
    cache: false,
    url:'/diabeto_alto',
    templateUrl:'templates/limitaciones/diabeto_alto.html',
    controller: 'DiabetoAlto'
  })

             .state('diabeto_alto2',{
    cache: false,
    url:'/diabeto_alto2',
    templateUrl:'templates/limitaciones/diabeto_alto2.html',
    controller: 'DiabetoAlto2'
  })
                  .state('diabeto_ligeramente_elevado',{
    cache: false,
    url:'/diabeto_ligeramente_elevado',
    templateUrl:'templates/limitaciones/diabeto_ligeramente_elevado.html',
    controller: 'DiabetoLigeramenteElevado'
  })
                  .state('diabeto_moderado',{
    cache: false,
    url:'/diabeto_moderado',
    templateUrl:'templates/limitaciones/diabeto_moderado.html',
    controller: 'DiabetoModerado'
  })
                  .state('diabeto_bajo',{
    cache: false,
    url:'/diabeto_bajo',
    templateUrl:'templates/limitaciones/diabeto_bajo.html',
    controller: 'DiabetoBajo'
  })  

                    .state('calculadoraimc_score',{
    cache: false,
    url:'/calculadoraimc_score',
    templateUrl:'templates/limitaciones/calculadoraimc_score.html',
    controller: 'CalculadoraIMCScore'
  })   


  ///////////////////////////HIPERCOLESTEROLEMIA///////////////////////////////

        .state('hipercolesterolemia',{
    cache: false,
    url:'/hipercolesterolemia',
    templateUrl:'templates/hipercolesterolemia/hipercolesterolemia.html',
    controller: 'Hipercolesterolemia'
  }) 

          .state('sospechahf',{
    cache: false,
    url:'/sospechahf',
    templateUrl:'templates/hipercolesterolemia/sospechahf.html',
    controller: 'SospechaHF'
  })  

            .state('modal_criterio_sospecha_hf',{
    cache: false,
    url:'/modal_criterio_sospecha_hf',
    templateUrl:'templates/hipercolesterolemia/modal_criterio_sospecha_hf.html',
    controller: 'ModalCriterioSospechaHF'
  }) 


            .state('sospechahf_homo',{
    cache: false,
    url:'/sospechahf_homo',
    templateUrl:'templates/hipercolesterolemia/sospechahf_homo.html',
    controller: 'SospechaHFHOMO'
  }) 

              .state('modal_criterio_sospecha_hf_homo',{
    cache: false,
    url:'/modal_criterio_sospecha_hf_homo',
    templateUrl:'templates/hipercolesterolemia/modal_criterio_sospecha_hf_homo.html',
    controller: 'ModalCriterioSospechaHFHomo'
  }) 



                .state('modal_criterio_diagnostico',{
    cache: false,
    url:'/modal_criterio_diagnostico',
    templateUrl:'templates/hipercolesterolemia/modal_criterio_diagnostico.html',
    controller: 'ModalCriterioDiagnostico'
  }) 

                  .state('form_criterio_diagnostico',{
    cache: false,
    url:'/form_criterio_diagnostico',
    templateUrl:'templates/hipercolesterolemia/form_criterio_diagnostico.html',
    controller: 'FormCriterioDiagnostico'
  })             


.state('diagnostico_hf_homo',{
    cache: false,
    url:'/diagnostico_hf_homo',
    templateUrl:'templates/hipercolesterolemia/diagnostico_hf_homo.html',
    controller: 'DiagnosticoHFHomo'
  }) 


  .state('diagnostico_hf_hete',{
    cache: false,
    url:'/diagnostico_hf_hete',
    templateUrl:'templates/hipercolesterolemia/diagnostico_hf_hete.html',
    controller: 'DiagnosticoHFHete'
  })   


    .state('modal4_secciones',{
    cache: false,
    url:'/modal4_secciones',
    templateUrl:'templates/hipercolesterolemia/modal4_secciones.html',
    controller: 'Modal4Secciones'
  })

  .state('modal_diagnostico_ninos',{
    cache: false,
    url:'/modal_diagnostico_ninos',
    templateUrl:'templates/hipercolesterolemia/modal_diagnostico_ninos.html',
    controller: 'ModalDiagnosticoNinos'
  })

    .state('modal_diagnostico_genetico',{
    cache: false,
    url:'/modal_diagnostico_genetico',
    templateUrl:'templates/hipercolesterolemia/modal_diagnostico_genetico.html',
    controller: 'ModalDiagnosticoGenetico'
  })

    .state('modal_diagnostico_cribado',{
    cache: false,
    url:'/modal_diagnostico_cribado',
    templateUrl:'templates/hipercolesterolemia/modal_diagnostico_cribado.html',
    controller: 'ModalDiagnosticoCribado'
  })

    .state('modal_diagnostico_combinado',{
    cache: false,
    url:'/modal_diagnostico_combinado',
    templateUrl:'templates/hipercolesterolemia/modal_diagnostico_combinado.html',
    controller: 'ModalDiagnosticoCombinado'
  })             

  // .state('vista2',{
  //   url:'/vista2',
  //   template:'<div class="padding"><h2>Vista 2</h2><button class="button button-positive" ui-sref="vista1">A vista1</button></div>'
  // })

  $urlRouterProvider.otherwise('/home');

})

.controller('HomeCtrl',function($scope){
 totalimcRounded="0";
 sexoimc="1";
 resultadofiltradoredond="inicio";
 cardio="0";
 ldlactual="0";
 renalindex="9";
 scoreindex="9";
 ldltransactual="";
 ldlobjetivo="0";
 score_calculado="-";
 vih="no";
 objetivo_vih=0;
 contra_abs_estatina=null;
 contra_rel_estatina=null;
 contra_abs_ezetimibe=null;
 contra_abs_fibratos=null;
 contra_abs_resinas=null;
 contra_abs_ipcsk9=null;
 quitar_estatina=false;
 quitar_ezetimibe=false;
 quitar_fibratos=false;
 quitar_resinas=false;
 quitar_ipcsk9=false;
 quitar_ator_inter=false;
 quitar_fluv_inter=false;
 quitar_lov_inter=false;
 quitar_pito_inter=false;
 quitar_pra_inter=false;
 quitar_rosu_inter=false;
 quitar_sim_inter=false;
 objetivo_vih=null;
 eliminar_sim=false;
 total_score_mialgias=null;
 calc_diabeto_total=null;
 calc_diabeto_total2=null;
 totalimcRounded_diabet=".";
 edad_diabet=".";
 edad_diabet_index=0;
 sexo_diabet_index=0;

 check1_imc = null;
 check2_imc = null;
 check3_imc = null;
 check4_imc = null;
 check5_imc = null;
 check6_imc = null;
 check7_imc = null;
 check8_imc = null;
 check9_imc = null;

 check1_form = null;

 check1_score = null;
 check2_score = null;
 check3_score = null;
 check4_score = null;
 check5_score = null;
 check6_score = null;
 

})


.directive('back', ['$window', function($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };
    }])




.controller('DislipFormCtrl',function($scope,$state){
  // resultadofiltradoredond=90;
    document.getElementById("ldl-actual").value=ldltransactual;
    if (check1_form==true) {
          document.getElementById('ecvdoc').checked=true;
    
        }
   
    $scope.irfactorriesgo = function(){
        
        if($("#ecvdoc").is(':checked')) {  
            check1_form=true;
        }

        renalindex=document.getElementById('funcion_renal').options.selectedIndex;
        if(renalindex==0){
          resultadofiltradoredond=90;
        }
                if(renalindex==1){
          resultadofiltradoredond=35;
        }
                if(renalindex==2){
          resultadofiltradoredond=10;
        }

        scoreindex=document.getElementById('selector-score').options.selectedIndex;
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
        if(scoreindex==5){
         score_calculado=0;
        }
       
        ldltransactual=document.getElementById("ldl-actual").value;
      $state.go('factorriesgocardio');
        
    }

    $scope.irfuncionrenal = function(){
      if($("#ecvdoc").is(':checked')) {  
            check1_form=true;
        }

        renalindex=document.getElementById('funcion_renal').options.selectedIndex;
        if(renalindex==0){
          resultadofiltradoredond=90;
        }
                if(renalindex==1){
          resultadofiltradoredond=35;
        }
                if(renalindex==2){
          resultadofiltradoredond=10;
        }

        scoreindex=document.getElementById('selector-score').options.selectedIndex;
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
        if(scoreindex==5){
         score_calculado=0;
        }
        ldltransactual=document.getElementById("ldl-actual").value;
        $state.go('funcionrenal');
    }

    $scope.ircalcscore = function(){
      if($("#ecvdoc").is(':checked')) {  
            check1_form=true;
        }

        renalindex=document.getElementById('funcion_renal').options.selectedIndex;
        if(renalindex==0){
          resultadofiltradoredond=90;
        }
                if(renalindex==1){
          resultadofiltradoredond=35;
        }
                if(renalindex==2){
          resultadofiltradoredond=10;
        }

        scoreindex=document.getElementById('selector-score').options.selectedIndex;
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
        if(scoreindex==5){
         score_calculado=0;
        }
        ldltransactual=document.getElementById("ldl-actual").value;
        $state.go('calcscore');
    }
    $scope.ir_info_cardio = function(){
      if($("#ecvdoc").is(':checked')) {  
            check1_form=true;
        }

        renalindex=document.getElementById('funcion_renal').options.selectedIndex;
        if(renalindex==0){
          resultadofiltradoredond=90;
        }
                if(renalindex==1){
          resultadofiltradoredond=35;
        }
                if(renalindex==2){
          resultadofiltradoredond=10;
        }

        scoreindex=document.getElementById('selector-score').options.selectedIndex;
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
        if(scoreindex==5){
         score_calculado=0;
        }
        ldltransactual=document.getElementById("ldl-actual").value;
        $state.go('modalcardiodoc');
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
      // alert("Riesgo alto");
      $state.go('riesgoalto_vih');
      objetivo_vih=70;

    }
    if(cardio=="1"||scoreindex=="2"){
      // alert("RiesgoAlto");
      // alert("Riesgo moderado-alto");
      $state.go('riesgomoderadoalto_vih');
      objetivo_vih=100;
    }
    if(cardio=="1"||scoreindex=="3"){
      // alert("RiesgoModerado");
      // alert("Riesgo moderado-bajo");
      $state.go('riesgomoderadobajo_vih');
      objetivo_vih=130;
    }
    if(cardio=="1"){
      // alert("RiesgoBajo");
      // alert("Riesgo bajo");
      $state.go('riesgobajo_vih');
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
  document.getElementById("ldl-actual").value=ldlconv.toFixed(2);
  
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


if (check1_imc==true) {
    document.getElementById('tabaquismo').checked=true;
    
    }
else{
    document.getElementById('tabaquismo').checked=false;
}
if (check2_imc==true) {
    document.getElementById('hipertension').checked=true;
    $("#HTA").show();
    
    }
  if (check3_imc==true) {
    document.getElementById('htasevera').checked=true;
    
    }
if (check4_imc==true) {
    document.getElementById('diabetes').checked=true;
    $("#LOD").show();
    
    }
if (check5_imc==true) {
    document.getElementById('lod').checked=true;
    
    }
if (check6_imc==true) {
    document.getElementById('frcv').checked=true;
    
    }
if (check7_imc==true) {
    document.getElementById('hiperfam').checked=true;
    
    }
if (check8_imc==true) {
    document.getElementById('dislipemia').checked=true;
     $("#HIPERCOL").show();
    
    }
if (check9_imc==true) {
    document.getElementById('sobrepeso').checked=true;
     
    
    }


$scope.ir_calc_imc = function(){


  
        if($("#tabaquismo").is(':checked')) {  
            check1_imc=true;
        }
        if($("#hipertension").is(':checked')) {  
            check2_imc=true;

        }
        if($("#htasevera").is(':checked')) {  
            check3_imc=true;
        }
        if($("#diabetes").is(':checked')) {  
            check4_imc=true;
        }
        if($("#lod").is(':checked')) {  
            check5_imc=true;
        }
        if($("#frcv").is(':checked')) {  
            check6_imc=true;
        }
                if($("#hiperfam").is(':checked')) {  
            check7_imc=true;
        }
                        if($("#dislipemia").is(':checked')) {  
            check8_imc=true;
        }
                if($("#sobrepeso").is(':checked')) {  
                  check9_imc=true;
            
        }
      

       $state.go('calculadoraimc');

}


$scope.ir_info = function(){


  
        if($("#tabaquismo").is(':checked')) {  
            check1_imc=true;
        }
        if($("#hipertension").is(':checked')) {  
            check2_imc=true;

        }
        if($("#htasevera").is(':checked')) {  
            check3_imc=true;
        }
        if($("#diabetes").is(':checked')) {  
            check4_imc=true;
        }
        if($("#lod").is(':checked')) {  
            check5_imc=true;
        }
        if($("#frcv").is(':checked')) {  
            check6_imc=true;
        }
                if($("#hiperfam").is(':checked')) {  
            check7_imc=true;
        }
                        if($("#dislipemia").is(':checked')) {  
            check8_imc=true;
        }
                    if($("#sobrepeso").is(':checked')) {  
            check9_imc=true;
        }
      

       $state.go('htasevera');

}




  $scope.compro1 = function(){



     if($("#tabaquismo").is(':checked')) {  
            check1_imc=true;
        }
      else{
        check1_imc=false;
      }
        if($("#hipertension").is(':checked')) {  
            check2_imc=true;

        }
        if($("#htasevera").is(':checked')) {  
            check3_imc=true;
        }
        if($("#diabetes").is(':checked')) {  
            check4_imc=true;
        }
        if($("#lod").is(':checked')) {  
            check5_imc=true;
        }
        if($("#frcv").is(':checked')) {  
            check6_imc=true;
        }
                if($("#hiperfam").is(':checked')) {  
            check7_imc=true;
        }
                        if($("#dislipemia").is(':checked')) {  
            check8_imc=true;
        }
                if($("#sobrepeso").is(':checked')) {  
                  check9_imc=true;
            
        }
  
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

.controller('CalculadoraIMC',function($scope,$state,$ionicPopup){

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

    if(totalimcRounded>100){
      
   var alertPopup = $ionicPopup.alert({
     title: '¡Atención!',
     template: 'Algunos de los campos introducidos son incorrectos'
   });

   alertPopup.then(function(res) {
     
   });



    }
    else{
    $("#resultado").css("display", "block");
    }
    
    


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
// $('#colesterolscore2> option[value="5"]').attr('selected', 'selected');
  $( "#colesterolscore1" ).change(function() {

   var tempo=document.getElementById('colesterolscore1').options.selectedIndex;
   
      if(tempo=="1"){
        $('#colesterolscore2').val('4');
      }
      if(tempo=="2"){
        $('#colesterolscore2').val('5');
       // $('#colesterolscore2> option[value="5"]').attr('selected', 'selected');
      }
      if(tempo=="3"){
        $('#colesterolscore2').val('6');
      }
      if(tempo=="4"){
        $('#colesterolscore2').val('7');
      }
      if(tempo=="5"){
        $('#colesterolscore2').val('8');
      }
});


  $( "#colesterolscore2" ).change(function() {

   var tempo2=document.getElementById('colesterolscore2').options.selectedIndex;
   
      if(tempo2=="1"){
        $('#colesterolscore1').val('150');
      }
      if(tempo2=="2"){
        $('#colesterolscore1').val('150199');
       // $('#colesterolscore2> option[value="5"]').attr('selected', 'selected');
      }
      if(tempo2=="3"){
        $('#colesterolscore1').val('200249');
      }
      if(tempo2=="4"){
        $('#colesterolscore1').val('250299');
      }
      if(tempo2=="5"){
        $('#colesterolscore1').val('300');
      }
});



    // $scope.pasar_var = function() {
    //   var tempo=document.getElementById('colesterolscore1').options.selectedIndex;
    //   if(tempo=="1"){
    //    $('#colesterolscore2> option[value="4"]').attr('selected', 'selected');
    //   }
    //   if(tempo=="2"){
    //    $('#colesterolscore2> option[value="5"]').attr('selected', 'selected');
    //   }
    //   if(tempo=="3"){
    //    $('#colesterolscore2> option[value="6"]').attr('selected', 'selected');
    //   }
    //   if(tempo=="4"){
    //    $('#colesterolscore2> option[value="7"]').attr('selected', 'selected');
    //   }
    //   if(tempo=="5"){
    //    $('#colesterolscore2> option[value="8"]').attr('selected', 'selected');
    //   }
      
    // }



    // $scope.pasar_var2 = function() {
    //   var tempo2=document.getElementById('colesterolscore2').options.selectedIndex;
    //   if(tempo2=="1"){
    //    $('#colesterolscore1> option[value="150"]').attr('selected', 'selected');
    //   }
    //   if(tempo2=="2"){
    //    $('#colesterolscore1> option[value="150199"]').attr('selected', 'selected');
    //   }
    //   if(tempo2=="3"){
    //    $('#colesterolscore1> option[value="200249"]').attr('selected', 'selected');
    //   }
    //   if(tempo2=="4"){
    //    $('#colesterolscore1> option[value="250299"]').attr('selected', 'selected');
    //   }
    //   if(tempo2=="5"){
    //    $('#colesterolscore1> option[value="300"]').attr('selected', 'selected');
    //   }
      
    // }


    if(check1_score=="49"){
    $('#edadscore> option[value="49"]').attr('selected', 'selected');
    }
    if(check1_score=="50-54"){
    $('#edadscore> option[value="50-54"]').attr('selected', 'selected');
    }
    if(check1_score=="55-59"){
    $('#edadscore> option[value="55-59"]').attr('selected', 'selected');
    }
    if(check1_score=="60-64"){
    $('#edadscore> option[value="60-64"]').attr('selected', 'selected');
    }
    if(check1_score=="65"){
    $('#edadscore> option[value="65"]').attr('selected', 'selected');
    }



    if(check2_score=="V"){
    $('#sexoscore> option[value="V"]').attr('selected', 'selected');
    }
    if(check2_score=="M"){
    $('#sexoscore> option[value="M"]').attr('selected', 'selected');
    }


    if(check3_score=="F"){
    $('#tabaquismoscore> option[value="F"]').attr('selected', 'selected');
    }
    if(check3_score=="NF"){
    $('#tabaquismoscore> option[value="NF"]').attr('selected', 'selected');
    }


    if(check4_score=="PAS120"){
    $('#PAS> option[value="PAS120]').attr('selected', 'selected');
    }
    if(check4_score=="PAS140"){
    $('#PAS> option[value="PAS140"]').attr('selected', 'selected');
    }
    if(check4_score=="PAS160"){
    $('#PAS> option[value="PAS160"]').attr('selected', 'selected');
    }
    if(check4_score=="PAS180"){
    $('#PAS> option[value="PAS180"]').attr('selected', 'selected');
    }


    if(check5b_score=="150"){
    $('#colesterolscore1> option[value="150"]').attr('selected', 'selected');
    }
    if(check5b_score=="150199"){
    $('#colesterolscore1> option[value="150199"]').attr('selected', 'selected');
    }
    if(check5b_score=="200249"){
    $('#colesterolscore1> option[value="200249"]').attr('selected', 'selected');
    }
    if(check5b_score=="250299"){
    $('#colesterolscore1> option[value="250299"]').attr('selected', 'selected');
    }
    if(check5b_score=="300"){
    $('#colesterolscore1> option[value="300"]').attr('selected', 'selected');
    }


    if(check5_score=="4"){
    $('#colesterolscore2> option[value="4"]').attr('selected', 'selected');
    }
    if(check5_score=="5"){
    $('#colesterolscore2> option[value="5"]').attr('selected', 'selected');
    }
    if(check5_score=="6"){
    $('#colesterolscore2> option[value="6"]').attr('selected', 'selected');
    }
    if(check5_score=="7"){
    $('#colesterolscore2> option[value="7"]').attr('selected', 'selected');
    }
    if(check5_score=="8"){
    $('#colesterolscore2> option[value="8"]').attr('selected', 'selected');
    }
    if (check6_score==true) {
          document.getElementById('selector_alto_riesgo').checked=true;
    
        }


  $scope.info_paises = function() {
    check2_score=document.getElementById("sexoscore").value;
    check3_score=document.getElementById("tabaquismoscore").value;
    check1_score=document.getElementById("edadscore").value;
    check4_score=document.getElementById("PAS").value;
    check5_score=document.getElementById("colesterolscore2").value;
    check5b_score=document.getElementById("colesterolscore1").value;
    if($("#selector_alto_riesgo").is(':checked')) {  
            check6_score=true;
        }

       $state.go('paisesaltoriesgo');
  }


  


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


.controller('Reduccion_vih',function($scope){


document.getElementById("ldl_act_red_vih").value=ldlactual;
  document.getElementById("ldl_obj_red_vih").value=ldlobjetivo;  
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_vih").value=porc_reducc+"%";



})


.controller('TratamientoPrevio',function($scope){

  

})

.controller('TratamientoPrevio_vih',function($scope){

  

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












.controller('TratamientoPrevioMedicamentos_vih',function($scope,$state){

 

jQuery('.linea_atorvastatina').on( "click", function() { 

           jQuery('.cuadro_atorvastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {   

           jQuery('.cuadro_atorvastatina').hide(); //muestro mediante clase
         });
jQuery('.cancelar1').on( "click", function() { 
          jQuery("#atorv_10").prop('checked', false);
          jQuery("#atorv_20").prop('checked', false); 
           jQuery('.cuadro_atorvastatina').hide(); //muestro mediante clase
         });


jQuery('.linea_rosuvastatina').on( "click", function() {    
           jQuery('.cuadro_rosuvastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_rosuvastatina').hide(); //muestro mediante clase
         });
jQuery('.cancelar2').on( "click", function() { 
         
          jQuery("#rosuv_10").prop('checked', false);
         
           jQuery('.cuadro_rosuvastatina').hide(); //muestro mediante clase
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



$scope.sumar_vih = function() {
var atorv_10v=atorv_20v=atorv_40v=rosuv_10v=prav_40v=ezet_10v=atorv_10v_ezet_10v=atorv_20v_ezet_10v=rosuv_10v_ezet_10v=prav_40v_ezet_10v=rosuv_10v_ezet_10v=0;

// atorv_10v=document.getElementById("atorv_10").value;

// atorv_20v=parseInt(document.getElementById("atorv_20").value);

if (($('#atorv_10').is(":checked"))&&!($('#ezet_10').is(":checked"))){atorv_10v=35;}
if (($('#atorv_20').is(":checked"))&&!($('#ezet_10').is(":checked"))){atorv_20v=41;}

if (($('#rosuv_10').is(":checked"))&&!($('#ezet_10').is(":checked"))){rosuv_10v=47;}

if (($('#prav_40').is(":checked"))&&!($('#ezet_10').is(":checked"))){prav_40v=33;}

if (($('#ezet_10').is(":checked"))&&!($('#atorv_10').is(":checked"))&&!($('#atorv_20').is(":checked"))&&!($('#rosuv_10').is(":checked"))&&!($('#prav_40').is(":checked"))){ezet_10v=20;}




if (($('#atorv_10').is(":checked"))&&($('#ezet_10').is(":checked"))){atorv_10v_ezet_10v=41.5;}
if (($('#atorv_20').is(":checked"))&&($('#ezet_10').is(":checked"))){atorv_20v_ezet_10v=46.9;}
if (($('#rosuv_10').is(":checked"))&&($('#ezet_10').is(":checked"))){rosuv_10v_ezet_10v=52.3;}
if (($('#prav_40').is(":checked"))&&($('#ezet_10').is(":checked"))){prav_40v_ezet_10v=39.7;}






red_trat=atorv_10v+atorv_20v+rosuv_10v+prav_40v+ezet_10v+atorv_10v_ezet_10v+atorv_20v_ezet_10v+rosuv_10v_ezet_10v+prav_40v_ezet_10v;

ldlrectificado=parseFloat(ldlactual)+parseFloat(ldlactual)*(red_trat/100);
ldlactual=ldlrectificado;
$state.go('tratamientoinicio_vih');
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


.controller('TratamientoInicio_vih',function($scope,$state, $firebaseArray){
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    

    var ref = firebase.database().ref('dislipemia3').orderByChild("porcentaje").startAt(porc_reducc);
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
          // }
          // if(cols[col]){
            $scope.displenias.push(value);
          // }
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


.controller('TratamientoInicioSinEstatina_vih',function($scope,$state, $firebaseArray){
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase


    var ref = firebase.database().ref('dislipemia3').orderByChild("porcentaje").startAt(porc_reducc);
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



.controller('TratamientoInicioSinEzetimive_vih',function($scope,$state, $firebaseArray){
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase


    var ref = firebase.database().ref('dislipemia3').orderByChild("porcentaje").startAt(porc_reducc);
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


// if (quitar_ator_inter==true) {
//   // alert(quitar_ator_inter);
//   $('.ator').hide();
// };
// if (quitar_fluv_inter==true) {
//   $('.fluv').hide();
// };
// if (quitar_lov_inter==true) {
//   $('.lov').hide();
// };
// if (quitar_pito_inter==true) {
//   $('.pito').hide();
// };
// if (quitar_pra_inter==true) {
//   $('.pra').hide();
// };
// if (quitar_rosu_inter==true) {
//   $('.rosu').hide();
// };
// if (quitar_sim_inter==true) {
//   $('.sim').hide();
// };

 console.log(quitar_ator_inter+","+quitar_lov_inter+","+quitar_fluv_inter+","+quitar_lov_inter+","+quitar_pito_inter+","+quitar_pra_inter+","+quitar_rosu_inter+","+quitar_sim_inter);


setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").css("background", "url(img/alerta_baja.png)");
  $(".ator").css("background-repeat", "no-repeat");
  $(".ator").css("background-position", "97% 81%");
}
if(quitar_lov_inter==true){
  $(".lov").css("background", "url(img/alerta_baja.png)");
  $(".lov").css("background-repeat", "no-repeat");
  $(".lov").css("background-position", "97% 81%");
}
if(quitar_fluv_inter==true){
  $(".fluv").css("background", "url(img/alerta_baja.png)");
  $(".fluv").css("background-repeat", "no-repeat");
  $(".fluv").css("background-position", "97% 81%");
}
if(quitar_lov_inter==true){
  $(".lov").css("background", "url(img/alerta_baja.png)");
  $(".lov").css("background-repeat", "no-repeat");
  $(".lov").css("background-position", "97% 81%");
}
if(quitar_pito_inter==true){
  $(".pito").css("background", "url(img/alerta_baja.png)");
  $(".pito").css("background-repeat", "no-repeat");
  $(".pito").css("background-position", "97% 81%");
}
if(quitar_pra_inter==true){
  $(".pra").css("background", "url(img/alerta_baja.png)");
  $(".pra").css("background-repeat", "no-repeat");
  $(".pra").css("background-position", "97% 81%");
}
if(quitar_rosu_inter==true){
  $(".rosu").css("background", "url(img/alerta_baja.png)");
  $(".rosu").css("background-repeat", "no-repeat");
  $(".rosu").css("background-position", "97% 81%");
}
if(quitar_sim_inter==true){
  $(".sim").css("background", "url(img/alerta_baja.png)");
  $(".sim").css("background-repeat", "no-repeat");
  $(".sim").css("background-position", "97% 81%");
}

  }, 2);




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



.controller('Contraindicaciones_vih',function($scope,$state){


  contra_abs_estatina = document.getElementById("contra_abs_estatinas");
  contra_abs_ezetimibe = document.getElementById("contra_abs_ezetimibe");
  contra_abs_fibratos = document.getElementById("contra_abs_fibratos");
  contra_abs_resinas = document.getElementById("contra_abs_resinas");
  contra_abs_ipcsk9 = document.getElementById("contra_abs_ipcsk9");

  $scope.filtro_contra = function() {
      if(contra_abs_estatina.checked){
        quitar_estatina=true;
        $state.go('tratamientoinicio_sin_estatina_vih');
      }
      else if(contra_abs_ezetimibe.checked){
        quitar_ezetimibe=true;
        $state.go('tratamientoinicio_sin_ezetimive_vih');
      }
      else{
        $state.go('tratamientoinicio2_vih');
        
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

$scope.filtrar_inter = function() {



  

 if( $('.check_ator').is(':checked') ) {
    quitar_ator_inter=true;
}
if( $('.check_fluv').is(':checked') ) {
    quitar_fluv_inter=true;
}
if( $('.check_lov').is(':checked') ) {
    quitar_lov_inter=true;
}
if( $('.check_pita').is(':checked') ) {
    quitar_pito_inter=true;
}
if( $('.check_prav').is(':checked') ) {
    quitar_pra_inter=true;
}
if( $('.check_rosu').is(':checked') ) {
    quitar_rosu_inter=true;
}
if( $('.check_sim').is(':checked') ) {
    quitar_sim_inter=true;
}

$state.go('tratamientoinicio2');
   console.log(quitar_ator_inter+","+quitar_fluv_inter+","+quitar_lov_inter+","+quitar_pito_inter+","+quitar_pra_inter+","+quitar_rosu_inter+","+quitar_sim_inter);
        
        
    }

              



})










.controller('Fibratos',function($scope,$state){

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

$scope.filtrar_inter = function() {




 if( $('.check_ator').is(':checked') ) {
    quitar_ator_inter=true;
}
if( $('.check_fluv').is(':checked') ) {
    quitar_fluv_inter=true;
}
if( $('.check_lov').is(':checked') ) {
    quitar_lov_inter=true;
}
if( $('.check_pita').is(':checked') ) {
    quitar_pito_inter=true;
}
if( $('.check_prav').is(':checked') ) {
    quitar_pra_inter=true;
}
if( $('.check_rosu').is(':checked') ) {
    quitar_rosu_inter=true;
    
}
if( $('.check_sim').is(':checked') ) {
    quitar_sim_inter=true;
    eliminar_sim=true;
}



$state.go('tratamientoinicio2');
   
        
        
    }

              



})









.controller('RiesgoAltoVIH',function($scope,$state){



  document.getElementById("ldl_act_res_alto_vih").value=ldlactual;
  document.getElementById("ldl_obj_res_alto_vih").value="70";
  ldlobjetivo=100;

  $scope.reduccion = function() {

             $state.go('reduccion_vih');
        
        
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

             $state.go('reduccion_vih');
        
        
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

             $state.go('reduccion_vih');
        
        
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

             $state.go('reduccion_vih');
        
        
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

/////////////////////////LIMITACIONES///////////////////////////////

.controller('Limitaciones',function($scope,$state){



})



.controller('Mialgias1',function($scope,$state){



})


.controller('ManejoMialgias',function($scope,$state){

$scope.sintomatico = function() {

             jQuery('.content_sintomatico').toggle();
        
        
    }

$scope.persisten = function() {

             jQuery('.persisten_sintomas').toggle();
        
        
    }

$scope.mejoran = function() {

             jQuery('.mejoran_sintomas').toggle();
        
        
    }

$scope.asintomatico = function() {

             jQuery('.asintomatico').toggle();
        
        
    }

$scope.reaparecen_sintomas = function() {

             jQuery('.reaparecen_sintomas').toggle();
        
        
    }


$scope.rabdomiolisis = function() {

             jQuery('.content_rabdomiolisis').toggle();
        
        
    }



})


.controller('MialgiasScore',function($scope,$state){

$scope.score_mialgias = function() {
  var patron_distribucion=parseInt(document.getElementById("patron_distribucion").value);
  var patron_temporal=parseInt(document.getElementById("patron_temporal").value);
  var retirada_estatina=parseInt(document.getElementById("retirada_estatina").value);
  var reintroduccion_estatina=parseInt(document.getElementById("reintroduccion_estatina").value);

  total_score_mialgias=patron_distribucion+patron_temporal+retirada_estatina+reintroduccion_estatina;

  if(total_score_mialgias<7){
   $state.go('score_improbable');
  }
  else if((total_score_mialgias>=9)&&(total_score_mialgias<=11)){
    $state.go('score_probable');
  }
  else if((total_score_mialgias>=7)&&(total_score_mialgias<=8)){
    $state.go('score_posible');
  }
  console.log(total_score_mialgias);

}

})


.controller('ScoreImprobable',function($scope,$state){

  $("#texto_diabeto").text(total_score_mialgias);

})

.controller('ScorePosible',function($scope,$state){

  $("#texto_diabeto").text(total_score_mialgias);


})

.controller('ScoreProbable',function($scope,$state){

  $("#texto_diabeto").text(total_score_mialgias);
  

})


.controller('FactorRiesgoMialgias',function($scope,$state){

$scope.antropometricos = function() {

             jQuery('.content_antropometricos').toggle();
        
        
    }

$scope.comorbilidades = function() {

             jQuery('.content_comorbilidades').toggle();
        
        
    }

$scope.historia_relacionada = function() {

             jQuery('.content_historia_relacionada').toggle();
        
        
    }

$scope.genetica = function() {

             jQuery('.content_genetica').toggle();
        
        
    }

$scope.otros_factores = function() {

             jQuery('.content_otros_factores').toggle();
        
        
}



  
  

})



.controller('InteraccionesMialgias',function($scope,$state){


$scope.antropometricos = function() {

             jQuery('.content_antropometricos').toggle();
        
        
    }

$scope.comorbilidades = function() {

             jQuery('.content_comorbilidades').toggle();
        
        
    }

$scope.historia_relacionada = function() {

             jQuery('.content_historia_relacionada').toggle();
        
        
    }
  

})


.controller('FormDiabetogenicidad',function($scope,$state){
document.getElementById('edad_diabet').options.selectedIndex=edad_diabet_index;
document.getElementById('sexo_diabet').options.selectedIndex=sexo_diabet_index;



  $scope.selector_sexo = function() {

      var selector_sexo2=document.getElementById("sexo_diabet").value;
      
        if(selector_sexo2=="M"){
          jQuery('.perimetro_hombre_diabet').hide();
          jQuery('.perimetro_mujer_diabet').show();
        }
        else if(selector_sexo2=="H"){
          jQuery('.perimetro_hombre_diabet').show();
          jQuery('.perimetro_mujer_diabet').hide();
        }
        
    }
   

    

     $scope.calcular_imc_score = function() {
         edad_diabet_index=document.getElementById('edad_diabet').options.selectedIndex;
         sexo_diabet_index=document.getElementById('sexo_diabet').options.selectedIndex;
         $state.go('calculadoraimc_score');
      }

  $scope.calc_diabeto = function() {
    

      edad_diabet=parseInt(document.getElementById("edad_diabet").value);
      var imc_diabet=parseInt(document.getElementById("imc_diabet").value);
      var perimetro_hombre_diabet=parseInt(document.getElementById("perimetro_hombre_diabet").value);
      var perimetro_mujer_diabet=parseInt(document.getElementById("perimetro_mujer_diabet").value);
      var ejercicio_diabet=parseInt(document.getElementById("ejercicio_diabet").value);
      var verdura_diabet=parseInt(document.getElementById("verdura_diabet").value);
      var antihiper_diabet=parseInt(document.getElementById("antihiper_diabet").value);
      var glucemias_diabet=parseInt(document.getElementById("glucemias_diabet").value);
      var antecedentes_diabet=parseInt(document.getElementById("antecedentes_diabet").value);


  
  console.log(edad_diabet+","+imc_diabet+","+perimetro_hombre_diabet+","+perimetro_mujer_diabet+","+ejercicio_diabet+","+verdura_diabet+","+antihiper_diabet+","+glucemias_diabet+","+antecedentes_diabet)
      calc_diabeto_total=edad_diabet+imc_diabet+perimetro_hombre_diabet+perimetro_mujer_diabet+ejercicio_diabet+verdura_diabet+antihiper_diabet+glucemias_diabet+antecedentes_diabet;
      if(calc_diabeto_total<7){
        console.log("BAJO");
        $state.go('diabeto_bajo');
      }
      else if((calc_diabeto_total>6)&&(calc_diabeto_total<12)){
        console.log("LIGERAMENTE ELEVADO");
        $state.go('diabeto_ligeramente_elevado');
      }
      else if((calc_diabeto_total>11)&&(calc_diabeto_total<15)){
        console.log("MODERADO");
        $state.go('diabeto_moderado');
      }
      else if((calc_diabeto_total>14)&&(calc_diabeto_total<21)){
        console.log("ALTO");
        $state.go('diabeto_alto');
      }
      else if(calc_diabeto_total>20){
        console.log("MUY ALTO");
        $state.go('diabeto_muy_alto');
      }


      
    }
    $("select#imc_diabet").val(".");
  if (totalimcRounded_diabet<25) {
    $("select#imc_diabet").val("0");
  }
  if (totalimcRounded_diabet>24&&totalimcRounded_diabet<31) {
    $("select#imc_diabet").val("1");
  }
    if (totalimcRounded_diabet>30) {
    $("select#imc_diabet").val("3");
  }

})



.controller('DiabetoMuyAlto',function($scope,$state){
  
  $("#texto_diabeto").text(calc_diabeto_total);
  calc_diabeto_total2=calc_diabeto_total;

})

.controller('DiabetoMuyAlto2',function($scope,$state){
  jQuery('.btn_left').on( "click", function() {
           jQuery('.diabeto_texto1').toggle();
           jQuery('.diabeto_texto2').hide();
 
  });
  jQuery('.btn_right').on( "click", function() {
           jQuery('.diabeto_texto2').toggle();
           jQuery('.diabeto_texto1').hide();
 
  });
 
 

 console.log(calc_diabeto_total2);
  
  $("#texto_diabeto2").text(calc_diabeto_total2);

})

.controller('DiabetoAlto',function($scope,$state){
  
  $("#texto_diabeto").text(calc_diabeto_total);

})

.controller('DiabetoAlto2',function($scope,$state){

  jQuery('.btn_left').on( "click", function() {
           jQuery('.diabeto_texto1').toggle();
           jQuery('.diabeto_texto2').hide();
 
  });
  jQuery('.btn_right').on( "click", function() {
           jQuery('.diabeto_texto2').toggle();
           jQuery('.diabeto_texto1').hide();
 
  });
  
 console.log(calc_diabeto_total2);
  
  $("#texto_diabeto2").text(calc_diabeto_total2);
})

.controller('DiabetoModerado',function($scope,$state){
  
  $("#texto_diabeto").text(calc_diabeto_total);

})

.controller('DiabetoLigeramenteElevado',function($scope,$state){
  
  $("#texto_diabeto").text(calc_diabeto_total);

})
.controller('DiabetoBajo',function($scope,$state){
  var cadena="Hola";
  // document.getElementById("resultado_score_mialgias_verde2").value=calc_diabeto_total;
  $("#texto_diabeto").text(calc_diabeto_total);

})


.controller('CalculadoraIMCScore',function($scope,$state,$ionicPopup){

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

    totalimcRounded_diabet = totalimc.toFixed(1);

    document.getElementById("resultado").value=totalimcRounded_diabet;
    if(totalimcRounded_diabet>100){
      
   var alertPopup = $ionicPopup.alert({
     title: '¡Atención!',
     template: 'Algunos de los campos introducidos son incorrectos'
   });

   alertPopup.then(function(res) {
     
   });



    }
    else{
    $("#resultado").css("display", "block");
    }

    
    


}
  // totalimcRounded=90;

})





.controller('Hipercolesterolemia',function($scope,$state){


})


.controller('SospechaHF',function($scope,$state){


})

.controller('SospechaHFHOMO',function($scope,$state){


})


.controller('ModalCriterioSospechaHF',function($scope,$state){


})


.controller('ModalCriterioSospechaHFHomo',function($scope,$state){


})


.controller('ModalCriterioDiagnostico',function($scope,$state){


})


.controller('FormCriterioDiagnostico',function($scope,$state){

  $scope.procesar = function() {

    var hff1=0;
    var hff2=0;
    var hff3=0;
    var hff4=0;
    var hff5=0;
    var hff6=0;
    var hff7=0;
    var hff8=0;
    var hff9=0;
    var hff10=0;
    var hff11=0;

  if($("#hff1").is(':checked')) {  
            hff1=document.getElementById("hff1").value;
        }
  if($("#hff2").is(':checked')) {  
            hff2=document.getElementById("hff2").value;
        }
  if($("#hff3").is(':checked')) {  
            hff3=document.getElementById("hff3").value;
        }
  if($("#hff4").is(':checked')) {  
            hff3=document.getElementById("hff4").value;
        }
  if($("#hff5").is(':checked')) {  
            hff5=document.getElementById("hff5").value;
        }
  if($("#hff6").is(':checked')) {  
            hff6=document.getElementById("hff6").value;
        }
  if($("#hff7").is(':checked')) {  
            hff7=document.getElementById("hff7").value;
        }
  if($("#hff8").is(':checked')) {  
            hff8=document.getElementById("hff8").value;
        }
  if($("#hff9").is(':checked')) {  
            hff9=document.getElementById("hff9").value;
        }
  if($("#hff10").is(':checked')) {  
            hff10=document.getElementById("hff10").value;
        }
  if($("#hff11").is(':checked')) {  
            hff11=document.getElementById("hff11").value;
        }

total_criterios_het=parseInt(hff1)+parseInt(hff2)+parseInt(hff3)+parseInt(hff4)+parseInt(hff5)+parseInt(hff6)+parseInt(hff7)+parseInt(hff8)+parseInt(hff9)+parseInt(hff10)+parseInt(hff11);
$state.go('diagnostico_hf_hete');
        
  }


})




.controller('DiagnosticoHFHomo',function($scope,$state){


})


.controller('DiagnosticoHFHete',function($scope,$state){

if(total_criterios_het>7){
  $(".certeza").css("display", "block");
  $(".btn_trat").css("display", "block");

}
if((total_criterios_het>5)&&(total_criterios_het<8)){
$(".posible").css("display", "block");
$(".btn_trat").css("display", "block");
}


if((total_criterios_het>2)&&(total_criterios_het<6)){
  $(".probable").css("display", "block");
  $(".btn_trat").css("display", "block");
}

if((total_criterios_het>0)&&(total_criterios_het<3)){
  $(".improbable").css("display", "block");
  $(".btn_no_trat").css("display", "block");
}

})


.controller('Modal4Secciones',function($scope,$state){


})



.controller('ModalDiagnosticoNinos',function($scope,$state){


})

.controller('ModalDiagnosticoGenetico',function($scope,$state){


})


.controller('ModalDiagnosticoCribado',function($scope,$state){


})

.controller('ModalDiagnosticoCombinado',function($scope,$state){


})























