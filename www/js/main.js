
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
