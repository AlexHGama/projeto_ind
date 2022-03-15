
const nmascara = /[^0-9]/;

    function mascara(e){
        if(nmascara.test(e.key)){
            e.preventDefault();
            return;
        }
        
        if(!e.target.value) return;
 
            mascaravalor = e.target.value.toString();
            mascaravalor = mascaravalor.replace(/[\D]+/g, '');
            mascaravalor = mascaravalor.replace(/([0-9]{1})$/g, ",$1");
            
            if(mascaravalor.length >= 6){
                while(/([0-9]{4})[,|\.]/g.test(mascaravalor)){
                    mascaravalor = mascaravalor.replace(/([0-9]{1})$/g, ",$1");
                    mascaravalor = mascaravalor.replace(/([0-9]{3})[,|\.]/g, ".$1");
            }    

        } 
        e.target.value = mascaravalor;   
       
    }


 


 