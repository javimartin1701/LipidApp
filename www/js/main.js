
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

function calculoIMC(){
    
    var calcPeso = parseInt(document.getElementById("peso").value);
    var calcAltura = parseInt(document.getElementById("altura").value);
    var calcAlturaCuadrado=(calcAltura/100)*(calcAltura/100);

    var totalimc = calcPeso/(calcAlturaCuadrado);

    totalimcRounded = totalimc.toFixed(1);

    document.getElementById("resultado").value=totalimcRounded;


}
$(document).ready(function(){
  jQuery('.menu_bottom').on( "click", function() {
    
           jQuery('.menu_bottom').toggle(); //muestro mediante clase
         });

});

function menu_inferior(){
    jQuery('.menu_bottom').toggle();
}


