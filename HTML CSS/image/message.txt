var type;

function choix(e) {
    type = e;
    var a=document.getElementsByName('radio');
    for(var i=0;i<a.length;i++){
        a[i].disabled = true;
    }


    var b=document.getElementsByName('gear');
    for(var i=0;i<b.length;i++){
        b[i].disabled = true;
    }


    switch (type) {
        case "moto": document.querySelector("#essence").disabled = false;
                     document.querySelector("#electrique").disabled = false;
        break;
        

        case "compact": document.querySelector("#manual").disabled = false;
                        document.querySelector("#hybride").disabled = false;
                        document.querySelector("#essence").disabled = false;
                        document.querySelector("#diesel").disabled = false;
        break;


        case "citadine": document.querySelector("#manual").disabled = false;
                         document.querySelector("#electrique").disabled = false;
                         document.querySelector("#hybride").disabled = false;
                         document.querySelector("#essence").disabled = false;
                         document.querySelector("#diesel").disabled = false;
        break;


        case "utilitaire": document.querySelector("#manual").disabled = false;
                           document.querySelector("#diesel").disabled = false;
        break;

        case "berlin": document.querySelector("#automatic").disabled = false;
                       document.querySelector("#hybride").disabled = false;
                       document.querySelector("#essence").disabled = false;
                       document.querySelector("#diesel").disabled = false;
        break;

        case "truck": document.querySelector("#automatic").disabled = false;
                      document.querySelector("#diesel").disabled = false;
        break;

        case "cm": document.querySelector("#manual").disabled = false;
                   document.querySelector("#diesel").disabled = false;
                   document.querySelector("#essence").disabled = false;
        break;
        
    }


}