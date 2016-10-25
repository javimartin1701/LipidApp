// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var totalimcRounded="0";
var sexoimc="1";
var resultadofiltradoredond="100";
var cardio="0";
var ldlactual=null;
var renalindex="inicio";
var scoreindex="9";
var scoreindex_vih="9";
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
var quitar_ator_inter_rojo=false;

var quitar_fluv_inter=false;
var quitar_fluv_inter_rojo=false;

var quitar_lov_inter=false;
var quitar_lov_inter_rojo=false;

var quitar_pito_inter=false;
var quitar_pito_inter_rojo=false;

var quitar_pra_inter=false;
var quitar_pra_inter_rojo=false;

var quitar_rosu_inter=false;
var quitar_rosu_inter_rojo=false;

var quitar_sim_inter=false;
var quitar_sim_inter_rojo=false;

var quitar_feno_inter=false;
var quitar_feno_inter_rojo=false;

var quitar_gem_inter=false;
var quitar_gem_inter_rojo=false;

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

var historia=[];
var penul=null;
var previo2=null;
var longhistoria=null;
var pen=null;
var rama_vih=false;
var consulta_scoreindex=null;

var unidad_seleccionada=null;

var check_ecvdoc=false;

var tratamiento_previo=false;
var pantallaactual=null;

var previo_ator=null;
var previo_rosu=null;
var previo_pita=null;
var previo_sim=null;
var previo_pra=null;
var previo_fluv=null;
var previo_lov=null;

var sin_estatinas=false;
var sin_ezetimive=false;
var sin_fibratos=false;
var sin_fibratos=false;
var sin_ipcsk9=false;
var sin_resina=false;
var password2=null;
var mitad=false;
var tipo_riesgo=null;
var tratamiento=false;

var quitar_vih=false;
var proviene_contraindicaciones=false;
var proviene_interacciones=false;

var previo_ezet=false;
var previo_aliro=false;
var previo_evolo=false;
var previo_colestir=false;
var previo_colestip=false;
var previo_fenof=false;
var previo_gemf=false;

var ecvcheck2=false;
var creatinina_mem=null;
var edad_mem=null;

var sex=false;
var raz=false;

var marcado_frc=false;




angular.module('starter', ['ionic','ui.router','firebase'])

.run(function($ionicPlatform,$rootScope,$ionicPopup,$state,$rootScope) {
  
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
  //   ionic.Platform.fullScreen();
  // if (window.StatusBar) {
  //   return StatusBar.hide();
  // }
    var config = {
      apiKey: "AIzaSyAXx_Kp0wEDLonlMBTo5NgfkuWxEVHwU9M",
      authDomain: "lipid-app.firebaseapp.com",
      databaseURL: "https://lipid-app.firebaseio.com",
      storageBucket: "lipid-app.appspot.com",
    };
    firebase.initializeApp(config);

    firebase.auth().signInAnonymously();


//////////////LOGIN APP///////////////////




var arreglo = ["1", "2", "4", "5"]            
for(var i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == "10") {
        console.log("objeto encontrado");
    }
    else{
        console.log("objeto NO encontrado")
    }
}

// var pwd='1qaZXsw2';
// var titulo_login="Login";
// var texto_login="Introduce tu password";
// var place_login="Tu password";

// function incorrecto(){
//   place_login="Password Incorrecto"
//   $ionicPopup.prompt({
//    title: titulo_login,
//    template: texto_login,
//    inputType: 'password',
//    cssClass: 'login',
//    inputPlaceholder: place_login
//  }).then(function(res) {
//    if (res<"lipidapp15001"&&res>"lipidapp00000") {

//          $state.go('home');
//          console.log("Correcto");

//       } else {

//          incorrecto();

//       }
//  });
// }

//   $ionicPopup.prompt({
//    title: titulo_login,
//    template: texto_login,
//    inputType: 'password',
//    inputPlaceholder: place_login
//  }).then(function(res) {
//    if (res==pwd) {

//          $state.go('home');
//          console.log("Correcto");

//       } else {

//          incorrecto();

//       }
//  });



////////////////////FIN LOGIN APP////////////////////////     




    

    $( "#volver_home" ).click(function() {

   var confirmPopup = $ionicPopup.confirm({

      title: '¡Atención!',

      template: '¿Está seguro que desea acceder al menú principal de la app?',

      cancelText: 'Cancelar',

      okText: 'Aceptar',

   });

   confirmPopup.then(function(res) {

      if (res) {

         $state.go('home');
         $rootScope.estatinas_interaccion_baja=null;
         $rootScope.estatinas_interaccion_alta=null;
         $rootScope.ezetimive_interaccion_baja=null;
         $rootScope.ezetimive_interaccion_alta=null;

      } else {

         console.log('You clicked on "Cancel" button');

      }

   });


});

  });




  $rootScope.previousState;
$rootScope.currentState;
$rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
    $rootScope.previousState = from.name;
    $rootScope.currentState = to.name;
    console.log('Previous state:'+$rootScope.previousState)
    console.log('Current state:'+$rootScope.currentState)
    console.log($rootScope);
    previo2=$rootScope.previousState;
    longhistoria=historia.length;
    pen=longhistoria-2;

    historia.push(previo2);

    penul=historia[pen];
    console.log(historia);
    console.log(penul);
    pantallaactual = $rootScope.currentState;
    console.log(pantallaactual);


});


$( "#ir_presentacion" ).click(function() {
if(pantallaactual != 'home'){
     var confirmPopup = $ionicPopup.confirm({

      title: '¡Atención!',

      template: 'Está apunto de abandonar la sección en la que se encuentra actualmente. Perderá la información introducida. ¿Está seguro que desea continuar?',

      cancelText: 'Cancelar',

      okText: 'Aceptar',

   });

   confirmPopup.then(function(res) {

      if (res) {

         $state.go('presentacion');

      } else {

         console.log('You clicked on "Cancel" button');

      }

   });
}
else{
  $state.go('presentacion');

}
  });






$( "#ir_formulariodislipemia" ).click(function() {




if(pantallaactual != 'home'){
     var confirmPopup = $ionicPopup.confirm({

      title: '¡Atención!',

      template: 'Está apunto de abandonar la sección en la que se encuentra actualmente. Perderá la información introducida. ¿Está seguro que desea continuar?',

      cancelText: 'Cancelar',

      okText: 'Aceptar',

   });

   confirmPopup.then(function(res) {

      if (res) {

         $state.go('formulariodislipemia');
         

 $rootScope.estatina_grupos_emi=null;
$rootScope.estatina_grupos_eai=null;
 $rootScope.estatina_grupos_emi=null;
  $rootScope.estatina_grupos_emi_rojo=null;
$rootScope.estatina_grupos_eai_rojo=null;
 $rootScope.estatina_grupos_emi_rojo=null;

ecvcheck2=false;
tiene_vih=false;

consulta_scoreindex=null;
renalindex=null;
$rootScope.ldlactual_scope=null;
quitar_feno_inter=false;
quitar_feno_inter_rojo=false;

 quitar_gem_inter=false;
 quitar_gem_inter_rojo=false;

 totalimcRounded="0";
 sexoimc="1";
 resultadofiltradoredond="100";
 cardio="0";
 ldlactual=0;
 renalindex="inicio";
 scoreindex="9";
 scoreindex_vih="9";
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
 quitar_ator_inter_rojo=false;

 quitar_fluv_inter=false;
 quitar_fluv_inter_rojo=false;

 quitar_lov_inter=false;
 quitar_lov_inter_rojo=false;

 quitar_pito_inter=false;
 quitar_pito_inter_rojo=false;

 quitar_pra_inter=false;
 quitar_pra_inter_rojo=false;

 quitar_rosu_inter=false;
 quitar_rosu_inter_rojo=false;

 quitar_sim_inter=false;
 quitar_sim_inter_rojo=false;

 quitar_feno_inter=false;

 quitar_gem_inter=false;
 quitar_gem_inter_rojo=false;

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
 check5b_score = null;
 check6_score = null;
 total_criterios_het = null;

 historia=[];
 penul=null;
 previo2=null;
 longhistoria=null;
 pen=null;
 rama_vih=false;
 consulta_scoreindex=null;

 unidad_seleccionada=null;

 check_ecvdoc=false;

 tratamiento_previo=false;
 pantallaactual=null;

 previo_ator=null;
 previo_rosu=null;
 previo_pita=null;
 previo_sim=null;
 previo_pra=null;
 previo_fluv=null;
 previo_lov=null;

 sin_estatinas=false;
 sin_ezetimive=false;
 sin_fibratos=false;
 sin_fibratos=false;
 sin_ipcsk9=false;
 sin_resina=false;
 password2=null;
 mitad=false;
 tipo_riesgo=null;
 tratamiento=false;

 quitar_vih=false;
 proviene_contraindicaciones=false;
 proviene_interacciones=false;

 previo_ezet=false;
 previo_aliro=false;
 previo_evolo=false;
 previo_colestir=false;
 previo_colestip=false;
 previo_fenof=false;
 previo_gemf=false;


 $rootScope.ldlactual_scope=null;

consulta_scoreindex=null;


ecvcheck2=null;
tiene_vih=null;
marcado_frc=false;




      } else {

         console.log('You clicked on "Cancel" button');

      }

   });
}
else{
  $state.go('formulariodislipemia');

}
  });






$( "#ir_hipercolesterolemia" ).click(function() {
if(pantallaactual != 'home'){
     var confirmPopup = $ionicPopup.confirm({

      title: '¡Atención!',

      template: 'Está apunto de abandonar la sección en la que se encuentra actualmente. Perderá la información introducida. ¿Está seguro que desea continuar?',

      cancelText: 'Cancelar',

      okText: 'Aceptar',

   });

   confirmPopup.then(function(res) {

      if (res) {

         $state.go('hipercolesterolemia');

      } else {

         console.log('You clicked on "Cancel" button');

      }

   });
}
else{
  $state.go('hipercolesterolemia');

}
  });







$( "#ir_limitaciones1" ).click(function() {
if(pantallaactual != 'home'){
     var confirmPopup = $ionicPopup.confirm({

      title: '¡Atención!',

      template: 'Está apunto de abandonar la sección en la que se encuentra actualmente. Perderá la información introducida. ¿Está seguro que desea continuar?',

      cancelText: 'Cancelar',

      okText: 'Aceptar',

   });

   confirmPopup.then(function(res) {

      if (res) {

         $state.go('limitaciones1');

      } else {

         console.log('You clicked on "Cancel" button');

      }

   });
}
else{
  $state.go('limitaciones1');

}
  });






$( "#ir_premenu_interacciones2" ).click(function() {
if(pantallaactual != 'home'){
     var confirmPopup = $ionicPopup.confirm({

      title: '¡Atención!',

      template: 'Está apunto de abandonar la sección en la que se encuentra actualmente. Perderá la información introducida. ¿Está seguro que desea continuar?',

      cancelText: 'Cancelar',

      okText: 'Aceptar',

   });

   confirmPopup.then(function(res) {

      if (res) {

         $state.go('premenu_interacciones2');

      } else {

         console.log('You clicked on "Cancel" button');

      }

   });
}
else{
  $state.go('premenu_interacciones2');

}
  });


})






