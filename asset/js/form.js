//function testacontainer_main(e) {
  //  e.preventDefault();

    //var mercadoriaRaw = localStorage.getItem('mercadoria')
    //if (mercadoriaRaw != null) {
  //      var mercadoria = JSON.parse(mercadoriaRaw)
   // }  else {
   //     var mercadoria = [];
   // }
    
  //  console.log(mercadoria)
//}

const mmascara = /[^0-9]/;

function mascara(e){
        if(mmascara.test(e.key)){
            e.preventDefault();
            return;
        }
        if(!e.target.value) return;

        person = e.target.value.toString();
        person = person.replace(/[\D]+/g, '');
        person = person.replace(/([0-9]{1})$/g, ",$1");

	if(person.length >= 6){
		while(/([0-9]{4})[,|\.]/g.test(person)){
			person = person.replace(/([0-9]{1})$/g, ",$1");
			person = person.replace(/([0-9]{3})[,|\.]/g, ".$1");
		}
	}

	e.target.value = person;

}


// limpar os dados extrato transações//
function limpar(){
    let confir = confirm("Tem certeza que deseja apagar TODOS os dados?");
    if(confir){
        mercadoria.splice([]);
        localStorage.clear();
        desenhaTabela();
    } 
}


//Direc.cursor no campo mercadoria//
function dirc_cursor_nome_mercadoria(){
    document.getElementById("nmercadoria").focus();
}


//inicio expressão regular só permitido números// 
function testaCampoValor(texto) {
    var lvalorPattern = /[a-zA-z]/g
    if  (lvalorPattern.test(texto)){
        alert('Apenas números são permitidos no campo Valor!')
        return false

    }

}
desenhaTabela();