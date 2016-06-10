
    function showHipertension() {
        element = document.getElementById("HTA");
        
        check = document.getElementById("hipertension");
        if (check.checked) {
             element.style.display='block';
        }
        else if(!(check.checked)){
            element.style.display='none';
        }
    }

    function showDiabetes() {
        element = document.getElementById("LOD");
        
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


$(document).ready(function(){
  jQuery('.menu_bottom').on( "click", function() {
    
           jQuery('.menu_bottom').toggle(); //muestro mediante clase
         });

});

function menu_inferior(){
    jQuery('.menu_bottom').toggle();
}


function showEstatina() {
    
        
        check = document.getElementById("estatinas");
        if (check.checked) {
             $(".sel_estatinas").css("display", "block");
        }
        else if(!(check.checked)){
            $(".sel_estatinas").css("display", "none");
        }
    }


function showEzetimibe() {
    
        
        check = document.getElementById("ezetimibe");
        if (check.checked) {
             $(".sel_ezetimibe").css("display", "block");
        }
        else if(!(check.checked)){
            $(".sel_ezetimibe").css("display", "none");
        }
    }

function showIPCSK9() {
    
        
        check = document.getElementById("ipcsk9");
        if (check.checked) {
             $(".sel_ipcsk9").css("display", "block");
        }
        else if(!(check.checked)){
            $(".sel_ipcsk9").css("display", "none");
        }
    }

function showResinas() {
    
        
        check = document.getElementById("resinas");
        if (check.checked) {
             $(".sel_resinas").css("display", "block");
        }
        else if(!(check.checked)){
            $(".sel_resinas").css("display", "none");
        }
    }


function showFibratos() {
    
        
        check = document.getElementById("fibratos");
        if (check.checked) {
             $(".sel_fibratos").css("display", "block");
        }
        else if(!(check.checked)){
            $(".sel_fibratos").css("display", "none");
        }
    }