.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

  .state('login',{
    cache: false,
    url:'/login',
    templateUrl:'templates/login.html',
    controller: 'Login'
  })

  .state('condiciones_legales',{
    cache: false,
    url:'/condiciones_legales',
    templateUrl:'templates/condiciones_legales.html',
    controller: 'condiciones_legales'
  })

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

      .state('version_pruebas',{
    cache: false,
    url:'/version_pruebas',
    templateUrl:'templates/dislipemia/version_pruebas.html',
    controller: 'version_pruebas'
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

   .state('modalesquema',{
    cache: false,
    url:'/modalesquema',
    templateUrl:'templates/dislipemia/modalesquema.html',
    controller: 'ModalEsquema'
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

      .state('modal_tratamiento_previo',{
    cache: false,
    url:'/modal_tratamiento_previo',
    templateUrl:'templates/dislipemia/modal_tratamiento_previo.html',
    controller: 'ModalTratamientoPrevio'
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
            .state('reduccion_trat',{
    cache: false,
    url:'/reduccion_trat',
    templateUrl:'templates/dislipemia/reduccion_trat.html',
    controller: 'ReduccionTrat'
  })

.state('reduccion_trat_vih',{
    cache: false,
    url:'/reduccion_trat_vih',
    templateUrl:'templates/dislipemia/reduccion_trat_vih.html',
    controller: 'ReduccionTratVIH'
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

.state('tratamientoinicio_EBI',{
    cache: false,
    url:'/tratamientoinicio_EBI',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI.html',
    controller: 'tratamientoinicio_EBI'
  })

.state('tratamientoinicio_EBI_EZE',{
    cache: false,
    url:'/tratamientoinicio_EBI_EZE',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI_EZE.html',
    controller: 'tratamientoinicio_EBI_EZE'
  })

.state('tratamientoinicio_EBI_EZE_ALI75',{
    cache: false,
    url:'/tratamientoinicio_EBI_EZE_ALI75',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI_EZE_ALI75.html',
    controller: 'tratamientoinicio_EBI_EZE_ALI75'
  })

.state('tratamientoinicio_EBI_EZE_ALI75_RES',{
    cache: false,
    url:'/tratamientoinicio_EBI_EZE_ALI75_RES',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI_EZE_ALI75_RES.html',
    controller: 'tratamientoinicio_EBI_EZE_ALI75_RES'
  })

.state('tratamientoinicio_EMI_EZE_ALI75_RES',{
    cache: false,
    url:'/tratamientoinicio_EMI_EZE_ALI75_RES',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI_EZE_ALI75_RES.html',
    controller: 'tratamientoinicio_EMI_EZE_ALI75_RES'
  })

.state('tratamientoinicio_EAI_EZE_ALI75_RES',{
    cache: false,
    url:'/tratamientoinicio_EAI_EZE_ALI75_RES',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI_EZE_ALI75_RES.html',
    controller: 'tratamientoinicio_EAI_EZE_ALI75_RES'
  })

.state('tratamientoinicio_EBI_EZE_FIB',{
    cache: false,
    url:'/tratamientoinicio_EBI_EZE_FIB',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI_EZE_FIB.html',
    controller: 'tratamientoinicio_EBI_EZE_FIB'
  })

.state('tratamientoinicio_EMI_EZE_FIB',{
    cache: false,
    url:'/tratamientoinicio_EMI_EZE_FIB',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI_EZE_FIB.html',
    controller: 'tratamientoinicio_EMI_EZE_FIB'
  })

.state('tratamientoinicio_EAI_EZE_FIB',{
    cache: false,
    url:'/tratamientoinicio_EAI_EZE_FIB',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI_EZE_FIB.html',
    controller: 'tratamientoinicio_EAI_EZE_FIB'
  })

.state('tratamientoinicio_EAI_EZE_ALI75',{
    cache: false,
    url:'/tratamientoinicio_EAI_EZE_ALI75',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI_EZE_ALI75.html',
    controller: 'tratamientoinicio_EAI_EZE_ALI75'
  })

.state('tratamientoinicio_EZE_ALI75',{
    cache: false,
    url:'/tratamientoinicio_EZE_ALI75',
    templateUrl:'templates/dislipemia/tratamientoinicio_EZE_ALI75.html',
    controller: 'tratamientoinicio_EZE_ALI75'
  })

.state('tratamientoinicio_EZE_ALI_EVO',{
    cache: false,
    url:'/tratamientoinicio_EZE_ALI_EVO',
    templateUrl:'templates/dislipemia/tratamientoinicio_EZE_ALI_EVO.html',
    controller: 'tratamientoinicio_EZE_ALI_EVO'
  })

.state('tratamientoinicio_EBI_EZE_ALI_EVO',{
    cache: false,
    url:'/tratamientoinicio_EBI_EZE_ALI_EVO',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI_EZE_ALI_EVO.html',
    controller: 'tratamientoinicio_EBI_EZE_ALI_EVO'
  })

.state('tratamientoinicio_EBI_EZE_ALI_EVO_RES',{
    cache: false,
    url:'/tratamientoinicio_EBI_EZE_ALI_EVO_RES',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI_EZE_ALI_EVO_RES.html',
    controller: 'tratamientoinicio_EBI_EZE_ALI_EVO_RES'
  })
.state('tratamientoinicio_EMI_EZE_ALI_EVO_RES',{
    cache: false,
    url:'/tratamientoinicio_EMI_EZE_ALI_EVO_RES',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI_EZE_ALI_EVO_RES.html',
    controller: 'tratamientoinicio_EMI_EZE_ALI_EVO_RES'
  })
.state('tratamientoinicio_EAI_EZE_ALI_EVO_RES',{
    cache: false,
    url:'/tratamientoinicio_EAI_EZE_ALI_EVO_RES',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI_EZE_ALI_EVO_RES.html',
    controller: 'tratamientoinicio_EAI_EZE_ALI_EVO_RES'
  })

.state('tratamientoinicio_EMI_EZE_ALI_EVO',{
    cache: false,
    url:'/tratamientoinicio_EMI_EZE_ALI_EVO',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI_EZE_ALI_EVO.html',
    controller: 'tratamientoinicio_EMI_EZE_ALI_EVO'
  })

.state('tratamientoinicio_EBI_EZE_RES',{
    cache: false,
    url:'/tratamientoinicio_EBI_EZE_RES',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI_EZE_RES.html',
    controller: 'tratamientoinicio_EBI_EZE_RES'
  })

.state('tratamientoinicio_EMI_EZE_RES',{
    cache: false,
    url:'/tratamientoinicio_EMI_EZE_RES',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI_EZE_RES.html',
    controller: 'tratamientoinicio_EMI_EZE_RES'
  })

.state('tratamientoinicio_EAI_EZE_RES',{
    cache: false,
    url:'/tratamientoinicio_EAI_EZE_RES',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI_EZE_RES.html',
    controller: 'tratamientoinicio_EAI_EZE_RES'
  })

.state('tratamientoinicio_EAI_EZE_ALI_EVO',{
    cache: false,
    url:'/tratamientoinicio_EAI_EZE_ALI_EVO',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI_EZE_ALI_EVO.html',
    controller: 'tratamientoinicio_EAI_EZE_ALI_EVO'
  })

.state('tratamientoinicio_EBI_EZE_ALI_EVO_FIB',{
    cache: false,
    url:'/tratamientoinicio_EBI_EZE_ALI_EVO_FIB',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI_EZE_ALI_EVO_FIB.html',
    controller: 'tratamientoinicio_EBI_EZE_ALI_EVO_FIB'
  })

.state('tratamientoinicio_EMI_EZE_ALI_EVO_FIB',{
    cache: false,
    url:'/tratamientoinicio_EMI_EZE_ALI_EVO_FIB',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI_EZE_ALI_EVO_FIB.html',
    controller: 'tratamientoinicio_EMI_EZE_ALI_EVO_FIB'
  })
.state('tratamientoinicio_EAI_EZE_ALI_EVO_FIB',{
    cache: false,
    url:'/tratamientoinicio_EAI_EZE_ALI_EVO_FIB',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI_EZE_ALI_EVO_FIB.html',
    controller: 'tratamientoinicio_EAI_EZE_ALI_EVO_FIB'
  })


.state('tratamientoinicio_EBI_ALI_EVO',{
    cache: false,
    url:'/tratamientoinicio_EBI_ALI_EVO',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI_ALI_EVO.html',
    controller: 'tratamientoinicio_EBI_ALI_EVO'
  })
.state('tratamientoinicio_EMI_ALI_EVO',{
    cache: false,
    url:'/tratamientoinicio_EAI_EZE_ALI_EVO',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI_ALI_EVO.html',
    controller: 'tratamientoinicio_EMI_ALI_EVO'
  })
.state('tratamientoinicio_EAI_ALI_EVO',{
    cache: false,
    url:'/tratamientoinicio_EAI_ALI_EVO',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI_ALI_EVO.html',
    controller: 'tratamientoinicio_EAI_ALI_EVO'
  })

.state('tratamientoinicio_EMI_EZE_ALI75',{
    cache: false,
    url:'/tratamientoinicio_EMI_EZE_ALI75',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI_EZE_ALI75.html',
    controller: 'tratamientoinicio_EMI_EZE_ALI75'
  })

.state('tratamientoinicio_EBI_EZE_ALI75_FIB',{
    cache: false,
    url:'/tratamientoinicio_EBI_EZE_ALI75_FIB',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI_EZE_ALI75_FIB.html',
    controller: 'tratamientoinicio_EBI_EZE_ALI75_FIB'
  })
.state('tratamientoinicio_EMI_EZE_ALI75_FIB',{
    cache: false,
    url:'/tratamientoinicio_EMI_EZE_ALI75_FIB',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI_EZE_ALI75_FIB.html',
    controller: 'tratamientoinicio_EMI_EZE_ALI75_FIB'
  })
.state('tratamientoinicio_EAI_EZE_ALI75_FIB',{
    cache: false,
    url:'/tratamientoinicio_EAI_EZE_ALI75_FIB',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI_EZE_ALI75_FIB.html',
    controller: 'tratamientoinicio_EAI_EZE_ALI75_FIB'
  })

.state('tratamientoinicio_EBI_ALI75',{
    cache: false,
    url:'/tratamientoinicio_EBI_ALI75',
    templateUrl:'templates/dislipemia/tratamientoinicio_EBI_ALI75.html',
    controller: 'tratamientoinicio_EBI_ALI75'
  })
.state('tratamientoinicio_EMI_ALI75',{
    cache: false,
    url:'/tratamientoinicio_EMI_ALI75',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI_ALI75.html',
    controller: 'tratamientoinicio_EMI_ALI75'
  })
.state('tratamientoinicio_EAI_ALI75',{
    cache: false,
    url:'/tratamientoinicio_EAI_ALI75',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI_ALI75.html',
    controller: 'tratamientoinicio_EAI_ALI75'
  })

.state('tratamientoinicio_EMI_EZE',{
    cache: false,
    url:'/tratamientoinicio_EMI_EZE',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI_EZE.html',
    controller: 'tratamientoinicio_EMI_EZE'
  })

.state('tratamientoinicio_EAI_EZE',{
    cache: false,
    url:'/tratamientoinicio_EAI_EZE',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI_EZE.html',
    controller: 'tratamientoinicio_EAI_EZE'
  })

.state('tratamientoinicio_EMI',{
    cache: false,
    url:'/tratamientoinicio_EMI',
    templateUrl:'templates/dislipemia/tratamientoinicio_EMI.html',
    controller: 'tratamientoinicio_EMI'
  })

.state('tratamientoinicio_EAI',{
    cache: false,
    url:'/tratamientoinicio_EAI',
    templateUrl:'templates/dislipemia/tratamientoinicio_EAI.html',
    controller: 'tratamientoinicio_EAI'
  })

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

       .state('tratamientoinicio2vih',{
    cache: false,
    url:'/tratamientoinicio2vih',
    templateUrl:'templates/dislipemia/tratamientoinicio2vih.html',
    controller: 'TratamientoInicio2_vih'
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
            .state('estatinas_dir',{
    cache: false,
    url:'/estatinas_dir',
    templateUrl:'templates/dislipemia/estatinas_dir.html',
    controller: 'EstatinasDir'
  })

       .state('estatinas_vih',{
    cache: false,
    url:'/estatinas_vih',
    templateUrl:'templates/dislipemia/estatinas_vih.html',
    controller: 'EstatinasVIH'
  })
       .state('estatinas_vih_dir',{
    cache: false,
    url:'/estatinas_vih_dir',
    templateUrl:'templates/dislipemia/estatinas_vih_dir.html',
    controller: 'EstatinasVIHDir'
  })

       .state('fibratos',{
    cache: false,
    url:'/fibratos',
    templateUrl:'templates/dislipemia/fibratos.html',
    controller: 'Fibratos'
  })
           .state('fibratos_dir',{
    cache: false,
    url:'/fibratos_dir',
    templateUrl:'templates/dislipemia/fibratos_dir.html',
    controller: 'FibratosDir'
  })

              .state('fibratos_vih',{
    cache: false,
    url:'/fibratos_vih',
    templateUrl:'templates/dislipemia/fibratos_vih.html',
    controller: 'FibratosVIH'
  })
               .state('fibratos_vih_dir',{
    cache: false,
    url:'/fibratos_vih_dir',
    templateUrl:'templates/dislipemia/fibratos_vih_dir.html',
    controller: 'FibratosVIHDir'
  })

       .state('ezetimibe_vih',{
    cache: false,
    url:'/ezetimibe_vih',
    templateUrl:'templates/dislipemia/ezetimibe_vih.html',
    controller: 'EzetimibeVIH'
  })
             .state('ezetimibe_vih_dir',{
    cache: false,
    url:'/ezetimibe_vih_dir',
    templateUrl:'templates/dislipemia/ezetimibe_vih_dir.html',
    controller: 'EzetimibeVIHDir'
  })

             .state('menu_interacciones',{
    cache: false,
    url:'/menu_interacciones',
    templateUrl:'templates/dislipemia/menu_interacciones.html',
    controller: 'MenuInteracciones'
  })

             .state('menu_interacciones_vih',{
    cache: false,
    url:'/menu_interacciones_vih',
    templateUrl:'templates/dislipemia/menu_interacciones_vih.html',
    controller: 'MenuInteraccionesVIH'
  })

.state('menu_interacciones_vih_pre',{
    cache: false,
    url:'/menu_interacciones_vih_pre',
    templateUrl:'templates/dislipemia/menu_interacciones_vih_pre.html',
    controller: 'MenuInteraccionesVIHpre'
  })

             .state('menu_interacciones2',{
    cache: false,
    url:'/menu_interacciones2',
    templateUrl:'templates/dislipemia/menu_interacciones2.html',
    controller: 'MenuInteracciones2'
  })

.state('premenu_interacciones2',{
    cache: false,
    url:'/premenu_interacciones2',
    templateUrl:'templates/dislipemia/premenu_interacciones2.html',
    controller: 'PreMenuInteracciones2'
  })


.state('grupos_sin_tratamiento',{
    cache: false,
    url:'/grupos_sin_tratamiento',
    templateUrl:'templates/dislipemia/grupos_sin_tratamiento.html',
    controller: 'grupos_sin_tratamiento'
  })

///////////////////////LIMITACIONES/////////////////////////

.state('modal_glucemias_elevadas',{
    cache: false,
    url:'/modal_glucemias_elevadas',
    templateUrl:'templates/limitaciones/modal_glucemias_elevadas.html',
    controller: 'ModalGlucemiasElevadas'
  })

.state('modal_mialgias',{
    cache: false,
    url:'/modal_mialgias',
    templateUrl:'templates/limitaciones/modal_mialgias.html',
    controller: 'ModalMialgias'
  })

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
                .state('modal_info_tratamiento_alto',{
    cache: false,
    url:'/modal_info_tratamiento_alto',
    templateUrl:'templates/hipercolesterolemia/modal_info_tratamiento_alto.html',
    controller: 'ModalInfoTratamientoAlto'
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

    .state('modal_diagnostico_combinado2',{
    cache: false,
    url:'/modal_diagnostico_combinado2',
    templateUrl:'templates/hipercolesterolemia/modal_diagnostico_combinado2.html',
    controller: 'ModalDiagnosticoCombinado2'
  })  

      .state('form_tratamiento',{
    cache: false,
    url:'/form_tratamiento',
    templateUrl:'templates/hipercolesterolemia/form_tratamiento.html',
    controller: 'FormTratamiento'
  })  

      .state('form_tratamiento2',{
    cache: false,
    url:'/form_tratamiento2',
    templateUrl:'templates/hipercolesterolemia/form_tratamiento2.html',
    controller: 'FormTratamiento2'
  })             

  // .state('vista2',{
  //   url:'/vista2',
  //   template:'<div class="padding"><h2>Vista 2</h2><button class="button button-positive" ui-sref="vista1">A vista1</button></div>'
  // })

  $urlRouterProvider.otherwise('/login');

})

.controller('HomeCtrl',function($scope,$rootScope){


 $rootScope.estatina_grupos_emi=null;
$rootScope.estatina_grupos_eai=null;
 $rootScope.estatina_grupos_emi=null;
  $rootScope.estatina_grupos_emi_rojo=null;
$rootScope.estatina_grupos_eai_rojo=null;
 $rootScope.estatina_grupos_emi_rojo=null;

ecvcheck2=false;
tiene_vih=false;

consulta_scoreindex=null;
renalindex=null;
$rootScope.ldlactual_scope=null;
quitar_feno_inter=false;
quitar_feno_inter_rojo=false;

 quitar_gem_inter=false;
 quitar_gem_inter_rojo=false;

 totalimcRounded="0";
 sexoimc="1";
 resultadofiltradoredond="100";
 cardio="0";
 ldlactual=0;
 renalindex="inicio";
 scoreindex="9";
 scoreindex_vih="9";
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
 quitar_ator_inter_rojo=false;

 quitar_fluv_inter=false;
 quitar_fluv_inter_rojo=false;

 quitar_lov_inter=false;
 quitar_lov_inter_rojo=false;

 quitar_pito_inter=false;
 quitar_pito_inter_rojo=false;

 quitar_pra_inter=false;
 quitar_pra_inter_rojo=false;

 quitar_rosu_inter=false;
 quitar_rosu_inter_rojo=false;

 quitar_sim_inter=false;
 quitar_sim_inter_rojo=false;

 quitar_feno_inter=false;

 quitar_gem_inter=false;
 quitar_gem_inter_rojo=false;

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
 check5b_score = null;
 check6_score = null;
 total_criterios_het = null;

 historia=[];
 penul=null;
 previo2=null;
 longhistoria=null;
 pen=null;
 rama_vih=false;
 consulta_scoreindex=null;

 unidad_seleccionada=null;

 check_ecvdoc=false;

 tratamiento_previo=false;
 pantallaactual=null;

 previo_ator=null;
 previo_rosu=null;
 previo_pita=null;
 previo_sim=null;
 previo_pra=null;
 previo_fluv=null;
 previo_lov=null;

 sin_estatinas=false;
 sin_ezetimive=false;
 sin_fibratos=false;
 sin_fibratos=false;
 sin_ipcsk9=false;
 sin_resina=false;
 password2=null;
 mitad=false;
 tipo_riesgo=null;
 tratamiento=false;

 quitar_vih=false;
 proviene_contraindicaciones=false;
 proviene_interacciones=false;

 previo_ezet=false;
 previo_aliro=false;
 previo_evolo=false;
 previo_colestir=false;
 previo_colestip=false;
 previo_fenof=false;
 previo_gemf=false;

 marcado_frc=false;


 

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




.controller('DislipFormCtrl',function($scope,$state,$ionicPopup,$rootScope){




$( "#ecvdoc" ).click(function() {
  $(".ocultar_score").toggle();
  // $('#selector-score').val('1');

});
 setTimeout(
  function() 
  {



// $rootScope.ldlactualscope=null;

var ldltemp = $rootScope.ldlactual_scope;
if(ldltemp!=null){
 document.getElementById("ldl-actual").value=ldltemp;
}
document.getElementById('selector-score').options.selectedIndex=consulta_scoreindex;
document.getElementById('funcion_renal').options.selectedIndex=renalindex;

if(ecvcheck2==true){
document.getElementById('ecvdoc').checked=true;
$(".ocultar_score").hide();
}
else{
  document.getElementById('ecvdoc').checked=false;
  $(".ocultar_score").show();
}
if(tiene_vih==true){
document.getElementById('VIH').checked=true;
}

  





}, 400);
$scope.govih2 = function() {
        unidad_seleccionada=document.getElementById('ldl-actual-unidades').options.selectedIndex;
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

        consulta_scoreindex=document.getElementById('selector-score').options.selectedIndex;
        if(consulta_scoreindex==0){
        scoreindex=document.getElementById('selector-score-vih').options.selectedIndex;
        }
        else{
        scoreindex=document.getElementById('selector-score').options.selectedIndex;  
        }
        // if(scoreindex==1){
        //   score_calculado=25;
        // }

        // if(scoreindex==2){
        //  score_calculado=15;
        // }

        // if(scoreindex==3){
        //   score_calculado=8;
        // }
        // if(scoreindex==4){
        //  score_calculado=3;
        // }
        // if(scoreindex==5){
        //  score_calculado=0;
        // }
        if(scoreindex==1){
          score_calculado=0;
        }

        if(scoreindex==2){
         score_calculado=3;
        }

        if(scoreindex==3){
          score_calculado=8;
        }
        if(scoreindex==4){
         score_calculado=15;
        }
        if(scoreindex==5){
         score_calculado=25;
        }
        ldltransactual=document.getElementById("ldl-actual").value;
  $state.go('modalvih');
}

  
    var element = document.getElementById('funcion_renal');
    element.value = 2;

  if(unidad_seleccionada=="1"){
    $("select#ldl-actual-unidades").val("0.02586");
  }


  // resultadofiltradoredond=90;
    document.getElementById("ldl-actual").value=ldltransactual;
    if (check1_form==true) {
          document.getElementById('ecvdoc').checked=true;
    
        }


    
tiene_vih=document.getElementById('VIH');
        

         
   
    $scope.irfactorriesgo = function(){

      unidad_seleccionada=document.getElementById('ldl-actual-unidades').options.selectedIndex;
        
        if($("#ecvdoc").is(':checked')) {  
            check1_form=true;
        }
        else{
          check1_form=false;
        }

        if($("#VIH").is(':checked')) {  
            tiene_vih=true;
            quitar_vih=false;
        }
        else{
          tiene_vih=false;
          quitar_vih=true;
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
        consulta_scoreindex=document.getElementById('selector-score').options.selectedIndex;
        if(consulta_scoreindex==0){
        scoreindex=document.getElementById('selector-score-vih').options.selectedIndex;
        }
        else{
        scoreindex=document.getElementById('selector-score').options.selectedIndex;  
        }
        // if(scoreindex==1){
        //   score_calculado=25;
        // }

        // if(scoreindex==2){
        //  score_calculado=15;
        // }

        // if(scoreindex==3){
        //   score_calculado=8;
        // }
        // if(scoreindex==4){
        //  score_calculado=3;
        // }
        // if(scoreindex==5){
        //  score_calculado=0;
        // }

        if(scoreindex==1){
          score_calculado=0;
        }

        if(scoreindex==2){
         score_calculado=3;
        }

        if(scoreindex==3){
          score_calculado=8;
        }
        if(scoreindex==4){
         score_calculado=15;
        }
        if(scoreindex==5){
         score_calculado=25;
        }
       
        ldltransactual=document.getElementById("ldl-actual").value;
      $state.go('factorriesgocardio');
        
    }

    $scope.irfuncionrenal = function(){

                 if($("#VIH").is(':checked')) {  
            quitar_vih=false;
        }
        else{
          quitar_vih=true;
        }

      unidad_seleccionada=document.getElementById('ldl-actual-unidades').options.selectedIndex;
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

        consulta_scoreindex=document.getElementById('selector-score').options.selectedIndex;
        if(consulta_scoreindex==0){
        scoreindex=document.getElementById('selector-score-vih').options.selectedIndex;
        }
        else{
        scoreindex=document.getElementById('selector-score').options.selectedIndex;  
        }
        // if(scoreindex==1){
        //   score_calculado=25;
        // }

        // if(scoreindex==2){
        //  score_calculado=15;
        // }

        // if(scoreindex==3){
        //   score_calculado=8;
        // }
        // if(scoreindex==4){
        //  score_calculado=3;
        // }
        // if(scoreindex==5){
        //  score_calculado=0;
        // }
        if(scoreindex==1){
          score_calculado=0;
        }

        if(scoreindex==2){
         score_calculado=3;
        }

        if(scoreindex==3){
          score_calculado=8;
        }
        if(scoreindex==4){
         score_calculado=15;
        }
        if(scoreindex==5){
         score_calculado=25;
        }
        ldltransactual=document.getElementById("ldl-actual").value;
        $state.go('funcionrenal');
    }

    $scope.ircalcscore = function(){
           if($("#VIH").is(':checked')) {  
            quitar_vih=false;
        }
        else{
          quitar_vih=true;
        }

      unidad_seleccionada=document.getElementById('ldl-actual-unidades').options.selectedIndex;
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

        consulta_scoreindex=document.getElementById('selector-score').options.selectedIndex;
        if(consulta_scoreindex==0){
        scoreindex=document.getElementById('selector-score-vih').options.selectedIndex;
        }
        else{
        scoreindex=document.getElementById('selector-score').options.selectedIndex;  
        }
        // if(scoreindex==1){
        //   score_calculado=25;
        // }

        // if(scoreindex==2){
        //  score_calculado=15;
        // }

        // if(scoreindex==3){
        //   score_calculado=8;
        // }
        // if(scoreindex==4){
        //  score_calculado=3;
        // }
        // if(scoreindex==5){
        //  score_calculado=0;
        // }
        if(scoreindex==1){
          score_calculado=0;
        }

        if(scoreindex==2){
         score_calculado=3;
        }

        if(scoreindex==3){
          score_calculado=8;
        }
        if(scoreindex==4){
         score_calculado=15;
        }
        if(scoreindex==5){
         score_calculado=25;
        }
        ldltransactual=document.getElementById("ldl-actual").value;
        $state.go('calcscore');
    }


    $scope.ir_info_cardio = function(){
      unidad_seleccionada=document.getElementById('ldl-actual-unidades').options.selectedIndex;
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

        consulta_scoreindex=document.getElementById('selector-score').options.selectedIndex;
        if(consulta_scoreindex==0){
        scoreindex=document.getElementById('selector-score-vih').options.selectedIndex;
        }
        else{
        scoreindex=document.getElementById('selector-score').options.selectedIndex;  
        }
        // if(scoreindex==1){
        //   score_calculado=25;
        // }

        // if(scoreindex==2){
        //  score_calculado=15;
        // }

        // if(scoreindex==3){
        //   score_calculado=8;
        // }
        // if(scoreindex==4){
        //  score_calculado=3;
        // }
        // if(scoreindex==5){
        //  score_calculado=0;
        // }
        if(scoreindex==1){
          score_calculado=0;
        }

        if(scoreindex==2){
         score_calculado=3;
        }

        if(scoreindex==3){
          score_calculado=8;
        }
        if(scoreindex==4){
         score_calculado=15;
        }
        if(scoreindex==5){
         score_calculado=25;
        }
        ldltransactual=document.getElementById("ldl-actual").value;
        $state.go('modalcardiodoc');
    }



    $scope.comprofinal = function(){

    $rootScope.ldlactual_scope = document.getElementById("ldl-actual").value;


    unidad_seleccionada=document.getElementById('ldl-actual-unidades').options.selectedIndex;

    
    ecvcheck = document.getElementById("ecvdoc");
    if($("#ecvdoc").is(':checked')){
      ecvcheck2=true;
    }
    else{
      ecvcheck2=false;
    }
    
    renalindex=document.getElementById('funcion_renal').options.selectedIndex;




    consulta_scoreindex=document.getElementById('selector-score').options.selectedIndex;
        if(consulta_scoreindex==0){
        scoreindex=document.getElementById('selector-score-vih').options.selectedIndex;
        }
        else{
        scoreindex=document.getElementById('selector-score').options.selectedIndex;  
        }
    tiene_vih=document.getElementById('VIH');
    if(unidad_seleccionada=="1"){
      ldlactual = document.getElementById("ldl-actual").value;
      console.log(ldlactual);
      ldlactual=parseInt(ldlactual*38.669);
      console.log(ldlactual);

      
    }
    if(unidad_seleccionada=="0"){
    ldlactual = document.getElementById("ldl-actual").value;
    }


// if(scoreindex==0){
//     var alertPopup = $ionicPopup.alert({
//      title: '¡Atención!',
//      template: 'No ha seleccionado ningún valor de Score'
//    });

//    alertPopup.then(function(res) {
     
//    });
// }
    
// else if(ldlactual>0){
if(ldlactual>0){

if((marcado_frc==false)&&(scoreindex==0)&&!(ecvcheck.checked)&&(renalindex==0)){
        var alertPopup = $ionicPopup.alert({
     title: '¡Atención!',
     template: 'Por favor, seleccione las variables clínicas de su paciente'
   });

   alertPopup.then(function(res) {
     
   });
    }
else{

    console.log(ldlactual);
    if (tiene_vih.checked){
      quitar_vih=false;
      rama_vih=true;
      if(cardio=="2"||ecvcheck.checked||scoreindex=="1"){

         objetivo_vih=70;
         ldlobjetivo_vih=objetivo_vih;
      if (ldlactual>70) {
        // $state.go('riesgoalto_vih');
        tipo_riesgo="riesgoalto_vih";
        
      }
      else if (ldlactual<71){
        // $state.go('riesgobajo_vih');
        tipo_riesgo="riesgobajo_vih";
      }
      // alert("RiesgoMuyAlto");
      // alert("Riesgo alto");
  
     

    }
    if(cardio=="1"||scoreindex=="2"){
      objetivo_vih=100;
      ldlobjetivo_vih=objetivo_vih;
      if (ldlactual>100) {
        // $state.go('riesgomoderadoalto_vih');
        tipo_riesgo="riesgomoderadoalto_vih";
       
        
      }
      else if (ldlactual<101){
        // $state.go('riesgobajo_vih');
        tipo_riesgo="riesgobajo_vih";
      }
      // alert("RiesgoAlto");
      // alert("Riesgo moderado-alto");
    }
    if(cardio=="1"||scoreindex=="3"){
      objetivo_vih=130;
      ldlobjetivo_vih=objetivo_vih;
      if (ldlactual>130) {
        // $state.go('riesgomoderadobajo_vih');
        tipo_riesgo="riesgomoderadobajo_vih";
        
      }
      else if (ldlactual<131){
        // $state.go('riesgobajo_vih');
        tipo_riesgo="riesgobajo_vih";
      }
      // alert("RiesgoModerado");
      // alert("Riesgo moderado-bajo");
      
    }
    if(cardio=="1"){
      // alert("RiesgoBajo");
      // alert("Riesgo bajo");
      // $state.go('riesgobajo_vih');
      tipo_riesgo="riesgobajo_vih";
      objetivo_vih=130;
      ldlobjetivo_vih=objetivo_vih;
    }



    $state.go('tratamientoprevio_vih');

    }








    else{



    quitar_vih=true;
    
    if(cardio=="2"||renalindex=="1"||scoreindex=="3"){
      // alert("RiesgoAlto");
      ldlobjetivo=100;
      // $state.go('riesgoalto');
      tipo_riesgo="riesgoalto";
      // if (ldlactual>100) {
      //   $state.go('riesgoalto');
        
      // }
      // else if (ldlactual<101){
      //   $state.go('riesgobajo');
      // }

      
    }
    if(cardio=="1"||ecvcheck.checked||renalindex=="2"||scoreindex=="4"){
      ldlobjetivo=70;
      // if (ldlactual>70) {
        // $state.go('riesgomuyalto');
        tipo_riesgo="riesgomuyalto";
        
      // }
      // else if (ldlactual<71){
      //   $state.go('riesgobajo');
      // }
      // alert("RiesgoMuyAlto");
      

    }
    if(scoreindex=="2"){
      ldlobjetivo=115;
      // if (ldlactual>115) {
        // $state.go('riesgomedio');
        tipo_riesgo="riesgomedio";
        
      // }
      // else if (ldlactual<116){
      //   $state.go('riesgobajo');
      // }
      // alert("RiesgoModerado");
      
    }
    if(scoreindex=="1"){
      // alert("RiesgoBajo");
      ldlobjetivo=115;
      // $state.go('riesgobajo');
      tipo_riesgo="riesgobajo";
    }

        

          if(renalindex==2){
      ldlobjetivo=70;

      tipo_riesgo="riesgomuyalto";
      
  
  }

  if(check3_imc==true){
    ldlobjetivo=100;
      // $state.go('riesgoalto');
      tipo_riesgo="riesgoalto";
  }

  if (check7_imc==true) {
   ldlobjetivo=100;
      // $state.go('riesgoalto');
      tipo_riesgo="riesgoalto";
    
    }


    if(check4_imc==true){
         ldlobjetivo=100;
      // $state.go('riesgoalto');
      tipo_riesgo="riesgoalto";
    }


    if((check4_imc==true&&check5_imc==true)||(check4_imc==true&&check6_imc==true)){
         ldlobjetivo=70;
      // $state.go('riesgoalto');
      tipo_riesgo="riesgomuyalto";
    }

    if(renalindex==1){
               ldlobjetivo=100;
      // $state.go('riesgoalto');
      tipo_riesgo="riesgoalto";
    }
    if(ecvcheck.checked){
      ldlobjetivo=70;
      // $state.go('riesgomuyalto');
      tipo_riesgo="riesgomuyalto";
        
      }



      $state.go('tratamientoprevio');

  }

}

}



else if(ldlactual==0){
  var alertPopup = $ionicPopup.alert({
     title: '¡Atención!',
     template: 'No ha completado el dato de LDL actual'
   });

   alertPopup.then(function(res) {
     
   });
}




  }



  

var unidad=document.getElementById("ldl-actual-unidades").value;

  $( "#ldl-actual-unidades" ).change(function() {
  var factor = parseFloat(document.getElementById("ldl-actual-unidades").value);
  
  var ldl = parseFloat(document.getElementById("ldl-actual").value);
  var ldlconv=ldl*factor;
  document.getElementById("ldl-actual").value=ldlconv.toFixed(5);
  
});
$("#selector-score-vih").hide();

if(vih=="yes"){
  $("#selector-score").hide();
  $("#selector-score-vih").show();
  $(".titulo_score").text("Score paciente VIH");

}




  $scope.govih = function() {
if( $('#selector-score-vih').is(":visible") ){
     
           $(".titulo_score").text("Score");
        }
        else{
          $(".titulo_score").text("Score paciente VIH");
        }
    
    $("#selector-score").toggle();
    $("#selector-score-vih").toggle();
        
    unidad_seleccionada=document.getElementById('ldl-actual-unidades').options.selectedIndex;

     if($("#ecvdoc").is(':checked')) {  
            check1_form=true;
        }


      check_ecvdoc = document.getElementById("ecvdoc");
        if (check_ecvdoc.checked) {
             guardar_ecvdoc=true;
        }


        
        check = document.getElementById("VIH");
        // if (check.checked) {
        //      $state.go('modalvih');
        // }
        if(vih=="yes"){
          vih="no";
        }
        vih="yes";
        ldltransactual=document.getElementById("ldl-actual").value;
        
        renalindex=document.getElementById('funcion_renal').options.selectedIndex;
        consulta_scoreindex=document.getElementById('selector-score').options.selectedIndex;
        if(consulta_scoreindex==0){
        scoreindex=document.getElementById('selector-score-vih').options.selectedIndex;
        }
        else{
        scoreindex=document.getElementById('selector-score').options.selectedIndex;  
        }

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
    $("select#funcion_renal").val("1");
  }
  else{
    $("select#funcion_renal").val("2");
  }



   if (score_calculado>9) {
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
///////////////////////////////////////////////////
 

   if (score_calculado<10) {
    $("select#selector-score-vih").val("10");
  }
  if (score_calculado>9&&score_calculado<20) {
    $("select#selector-score-vih").val("10-20");
  }
    if (score_calculado>20) {
    $("select#selector-score-vih").val("20");
  }

  

  
if(quitar_vih==true){
 $("#VIH").prop("checked", false);
 $(".titulo_score").text("Score");
 $("#selector-score").show();
 $("#selector-score-vih").hide();
}


// // document.getElementById("ldl-actual").value=ldlactual;
// document.getElementById('selector-score').options.selectedIndex=consulta_scoreindex;
// document.getElementById('funcion_renal').options.selectedIndex=renalindex;

// if(check1_form==true){
// document.getElementById('ecvdoc').checked=true;
// }
// if(tiene_vih==true){
// document.getElementById('VIH').checked=true;
// }





})



.controller('FactorRiesgoCardio',function($scope,$state){




if(check8_imc==false){
  document.getElementById('sobrepeso').checked=false;
}
if(check4_imc==false){
  document.getElementById('diabetes').checked=false;
}
if(check2_imc==false){
  document.getElementById('hipertension').checked=false;
}
if(check9_imc==false){
  
}
if(check5_imc==false){
  document.getElementById('lod').checked=false;
}
if(check6_imc==false){
  document.getElementById('frcv').checked=false;
}
if(check3_imc==false){
  document.getElementById('htasevera').checked=false;
}

  
  if(sexoimc=="1"){
    if (totalimcRounded>25) {
    document.getElementById('sobrepeso').checked=true;
    
    }
     else{

      document.getElementById('sobrepeso').checked=false;
    }

    
  }
  else{
    if (totalimcRounded>24) {
    document.getElementById('sobrepeso').checked=true;
    
    }
    
  }

if (check9_imc==true) {

 
    
    setTimeout(
  function() 
  {
document.getElementById('sobrepeso').checked=true;

  }, 100);
     
    
    }
else{
  document.getElementById('sobrepeso').checked=false;
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

    if($(".marcado").is(':checked')) {  
            marcado_frc=true;
        }
    else{
           marcado_frc=false;
    }



     if($("#tabaquismo").is(':checked')) {  
            check1_imc=true;
        }
      else{
        check1_imc=false;
      }
        if($("#hipertension").is(':checked')) {  
            check2_imc=true;

        }
        else{
          check2_imc=false;
        }
        if($("#htasevera").is(':checked')) {  
            check3_imc=true;
        }
        else{
          check3_imc=false;
        }
        if($("#diabetes").is(':checked')) {  
            check4_imc=true;
        }
        else{
          check4_imc=false;
        }
        if($("#lod").is(':checked')) {  
            check5_imc=true;
        }
        else{
          check5_imc=false;
        }
        if($("#frcv").is(':checked')) {  
            check6_imc=true;
        }
        else{
          check6_imc=false;
        }
                if($("#hiperfam").is(':checked')) {  
            check7_imc=true;
        }
        else{
          check7_imc=false;
        }

        if($("#dislipemia").is(':checked')) {  
          check8_imc=true;
        }
        else{
          check8_imc=false;
        }
                if($("#sobrepeso").is(':checked')) {  
                  check9_imc=true;
            
        }
        else{
          check9_imc=false;
        }
  
        
        
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

       

        $state.go('formulariodislipemia');

       
    }


if(totalimcRounded<25){
document.getElementById('sobrepeso').checked=false;
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

.controller('Presentacion',function($scope,$ionicScrollDelegate){

  
jQuery('.ver_interior_presentacion').on( "click", function() { 
  $ionicScrollDelegate.scrollTop();

           jQuery('.interior_presentacion').toggle(); //muestro mediante clase
            jQuery('.interior_nota_autores').hide();
            jQuery('.interior_autores').hide();
            jQuery('.interior_creditos').hide();
            jQuery('.interior_referencias').hide();
            jQuery('.interior_abreviaturas').hide();

         });
jQuery('.ver_interior_nota_autores').on( "click", function() { 
  $ionicScrollDelegate.scrollTop();

           jQuery('.interior_presentacion').hide(); //muestro mediante clase
            jQuery('.interior_nota_autores').toggle();
            jQuery('.interior_autores').hide();
            jQuery('.interior_creditos').hide();
            jQuery('.interior_referencias').hide();
            jQuery('.interior_abreviaturas').hide();

         });
jQuery('.ver_interior_autores').on( "click", function() { 
  $ionicScrollDelegate.scrollTop();

           jQuery('.interior_presentacion').hide(); //muestro mediante clase
            jQuery('.interior_nota_autores').hide();
            jQuery('.interior_autores').toggle();
            jQuery('.interior_creditos').hide();
            jQuery('.interior_referencias').hide();
            jQuery('.interior_abreviaturas').hide();

         });
jQuery('.ver_interior_creditos').on( "click", function() { 
$ionicScrollDelegate.scrollTop();
           jQuery('.interior_presentacion').hide(); //muestro mediante clase
            jQuery('.interior_nota_autores').hide();
            jQuery('.interior_autores').hide();
            jQuery('.interior_creditos').toggle();
            jQuery('.interior_referencias').hide();
            jQuery('.interior_abreviaturas').hide();

         });
jQuery('.ver_interior_referencias').on( "click", function() { 
$ionicScrollDelegate.scrollTop();
           jQuery('.interior_presentacion').hide(); //muestro mediante clase
            jQuery('.interior_nota_autores').hide();
            jQuery('.interior_autores').hide();
            jQuery('.interior_creditos').hide();
            jQuery('.interior_referencias').toggle();
            jQuery('.interior_abreviaturas').hide();

         });
jQuery('.ver_interior_abreviaturas').on( "click", function() { 
$ionicScrollDelegate.scrollTop();
           jQuery('.interior_presentacion').hide(); //muestro mediante clase
            jQuery('.interior_nota_autores').hide();
            jQuery('.interior_autores').hide();
            jQuery('.interior_creditos').hide();
            jQuery('.interior_referencias').hide();
            jQuery('.interior_abreviaturas').toggle();

         });
  

})

.controller('FuncionRenal',function($scope){

document.getElementById('creatinina').options.selectedIndex=creatinina_mem;
document.getElementById('edad-filtrado').options.selectedIndex=edad_mem;

if(sex==true){
  document.getElementById('sexo-filtrado').checked=true;
}
else{
  document.getElementById('sexo-filtrado').checked=false;
}
if(raz==true){
  document.getElementById('raza-fintrado').checked=true;
}
else{
  document.getElementById('raza-fintrado').checked=false;
}

$scope.CKD1 = function() {

creatinina_mem=document.getElementById('creatinina').options.selectedIndex;
edad_mem=document.getElementById('edad-filtrado').options.selectedIndex;

if($("#sexo-filtrado").is(':checked')) {  
            sex=true;

        }
else{
  sex=false;
}
if($("#raza-fintrado").is(':checked')) {  
            raz=true;
        }
else{
  raz=false;
}




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


 if (resultadofiltradoredond>59) {
    $("select#funcion_renal").val("0");
    renalindex=0;
  }
  else if(resultadofiltradoredond<30){
    $("select#funcion_renal").val("2");
    renalindex=2;
  }
  else if(resultadofiltradoredond<60&&resultadofiltradoredond>29){
    $("select#funcion_renal").val("1");
  }





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
    check2_score=document.getElementById("sexoscore").value;
    check3_score=document.getElementById("tabaquismoscore").value;
    check1_score=document.getElementById("edadscore").value;
    check4_score=document.getElementById("PAS").value;
    check5_score=document.getElementById("colesterolscore2").value;
    check5b_score=document.getElementById("colesterolscore1").value;

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

if (score_calculado>9) {
    $("select#selector-score").val("10-20");
    consulta_scoreindex=4;
  }

    if (score_calculado>4&&score_calculado<10) {
    $("select#selector-score").val("5-9");
     consulta_scoreindex=3;
  }
  if (score_calculado>1&&score_calculado<5) {
    $("select#selector-score").val("1-4");
     consulta_scoreindex=2;
  }
  if (score_calculado<2) {
    $("select#selector-score").val("1");
     consulta_scoreindex=1;
  }
///////////////////////////////////////////////////
 

  //  if (score_calculado<10) {
  //   $("select#selector-score-vih").val("10");
  //   consulta_scoreindex=1;
  // }
  // if (score_calculado>9&&score_calculado<20) {
  //   $("select#selector-score-vih").val("10-20");
  //   consulta_scoreindex=2;
  // }
  //   if (score_calculado>20) {
  //   $("select#selector-score-vih").val("20");
  //   consulta_scoreindex=3;
  // }

$state.go('formulariodislipemia');
}

  

})

.controller('PaisesAltoRiesgo',function($scope){

  

})

.controller('RiesgoBajo',function($scope,$state){

  if(unidad_seleccionada=="1"){
    $("select#unidades_totales_bajo").val("0.02586");
    document.getElementById("ldl_act_res_bajo").value=ldlactual*0.02586;
    document.getElementById("ldl_obj_res_bajo").value=ldlobjetivo*0.02586;
  }
  else{

  document.getElementById("ldl_act_res_bajo").value=ldlactual;
  document.getElementById("ldl_obj_res_bajo").value=ldlobjetivo;
}

if(ldlactual>ldlobjetivo){
  jQuery('.riesgo').toggle();
  console.log("RIESGO");
}
else{
  jQuery('.no_riesgo').toggle();
  console.log("NO RIESGO");
}

  // document.getElementById("ldl_act_res_bajo").value=ldlactual;
  // document.getElementById("ldl_obj_res_bajo").value=ldlobjetivo;
  // ldlobjetivo=115;

  $scope.reduccion = function() {
    if(ldlactual<ldlobjetivo){
      $state.go('home');
    }
    else{
      $state.go('reduccion');
    }
             
        
        
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
  if (ldlactual>70&&ldlactual<135){
    ldlobjetivo=ldlactual/2
  }
  if(unidad_seleccionada=="1"){
    $("select#unidades_totales").val("0.02586");
    document.getElementById("ldl_act_res").value=ldlactual*0.02586;
    document.getElementById("ldl_obj_res").value=ldlobjetivo*0.02586;
  }
  else{

  document.getElementById("ldl_act_res").value=ldlactual;
  document.getElementById("ldl_obj_res").value=ldlobjetivo;
}
  // ldlobjetivo=70;

     $scope.reduccion = function() {

             if(ldlactual<ldlobjetivo){
      $state.go('home');
    }
    else{
      $state.go('reduccion');
    }
        
        
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
    if (ldlactual>100&&ldlactual<200){
    ldlobjetivo=ldlactual/2
  }

if(unidad_seleccionada=="1"){
    $("select#unidades_totales_alto").val("0.02586");
    document.getElementById("ldl_act_res_alto").value=ldlactual*0.02586;
    document.getElementById("ldl_obj_res_alto").value=ldlobjetivo*0.02586;
  }
  else{

  document.getElementById("ldl_act_res_alto").value=ldlactual;
  document.getElementById("ldl_obj_res_alto").value=ldlobjetivo;
}

  // document.getElementById("ldl_act_res_alto").value=ldlactual;
  // document.getElementById("ldl_obj_res_alto").value=ldlobjetivo;
  // ldlobjetivo=100;

  $scope.reduccion = function() {

             if(ldlactual<ldlobjetivo){
      $state.go('home');
    }
    else{
      $state.go('reduccion');
    }
        
        
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

if(unidad_seleccionada=="1"){
    $("select#unidades_totales_medio").val("0.02586");
    document.getElementById("ldl_act_res_medio").value=ldlactual*0.02586;
    document.getElementById("ldl_obj_res_medio").value=ldlobjetivo*0.02586;
  }
  else{

  document.getElementById("ldl_act_res_medio").value=ldlactual;
  document.getElementById("ldl_obj_res_medio").value=ldlobjetivo;
}

  // document.getElementById("ldl_act_res_medio").value=ldlactual;
  // document.getElementById("ldl_obj_res_medio").value="115";
  // ldlobjetivo=115;

  $scope.reduccion = function() {

             if(ldlactual<ldlobjetivo){
      $state.go('home');
    }
    else{
      $state.go('reduccion');
    }
        
        
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


  if(unidad_seleccionada=="1"){
    $("select#unidades_totales").val("0.02586");
    document.getElementById("ldl_act_red").value=ldlactual*0.02586;
    document.getElementById("ldl_obj_red").value=ldlobjetivo*0.02586;
  }
  else{

  document.getElementById("ldl_act_red").value=ldlactual;
  document.getElementById("ldl_obj_red").value=ldlobjetivo;
}


// document.getElementById("ldl_act_red").value=ldlactual;
//   document.getElementById("ldl_obj_red").value=ldlobjetivo; 
if(tratamiento==true){
var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlrectificado))*100);
console.log("con tratamiento previo") 
} 
else{
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  console.log("con tratamiento previo") 
}
  document.getElementById("porcentaje_red").value=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100)+"%";
if(tratamiento==true){
  $(".adicional span").show();
}


})


.controller('Reduccion_vih',function($scope){

  if(unidad_seleccionada=="1"){
    $("select#unidades_totales").val("0.02586");
    document.getElementById("ldl_act_red_vih").value=ldlactual*0.02586;
    document.getElementById("ldl_obj_red_vih").value=objetivo_vih*0.02586;
  }
  else{

  document.getElementById("ldl_act_red_vih").value=ldlactual;
  document.getElementById("ldl_obj_red_vih").value=objetivo_vih;
}


// document.getElementById("ldl_act_red_vih").value=ldlactual;
//   document.getElementById("ldl_obj_red_vih").value=objetivo_vih;  

if(tratamiento==true){
  var porc_reducc=100-parseInt((parseFloat(objetivo_vih)/parseFloat(ldlrectificado))*100);
  $(".adicional span").show();
}
else{
  var porc_reducc=100-parseInt((parseFloat(objetivo_vih)/parseFloat(ldlactual))*100);
}
  document.getElementById("porcentaje_red_vih").value=100-parseInt((parseFloat(objetivo_vih)/parseFloat(ldlactual))*100)+"%";

// if(tratamiento==true){
//   $(".adicional span").show();
// }

})


.controller('TratamientoPrevio',function($scope,$state){

  $scope.volver = function() {
        $state.go('formulariodislipemia');
  }

    $scope.elegir_opcion = function() {

             if(tipo_riesgo=="riesgomuyalto"){
                $state.go('riesgomuyalto');
             }
             else if(tipo_riesgo=="riesgoalto"){
                $state.go('riesgoalto');
             }
             else if(tipo_riesgo=="riesgomedio"){
                $state.go('riesgomedio');
             }
             else if(tipo_riesgo=="riesgobajo"){
                $state.go('riesgobajo');
             }
        
        
    }

})

.controller('TratamientoPrevio_vih',function($scope,$state){

    $scope.elegir_opcion = function() {

             if(tipo_riesgo=="riesgoalto_vih"){
                $state.go('riesgoalto_vih');
             }
             else if(tipo_riesgo=="riesgomoderadoalto_vih"){
                $state.go('riesgomoderadoalto_vih');
             }
             else if(tipo_riesgo=="riesgomoderadobajo_vih"){
                $state.go('riesgomoderadobajo_vih');
             }
             else if(tipo_riesgo=="riesgobajo_vih"){
                $state.go('riesgobajo_vih');
             }
        
        
    }
  

})




.controller('TratamientoPrevioMedicamentos',function($scope,$state){

  tratamiento_previo=true;
if(previo_ator==10){
  jQuery("#atorv_10").prop('checked', true);
}
else if(previo_ator==20){
  jQuery("#atorv_20").prop('checked', true);
}
else if(previo_ator==30){
  jQuery("#atorv_30").prop('checked', true);
}
else if(previo_ator==40){
  jQuery("#atorv_40").prop('checked', true);
}

if(previo_rosu==5){
  jQuery("#rosuv_5").prop('checked', true);
}
else if(previo_rosu==10){
  jQuery("#rosuv_10").prop('checked', true);
}
else if(previo_rosu==20){
  jQuery("#rosuv_20").prop('checked', true);
}
else if(previo_rosu==40){
  jQuery("#rosuv_40").prop('checked', true);
}

if(previo_pita==1){
  jQuery("#piv_5").prop('checked', true);
}
else if(previo_pita==2){
  jQuery("#pitv_10").prop('checked', true);
}
else if(previo_pita==4){
  jQuery("#pitv_20").prop('checked', true);
}

if(previo_sim==10){
  jQuery("#simv_10").prop('checked', true);
}
else if(previo_sim==20){
  jQuery("#simv_20").prop('checked', true);
}
else if(previo_sim==40){
  jQuery("#simv_40").prop('checked', true);
}
else if(previo_sim==80){
  jQuery("#simv_80").prop('checked', true);
}

if(previo_pra==10){
  jQuery("#prav_10").prop('checked', true);
}
else if(previo_pra==20){
  jQuery("#prav_20").prop('checked', true);
}
else if(previo_pra==40){
  jQuery("#prav_40").prop('checked', true);
}
else if(previo_pra==80){
  jQuery("#prav_80").prop('checked', true);
}


if(previo_fluv==20){
  jQuery("#fluv_20").prop('checked', true);
}
else if(previo_fluv==40){
  jQuery("#fluv_40").prop('checked', true);
}
else if(previo_fluv==80){
  jQuery("#fluv_80").prop('checked', true);
}

if(previo_lov==20){
  jQuery("#lov_20").prop('checked', true);
}
else if(previo_lov==40){
  jQuery("#lov_40").prop('checked', true);
}

if(previo_lov==10){
  jQuery("#lov_10").prop('checked', true);
}

if(previo_ezet==10){
  jQuery("#ezet_10").prop('checked', true);
}

if(previo_aliro==75){
  jQuery("#aliroc_75").prop('checked', true);
}
else if(previo_aliro==150){
  jQuery("#aliroc_150").prop('checked', true);
}

if(previo_evolo==140){
  jQuery("#evoloc_140").prop('checked', true);
}
else if(previo_evolo==420){
  jQuery("#evoloc_420").prop('checked', true);
}

if(previo_colestir==4){
  jQuery("#colestir_4").prop('checked', true);
}

if(previo_colestir==5){
  jQuery("#colestir_5").prop('checked', true);
}

if(previo_fenof==200){
  jQuery("#fenof_200").prop('checked', true);
}

if(previo_gemf==900){
  jQuery("#gemf_900").prop('checked', true);
}
else if(previo_gemf==600){
  jQuery("#gemf_600").prop('checked', true);
}



jQuery('.linea_atorvastatina').on( "click", function() { 

          jQuery('.cuadro_dosis').hide();
           jQuery('.cuadro_atorvastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {   

           jQuery('.cuadro_atorvastatina').hide(); //muestro mediante clase
           if ($('.cuadro_atorvastatina input').is(":checked")){
            $(".linea_atorvastatina").css("color", "#86253c");
            $(".familia_estatina").css("color", "#86253c");
          }


          if ($('#atorv_10').is(":checked")){
            previo_ator=10;            
          }
          else if ($('#atorv_20').is(":checked")){
            previo_ator=20;
          }
          else if ($('#atorv_40').is(":checked")){
            previo_ator=40;
          }
          else if ($('#atorv_80').is(":checked")){
             previo_ator=80;
          }



          



         });
jQuery('.cancelar1').on( "click", function() { 
          jQuery("#atorv_10").prop('checked', false);
          jQuery("#atorv_20").prop('checked', false);
          jQuery("#atorv_40").prop('checked', false);
          jQuery("#atorv_80").prop('checked', false);  
           jQuery('.cuadro_atorvastatina').hide(); //muestro mediante clase
         });


jQuery('.linea_rosuvastatina').on( "click", function() { 
jQuery('.cuadro_dosis').hide();   
           jQuery('.cuadro_rosuvastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_rosuvastatina').hide(); //muestro mediante clase
           if ($('.cuadro_rosuvastatina input').is(":checked")){
            $(".linea_rosuvastatina").css("color", "#86253c");
            $(".familia_estatina").css("color", "#86253c");
          }

          if ($('#rosuv_5').is(":checked")){
            previo_rosu=5;            
          }
          else if ($('#rosuv_10').is(":checked")){
            previo_rosu=10;
          }
          else if ($('#rosuv_20').is(":checked")){
            previo_rosu=20;
          }
          else if ($('#rosuv_40').is(":checked")){
            previo_rosu=40;
          }
         });
jQuery('.cancelar2').on( "click", function() { 
          jQuery("#rosuv_5").prop('checked', false);
          jQuery("#rosuv_10").prop('checked', false);
          jQuery("#rosuv_20").prop('checked', false);
          jQuery("#rosuv_40").prop('checked', false);
           jQuery('.cuadro_rosuvastatina').hide(); //muestro mediante clase
         });



jQuery('.linea_simvastatina').on( "click", function() {  
jQuery('.cuadro_dosis').hide();  
           jQuery('.cuadro_simvastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_simvastatina').hide(); //muestro mediante clase
           if ($('.cuadro_simvastatina input').is(":checked")){
            $(".linea_simvastatina").css("color", "#86253c");
            $(".familia_estatina").css("color", "#86253c");
          }

           if ($('#simv_10').is(":checked")){
            previo_sim=10;            
          }
          else if ($('#simv_20').is(":checked")){
            previo_sim=20;
          }
          else if ($('#simv_40').is(":checked")){
            previo_sim=40;
          }
           else if ($('#simv_80').is(":checked")){
            previo_sim=80;
          }

         });
jQuery('.cancelar4').on( "click", function() { 
          jQuery("#simv_10").prop('checked', false);
          jQuery("#simv_20").prop('checked', false);
          jQuery("#simv_40").prop('checked', false);
          jQuery("#simv_80").prop('checked', false);
           jQuery('.cuadro_simvastatina').hide(); //muestro mediante clase
         });


jQuery('.linea_pitavastatina').on( "click", function() {  
jQuery('.cuadro_dosis').hide();  
           jQuery('.cuadro_pitavastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_pitavastatina').hide(); //muestro mediante clase
           if ($('.cuadro_pitavastatina input').is(":checked")){
            $(".linea_pitavastatina").css("color", "#86253c");
            $(".familia_estatina").css("color", "#86253c");
          }
           if ($('#pitv_1').is(":checked")){
            previo_pita=1;            
          }
          else if ($('#pitv_2').is(":checked")){
            previo_pita=2;
          }
          else if ($('#pitv_4').is(":checked")){
            previo_pita=4;
          }
         
         });
jQuery('.cancelar3').on( "click", function() { 
          jQuery("#pitv_1").prop('checked', false);
          jQuery("#pitv_2").prop('checked', false);
          jQuery("#pitv_4").prop('checked', false);
           jQuery('.cuadro_pitavastatina').hide(); //muestro mediante clase
         });

jQuery('.linea_pravastatina').on( "click", function() { 
jQuery('.cuadro_dosis').hide();   
           jQuery('.cuadro_pravastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_pravastatina').hide(); //muestro mediante clase
           if ($('.cuadro_pravastatina input').is(":checked")){
            $(".linea_pravastatina").css("color", "#86253c");
            $(".familia_estatina").css("color", "#86253c");
          }

          if ($('#prav_10').is(":checked")){
            previo_pra=10;            
          }
          else if ($('#prav_20').is(":checked")){
            previo_pra=20;
          }
          else if ($('#prav_40').is(":checked")){
            previo_pra=40;
          }
           else if ($('#prav_80').is(":checked")){
            previo_pra=80;
          }
         });
jQuery('.cancelar5').on( "click", function() { 
          jQuery("#prav_10").prop('checked', false);
          jQuery("#prav_20").prop('checked', false);
          jQuery("#prav_40").prop('checked', false);
          jQuery("#prav_80").prop('checked', false);
           jQuery('.cuadro_pravastatina').hide(); //muestro mediante clase
         });

jQuery('.linea_fluvastatina').on( "click", function() {    
  jQuery('.cuadro_dosis').hide();
           jQuery('.cuadro_fluvastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_fluvastatina').hide(); //muestro mediante clase
           if ($('.cuadro_fluvastatina input').is(":checked")){
            $(".linea_fluvastatina").css("color", "#86253c");
            $(".familia_estatina").css("color", "#86253c");
          }

         
          if ($('#fluv_20').is(":checked")){
            previo_fluv=20;
          }
          else if ($('#fluv_40').is(":checked")){
            previo_fluv=40;
          }
           else if ($('#fluv_80').is(":checked")){
            previo_fluv=80;
          }


         });
jQuery('.cancelar6').on( "click", function() { 
          jQuery("#fluv_20").prop('checked', false);
          jQuery("#fluv_40").prop('checked', false);
          jQuery("#fluv_80").prop('checked', false);
           jQuery('.cuadro_fluvastatina').hide(); //muestro mediante clase
         });

jQuery('.linea_lovastatina').on( "click", function() {   
jQuery('.cuadro_dosis').hide(); 
           jQuery('.cuadro_lovastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_lovastatina').hide(); //muestro mediante clase
           if ($('.cuadro_lovastatina input').is(":checked")){
            $(".linea_lovastatina").css("color", "#86253c");
            $(".familia_estatina").css("color", "#86253c");
          }

          if ($('#lov_20').is(":checked")){
            previo_lov=20;
          }
          else if ($('#lov_20').is(":checked")){
            previo_lov=40;
          }
       
         });
jQuery('.cancelar7').on( "click", function() { 
          jQuery("#lov_20").prop('checked', false);
          jQuery("#lov_40").prop('checked', false);
           jQuery('.cuadro_lovastatina').hide(); //muestro mediante clase
         });

jQuery('.linea_ezetimibe').on( "click", function() {    
  jQuery('.cuadro_dosis').hide();
           jQuery('.cuadro_ezetimibe').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {

           jQuery('.cuadro_ezetimibe').hide(); //muestro mediante clase
           if ($('.cuadro_ezetimibe input').is(":checked")){
            $(".linea_ezetimibe").css("color", "#86253c");
            $(".familia_ezetimibe").css("color", "#86253c");
          }
          if ($('#ezet_10').is(":checked")){
            previo_ezet=10;
          }
         });
jQuery('.cancelar8').on( "click", function() { 
          jQuery("#ezet_10").prop('checked', false);
           jQuery('.cuadro_ezetimibe').hide(); //muestro mediante clase
         });

jQuery('.linea_alirocumab').on( "click", function() {  
jQuery('.cuadro_dosis').hide();  
           jQuery('.cuadro_alirocumab').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_alirocumab').hide(); //muestro mediante clase
           if ($('.cuadro_alirocumab input').is(":checked")){
            $(".linea_alirocumab").css("color", "#86253c");
            $(".familia_ipcsk9").css("color", "#86253c");
          }
          if ($('#aliroc_75').is(":checked")){
            previo_aliro=75;
          }
          if ($('#aliroc_150').is(":checked")){
            previo_aliro=150;
          }
         });
jQuery('.cancelar9').on( "click", function() { 
          jQuery("#aliroc_75").prop('checked', false);
          jQuery("#aliroc_150").prop('checked', false);
           jQuery('.cuadro_alirocumab').hide(); //muestro mediante clase
         });

jQuery('.linea_evolocumab').on( "click", function() {  
jQuery('.cuadro_dosis').hide();  
           jQuery('.cuadro_evolocumab').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_evolocumab').hide(); //muestro mediante clase
           if ($('.cuadro_evolocumab input').is(":checked")){
            $(".linea_evolocumab").css("color", "#86253c");
            $(".familia_ipcsk9").css("color", "#86253c");
          }
          if ($('#evoloc_140').is(":checked")){
            previo_evolo=140;
          }
          if ($('#evoloc_420').is(":checked")){
            previo_evolo=420;
          }
         });
jQuery('.cancelar10').on( "click", function() { 
          jQuery("#evoloc_140").prop('checked', false);
          jQuery("#evoloc_420").prop('checked', false);
           jQuery('.cuadro_evolocumab').hide(); //muestro mediante clase
         });

jQuery('.linea_colestiramina').on( "click", function() { 
jQuery('.cuadro_dosis').hide();   
           jQuery('.cuadro_colestiramina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_colestiramina').hide(); //muestro mediante clase
           if ($('.cuadro_colestiramina input').is(":checked")){
            $(".linea_colestiramina").css("color", "#86253c");
            $(".familia_resinas").css("color", "#86253c");
          }
          if ($('#colestir_4').is(":checked")){
            previo_colestir=4;
          }
         });
jQuery('.cancelar11').on( "click", function() { 
          jQuery("#colestir_4").prop('checked', false);
           jQuery('.cuadro_colestiramina').hide(); //muestro mediante clase
         });

jQuery('.linea_colestipol').on( "click", function() {    
  jQuery('.cuadro_dosis').hide();
           jQuery('.cuadro_colestipol').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_colestipol').hide(); //muestro mediante clase
           if ($('.cuadro_colestipol input').is(":checked")){
            $(".linea_colestipol").css("color", "#86253c");
            $(".familia_resinas").css("color", "#86253c");
          }
          if ($('#colestip_5').is(":checked")){
            previo_colestip=5;
          }
         });
jQuery('.cancelar12').on( "click", function() { 
          jQuery("#colestip_5").prop('checked', false);
           jQuery('.cuadro_colestipol').hide(); //muestro mediante clase
         });

jQuery('.linea_fenofibrato').on( "click", function() {  
jQuery('.cuadro_dosis').hide();  
           jQuery('.cuadro_fenofibrato').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_fenofibrato').hide(); //muestro mediante clase
           if ($('.cuadro_fenofibrato input').is(":checked")){
            $(".linea_fenofibrato").css("color", "#86253c");
            $(".familia_fibratos").css("color", "#86253c");
          }
          if ($('#fenof_200').is(":checked")){
            previo_fenof=200;
          }
         
         });
jQuery('.cancelar13').on( "click", function() { 
          jQuery("#fenof_200").prop('checked', false);
           jQuery('.cuadro_fenofibrato').hide(); //muestro mediante clase
         });

jQuery('.linea_gemfibrozilo').on( "click", function() {   
jQuery('.cuadro_dosis').hide(); 
           jQuery('.cuadro_gemfibrozilo').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {    
           jQuery('.cuadro_gemfibrozilo').hide(); //muestro mediante clase
           if ($('.cuadro_gemfibrozilo input').is(":checked")){
            $(".linea_gemfibrozilo").css("color", "#86253c");
            $(".familia_fibratos").css("color", "#86253c");
          }
          if ($('#gemf_900').is(":checked")){
            previo_gemf=900;
          }
          if ($('#gemf_600').is(":checked")){
            previo_gemf=600;
          }
        
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
// ldlactual=ldlrectificado;

tratamiento=true;



             if(tipo_riesgo="riesgomuyalto"){
                $state.go('riesgomuyalto');
             }
             else if(tipo_riesgo="riesgoalto"){
                $state.go('riesgoalto');
             }
             else if(tipo_riesgo="riesgomedio"){
                $state.go('riesgomedio');
             }
             else if(tipo_riesgo="riesgobajo"){
                $state.go('riesgobajo');
             }
        
        



}

})









.controller('TratamientoPrevioMedicamentos_vih',function($scope,$state){

 tratamiento_previo=true;

jQuery('.linea_atorvastatina').on( "click", function() { 

           jQuery('.cuadro_atorvastatina').show(); //muestro mediante clase
         });
jQuery('.ok_guardar').on( "click", function() {   

           jQuery('.cuadro_atorvastatina').hide(); //muestro mediante clase
           if ($('.cuadro_atorvastatina input').is(":checked")){
            $(".linea_atorvastatina").css("color", "#86253c");
            $(".familia_estatina").css("color", "#86253c");
          }
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
           if ($('.cuadro_rosuvastatina input').is(":checked")){
            $(".linea_rosuvastatina").css("color", "#86253c");
            $(".familia_estatina").css("color", "#86253c");
          }
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
           if ($('.cuadro_pravastatina input').is(":checked")){
            $(".linea_pravastatina").css("color", "#86253c");
            $(".familia_estatina").css("color", "#86253c");
          }
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
           if ($('.cuadro_ezetimibe input').is(":checked")){
            $(".linea_ezetimibe").css("color", "#86253c");
            $(".familia_ezetimibe").css("color", "#86253c");
          }
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
// ldlactual=ldlrectificado;
// $state.go('tratamientoinicio_vih');
// $state.go('reduccion_trat_vih');

tratamiento=true;



             if(tipo_riesgo="riesgoalto_vih"){
                $state.go('riesgoalto_vih');
             }
             else if(tipo_riesgo="riesgomoderadoalto_vih"){
                $state.go('riesgomoderadoalto_vih');
             }
             else if(tipo_riesgo="riesgomoderadobajo_vih"){
                $state.go('riesgomoderadobajo_vih');
             }
             else if(tipo_riesgo="riesgobajo_vih"){
                $state.go('riesgobajo_vih');
             }
        
        
    



}

})









.controller('grupos_sin_tratamiento',function($scope,$state, $ionicPopup, $firebaseArray,$rootScope,$ionicLoading){
  
  
    $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  
  // setTimeout(
  // function() 
  // {
  //   $ionicLoading.hide().then(function(){
  //      console.log("The loading indicator is now hidden");
  //   });
  // }, 3100);
  
  // $scope.estatinas_interaccion_alta=quitar_ator_inter_rojo;
  // $scope.estatinas_interaccion_baja=quitar_ator_inter;
  // $scope.ezetimibe_interaccion_alta=quitar_ator_inter_rojo;

  $scope.ldlactualscope=ldlactual;

  $( ".boton_finalizar" ).click(function() {


   var confirmPopup = $ionicPopup.confirm({

      title: '¡Atención!',

      template: '¿Está seguro que desea acceder al menú principal de la app?',

      cancelText: 'Cancelar',

      okText: 'Aceptar',

   });

   confirmPopup.then(function(res) {

      if (res) {

         $state.go('home');
         $rootScope.estatinas_interaccion_baja=null;
         $rootScope.estatinas_interaccion_alta=null;
         $rootScope.ezetimive_interaccion_baja=null;
         $rootScope.ezetimive_interaccion_alta=null;

      } else {

         console.log('You clicked on "Cancel" button');

      }

   });


});

  if(proviene_contraindicaciones==true){
    $(".boton_interacciones").show();
    $(".boton_contraindicaciones").hide();
  }

  if((proviene_contraindicaciones==true)&&(proviene_interacciones==true)){
    $(".boton_interacciones").hide();
    $(".boton_contraindicaciones").hide();
    $(".boton_finalizar").show();
  }

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  // $scope.ir_info_previo = function() {
  //   $state.go('modal_tratamiento_previo');
  // }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento_red").value=ldlactual;
    
  document.getElementById("ldl_obj_tratamiento_red").value=ldlobjetivo;

 // document.getElementById("ldl_act_tratamiento").value="150";
 // document.getElementById("ldl_obj_tratamiento").value="100";

 if(tratamiento_previo==true){
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlrectificado))*100);
 }
 else{
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
 }

 


   $scope.reduccionscope=porc_reducc;

  // var porc_reducc=65;
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
 $(".objetivo_desliz").text(ldlobjetivo);
 $(".valor_eje_actual").text(ldlactual);
    // Initialize Firebase
    var distancia_left=porc_reducc*0.87;
    var ancho=distancia_left + "%";


    
$(".premarcador").css("left",ancho);
    var ref = firebase.database().ref('grupos_sin_contra').orderByChild("media");
    $scope.disp = $firebaseArray(ref);

    $scope.grupos_sin_contra = [];
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
            $scope.grupos_sin_contra.push(value);
          // }
          
          // }
          
          
          // if(i%2){
          //   console.log(i+" es impar");
          // }
          // else{
          //   console.log(i+" es par")
          // }
          // i=i+1;
          
        });
        

    });



$scope.info_grupos = function() {
// An alert dialog

   var alertPopup = $ionicPopup.alert({
     template: 'IEBI: Estatina de Baja Intensidad<br>EMI: Estatina de Media Intensidad<br>EAI: Estatina de Alta Intensidad<br>Eze: Ezetimiba<br>Ali 75: Alirocumab 75 mg<br>Ali 150: Alirocumab 150 mg<br>Evo 140: Evolocumab 140 mg<br>Evo 420: Evolocumab 420 mg'
   });

   alertPopup.then(function(res) {
     console.log();
   });
 

}

  setTimeout(
  function() 
  {

if(quitar_estatina==true){
  $(".tratamientoinicio_EZE_ALI75").show();
  $(".tratamientoinicio_EZE_ALI_EVO").show();
  $(".tratamientoinicio_EBI").hide();
  $(".tratamientoinicio_EMI").hide();
  $(".tratamientoinicio_EAI").hide();
  $(".tratamientoinicio_EBI_EZE").hide();
  $(".tratamientoinicio_EMI_EZE").hide();
  $(".tratamientoinicio_EAI_EZE").hide();
  $(".tratamientoinicio_EBI_EZE_ALI75").hide();
  $(".tratamientoinicio_EMI_EZE_ALI75").hide();
  $(".tratamientoinicio_EAI_EZE_ALI75").hide();
  $(".tratamientoinicio_EBI_EZE_ALI_EVO").hide();
  $(".tratamientoinicio_EMI_EZE_ALI_EVO").hide();
  $(".tratamientoinicio_EAI_EZE_ALI_EVO").hide();
  $(".no_eze").hide();
}

if(quitar_ezetimibe==true){
  $(".tratamientoinicio_EBI_ALI75").show();
  $(".tratamientoinicio_EMI_ALI75").show();
  $(".tratamientoinicio_EAI_ALI75").show();
  $(".tratamientoinicio_EBI_ALI_EVO").show();
  $(".tratamientoinicio_EMI_ALI_EVO").show();
  $(".tratamientoinicio_EAI_ALI_EVO").show();
  $(".tratamientoinicio_EBI_EZE").hide();
  $(".tratamientoinicio_EMI_EZE").hide();
  $(".tratamientoinicio_EAI_EZE").hide();
  $(".tratamientoinicio_EBI_EZE_ALI75").hide();
  $(".tratamientoinicio_EMI_EZE_ALI75").hide();
  $(".tratamientoinicio_EAI_EZE_ALI75").hide();
  $(".tratamientoinicio_EBI_EZE_ALI_EVO").hide();
  $(".tratamientoinicio_EMI_EZE_ALI_EVO").hide();
  $(".tratamientoinicio_EAI_EZE_ALI_EVO").hide();
}

if(quitar_fibratos==true){

  $(".tratamientoinicio_EBI_EZE_ALI_EVO_RES").show();
  $(".tratamientoinicio_EMI_EZE_ALI_EVO_RES").show();
  $(".tratamientoinicio_EAI_EZE_ALI_EVO_RES").show();
  $(".tratamientoinicio_EBI_EZE_ALI75_RES").show();
  $(".tratamientoinicio_EMI_EZE_ALI75_RES").show();
  $(".tratamientoinicio_EAI_EZE_ALI75_RES").show();
  $(".tratamientoinicio_EBI_EZE_ALI_EVO").hide();
  $(".tratamientoinicio_EMI_EZE_ALI_EVO").hide();
  $(".tratamientoinicio_EAI_EZE_ALI_EVO").hide();
  $(".tratamientoinicio_EBI_EZE_ALI75").hide();
  $(".tratamientoinicio_EMI_EZE_ALI75").hide();
  $(".tratamientoinicio_EAI_EZE_ALI75").hide();
}

if(quitar_resinas==true){
  
  $(".tratamientoinicio_EMI_EZE_ALI75_FIB").show();
  $(".tratamientoinicio_EAI_EZE_ALI75_FIB").show();
  $(".tratamientoinicio_EBI_EZE_ALI_EVO_FIB").show();
  $(".tratamientoinicio_EMI_EZE_ALI_EVO_FIB").show();
  $(".tratamientoinicio_EAI_EZE_ALI_EVO_FIB").show();
  $(".tratamientoinicio_EBI_EZE_ALI75").hide();
  $(".tratamientoinicio_EMI_EZE_ALI75").hide();
  $(".tratamientoinicio_EAI_EZE_ALI75").hide();
  $(".tratamientoinicio_EBI_EZE_ALI_EVO").hide();
  $(".tratamientoinicio_EMI_EZE_ALI_EVO").hide();
  $(".tratamientoinicio_EAI_EZE_ALI_EVO").hide();
}

if(quitar_ipcsk9==true){
  $(".tratamientoinicio_EBI_EZE_RES").show();
  $(".tratamientoinicio_EMI_EZE_RES").show();
  $(".tratamientoinicio_EAI_EZE_RES").show();
  $(".tratamientoinicio_EBI_EZE_FIB").show();
  $(".tratamientoinicio_EMI_EZE_FIB").show();
  $(".tratamientoinicio_EAI_EZE_FIB").show();
  $(".tratamientoinicio_EBI_EZE_ALI75").hide();
  $(".tratamientoinicio_EMI_EZE_ALI75").hide();
  $(".tratamientoinicio_EAI_EZE_ALI75").hide();
  $(".tratamientoinicio_EBI_EZE_ALI_EVO").hide();
  $(".tratamientoinicio_EMI_EZE_ALI_EVO").hide();
  $(".tratamientoinicio_EAI_EZE_ALI_EVO").hide();
}
 
// if(porc_reducc>90.76352){
//   $(".tratamientoinicio_EBI").css("background-color","red");
//   $(".tratamientoinicio_EMI").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE_ALI75").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE_ALI75").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE_ALI_EVO").css("background-color","red");
//   $(".tratamientoinicio_EAI_EZE_ALI75").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE_ALI_EVO").css("background-color","red");
//   $(".tratamientoinicio_EAI_EZE_ALI_EVO").css("background-color","red");
// }
// if(porc_reducc>88.06016){
//   $(".tratamientoinicio_EBI").css("background-color","red");
//   $(".tratamientoinicio_EMI").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE_ALI75").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE_ALI75").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE_ALI_EVO").css("background-color","red");
//   $(".tratamientoinicio_EAI_EZE_ALI75").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE_ALI_EVO").css("background-color","red");
  
// }
// if(porc_reducc>86.43392){
//   $(".tratamientoinicio_EBI").css("background-color","red");
//   $(".tratamientoinicio_EMI").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE_ALI75").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE_ALI75").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE_ALI_EVO").css("background-color","red");
//   $(".tratamientoinicio_EAI_EZE_ALI75").css("background-color","red");
  
// }
// if(porc_reducc>85.3568){
//   $(".tratamientoinicio_EBI").css("background-color","red");
//   $(".tratamientoinicio_EMI").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE_ALI75").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE_ALI75").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE_ALI_EVO").css("background-color","red");
  
// }
// if(porc_reducc>82.46336){
//   $(".tratamientoinicio_EBI").css("background-color","red");
//   $(".tratamientoinicio_EMI").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE_ALI75").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE_ALI75").css("background-color","red");
  
// }
// if(porc_reducc>78.4928){
//   $(".tratamientoinicio_EBI").css("background-color","red");
//   $(".tratamientoinicio_EMI").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE_ALI75").css("background-color","red");

// }
// if(porc_reducc>67.2){
//   $(".tratamientoinicio_EBI").css("background-color","red");
//   $(".tratamientoinicio_EMI").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI_EZE").css("background-color","red");

// }
// if(porc_reducc>57.6){
//   $(".tratamientoinicio_EBI").css("background-color","red");
//   $(".tratamientoinicio_EMI").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI").css("background-color","red");
//   $(".tratamientoinicio_EMI_EZE").css("background-color","red");

// }
// if(porc_reducc>59){
//   $(".tratamientoinicio_EBI").css("background-color","red");
//   $(".tratamientoinicio_EMI").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE").css("background-color","red");
//   $(".tratamientoinicio_EAI").css("background-color","red");

// }
// if(porc_reducc>52.8){
//   $(".tratamientoinicio_EBI").css("background-color","red");
//   $(".tratamientoinicio_EMI").css("background-color","red");
//   $(".tratamientoinicio_EBI_EZE").css("background-color","red");

// }
// if(porc_reducc>47){
//   $(".tratamientoinicio_EBI").css("background-color","red");
//   $(".tratamientoinicio_EMI").css("background-color","red");

// }
// if(porc_reducc>35){
//   $(".tratamientoinicio_EBI").css("background-color","red");

// }


//  if(quitar_ator_inter_rojo==true){
//     $(".tratamientoinicio_EBI .alerta_grupo_alta").show();
//   }
// if(quitar_ator_inter==true){
//     $(".tratamientoinicio_EBI .alerta_grupo_baja").show();
//   }



}, 3000);



})






.controller('tratamientoinicio_EBI_EZE_RES',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI_EZE_RES').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI_EZE_RES = [];
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
            $scope.EBI_EZE_RES.push(value);
          // }
        });
        console.log($scope.EBI_EZE_RES);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}




if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}


if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})







.controller('tratamientoinicio_EMI_EZE_RES',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EMI_EZE_RES').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI_EZE_RES = [];
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
            $scope.EMI_EZE_RES.push(value);
          // }
        });
        console.log($scope.EMI_EZE_RES);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}




if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}


if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})









.controller('tratamientoinicio_EAI_EZE_RES',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI_EZE_RES').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI_EZE_RES = [];
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
            $scope.EAI_EZE_RES.push(value);
          // }
        });
        console.log($scope.EAI_EZE_RES);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}




if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}


if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})









