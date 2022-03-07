function testacontainer_main(e) {
    e.preventDefault();

    var mercadoriaRaw = localStorage.getItem('mercadoria')
    if (mercadoriaRaw != null) {
        var mercadoria = JSON.parse(mercadoriaRaw)
    }  else {
        var mercadoria = [];
    }
    
    console.log(mercadoria)

    
     





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