
    function showHipertension() {
        element = document.getElementById("HTA");
        
        check = document.getElementById("hipertension");
        if (check.checked) {
             element.style.display='block';
        }
        else if(!(check.checked)){
            element.style.display='none';
        }

        if($("#frcv").is(':checked')) {  
            document.getElementById('frcv').checked=false;
        }

       




    }


function showDiabetesFRCV(){

   
    
           if($('#LOD').is(":visible")){
            document.getElementById('frcv').checked=true;

           }
           
         

}


    function showDiabetes() {
        if($("#tabaquismo").is(':checked')) {  
            check1_imc=true;
        }
        if($("#hipertension").is(':checked')) {  
            check2_imc=true;

        }
        if($("#sobrepeso").is(':checked')) {  
            check9_imc=true;
        }
        element = document.getElementById("LOD");
        if ((check1_imc==true)||(check2_imc==true)||(check9_imc==true)) {
            document.getElementById('frcv').checked=true;
        }
        
        check = document.getElementById("diabetes");
        if (check.checked) {
             element.style.display='block';
        }
        else if(!(check.checked)){
            element.style.display='none';
        }
    }


function showDislipemia() {
        element = document.getElementById("HIPERCOL");
        
        check = document.getElementById("dislipemia");
        if (check.checked) {
             element.style.display='block';
        }
        else if(!(check.checked)){
            element.style.display='none';
        }
    }

var totalimcRounded;

function cerrar_modal_vih(){

    jQuery('.super_modalvih').hide();
    jQuery('.continuar_vih').show();


}














$(document).ready(function(){





  jQuery('.menu_bottom').on( "click", function() {
    
           jQuery('.menu_bottom').toggle();
           
         });


   jQuery('.fondo_menu_bottom').on( "click", function() {
   
           jQuery('.menu_bottom').toggle();
          
         });

 

  

});

function menu_inferior(){
    jQuery('.menu_bottom').toggle();
}


function showEstatina() {
    jQuery('.selector_medicamentos').hide();
    $("#ezetimibe").prop("checked", false);
    $("#ipcsk9").prop("checked", false);
    $("#resinas").prop("checked", false);
    $("#fibratos").prop("checked", false);
        
        check = document.getElementById("estatinas");
        if (check.checked) {
             $(".sel_estatinas").css("display", "block");
        }
        else if(!(check.checked)){
            $(".sel_estatinas").css("display", "none");
        }
    }


function showEzetimibe() {

    jQuery('.selector_medicamentos').hide();
    $("#estatinas").prop("checked", false);
    $("#ipcsk9").prop("checked", false);
    $("#resinas").prop("checked", false);
    $("#fibratos").prop("checked", false);
    
        
        check = document.getElementById("ezetimibe");
        if (check.checked) {
             $(".sel_ezetimibe").css("display", "block");
        }
        else if(!(check.checked)){
            $(".sel_ezetimibe").css("display", "none");
        }
    }

function showIPCSK9() {
    jQuery('.selector_medicamentos').hide();
    $("#estatinas").prop("checked", false);
    $("#ezetimibe").prop("checked", false);
    $("#resinas").prop("checked", false);
    $("#fibratos").prop("checked", false);
        
        check = document.getElementById("ipcsk9");
        if (check.checked) {
             $(".sel_ipcsk9").css("display", "block");
        }
        else if(!(check.checked)){
            $(".sel_ipcsk9").css("display", "none");
        }
    }

function showResinas() {
    jQuery('.selector_medicamentos').hide();
    $("#estatinas").prop("checked", false);
    $("#ipcsk9").prop("checked", false);
    $("#ezetimibe").prop("checked", false);
    $("#fibratos").prop("checked", false);
    
        
        check = document.getElementById("resinas");
        if (check.checked) {
             $(".sel_resinas").css("display", "block");
        }
        else if(!(check.checked)){
            $(".sel_resinas").css("display", "none");
        }
    }


function showFibratos() {
    jQuery('.selector_medicamentos').hide();
    $("#ezetimibe").prop("checked", false);
    $("#ipcsk9").prop("checked", false);
    $("#resinas").prop("checked", false);
    $("#estatinas").prop("checked", false);
    
        
        check = document.getElementById("fibratos");
        if (check.checked) {
             $(".sel_fibratos").css("display", "block");
        }
        else if(!(check.checked)){
            $(".sel_fibratos").css("display", "none");
        }
    }