.controller('tratamientoinicio_EBI',function($scope,$state,$rootScope,$firebaseArray,$ionicLoading){
  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    
var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI = [];
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
            $scope.EBI.push(value);
          // }
        });
        console.log($scope.EBI);

    });



setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }











  }, 5000);




})







.controller('tratamientoinicio_EBI_EZE',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI_EZE').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI_EZE = [];
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
            $scope.EBI_EZE.push(value);
          // }
        });
        console.log($scope.EBI_EZE);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}


if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})








.controller('tratamientoinicio_EBI_EZE_ALI75',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI_EZE_ALI75').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI_EZE_ALI75 = [];
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
            $scope.EBI_EZE_ALI75.push(value);
          // }
        });
        console.log($scope.EBI_EZE_ALI75);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}


if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})





.controller('tratamientoinicio_EBI_EZE_ALI75_FIB',function($scope,$state, $firebaseArray,$ionicLoading){


  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI_EZE_ALI75_FIB').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI_EZE_ALI75_FIB = [];
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
            $scope.EBI_EZE_ALI75_FIB.push(value);
          // }
        });
        console.log($scope.EBI_EZE_ALI75_FIB);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})





.controller('tratamientoinicio_EMI_EZE_ALI75_FIB',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('tratamientoinicio_EMI_EZE_ALI75_FIB').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI_EZE_ALI75_FIB = [];
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
            $scope.EMI_EZE_ALI75_FIB.push(value);
          // }
        });
        console.log($scope.EMI_EZE_ALI75_FIB);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}


