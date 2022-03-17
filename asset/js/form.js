var mercadoriaRaw = localStorage.getItem('mercadoria');
     
if (mercadoriaRaw != null) {
    var mercadoria = JSON.parse(mercadoriaRaw);
}else{
    var mercadoria = [];
}

    
const formatacao = new Intl.NumberFormat('pt-Br', {style: 'currency', currency: 'BRL', minimumFractionDigits: 2,});

    async function desenhatabela(){
    let soma_total = 0;
        
    conteudo_atual =[...document.querySelectorAll('table#tab_transacao tbody .conteudo')];
    conteudo_atual.forEach(element => {
        element.remove();
    });
        
    if(mercadoria.length == 0){
        document.querySelector("table.tab_transacao tbody").innerHTML =
       `
      <div class="msgtransacoes" id="msgtransacoes" style="text-align:center;">
      <p><p><p><p>Nenhuma transação cadastrada.</p></p>
       </div>
       `
    }    
        
    console.log(document.querySelectorAll('table.tab_transacao tbody .conteudo'))
        
    for (person in mercadoria) {
        if(mercadoria[person].th_sinal == "Compra"){
            soma_total -= mercadoria[person].th_valor;    
            }else{
                soma_total += mercadoria[person].th_valor;    
            }
               

            document.querySelector('table.tab_transacao tbody').innerHTML +=
        `
        <tr class="conteudo" >
        <td style="width: 1%; text-align:center;border-bottom: 1px solid #979797;"> 
        ${(mercadoria[person].th_sinal == "Compra" ? '<strong  style="color:red; font-weight:bold"> - </strong>' : '<strong style="color:blue; font-weight:bold"> + </strong>')}
        </td>
        <td style="width: 70% ; text-align:left;border-bottom: 1px solid #979797;">
        ${(mercadoria[person].th_mercadoria)} 
        </td>        
        <td style="width: 29% ; text-align:right; border-bottom: 1px solid #979797;">
        ${formatacao.format(mercadoria[person].th_valor.toString().replace(/([0-9]{2})$/g, ".$1"))}
        </td>
        `

    }
        
    if(mercadoria.length > 0){
            
            document.querySelector("table.tab_transacao tbody").innerHTML +=
            `
            
            <th class="th_total"style="text-align: left; border-top: 1px solid #979797;" >Total </th>
            <th style="border-top: 1px solid #979797;"> </th>   
            <th class="th_valor_total" style="text-align: right; border-top: 1px solid #979797;" >
            ${formatacao.format(soma_total.toString().replace(/([0-9]{2})$/g, ".$1"))}
            </th>
            <tr>
                <th style="border: none;"> </th>
                <th style="border: none;"> </th>
                <th class="th_lucro" style="text-align: right; border: none; padding: 0px;">
                [${Math.sign(soma_total) == 1 ?  "LUCRO" : "PREJUÍZO"}]</th>
            </tr>
            `
            
        }
    
    }
        
        
    function testaFormulario(e) {
        e.preventDefault();
            
        numeros = document.querySelector('input[name="valor"]');
        caixa_2 = document.querySelector('input[name="nome_da_mercadoria"]');
        tipotransacao = document.querySelector('select[name="tipo_de_transação"]');
            
        if(!caixa_2.value){
            caixa_2.focus();
            return;
        }
    
        console.log(numeros.value && numeros.value.replace(/[^0-9]+/g, "") == "")
                
        if(numeros.value.replace(/[^0-9]+/g, "") == ""){
            numeros.focus();
            alert('Digite apenas números no campo "Valor".')
            return;
        }
    
        valorreal = parseInt(numeros.value.replace(/[^0-9]/g, ""));
            
        mercadoria.push({
            th_sinal: (e.target.elements["tipo_de_transação"].value),
            th_mercadoria: e.target.elements["nome_da_mercadoria"].value,
            th_valor: valorreal
        })
            
        caixa_2.value = "";
        numeros.value = "";


        localStorage.setItem('mercadoria', JSON.stringify(mercadoria));

        location.reload();
       
    }
    
desenhatabela();

   // limpar os dados extrato transações//
    function limpar(){
        let confir = confirm("Tem certeza que deseja apagar TODOS os dados?");
        if(confir){
            mercadoria.splice([]);
            localStorage.clear();
            desenhatabela();
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