function showEstatinaContra() {
    jQuery('.ocultar_contra').hide();

    $("#contra_rel_estatinas").prop("checked", false);
    $("#contra_abs_ezetimibe").prop("checked", false);
    $("#contra_abs_fibratos").prop("checked", false);
    $("#contra_abs_resinas").prop("checked", false);
    $("#contra_abs_ipcsk9").prop("checked", false);
        
        check = document.getElementById("contra_abs_estatinas");
        if (check.checked) {
             $(".lista_contra_abs_estatinas").css("display", "block");
        }
        else if(!(check.checked)){
            $(".lista_contra_abs_estatinas").css("display", "none");
        }
    }

function showEstatinaContraRel() {
    jQuery('.ocultar_contra').hide();
        $("#contra_abs_estatinas").prop("checked", false);
    $("#contra_abs_ezetimibe").prop("checked", false);
    $("#contra_abs_fibratos").prop("checked", false);
    $("#contra_abs_resinas").prop("checked", false);
    $("#contra_abs_ipcsk9").prop("checked", false);
        
        check = document.getElementById("contra_rel_estatinas");
        if (check.checked) {
             $(".lista_contra_rel_estatinas").css("display", "block");
        }
        else if(!(check.checked)){
            $(".lista_contra_rel_estatinas").css("display", "none");
        }
    }

function showEzetimibeContra() {
    jQuery('.ocultar_contra').hide();
        $("#contra_abs_estatinas").prop("checked", false);
    $("#contra_rel_estatinas").prop("checked", false);
    $("#contra_abs_fibratos").prop("checked", false);
    $("#contra_abs_resinas").prop("checked", false);
    $("#contra_abs_ipcsk9").prop("checked", false);
        
        check = document.getElementById("contra_abs_ezetimibe");
        if (check.checked) {
             $(".lista_contra_abs_ezetimibe").css("display", "block");
        }
        else if(!(check.checked)){
            $(".lista_contra_abs_ezetimibe").css("display", "none");
        }
    }

function showFibratosContra() {
    jQuery('.ocultar_contra').hide();

        $("#contra_abs_estatinas").prop("checked", false);
    $("#contra_rel_estatinas").prop("checked", false);
    $("#contra_abs_ezetimibe").prop("checked", false);
    $("#contra_abs_resinas").prop("checked", false);
    $("#contra_abs_ipcsk9").prop("checked", false);
        
        check = document.getElementById("contra_abs_fibratos");
        if (check.checked) {
             $(".lista_contra_abs_fibratos").css("display", "block");
        }
        else if(!(check.checked)){
            $(".lista_contra_abs_fibratos").css("display", "none");
        }
    }

function showResinasContra() {


    
        jQuery('.ocultar_contra').hide();
            $("#contra_abs_estatinas").prop("checked", false);
    $("#contra_rel_estatinas").prop("checked", false);
    $("#contra_abs_ezetimibe").prop("checked", false);
    $("#contra_abs_fibratos").prop("checked", false);
    $("#contra_abs_ipcsk9").prop("checked", false);
        check = document.getElementById("contra_abs_resinas");
        if (check.checked) {
             $(".lista_contra_abs_resinas").css("display", "block");
        }
        else if(!(check.checked)){
            $(".lista_contra_abs_resinas").css("display", "none");
        }
    }

function showIPCSK9Contra() {
    jQuery('.ocultar_contra').hide();

        $("#contra_abs_estatinas").prop("checked", false);
    $("#contra_rel_estatinas").prop("checked", false);
    $("#contra_abs_ezetimibe").prop("checked", false);
    $("#contra_abs_fibratos").prop("checked", false);
    $("#contra_abs_resinas").prop("checked", false);
        
        check = document.getElementById("contra_abs_ipcsk9");
        if (check.checked) {
             $(".lista_contra_abs_ipcsk9").css("display", "block");
        }
        else if(!(check.checked)){
            $(".lista_contra_abs_ipcsk9").css("display", "none");
        }
    }