if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})






.controller('tratamientoinicio_EAI_EZE_ALI75_FIB',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI_EZE_ALI75_FIB').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI_EZE_ALI75_FIB = [];
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
            $scope.EAI_EZE_ALI75_FIB.push(value);
          // }
        });
        console.log($scope.EAI_EZE_ALI75_FIB);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})












.controller('tratamientoinicio_EBI_EZE_ALI75_RES',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI_EZE_ALI75_RES').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI_EZE_ALI75_RES = [];
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
            $scope.EBI_EZE_ALI75_RES.push(value);
          // }
        });
        console.log($scope.EBI_EZE_ALI75_RES);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})





.controller('tratamientoinicio_EMI_EZE_ALI75_RES',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    
var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EMI_EZE_ALI75_RES').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI_EZE_ALI75_RES = [];
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
            $scope.EMI_EZE_ALI75_RES.push(value);
          // }
        });
        console.log($scope.EMI_EZE_ALI75_RES);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})


.controller('tratamientoinicio_EAI_EZE_ALI75_RES',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    
var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI_EZE_ALI75_RES').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI_EZE_ALI75_RES = [];
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
            $scope.EAI_EZE_ALI75_RES.push(value);
          // }
        });
        console.log($scope.EAI_EZE_ALI75_RES);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})



.controller('tratamientoinicio_EBI_EZE_FIB',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    
var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI_EZE_FIB').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI_EZE_FIB = [];
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
            $scope.EBI_EZE_FIB.push(value);
          // }
        });
        console.log($scope.EBI_EZE_FIB);

    });


setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})





.controller('tratamientoinicio_EMI_EZE_FIB',function($scope,$state, $firebaseArray,$ionicLoading){


  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EMI_EZE_FIB').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI_EZE_FIB = [];
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
            $scope.EMI_EZE_FIB.push(value);
          // }
        });
        console.log($scope.EMI_EZE_FIB);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})



.controller('tratamientoinicio_EAI_EZE_FIB',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI_EZE_FIB').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI_EZE_FIB = [];
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
            $scope.EAI_EZE_FIB.push(value);
          // }
        });
        console.log($scope.EAI_EZE_FIB);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})





.controller('tratamientoinicio_EBI_EZE_ALI_EVO',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    
var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI_EZE_ALI_EVO').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI_EZE_ALI_EVO = [];
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
            $scope.EBI_EZE_ALI_EVO.push(value);
          // }
        });
        console.log($scope.EBI_EZE_ALI_EVO);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})









.controller('tratamientoinicio_EBI_EZE_ALI_EVO_FIB',function($scope,$state, $firebaseArray,$ionicLoading){


  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI_EZE_ALI_EVO_FIB').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI_EZE_ALI_EVO_FIB = [];
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
            $scope.EBI_EZE_ALI_EVO_FIB.push(value);
          // }
        });
        console.log($scope.EBI_EZE_ALI_EVO_FIB);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})




.controller('tratamientoinicio_EMI_EZE_ALI_EVO_FIB',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EMI_EZE_ALI_EVO_FIB').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI_EZE_ALI_EVO_FIB = [];
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
            $scope.EMI_EZE_ALI_EVO_FIB.push(value);
          // }
        });
        console.log($scope.EMI_EZE_ALI_EVO_FIB);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})





.controller('tratamientoinicio_EAI_EZE_ALI_EVO_FIB',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    
var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI_EZE_ALI_EVO_FIB').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI_EZE_ALI_EVO_FIB = [];
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
            $scope.EAI_EZE_ALI_EVO_FIB.push(value);
          // }
        });
        console.log($scope.EAI_EZE_ALI_EVO_FIB);

    });


setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})





.controller('tratamientoinicio_EBI_EZE_ALI_EVO_RES',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI_EZE_ALI_EVO_RES').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI_EZE_ALI_EVO_RES = [];
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
            $scope.EBI_EZE_ALI_EVO_RES.push(value);
          // }
        });
        console.log($scope.EBI_EZE_ALI_EVO_RES);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})







.controller('tratamientoinicio_EMI_EZE_ALI_EVO_RES',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    
var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EMI_EZE_ALI_EVO_RES').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI_EZE_ALI_EVO_RES = [];
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
            $scope.EMI_EZE_ALI_EVO_RES.push(value);
          // }
        });
        console.log($scope.EMI_EZE_ALI_EVO_RES);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})




.controller('tratamientoinicio_EAI_EZE_ALI_EVO_RES',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI_EZE_ALI_EVO_RES').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI_EZE_ALI_EVO_RES = [];
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
            $scope.EAI_EZE_ALI_EVO_RES.push(value);
          // }
        });
        console.log($scope.EAI_EZE_ALI_EVO_RES);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})





.controller('tratamientoinicio_EMI_EZE_ALI_EVO',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EMI_EZE_ALI_EVO').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI_EZE_ALI_EVO = [];
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
            $scope.EMI_EZE_ALI_EVO.push(value);
          // }
        });
        console.log($scope.EMI_EZE_ALI_EVO);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})






.controller('tratamientoinicio_EAI_EZE_ALI_EVO',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI_EZE_ALI_EVO').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI_EZE_ALI_EVO = [];
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
            $scope.EAI_EZE_ALI_EVO.push(value);
          // }
        });
        console.log($scope.EAI_EZE_ALI_EVO);

    });


setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})










.controller('tratamientoinicio_EAI_ALI_EVO',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI_ALI_EVO').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI_ALI_EVO = [];
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
            $scope.EAI_ALI_EVO.push(value);
          // }
        });
        console.log($scope.EAI_ALI_EVO);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})










.controller('tratamientoinicio_EBI_ALI_EVO',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI_ALI_EVO').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI_ALI_EVO = [];
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
            $scope.EBI_ALI_EVO.push(value);
          // }
        });
        console.log($scope.EBI_ALI_EVO);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})






.controller('tratamientoinicio_EMI_ALI_EVO',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    
var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EMI_ALI_EVO').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI_ALI_EVO = [];
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
            $scope.EMI_ALI_EVO.push(value);
          // }
        });
        console.log($scope.EMI_ALI_EVO);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}

if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})






.controller('tratamientoinicio_EZE_ALI75',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EZE_ALI75').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EZE_ALI75 = [];
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
            $scope.EZE_ALI75.push(value);
          // }
        });
        console.log($scope.EZE_ALI75);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})




.controller('tratamientoinicio_EBI_ALI75',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
        var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EBI_ALI75').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EBI_ALI75 = [];
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
            $scope.EBI_ALI75.push(value);
          // }
        });
        console.log($scope.EBI_ALI75);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})




.controller('tratamientoinicio_EMI_ALI75',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
        var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EMI_ALI75').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI_ALI75 = [];
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
            $scope.EMI_ALI75.push(value);
          // }
        });
        console.log($scope.EMI_ALI75);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})





.controller('tratamientoinicio_EAI_ALI75',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI_ALI75').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI_ALI75 = [];
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
            $scope.EAI_ALI75.push(value);
          // }
        });
        console.log($scope.EAI_ALI75);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}


if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})





.controller('tratamientoinicio_EZE_ALI_EVO',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
        var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EZE_ALI_EVO').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EZE_ALI_EVO = [];
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
            $scope.EZE_ALI_EVO.push(value);
          // }
        });
        console.log($scope.EZE_ALI_EVO);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})







.controller('tratamientoinicio_EMI_EZE_ALI75',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
        var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EMI_EZE_ALI75').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI_EZE_ALI75 = [];
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
            $scope.EMI_EZE_ALI75.push(value);
          // }
        });
        console.log($scope.EMI_EZE_ALI75);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}


if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})















.controller('tratamientoinicio_EAI_EZE_ALI75',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI_EZE_ALI75').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI_EZE_ALI75 = [];
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
            $scope.EAI_EZE_ALI75.push(value);
          // }
        });
        console.log($scope.EAI_EZE_ALI75);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}

if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})








.controller('tratamientoinicio_EAI_EZE',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
 
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI_EZE').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI_EZE = [];
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
            $scope.EAI_EZE.push(value);
          // }
        });
        console.log($scope.EAI_EZE);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}

if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})








.controller('tratamientoinicio_EMI_EZE',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
        var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EMI_EZE').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI_EZE = [];
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
            $scope.EMI_EZE.push(value);
          // }
        });
        console.log($scope.EMI_EZE);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}



if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})








.controller('tratamientoinicio_EMI',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    
    var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;
    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EMI').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EMI = [];
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
            $scope.EMI.push(value);
          // }
        });
        console.log($scope.EMI);

    });
setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}


if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}


if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);

})


.controller('tratamientoinicio_EAI',function($scope,$state, $firebaseArray,$ionicLoading){

  $ionicLoading.show({
      // template: 'Cargando...',
      templateUrl:"templates/loading.html",
      duration: 3100
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });

  // if(tratamiento_previo==true){
  //   ldlactual=ldlrectificado;
  //   $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  //   $(".info_tratamiento").show();
  //   $(".campos_res_gris").show();
  //   $(".campos_res_gris").css("top", "335px");
  // }
  // if(tratamiento_previo==false){
  //     $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
  //   $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  // }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  // console.log(tratamiento_previo);
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=ldlobjetivo;
  $scope.ldlactualscope=ldlactual;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
        var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100); 
  $scope.reduccionscope=porc_reducc;

    // var ref = firebase.database().ref('EBI').orderByChild("porcentaje").startAt(porc_reducc);
    var ref = firebase.database().ref('EAI').orderByChild("porcentaje");
    $scope.disp = $firebaseArray(ref);

    $scope.EAI = [];
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
            $scope.EAI.push(value);
          // }
        });
        console.log($scope.EAI);

    });

setTimeout(
  function() 
  {


if(quitar_ator_inter==true){
  $(".ator").addClass("marca_verde");
}
if(quitar_ator_inter_rojo==true){
  $(".ator").addClass("marca_roja");
}

if(quitar_feno_inter==true){
  $(".Fenofibrato").addClass("marca_verde");
}
if(quitar_feno_inter_rojo==true){
  $(".Fenofibrato").addClass("marca_roja");
}

if(quitar_gem_inter==true){
  $(".Gemfibrozilo").addClass("marca_verde");
}
if(quitar_gem_inter_rojo==true){
  $(".Gemfibrozilo").addClass("marca_roja");
}


if(quitar_fluv_inter==true){
  $(".fluv").addClass("marca_verde");
}if(quitar_fluv_inter_rojo==true){
  $(".fluv").addClass("marca_roja");
}


if(quitar_lov_inter==true){
  $(".lov").addClass("marca_verde");
}if(quitar_lov_inter_rojo==true){
  $(".lov").addClass("marca_roja");
}


if(quitar_pito_inter==true){
  $(".pito").addClass("marca_verde");
}if(quitar_pito_inter_rojo==true){
  $(".pito").addClass("marca_roja");
}


if(quitar_pra_inter==true){
  $(".pra").addClass("marca_verde");
}if(quitar_pra_inter_rojo==true){
  $(".pra").addClass("marca_roja");
}


if(quitar_rosu_inter==true){
  $(".rosu").addClass("marca_verde");
}if(quitar_rosu_inter_rojo==true){
  $(".rosu").addClass("marca_roja");
}


if(quitar_sim_inter==true){
  $(".sim").addClass("marca_verde");
}if(quitar_sim_inter_rojo==true){
  $(".sim").addClass("marca_roja");
}

  }, 1000);

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})







.controller('TratamientoInicio',function($scope,$state, $firebaseArray){

  if(tratamiento_previo==true){
    ldlactual=ldlrectificado;
    $("#ldl_act_tratamiento").css("background", "url('img/total_rojo2.png')");
    $("#ldl_act_tratamiento").css("background-size", "100px 100px");
    $(".info_tratamiento").show();
    $(".campos_res_gris").show();
    $(".campos_res_gris").css("top", "335px");
  }
  if(tratamiento_previo==false){
      $("#ldl_act_tratamiento").css("background", "url('img/total_rojo3.png')");
    $("#ldl_act_tratamiento").css("background-size", "100px 100px");
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  console.log(tratamiento_previo);
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

setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);




})


.controller('TratamientoInicio_vih',function($scope,$state, $firebaseArray){
  if(tratamiento_previo==true){
    // $("#ldl_act_tratamiento").css("background", "url('img/total_rojo_sin.png')");
    // $("#ldl_act_tratamiento").css("background-size", "100px 100px");
    // $(".info_tratamiento").show();
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=objetivo_vih;
  var porc_reducc=100-parseInt((parseFloat(objetivo_vih)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
    // Initialize Firebase
    $scope.ldlactualscope=ldlactual;

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


    setTimeout(
  function() 
  {
         if (previo_ator==10){
            $('.ator10').hide();         
          }
          else if (previo_ator==20){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
          }
          else if (previo_ator==40){
            $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
          }
          else if (previo_ator==80){
             $('.ator10').hide(); 
            $('.ator20').hide(); 
            $('.ator40').hide(); 
             $('.ator80').hide(); 
          }


          if (previo_rosu==5){
            $('.rosu5').hide();         
          }
          else if (previo_rosu==10){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
          }
          else if (previo_rosu==20){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide(); 
          }
          else if (previo_rosu==40){
            $('.rosu5').hide(); 
            $('.rosu10').hide(); 
            $('.rosu20').hide();
            $('.rosu40').hide(); 
          }


          if (previo_pita==1){
            $('.pita1').hide();         
          }
          else if (previo_pita==2){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
          }
          else if (previo_pita==4){
            $('.pita1').hide(); 
            $('.pita2').hide(); 
            $('.pita4').hide(); 
          }
         
          
          if (previo_sim==10){
            $('.sim10').hide();         
          }
          else if (previo_sim==20){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
          }
          else if (previo_sim==40){
            $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
          }
          else if (previo_sim==80){
             $('.sim10').hide(); 
            $('.sim20').hide(); 
            $('.sim40').hide(); 
             $('.sim80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }



           if (previo_pra==10){
            $('.pra10').hide();         
          }
          else if (previo_pra==20){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
          }
          else if (previo_pra==40){
            $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
          }
          else if (previo_pra==80){
             $('.pra10').hide(); 
            $('.pra20').hide(); 
            $('.pra40').hide(); 
             $('.pra80').hide(); 
          }




        
         if (previo_fluv==20){
            
            $('.fluv20').hide(); 
          }
          else if (previo_fluv==40){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
          }
          else if (previo_fluv==80){
            
            $('.fluv20').hide(); 
            $('.fluv40').hide(); 
             $('.fluv80').hide(); 
          }


          if (previo_lov==20){
            
            $('.lov20').hide(); 
          }
          else if (previo_lov==40){
            
            $('.lov20').hide(); 
            $('.lov40').hide(); 
          }






  }, 5000);


})



.controller('TratamientoInicioSinEstatina',function($scope,$state, $firebaseArray){
  sin_estatinas=true;
  if(tratamiento_previo==true){
    $("#ldl_act_tratamiento").css("background", "url('img/total_rojo_sin.png')");
    $("#ldl_act_tratamiento").css("background-size", "100px 100px");
    $(".info_tratamiento").show();
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }
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
  if(tratamiento_previo==true){
    $("#ldl_act_tratamiento").css("background", "url('img/total_rojo_sin.png')");
    $("#ldl_act_tratamiento").css("background-size", "100px 100px");
    $(".info_tratamiento").show();
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=objetivo_vih;
  var porc_reducc=100-parseInt((parseFloat(objetivo_vih)/parseFloat(ldlactual))*100);
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




// .controller('TratamientoInicioSinEzetimibe_vih',function($scope,$state, $firebaseArray){

//     document.getElementById("ldl_act_tratamiento").value=ldlactual;
//   document.getElementById("ldl_obj_tratamiento").value=objetivo_vih;
//   var porc_reducc=100-parseInt((parseFloat(objetivo_vih)/parseFloat(ldlactual))*100);
//   document.getElementById("porcentaje_red_tratamiento").value=porc_reducc+"%";
//     // Initialize Firebase


//     var ref = firebase.database().ref('dislipemia3').orderByChild("porcentaje").startAt(porc_reducc);
//     $scope.disp = $firebaseArray(ref);

//     $scope.displenias = [];
//     var col = null;
//     $scope.disp.$loaded(function(){
//         angular.forEach($scope.disp, function(value, key){
//           // var cols = [value.col4, value.col3, value.col2, value.col1];
//           // //console.log(cols);
//           // if(key == 0){
//           //   for(var i = 0; i < cols.length; i++){
//           //     if(cols[i]){
//           //       col = i;
//           //       break;
//           //     }
//           //   }
//           //   //console.log(col);
//           // }
//           // if(cols[col]){
//             $scope.displenias.push(value);
//           // }
//         });
//         console.log($scope.displenias);

//     });


// })








.controller('TratamientoInicioSinEzetimive',function($scope,$state, $firebaseArray){
  sin_ezetimive=true;
  if(tratamiento_previo==true){
    $("#ldl_act_tratamiento").css("background", "url('img/total_rojo_sin.png')");
    $("#ldl_act_tratamiento").css("background-size", "100px 100px");
    $(".info_tratamiento").show();
    
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }
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



.controller('TratamientoInicioSinEzetimive_vih',function($scope,$state, $firebaseArray){
  if(tratamiento_previo==true){
    $("#ldl_act_tratamiento").css("background", "url('img/total_rojo_sin.png')");
    $("#ldl_act_tratamiento").css("background-size", "100px 100px");
    $(".info_tratamiento").show();
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }
 
    document.getElementById("ldl_act_tratamiento").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento").value=objetivo_vih;
  var porc_reducc=100-parseInt((parseFloat(objetivo_vih)/parseFloat(ldlactual))*100);
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
  sin_ipcsk9=true;
  if(tratamiento_previo==true){
    $("#ldl_act_tratamiento").css("background", "url('img/total_rojo_sin.png')");
    $("#ldl_act_tratamiento").css("background-size", "100px 100px");
    $(".info_tratamiento").show();
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }
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



.controller('TratamientoInicioSinIPCSK9NiResinas',function($scope,$state, $firebaseArray){
  if(tratamiento_previo==true){
    $("#ldl_act_tratamiento").css("background", "url('img/total_rojo_sin.png')");
    $("#ldl_act_tratamiento").css("background-size", "100px 100px");
    $(".info_tratamiento").show();
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }
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



.controller('TratamientoInicioSinFibratos',function($scope,$state, $firebaseArray){
  sin_fibratos=true;
  if(tratamiento_previo==true){
    $("#ldl_act_tratamiento").css("background", "url('img/total_rojo_sin.png')");
    $("#ldl_act_tratamiento").css("background-size", "100px 100px");
    $(".info_tratamiento").show();
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }
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



.controller('TratamientoInicioSinResina',function($scope,$state, $firebaseArray){
  sin_resina=true;
  if(tratamiento_previo==true){
    $("#ldl_act_tratamiento").css("background", "url('img/total_rojo_sin.png')");
    $("#ldl_act_tratamiento").css("background-size", "100px 100px");
    $(".info_tratamiento").show();
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }
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












.controller('TratamientoInicio2',function($scope,$state,$firebaseArray){
  if(tratamiento_previo==true){
    $("#ldl_act_tratamiento2").css("background", "url('img/total_rojo_sin.png')");
    $("#ldl_act_tratamiento2").css("background-size", "100px 100px");
    $(".info_tratamiento").show();
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

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




.controller('TratamientoInicio2_vih',function($scope,$state,$firebaseArray){
  if(tratamiento_previo==true){
    $("#ldl_act_tratamiento2").css("background", "url('img/total_rojo_sin.png')");
    $("#ldl_act_tratamiento2").css("background-size", "100px 100px");
    $(".info_tratamiento").show();
  }
  $scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  document.getElementById("ldl_act_tratamiento2").value=ldlactual;
  document.getElementById("ldl_obj_tratamiento2").value=objetivo_vih;
  var porc_reducc=100-parseInt((parseFloat(objetivo_vih)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_tratamiento2").value=porc_reducc+"%";
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

  if(quitar_estatina==true){
    $("#contra_abs_estatinas").prop("checked", true);
  }
  if(quitar_ezetimibe==true){
    $("#contra_abs_ezetimibe").prop("checked", true);
  }
  if(quitar_fibratos==true){
    $("#contra_abs_fibratos").prop("checked", true);
  }
  if(quitar_resinas==true){
    $("#contra_abs_resinas").prop("checked", true);
  }
  if(quitar_ipcsk9==true){
    $("#contra_abs_ipcsk9").prop("checked", true);
  }

  $scope.filtro_contra = function() {
    proviene_contraindicaciones=true;
      if(contra_abs_estatina.checked){
        quitar_estatina=true;
      }
      else if(contra_abs_ezetimibe.checked){
        quitar_ezetimibe=true;
      }
      else if(contra_abs_fibratos.checked){
        quitar_fibratos=true;
      }
      else if(contra_abs_resinas.checked){
        quitar_resinas=true;
      }
      else if(contra_abs_ipcsk9.checked){
        quitar_ipcsk9=true;

      }
      //  else if(contra_abs_ipcsk9.checked&&contra_abs_resinas.checked){
      //   quitar_ipcsk9=true;
      // }

      if(!(contra_abs_estatina.checked)){
        quitar_estatina=false;
        
      }
      if(!(contra_abs_ezetimibe.checked)){
        quitar_ezetimibe=false;
        
      }
      if(!(contra_abs_fibratos.checked)){
        quitar_fibratos=false;
      }
      if(!(contra_abs_resinas.checked)){
        quitar_resinas=false;
      }
      if(!(contra_abs_ipcsk9.checked)){
        quitar_ipcsk9=false;
      }
      //  if(!(contra_abs_ipcsk9.checked&&contra_abs_resinas.checked)){
      //   quitar_ipcsk9=false;
      // }

    
     
      console.log(quitar_estatina+","+quitar_ezetimibe+","+quitar_fibratos+","+quitar_resinas+","+quitar_ipcsk9);
  $state.go('grupos_sin_tratamiento');
  }





})



.controller('Contraindicaciones_vih',function($scope,$state,$rootScope){


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
        $state.go('tratamientoinicio2vih');
        console.log('Intentando entrar sin filtro')
      }
      console.log(quitar_estatina+","+quitar_ezetimibe+","+quitar_fibratos+","+quitar_resinas+","+quitar_ipcsk9);
  }





})





.controller('Estatinas',function($scope,$state,$rootScope,$ionicScrollDelegate){

var previo=$rootScope.previousState;
if (previo=="menu_interacciones"){
  jQuery('.procedencia1').toggle();
}
else{
  jQuery('.procedencia2').toggle();
}




  jQuery('#atorv_inter').on( "click", function() {
    $ionicScrollDelegate.scrollTop();

          jQuery('.sub_atorv_inter,.sub_fluv_inter,.sub_lov_inter,.sub_pitav_inter,.sub_prav_inter,.sub_rosuv_inter,.sub_simv_inter').hide();

           jQuery('.sub_atorv_inter').toggle();

          
  });

  jQuery('.aco_atorv').on( "click", function() {
          if($('.aco+div').is(":visible")){
               jQuery('.aco+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.aco+div').show();

          
           }

  });
  jQuery('.ami_atorv').on( "click", function() {
if($('.ami+div').is(":visible")){
               jQuery('.ami+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.ami+div').show();

          
           }
 
          
 
  });
 jQuery('.ant_atorv').on( "click", function() {
          if($('.ant-cal+div').is(":visible")){
               jQuery('.ant-cal+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.ant-cal+div').show();

          
           }
 //muestro mediante clase
 
  });
 jQuery('.antia_atorv').on( "click", function() {
          if($('.antia+div').is(":visible")){
               jQuery('.antia+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.antia+div').show();

          
           }
 //muestro mediante clase
 
  });
  jQuery('.antif_atorv').on( "click", function() {
          if($('.antif+div').is(":visible")){
               jQuery('.antif+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.antif+div').show();

          
           }
 //muestro mediante clase
 
  });
    jQuery('.asocl_atorv').on( "click", function() {
          if($('.asocl+div').is(":visible")){
               jQuery('.asocl+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.asocl+div').show();

          
           }
 //muestro mediante clase
 
  });
      jQuery('.bar_atorv').on( "click", function() {
          if($('.bar+div').is(":visible")){
               jQuery('.bar+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.bar+div').show();

          
           }
 //muestro mediante clase
 
  });
      jQuery('.bez_atorv').on( "click", function() {
          if($('.bez+div').is(":visible")){
               jQuery('.bez+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.bez+div').show();

          
           }
 //muestro mediante clase
 
  });
        jQuery('.boc_atorv').on( "click", function() {
          if($('.boc+div').is(":visible")){
               jQuery('.boc+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.boc+div').show();

          
           }
 //muestro mediante clase
 
  });
        jQuery('.carb_atorv').on( "click", function() {
          if($('.carb+div').is(":visible")){
               jQuery('.carb+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.carb+div').show();

          
           }
 //muestro mediante clase
 
  });
      jQuery('.cicl_atorv').on( "click", function() {
          if($('.cicl+div').is(":visible")){
               jQuery('.cicl+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.cicl+div').show();

          
           }
 //muestro mediante clase
 
  });
            jQuery('.cil_atorv').on( "click", function() {
          if($('.cil+div').is(":visible")){
               jQuery('.cil+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.cil+div').show();

          
           }
 //muestro mediante clase
 
  });
                jQuery('.colc_atorv').on( "click", function() {
          if($('.colc+div').is(":visible")){
               jQuery('.colc+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.colc+div').show();

          
           }
 //muestro mediante clase
 
  });
              jQuery('.dacl_atorv').on( "click", function() {
          if($('.dacl+div').is(":visible")){
               jQuery('.dacl+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.dacl+div').show();

          
           }
 //muestro mediante clase
 
  });
                jQuery('.dan_atorv').on( "click", function() {
          if($('.dan+div').is(":visible")){
               jQuery('.dan+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.dan+div').show();

          
           }
 //muestro mediante clase
 
  });
                  jQuery('.dron_atorv').on( "click", function() {
          if($('.dron+div').is(":visible")){
               jQuery('.dron+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.dron+div').show();

          
           }
 //muestro mediante clase
 
  });
                  jQuery('.feno_atorv').on( "click", function() {
          if($('.feno+div').is(":visible")){
               jQuery('.feno+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.feno+div').show();

          
           }
 //muestro mediante clase
 
  });

                jQuery('.gim_atorv').on( "click", function() {
          if($('.gim+div').is(":visible")){
               jQuery('.gim+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.gim+div').show();

          
           }
 //muestro mediante clase
 
  });

              jQuery('.macro_atorv').on( "click", function() {
          if($('.macro+div').is(":visible")){
               jQuery('.macro+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.macro+div').show();

          
           }
 //muestro mediante clase
 
  });
                jQuery('.res_atorv').on( "click", function() {
          if($('.res+div').is(":visible")){
               jQuery('.res+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.res+div').show();

          
           }
 //muestro mediante clase
 
  });
      jQuery('.rif_atorv').on( "click", function() {
          if($('.rif+div').is(":visible")){
               jQuery('.rif+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.rif+div').show();

          
           }
 //muestro mediante clase
 
  });
            jQuery('.sime_atorv').on( "click", function() {
          if($('.sime+div').is(":visible")){
               jQuery('.sime+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.sime+div').show();

          
           }
 //muestro mediante clase
 
  });
              jQuery('.tela_atorv').on( "click", function() {
          if($('.tela+div').is(":visible")){
               jQuery('.tela+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.tela+div').show();

          
           }
 //muestro mediante clase
 
  });
              jQuery('.zumo_atorv').on( "click", function(){
                        if($('.zumo+div').is(":visible")){
               jQuery('.zumo+div').hide(); 
          }
          else{

             jQuery('.aco+div,.ami+div,.ant-cal+div,.antia+div,.antif+div,.asocl+div,.bar+div,.bez+div,.boc+div,.carb+div,.cicl+div,.cil+div,.colc+div,.dacl+div,.dan+div,.dron+div,.feno+div,.gim+adiv,.macro+div,.res+div,.rif+div,.sime+div,.tela+div,.zumo+div').hide(); //muestro mediante clase
              jQuery('.zumo+div').show();

          
           }
 //muestro mediante clase
 
 
  });

















    jQuery('#fluv_inter').on( "click", function() {
      $ionicScrollDelegate.scrollTop();
      jQuery('.sub_atorv_inter,.sub_fluv_inter,.sub_lov_inter,.sub_pitav_inter,.sub_prav_inter,.sub_rosuv_inter,.sub_simv_inter').hide();
           jQuery('.sub_fluv_inter').toggle(); //muestro mediante clase
  });
jQuery('.faco_fluv').on( "click", function() {
          if($('.faco+div').is(":visible")){
               jQuery('.faco+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.faco+div').show();

          
           }
 
  });


          




  jQuery('.fami_fluv').on( "click", function() {
           
           if($('.fami+div').is(":visible")){
               jQuery('.fami+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fami+div').show();

          
           }
 
  });
 jQuery('.fant_fluv').on( "click", function() {
          if($('.fant+div').is(":visible")){
               jQuery('.fant+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fant+div').show();

          
           }
 
  });
 jQuery('.fantia_fluv').on( "click", function() {
  if($('.fantia+div').is(":visible")){
               jQuery('.fantia+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fantia+div').show();
            }
 
  });
  jQuery('.fantif_fluv').on( "click", function() {
             if($('.fantif+div').is(":visible")){
               jQuery('.fantif+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fantif+div').show();
            }
 
  });
    jQuery('.fasoco_fluv').on( "click", function() {
            if($('.fasoco+div').is(":visible")){
               jQuery('.fasoco+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fasoco+div').show();
            }
 
  });
      jQuery('.fbar_fluv').on( "click", function() {
        if($('.fbar+div').is(":visible")){
               jQuery('.fbar+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fbar+div').show();
            }
 
  });
      jQuery('.fbez_fluv').on( "click", function() {
        if($('.fbez+div').is(":visible")){
               jQuery('.fbez+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fbez+div').show();
            }
 
  });
        jQuery('.fboc_fluv').on( "click", function() {
            if($('.fboc+div').is(":visible")){
               jQuery('.fboc+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fboc+div').show();
            }
 
  });
        jQuery('.fcarb_fluv').on( "click", function() {
          if($('.fcarb+div').is(":visible")){
               jQuery('.fcarb+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fcarb+div').show();
            }
 
  });
      jQuery('.fcicl_fluv').on( "click", function() {
        if($('.fcicl+div').is(":visible")){
               jQuery('.fcicl+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fcicl+div').show();
            }
 
  });
            jQuery('.fcil_fluv').on( "click", function() {
              if($('.fcicl+div').is(":visible")){
               jQuery('.fcicl+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fcicl+div').show();
            }
 
 
  });
                jQuery('.fcolc_fluv').on( "click", function() {
          if($('.fcolc+div').is(":visible")){
               jQuery('.fcolc+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fcolc+div').show();
            }
 
 
  });
              jQuery('.fdacl_fluv').on( "click", function() {
                if($('.fdacl+div').is(":visible")){
               jQuery('.fdacl+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fdacl+div').show();
            }
 
  });
                jQuery('.fdan_fluv').on( "click", function() {
            if($('.fdan+div').is(":visible")){
               jQuery('.fdan+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fdan+div').show();
            }
 
  });
                  jQuery('.fdron_fluv').on( "click", function() {
            if($('.fdron+div').is(":visible")){
               jQuery('.fdron+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fdron+div').show();
            }
 
  });
                  jQuery('.ferit_fluv').on( "click", function() {
            if($('.ferit+div').is(":visible")){
               jQuery('.ferit+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.ferit+div').show();
            }
 
  });
                  jQuery('.ffen_fluv').on( "click", function() {
            if($('.ffen+div').is(":visible")){
               jQuery('.ffen+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.ffen+div').show();
            }
 
  });

                jQuery('.fgem_fluv').on( "click", function() {
                  if($('.fgem+div').is(":visible")){
               jQuery('.fgem+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fgem+div').show();
            }
 
  });

              jQuery('.fmacro_fluv').on( "click", function() {
                if($('.fmacro+div').is(":visible")){
               jQuery('.fmacro+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fmacro+div').show();
            }
 
  });
                jQuery('.fres_fluv').on( "click", function() {
            if($('.fres+div').is(":visible")){
               jQuery('.fres+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fres+div').show();
            }
 
  });
      jQuery('.ffluc_fluv').on( "click", function() {
        if($('.ffluc+div').is(":visible")){
               jQuery('.ffluc+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.ffluc+div').show();
            }
 
  });
            jQuery('.fsime_fluv').on( "click", function() {
              if($('.fsime+div').is(":visible")){
               jQuery('.fsime+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fsime+div').show();
            }
 
  });
              jQuery('.ftela_fluv').on( "click", function() {
                if($('.ftela+div').is(":visible")){
               jQuery('.ftela+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.ftela+div').show();
            }
 
  });
              jQuery('.fzumo_fluv').on( "click", function() {

            if($('.ferit+div,.fzumo+div').is(":visible")){
               jQuery('.ftela+div').hide(); 
          }
          else{

             jQuery('.ferit+div,.ffluc+div,.faco+div,.fami+div,.fant-cal+div,.fantia+div,.fantif+div,.fasocl+div,.fbar+div,.fbez+div,.fboc+div,.fcarb+div,.fcicl+div,.fcil+div,.fcolc+div,.fdacl+div,.fdan+div,.fdron+div,.ffeno+div,.fgim+adiv,.fmacro+div,.fres+div,.frif+div,.fsime+div,.ftela+div,.fzumo+div').hide(); //muestro mediante clase
              jQuery('.fzumo+div').show();
            }
 
  });






      jQuery('#lov_inter').on( "click", function() {
        $ionicScrollDelegate.scrollTop();
        jQuery('.sub_atorv_inter,.sub_fluv_inter,.sub_lov_inter,.sub_pitav_inter,.sub_prav_inter,.sub_rosuv_inter,.sub_simv_inter').hide();
           jQuery('.sub_lov_inter').toggle(); //muestro mediante clase
  });
jQuery('.laco_lov').on( "click", function() {
          if($('.laco+div').is(":visible")){
               jQuery('.laco+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.laco+div').show();

          
           }
 
  });


          




  jQuery('.lami_lov').on( "click", function() {
           
           if($('.lami+div').is(":visible")){
               jQuery('.lami+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lami+div').show();

          
           }
 
  });
 jQuery('.lant_lov').on( "click", function() {
          if($('.lant+div').is(":visible")){
               jQuery('.lant+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lant+div').show();

          
           }
 
  });
 jQuery('.lantia_lov').on( "click", function() {
  if($('.lantia+div').is(":visible")){
               jQuery('.lantia+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lantia+div').show();
            }
 
  });
 jQuery('.lanta_lov').on( "click", function() {
  if($('.lanta+div').is(":visible")){
               jQuery('.lanta+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lanta+div').show();
            }
 
  });
  jQuery('.lantif_lov').on( "click", function() {
             if($('.lantif+div').is(":visible")){
               jQuery('.lantif+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lantif+div').show();
            }
 
  });
    jQuery('.lasoco_lov').on( "click", function() {
            if($('.lasoco+div').is(":visible")){
               jQuery('.lasoco+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lasoco+div').show();
            }
 
  });
    jQuery('.lasocl_lov').on( "click", function() {
            if($('.lasocl+div').is(":visible")){
               jQuery('.lasocl+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lasocl+div').show();
            }
 
  });
      jQuery('.lbar_lov').on( "click", function() {
        if($('.lbar+div').is(":visible")){
               jQuery('.lbar+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lbar+div').show();
            }
 
  });
      jQuery('.lbez_lov').on( "click", function() {
        if($('.lbez+div').is(":visible")){
               jQuery('.lbez+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lbez+div').show();
            }
 
  });
        jQuery('.lboc_lov').on( "click", function() {
            if($('.lboc+div').is(":visible")){
               jQuery('.lboc+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lboc+div').show();
            }
 
  });
        jQuery('.lcarb_lov').on( "click", function() {
          if($('.lcarb+div').is(":visible")){
               jQuery('.lcarb+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lcarb+div').show();
            }
 
  });
      jQuery('.lcicl_lov').on( "click", function() {
        if($('.lcicl+div').is(":visible")){
               jQuery('.lcicl+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lcicl+div').show();
            }
 
  });
            jQuery('.lcil_lov').on( "click", function() {
              if($('.lcil+div').is(":visible")){
               jQuery('.lcil+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lcil+div').show();
            }
 
 
  });
                jQuery('.lcol_lov').on( "click", function() {
          if($('.lcol+div').is(":visible")){
               jQuery('.lcol+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lcol+div').show();
            }
 
 
  });
              jQuery('.ldac_lov').on( "click", function() {
                if($('.ldac+div').is(":visible")){
               jQuery('.ldac+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.ldac+div').show();
            }
 
  });
                jQuery('.ldan_lov').on( "click", function() {
            if($('.ldan+div').is(":visible")){
               jQuery('.ldan+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.ldan+div').show();
            }
 
  });
                  jQuery('.ldron_lov').on( "click", function() {
            if($('.ldron+div').is(":visible")){
               jQuery('.ldron+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.ldron+div').show();
            }
 
  });
                  jQuery('.lerit_lov').on( "click", function() {
            if($('.lerit+div').is(":visible")){
               jQuery('.lerit+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lerit+div').show();
            }
 
  });
                  jQuery('.lfen_lov').on( "click", function() {
            if($('.lfen+div').is(":visible")){
               jQuery('.lfen+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lfen+div').show();
            }
 
  });

                jQuery('.lgem_lov').on( "click", function() {
                  if($('.lgem+div').is(":visible")){
               jQuery('.lgem+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lgem+div').show();
            }
 
  });

              jQuery('.lmacro_lov').on( "click", function() {
                if($('.lmacro+div').is(":visible")){
               jQuery('.lmacro+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lmacro+div').show();
            }
 
  });
                jQuery('.lres_lov').on( "click", function() {
            if($('.lres+div').is(":visible")){
               jQuery('.lres+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lres+div').show();
            }
 
  });

jQuery('.lrif_lov').on( "click", function() {
            if($('.lrif+div').is(":visible")){
               jQuery('.lrif+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lrif+div').show();
            }
 
  });




      jQuery('.lfluc_lov').on( "click", function() {
        if($('.lfluc+div').is(":visible")){
               jQuery('.lfluc+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lfluc+div').show();
            }
 
  });
            jQuery('.lsim_lov').on( "click", function() {
              if($('.lsim+div').is(":visible")){
               jQuery('.lsim+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lsim+div').show();
            }
 
  });
              jQuery('.ltel_lov').on( "click", function() {
                if($('.ltel+div').is(":visible")){
               jQuery('.ltel+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.ltel+div').show();
            }
 
  });
              jQuery('.lzumo_lov').on( "click", function() {

            if($('.lerit+div,.lzumo+div').is(":visible")){
               jQuery('.lzumo+div').hide(); 
          }
          else{

             jQuery('.lerit+div,.lfluc+div,.laco+div,.lami+div,.lanta+div,.lantia+div,.lantif+div,.lasocl+div,.lbar+div,.lbez+div,.lboc+div,.lcarb+div,.lcicl+div,.lcil+div,.lcol+div,.ldac+div,.ldan+div,.ldron+div,.lfeno+div,.lgim+adiv,.lmacro+div,.lres+div,.lrif+div,.lsim+div,.ltel+div,.lzumo+div').hide(); //muestro mediante clase
              jQuery('.lzumo+div').show();
            }
 
  });







        jQuery('#pitav_inter').on( "click", function() {
          $ionicScrollDelegate.scrollTop();
          jQuery('.sub_atorv_inter,.sub_fluv_inter,.sub_lov_inter,.sub_pitav_inter,.sub_prav_inter,.sub_rosuv_inter,.sub_simv_inter').hide();
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
            $ionicScrollDelegate.scrollTop();
            jQuery('.sub_atorv_inter,.sub_fluv_inter,.sub_lov_inter,.sub_pitav_inter,.sub_prav_inter,.sub_rosuv_inter,.sub_simv_inter').hide();
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
              $ionicScrollDelegate.scrollTop();
              jQuery('.sub_atorv_inter,.sub_fluv_inter,.sub_lov_inter,.sub_pitav_inter,.sub_prav_inter,.sub_rosuv_inter,.sub_simv_inter').hide();
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
                $ionicScrollDelegate.scrollTop();
                jQuery('.sub_atorv_inter,.sub_fluv_inter,.sub_lov_inter,.sub_pitav_inter,.sub_prav_inter,.sub_rosuv_inter,.sub_simv_inter').hide();
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
    $rootScope.estatinas_interaccion_baja=true;
    $rootScope.estatina_grupos_emi=true;
    $rootScope.estatina_grupos_eai=true;

}
if( $('.check_ator_rojo').is(':checked') ) {
    quitar_ator_inter_rojo=true;
    $rootScope.estatinas_interaccion_alta=true;
    $rootScope.estatina_grupos_emi_rojo=true;
    $rootScope.estatina_grupos_eai_rojo=true;
}

if( $('.check_fluv').is(':checked') ) {
    quitar_fluv_inter=true;
    $rootScope.estatinas_interaccion_baja=true;
    $rootScope.estatina_grupos_ebi=true;

}
if( $('.check_fluv_rojo').is(':checked') ) {
    quitar_fluv_inter_rojo=true;
    $rootScope.estatinas_interaccion_alta=true;
    $rootScope.estatina_grupos_ebi_rojo=true;
}

if( $('.check_lov').is(':checked') ) {
    quitar_lov_inter=true;
    $rootScope.estatinas_interaccion_baja=true;
    $rootScope.estatina_grupos_ebi=true;
}
if( $('.check_lov_rojo').is(':checked') ) {
    quitar_lov_inter_rojo=true;
    $rootScope.estatinas_interaccion_alta=true;
    $rootScope.estatina_grupos_ebi_rojo=true;
}

if( $('.check_pita').is(':checked') ) {
    quitar_pita_inter=true;
    $rootScope.estatinas_interaccion_baja=true;
    $rootScope.estatina_grupos=true;
    $rootScope.estatina_grupos_ebi=true;
    $rootScope.estatina_grupos_emi=true;
}
if( $('.check_pita_rojo').is(':checked') ) {
    quitar_pito_inter_rojo=true;
    $rootScope.estatinas_interaccion_alta=true;
     $rootScope.estatina_grupos_ebi_rojo=true;
    $rootScope.estatina_grupos_emi_rojo=true;
}

if( $('.check_prav').is(':checked') ) {
    quitar_pra_inter=true;
    $rootScope.estatinas_interaccion_baja=true;
    $rootScope.estatina_grupos_ebi=true;
}
if( $('.check_prav_rojo').is(':checked') ) {
    quitar_pra_inter_rojo=true;
    $rootScope.estatinas_interaccion_alta=true;
    $rootScope.estatina_grupos_ebi_rojo=true;
}

if( $('.check_rosu').is(':checked') ) {
    quitar_rosu_inter=true;
    $rootScope.estatinas_interaccion_baja=true;
    $rootScope.estatina_grupos_emi=true;
    $rootScope.estatina_grupos_eai=true;
}
if( $('.check_rosu_rojo').is(':checked') ) {
    quitar_rosu_inter_rojo=true;
    $rootScope.estatinas_interaccion_alta=true;
    $rootScope.estatina_grupos_emi_rojo=true;
    $rootScope.estatina_grupos_eai_rojo=true;
}

if( $('.check_sim').is(':checked') ) {
    quitar_sim_inter=true;
    $rootScope.estatinas_interaccion_baja=true;
    $rootScope.estatina_grupos_ebi=true;
    $rootScope.estatina_grupos_emi=true;


}
if( $('.check_sim_rojo').is(':checked') ) {
    quitar_sim_inter_rojo=true;
    $rootScope.estatinas_interaccion_alta=true;
    $rootScope.estatina_grupos_ebi_rojo=true;
    $rootScope.estatina_grupos_emi_rojo=true;
}

$state.go('menu_interacciones');
   console.log(quitar_ator_inter+","+quitar_fluv_inter+","+quitar_lov_inter+","+quitar_pito_inter+","+quitar_pra_inter+","+quitar_rosu_inter+","+quitar_sim_inter);
        
        
    }

              



})
















.controller('EstatinasDir',function($scope,$state,$rootScope){

var previo=$rootScope.previousState;
if (previo=="menu_interacciones"){
  jQuery('.procedencia1').toggle();
}
else{
  jQuery('.procedencia2').toggle();
}




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

$state.go('menu_interacciones');
   console.log(quitar_ator_inter+","+quitar_fluv_inter+","+quitar_lov_inter+","+quitar_pito_inter+","+quitar_pra_inter+","+quitar_rosu_inter+","+quitar_sim_inter);
        
        
    }

              



})















.controller('EstatinasVIH',function($scope,$state,$rootScope){

  if(rama_vih==true){
    jQuery('.estatinasbtn_vih1').toggle();
  }
   else if(rama_vih==false){
    jQuery('.estatinasbtn_vih2').toggle();
  }

var previo=$rootScope.previousState;





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

$state.go('menu_interacciones_vih');
   console.log(quitar_ator_inter+","+quitar_fluv_inter+","+quitar_lov_inter+","+quitar_pito_inter+","+quitar_pra_inter+","+quitar_rosu_inter+","+quitar_sim_inter);
        
        
    }

              



})













.controller('EstatinasVIHDir',function($scope,$state,$rootScope){

  if(rama_vih==true){
    jQuery('.estatinasbtn_vih1').toggle();
  }
   else if(rama_vih==false){
    jQuery('.estatinasbtn_vih2').toggle();
  }

var previo=$rootScope.previousState;





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

$state.go('menu_interacciones_vih');
   console.log(quitar_ator_inter+","+quitar_fluv_inter+","+quitar_lov_inter+","+quitar_pito_inter+","+quitar_pra_inter+","+quitar_rosu_inter+","+quitar_sim_inter);
        
        
    }

              



})












.controller('Fibratos',function($scope,$state,$rootScope,$rootScope,$ionicScrollDelegate){
  var previo=$rootScope.previousState;
if (previo=="menu_interacciones"){
  jQuery('.procedencia1').toggle();
}
else{
  jQuery('.procedencia2').toggle();
}

  jQuery('#atorv_inter').on( "click", function() {
          jQuery('.sub_atorv_inter,.sub_fluv_inter').hide();
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
      jQuery('.sub_atorv_inter,.sub_fluv_inter').hide();
           jQuery('.sub_fluv_inter').toggle(); //muestro mediante clase
  });
jQuery('.faco_fluv').on( "click", function() {
           jQuery('.faco+div').toggle(); //muestro mediante clase
 
  });

jQuery('.esta_fluv').on( "click", function() {
           jQuery('.esta+div').toggle(); //muestro mediante clase
 
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

// $scope.filtrar_inter = function() {




//  if( $('.check_ator').is(':checked') ) {
//     quitar_ator_inter=true;
// }
// if( $('.check_fluv').is(':checked') ) {
//     quitar_fluv_inter=true;
// }
// if( $('.check_lov').is(':checked') ) {
//     quitar_lov_inter=true;
// }
// if( $('.check_pita').is(':checked') ) {
//     quitar_pito_inter=true;
// }
// if( $('.check_prav').is(':checked') ) {
//     quitar_pra_inter=true;
// }
// if( $('.check_rosu').is(':checked') ) {
//     quitar_rosu_inter=true;
    
// }
// if( $('.check_sim').is(':checked') ) {
//     quitar_sim_inter=true;
//     eliminar_sim=true;
// }



// $state.go('menu_interacciones');
   
        
        
//     }



$scope.filtrar_inter = function() {

 if( $('.check_dicu').is(':checked') ) {
    quitar_feno_inter=true;
}
 if( $('.check_ciclo').is(':checked') ) {
    quitar_feno_inter=true;
}

 if( $('.check_aco_gem').is(':checked') ) {
    quitar_gem_inter=true;
}
 if( $('.check_rosi').is(':checked') ) {
    quitar_gem_inter=true;
}

 if( $('.check_esta_rojo').is(':checked') ) {
    quitar_gem_inter_rojo=true;
}
 if( $('.check_repa_rojo').is(':checked') ) {
    quitar_gem_inter_rojo=true;
}


  

 if( $('.check_ator').is(':checked') ) {
    quitar_ator_inter=true;
    $rootScope.ezetimive_interaccion_baja=true;

}
if( $('.check_ator_rojo').is(':checked') ) {
    quitar_ator_inter_rojo=true;
    $rootScope.ezetimive_interaccion_alta=true;
}

if( $('.check_fluv').is(':checked') ) {
    quitar_fluv_inter=true;
    $rootScope.ezetimive_interaccion_baja=true;
}
if( $('.check_fluv_rojo').is(':checked') ) {
    quitar_fluv_inter_rojo=true;
    $rootScope.ezetimive_interaccion_alta=true;
}

if( $('.check_lov').is(':checked') ) {
    quitar_lov_inter=true;
    $rootScope.ezetimive_interaccion_baja=true;
}
if( $('.check_lov_rojo').is(':checked') ) {
    quitar_lov_inter_rojo=true;
    $rootScope.ezetimive_interaccion_alta=true;
}

if( $('.check_pita').is(':checked') ) {
    quitar_pito_inter=true;
    $rootScope.ezetimive_interaccion_baja=true;
}
if( $('.check_pita_rojo').is(':checked') ) {
    quitar_pito_inter_rojo=true;
    $rootScope.ezetimive_interaccion_alta=true;
}

if( $('.check_prav').is(':checked') ) {
    quitar_pra_inter=true;
    $rootScope.ezetimive_interaccion_baja=true;
}
if( $('.check_prav_rojo').is(':checked') ) {
    quitar_pra_inter_rojo=true;
    $rootScope.ezetimive_interaccion_alta=true;
}

if( $('.check_rosu').is(':checked') ) {
    quitar_rosu_inter=true;
    $rootScope.ezetimive_interaccion_baja=true;
}
if( $('.check_rosu_rojo').is(':checked') ) {
    quitar_rosu_inter_rojo=true;
    $rootScope.ezetimive_interaccion_alta=true;
}

if( $('.check_sim').is(':checked') ) {
    quitar_sim_inter=true;
    $rootScope.ezetimive_interaccion_baja=true;
}
if( $('.check_sim_rojo').is(':checked') ) {
    quitar_sim_inter_rojo=true;
    $rootScope.ezetimive_interaccion_alta=true;
}

$state.go('menu_interacciones');
   console.log(quitar_ator_inter+","+quitar_fluv_inter+","+quitar_lov_inter+","+quitar_pito_inter+","+quitar_pra_inter+","+quitar_rosu_inter+","+quitar_sim_inter);
        
        
    }


              



})




















.controller('FibratosDir',function($scope,$state,$rootScope){
  var previo=$rootScope.previousState;
if (previo=="menu_interacciones"){
  jQuery('.procedencia1').toggle();
}
else{
  jQuery('.procedencia2').toggle();
}

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
jQuery('.esta_fluv').on( "click", function() {
           jQuery('.esta+div').toggle(); //muestro mediante clase
 
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



$state.go('menu_interacciones2');
   
        
        
    }

              



})


















.controller('FibratosVIH',function($scope,$state,$rootScope){
  if(rama_vih==true){
    jQuery('.estatinasbtn_vih1').toggle();
  }
   else if(rama_vih==false){
    jQuery('.estatinasbtn_vih2').toggle();
  }
  var previo=$rootScope.previousState;
if (previo=="menu_interacciones"){
  jQuery('.procedencia1').toggle();
}
else{
  jQuery('.procedencia2').toggle();
}

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
jQuery('.esta_fluv').on( "click", function() {
           jQuery('.esta+div').toggle(); //muestro mediante clase
 
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



$state.go('menu_interacciones_vih');
   
        
        
    }

              



})








.controller('FibratosVIHDir',function($scope,$state,$rootScope){
  if(rama_vih==true){
    jQuery('.estatinasbtn_vih1').toggle();
  }
   else if(rama_vih==false){
    jQuery('.estatinasbtn_vih2').toggle();
  }
  var previo=$rootScope.previousState;
if (previo=="menu_interacciones"){
  jQuery('.procedencia1').toggle();
}
else{
  jQuery('.procedencia2').toggle();
}

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
jQuery('.esta_fluv').on( "click", function() {
           jQuery('.esta+div').toggle(); //muestro mediante clase
 
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



$state.go('menu_interacciones_vih');
   
        
        
    }

              



})










.controller('EzetimibeVIH',function($scope,$state,$rootScope){
  if(rama_vih==true){
    jQuery('.estatinasbtn_vih1').toggle();
  }
   else if(rama_vih==false){
    jQuery('.estatinasbtn_vih2').toggle();
  }
  var previo=$rootScope.previousState;
if (previo=="menu_interacciones"){
  jQuery('.procedencia1').toggle();
}
else{
  jQuery('.procedencia2').toggle();
}

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



$state.go('menu_interacciones_vih');
   
        
        
    }

              



})












.controller('EzetimibeVIHDir',function($scope,$state,$rootScope){
  if(rama_vih==true){
    jQuery('.estatinasbtn_vih1').toggle();
  }
   else if(rama_vih==false){
    jQuery('.estatinasbtn_vih2').toggle();
  }
  var previo=$rootScope.previousState;
if (previo=="menu_interacciones"){
  jQuery('.procedencia1').toggle();
}
else{
  jQuery('.procedencia2').toggle();
}

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



$state.go('menu_interacciones_vih');
   
        
        
    }

              



})
























.controller('RiesgoAltoVIH',function($scope,$state){

if(unidad_seleccionada=="1"){
    $("select#unidades_totales_alto_vih").val("0.02586");
    document.getElementById("ldl_act_res_alto_vih").value=ldlactual*0.02586;
    document.getElementById("ldl_obj_res_alto_vih").value=objetivo_vih*0.02586;
  }
  else{

  document.getElementById("ldl_act_res_alto_vih").value=ldlactual;
  document.getElementById("ldl_obj_res_alto_vih").value=objetivo_vih;
}


  // document.getElementById("ldl_act_res_alto_vih").value=ldlactual;
  // document.getElementById("ldl_obj_res_alto_vih").value=objetivo_vih;
  // // ldlobjetivo=100;

  $scope.reduccion = function() {
    if(ldlactual<ldlobjetivo_vih){
      $state.go('home');
    }
    else{
      $state.go('reduccion_vih');
    }

             
        
        
    }
    var unidad=document.getElementById("unidades_totales_alto_vih").value;

  $( "#unidades_totales_alto_vih" ).change(function() {
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

  if(unidad_seleccionada=="1"){
    $("select#unidades_totales_moderado_alto_vih").val("0.02586");
    document.getElementById("ldl_act_res_moderado_alto_vih").value=ldlactual*0.02586;
    document.getElementById("ldl_obj_res_moderado_alto_vih").value=objetivo_vih*0.02586;
  }
  else{

  document.getElementById("ldl_act_res_moderado_alto_vih").value=ldlactual;
  document.getElementById("ldl_obj_res_moderado_alto_vih").value=objetivo_vih;
}



  // document.getElementById("ldl_act_res_moderado_alto_vih").value=ldlactual;
  // document.getElementById("ldl_obj_res_moderado_alto_vih").value=objetivo_vih;
  // ldlobjetivo=100;

  $scope.reduccion = function() {

             if(ldlactual<ldlobjetivo_vih){
      $state.go('home');
    }
    else{
      $state.go('reduccion_vih');
    }
        
        
    }
    var unidad=document.getElementById("unidades_totales_moderado_alto_vih").value;

  $( "#unidades_totales_moderado_alto" ).change(function() {
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

if(unidad_seleccionada=="1"){
    $("select#unidades_totales_moderado_bajo_vih").val("0.02586");
    document.getElementById("ldl_act_res_moderado_bajo_vih").value=ldlactual*0.02586;
    document.getElementById("ldl_obj_res_moderado_bajo_vih").value=objetivo_vih*0.02586;
  }
  else{

  document.getElementById("ldl_act_res_moderado_bajo_vih").value=ldlactual;
  document.getElementById("ldl_obj_res_moderado_bajo_vih").value=objetivo_vih;
}

  // document.getElementById("ldl_act_res_moderado_bajo_vih").value=ldlactual;
  // document.getElementById("ldl_obj_res_moderado_bajo_vih").value=objetivo_vih;
  // ldlobjetivo=130;

  $scope.reduccion = function() {

             if(ldlactual<ldlobjetivo_vih){
      $state.go('home');
    }
    else{
      $state.go('reduccion_vih');
    }
        
    }
    var unidad=document.getElementById("unidades_totales_moderado_bajo_vih").value;

  $( "#unidades_totales_moderado_alto_vih" ).change(function() {
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

if(unidad_seleccionada=="1"){
    $("select#unidades_totales_bajo_vih").val("0.02586");
    document.getElementById("ldl_act_res_bajo_vih").value=ldlactual*0.02586;
    document.getElementById("ldl_obj_res_bajo_vih").value=objetivo_vih*0.02586;
  }
  else{

  document.getElementById("ldl_act_res_bajo_vih").value=ldlactual;
  document.getElementById("ldl_obj_res_bajo_vih").value=objetivo_vih;
}


if(ldlactual>objetivo_vih){
  jQuery('.riesgo').toggle();
  console.log("RIESGO");
}
else{
  jQuery('.no_riesgo').toggle();
  console.log("NO RIESGO");
}


  // document.getElementById("ldl_act_res_bajo_vih").value=ldlactual;
  // document.getElementById("ldl_obj_res_bajo_vih").value=objetivo_vih;
  // ldlobjetivo=130;

  $scope.reduccion = function() {

             if(ldlactual<ldlobjetivo_vih){
      $state.go('home');
    }
    else{
      $state.go('reduccion_vih');
    }
        
        
    }
    var unidad=document.getElementById("unidades_totales_bajo_vih").value;

  $( "#unidades_totales_bajo_vih" ).change(function() {
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

$scope.ir_modal_mialgias = function() {
        $state.go('modal_mialgias');
        
    }

$scope.sintomatico = function() {
  if( $('.content_rabdomiolisis').is(":visible") ){
              $('#rabdomiolisis').attr('checked', false);
    jQuery('.content_rabdomiolisis').toggle();
}

             jQuery('.content_sintomatico').toggle();
        
        
    }

$scope.persisten = function() {
  if( $('.mejoran_sintomas').is(":visible") ){
              $('#mejoran').attr('checked', false);
    jQuery('.mejoran_sintomas').toggle();
}

             jQuery('.persisten_sintomas').toggle();
        
        
    }

$scope.mejoran = function() {
  if( $('.persisten_sintomas').is(":visible") ){
              $('#persisten').attr('checked', false);
    jQuery('.persisten_sintomas').toggle();
}

             jQuery('.mejoran_sintomas').toggle();
        
        
    }

$scope.asintomatico = function() {
  if( $('.reaparecen_sintomas').is(":visible") ){
              $('#reaparecen_sintomas').attr('checked', false);
              jQuery('.reaparecen_sintomas').toggle();
    
}

             jQuery('.asintomatico').toggle();
        
        
    }

$scope.reaparecen_sintomas = function() {
  if( $('.asintomatico').is(":visible") ){
              $('#asintomatico').attr('checked', false);
               jQuery('.asintomatico').toggle();
    
}
            
             jQuery('.reaparecen_sintomas').toggle();
        
        
    }


$scope.rabdomiolisis = function() {

             jQuery('.content_rabdomiolisis').toggle();
             if( $('.content_sintomatico').is(":visible") ){
              $('#sintomatico').attr('checked', false);
    jQuery('.content_sintomatico').toggle();
}
             
        
        
    }



})


.controller('MialgiasScore',function($scope,$state){

$scope.score_mialgias = function() {
var rates = document.getElementsByName('patron_distribucion');
var patron_distribucion2;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        patron_distribucion2 = rates[i].value;
    }
}


var rates = document.getElementsByName('patron_temporal');
var patron_temporal2;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        patron_temporal2 = rates[i].value;
    }
}


var rates = document.getElementsByName('retirada_estatina');
var retirada_estatina2;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        retirada_estatina2 = rates[i].value;
    }
}


var rates = document.getElementsByName('reintroduccion_estatina');
var reintroduccion_estatina2;
for(var i = 0; i < rates.length; i++){
    if(rates[i].checked){
        reintroduccion_estatina2 = rates[i].value;
    }
}

patron_distribucion2=parseInt(patron_distribucion2);
patron_temporal2=parseInt(patron_temporal2);
retirada_estatina2=parseInt(retirada_estatina2);
reintroduccion_estatina2=parseInt(reintroduccion_estatina2);

  
  // var patron_distribucion=parseInt(document.getElementById("patron_distribucion").value);
  // var patron_temporal=parseInt(document.getElementById("patron_temporal").value);
  // var retirada_estatina=parseInt(document.getElementById("retirada_estatina").value);
  // var reintroduccion_estatina=parseInt(document.getElementById("reintroduccion_estatina").value);

  total_score_mialgias=patron_distribucion2+patron_temporal2+retirada_estatina2+reintroduccion_estatina2;

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
  console.log(patron_distribucion2);
  console.log(patron_temporal2);
  console.log(retirada_estatina2);
  console.log(reintroduccion_estatina2);

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
  if( $('.content_comorbilidades').is(":visible") ){
              $('#comorbilidades').attr('checked', false);
    jQuery('.content_comorbilidades').toggle();
}
  if( $('.content_historia_relacionada').is(":visible") ){
              $('#historia_relacionada').attr('checked', false);
    jQuery('.content_historia_relacionada').toggle();
}
  if( $('.content_genetica').is(":visible") ){
              $('#genetica').attr('checked', false);
    jQuery('.content_genetica').toggle();
}
  if( $('.content_otros_factores').is(":visible") ){
              $('#otros_factores').attr('checked', false);
    jQuery('.content_otros_factores').toggle();
}

             jQuery('.content_antropometricos').toggle();
        
        
    }

$scope.comorbilidades = function() {
  if( $('.content_antropometricos').is(":visible") ){
              $('#antropometricos').attr('checked', false);
    jQuery('.content_antropometricos').toggle();
}
  if( $('.content_historia_relacionada').is(":visible") ){
              $('#historia_relacionada').attr('checked', false);
    jQuery('.content_historia_relacionada').toggle();
}
  if( $('.content_genetica').is(":visible") ){
              $('#genetica').attr('checked', false);
    jQuery('.content_genetica').toggle();
}
  if( $('.content_otros_factores').is(":visible") ){
              $('#otros_factores').attr('checked', false);
    jQuery('.content_otros_factores').toggle();
}

             jQuery('.content_comorbilidades').toggle();
        
        
    }

$scope.historia_relacionada = function() {
  if( $('.content_antropometricos').is(":visible") ){
              $('#antropometricos').attr('checked', false);
    jQuery('.content_antropometricos').toggle();
}
  if( $('.content_comorbilidades').is(":visible") ){
              $('#comorbilidades').attr('checked', false);
    jQuery('.content_comorbilidades').toggle();
}
  if( $('.content_genetica').is(":visible") ){
              $('#genetica').attr('checked', false);
    jQuery('.content_genetica').toggle();
}
  if( $('.content_otros_factores').is(":visible") ){
              $('#otros_factores').attr('checked', false);
    jQuery('.content_otros_factores').toggle();
}

             jQuery('.content_historia_relacionada').toggle();
        
        
    }

$scope.genetica = function() {

  if( $('.content_antropometricos').is(":visible") ){
              $('#antropometricos').attr('checked', false);
    jQuery('.content_antropometricos').toggle();
}
  if( $('.content_comorbilidades').is(":visible") ){
              $('#comorbilidades').attr('checked', false);
    jQuery('.content_comorbilidades').toggle();
}
  if( $('.content_historia_relacionada').is(":visible") ){
              $('#historia_relacionada').attr('checked', false);
    jQuery('.content_historia_relacionada').toggle();
}
  if( $('.content_otros_factores').is(":visible") ){
              $('#otros_factores').attr('checked', false);
    jQuery('.content_otros_factores').toggle();
}

             jQuery('.content_genetica').toggle();
        
        
    }

$scope.otros_factores = function() {
  if( $('.content_antropometricos').is(":visible") ){
              $('#antropometricos').attr('checked', false);
    jQuery('.content_antropometricos').toggle();
}
  if( $('.content_comorbilidades').is(":visible") ){
              $('#comorbilidades').attr('checked', false);
    jQuery('.content_comorbilidades').toggle();
}
  if( $('.content_historia_relacionada').is(":visible") ){
              $('#historia_relacionada').attr('checked', false);
    jQuery('.content_historia_relacionada').toggle();
}
   if( $('.content_genetica').is(":visible") ){
              $('#genetica').attr('checked', false);
    jQuery('.content_genetica').toggle();
}

             jQuery('.content_otros_factores').toggle();
        
        
}



  
  

})



.controller('InteraccionesMialgias',function($scope,$state){


$scope.antropometricos = function() {
  if( $('.content_historia_relacionada').is(":visible") ){
              $('#historia_relacionada').attr('checked', false);
    jQuery('.content_historia_relacionada').toggle();
}
  if( $('.content_comorbilidades').is(":visible") ){
              $('#comorbilidades').attr('checked', false);
    jQuery('.content_comorbilidades').toggle();
}

             jQuery('.content_antropometricos').toggle();
        
        
    }

$scope.comorbilidades = function() {
  if( $('.content_historia_relacionada').is(":visible") ){
              $('#historia_relacionada').attr('checked', false);
    jQuery('.content_historia_relacionada').toggle();
}
  if( $('.content_antropometricos').is(":visible") ){
              $('#antropometricos').attr('checked', false);
    jQuery('.content_antropometricos').toggle();
}

             jQuery('.content_comorbilidades').toggle();
        
        
    }

$scope.historia_relacionada = function() {
  if( $('.content_comorbilidades').is(":visible") ){
              $('#comorbilidades').attr('checked', false);
    jQuery('.content_comorbilidades').toggle();
}
  if( $('.content_antropometricos').is(":visible") ){
              $('#antropometricos').attr('checked', false);
    jQuery('.content_antropometricos').toggle();
}

             jQuery('.content_historia_relacionada').toggle();
        
        
    }
  

})


.controller('FormDiabetogenicidad',function($scope,$state,$ionicPopup,$ionicScrollDelegate){
document.getElementById('edad_diabet').options.selectedIndex=edad_diabet_index;
document.getElementById('sexo_diabet').options.selectedIndex=sexo_diabet_index;

$scope.ir_modal_glucemias_elevadas = function() {
  $(".super_modalglucemias").toggle();
  $(".calcular").toggle();
  
  $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
}


  $scope.selector_sexo = function() {

      var selector_sexo2=document.getElementById("sexo_diabet").value;
      
        if(selector_sexo2=="M"){
          jQuery('.perimetro_hombre_diabet').hide();
          jQuery('.perimetro_mujer_diabet').show();
          jQuery('.perimetro_sin_diabet').hide();
        }
        else if(selector_sexo2=="H"){
          jQuery('.perimetro_hombre_diabet').show();
          jQuery('.perimetro_mujer_diabet').hide();
          jQuery('.perimetro_sin_diabet').hide();
        }
        else if(selector_sexo2=="."){
var alertPopup = $ionicPopup.alert({
     title: '¡Atención!',
     template: 'Seleccione antes el sexo del paciente'
   });

   alertPopup.then(function(res) {
     
   });
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
  calc_diabeto_total2=calc_diabeto_total;

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

if((total_criterios_het>=0)&&(total_criterios_het<3)){
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


.controller('ModalDiagnosticoCombinado2',function($scope,$state){


})

.controller('FormTratamiento',function($scope,$state,$ionicPopup){
var unidad=document.getElementById("ldl-actual-unidades").value;

  $( "#ldl-actual-unidades" ).change(function() {
  var factor = parseFloat(document.getElementById("ldl-actual-unidades").value);
  
  var ldl = parseFloat(document.getElementById("ldl-actual").value);
  ldlactual = parseFloat(document.getElementById("ldl-actual").value);
  var ldlconv=ldl*factor;
  document.getElementById("ldl-actual").value=ldlconv.toFixed(2);
  
});

$scope.ir_info_tratamiento_alto = function() {
  $state.go("modal_info_tratamiento_alto");
}  


   $scope.procesar2 = function() {

    ldlactual=document.getElementById("ldl-actual").value;

    if(ldlactual>0){

    if($("#riesgo_muy_alto").is(':checked')) {  
            ldlobjetivo=document.getElementById("riesgo_muy_alto").value;
            tipo_riesgo="riesgomuyalto";
        }
    if($("#riesgo_alto").is(':checked')) {  
            ldlobjetivo=document.getElementById("riesgo_alto").value;
            tipo_riesgo="riesgoalto";
        }
    if($("#riesgo_moderado").is(':checked')) {  
            ldlobjetivo=document.getElementById("riesgo_moderado").value;
            tipo_riesgo="riesgomedio";
        }

      $state.go('form_tratamiento2');

    }
    else if(ldlactual==0){

        var alertPopup = $ionicPopup.alert({
     title: '¡Atención!',
     template: 'No ha completado el dato de LDL actual'
   });

   alertPopup.then(function(res) {
     
   });

    }
      
   }



})


.controller('FormTratamiento2',function($scope,$state){
    console.log(ldlactual);
    console.log(ldlobjetivo);

  var ldlactual2=ldlactual;
  var ldlobjetivo2=parseInt(ldlobjetivo);

    document.getElementById("ldl_act_tratamiento2").value=ldlactual2;
  document.getElementById("ldl_obj_tratamiento2").value=ldlobjetivo2;
  // var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlactual))*100);
  // document.getElementById("porcentaje_red_tratamiento2").value=porc_reducc+"%";

  if(ldlactual2 > ldlobjetivo2){
    console.log(ldlactual2);
    console.log(ldlobjetivo2);
    console.log("PACIENTE NO CUMPLE CON OBJETIVO");
     var porc_reducc=100-parseInt((parseFloat(ldlobjetivo2)/parseFloat(ldlactual2))*100);
  document.getElementById("porcentaje_red_tratamiento2").value=porc_reducc+"%";
    $(".paciente_no_cumple").show();
    $(".avanzar").show();

  }
  if(ldlactual2 < ldlobjetivo2){
    console.log(ldlactual2);
    console.log(ldlobjetivo2);
    console.log("PACIENTE SI CUMPLE CON OBJETIVO");
    $(".paciente_cumple").show();
    $(".finalizar_hiper").show();
  }



})


.controller('MenuInteracciones',function($scope,$state,$rootScope){



// $scope.volver = function() {
//   if(sin_estatinas==true){
//   $state.go("tratamientoinicio_sin_estatina");
//   }
//   else if(sin_ezetimive==true){
//     $state.go("tratamientoinicio_sin_ezetimive");
//   }
//   else if(sin_fibratos==true){
//     $state.go("tratamientoinicio_sin_fibratos");
//   }
//   else if(sin_ipcsk9==true){
//     $state.go("tratamientoinicio_sin_ipcsk9");
//   }
//   else if(sin_resina==true){
//     $state.go("tratamientoinicio_sin_resina");
//   }
//   else{
//     $state.go("tratamientoinicio2");
//   }
  

// }

$scope.volver = function() {
  proviene_interacciones=true;

    $state.go("grupos_sin_tratamiento");
  
  
}

})


.controller('MenuInteraccionesVIH',function($scope,$state,$rootScope){

$scope.volver = function() {
  
  $state.go("tratamientoinicio2vih");

}

})

.controller('MenuInteraccionesVIHpre',function($scope,$state,$rootScope){

$scope.volver = function() {
  
  $state.go("tratamientoinicio2vih");

}

})

.controller('MenuInteracciones2',function($scope,$state,$rootScope){


})

.controller('PreMenuInteracciones2',function($scope,$state,$rootScope){


})


.controller('ModalTratamientoPrevio',function($scope,$state,$rootScope){


})


.controller('ModalMialgias',function($scope,$state,$rootScope){


})

.controller('ModalGlucemiasElevadas',function($scope,$state,$rootScope){


})

.controller('ModalInfoTratamientoAlto',function($scope,$state,$rootScope){


})

.controller('ModalEsquema',function($scope,$state,$rootScope){


})


.controller('ReduccionTrat',function($scope,$state){

$scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  if(unidad_seleccionada=="1"){
    $("select#unidades_totales").val("0.02586");
    document.getElementById("ldl_act_tratamiento0").value=ldlactual*0.02586;
    document.getElementById("ldl_act_red").value=ldlrectificado*0.02586;
    document.getElementById("ldl_obj_red").value=ldlobjetivo*0.02586;
  }
  else{

    document.getElementById("ldl_act_tratamiento0").value=ldlactual;
  document.getElementById("ldl_act_red").value=ldlrectificado;
  document.getElementById("ldl_obj_red").value=ldlobjetivo;
}


// document.getElementById("ldl_act_red").value=ldlactual;
//   document.getElementById("ldl_obj_red").value=ldlobjetivo;  
  var porc_reducc=100-parseInt((parseFloat(ldlobjetivo)/parseFloat(ldlrectificado))*100);
  document.getElementById("porcentaje_red").value=porc_reducc+"%";

})



.controller('ReduccionTratVIH',function($scope,$state){

$scope.ir_info_previo = function() {
    $state.go('modal_tratamiento_previo');
  }

  if(unidad_seleccionada=="1"){
    $("select#unidades_totales").val("0.02586");
    document.getElementById("ldl_act_tratamiento0").value=ldlactual*0.02586;
    document.getElementById("ldl_act_red").value=ldlrectificado*0.02586;
    document.getElementById("ldl_obj_red_vih").value=objetivo_vih*0.02586;
  }
  else{

    document.getElementById("ldl_act_tratamiento0").value=ldlactual;
  document.getElementById("ldl_act_red").value=ldlrectificado;
  document.getElementById("ldl_obj_red_vih").value=objetivo_vih;
}


// document.getElementById("ldl_act_red").value=ldlactual;
//   document.getElementById("ldl_obj_red").value=ldlobjetivo;  
  var porc_reducc=100-parseInt((parseFloat(objetivo_vih)/parseFloat(ldlactual))*100);
  document.getElementById("porcentaje_red_vih").value=porc_reducc+"%";

})


.controller('Login',function($scope,$state,$rootScope){

if(pantallaactual=="login"){
  $(".bar-footer").hide();
}



$scope.incorrecto = function() {
  
  password2=document.getElementById("contra").value;

  if( $('#condiciones').prop('checked') ) {
    


    if (password2<"lipidapp15001"&&password2>"lipidapp00000") {

       $state.go('version_pruebas');
         console.log("Correcto");

      } else {

            console.log("Incorrecto");
            // $("#contra").attr("placeholder", "Contraseña erronea");
            $(".pass_fail").show();
            document.getElementById("contra").value=null;

      }

    }
    else{
      $(".aviso_cond").show();
      $(".logotipo").css("bottom", "10%");
    }
}


$scope.ver_cond = function() {
  $state.go('condiciones_legales');
}

})


.controller('condiciones_legales',function($scope,$state,$rootScope){

  if(pantallaactual=="condiciones_legales"){
  $(".menu_icon_bottom").hide();
}

})



.controller('version_pruebas',function($scope,$state){

 
})














