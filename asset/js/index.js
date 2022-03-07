var mercadoria = [
    {   
        xp: false,
        produto:'Notebook spirom 1552',                
        Valor: '3000,00',        
    },
    {   
        xp: true ,
        produto: 'TV', 
        Valor: '2000,00',                   
    },
    {  
        xp: false,
        produto:'Geladeira',
        Valor: '5000,00',               
    },
    {  
        xp: true,
        produto:'Cama',
        Valor: '2500,00',               
    },
    {  
        xp: false,
        produto:'Mesa',
        Valor: '1000,00',               
    },

];


////function desenhaTabela() {
   

   //currentLines = [...document.quarySelectorAll('table.tab_transacao tbody .excluidados')];
   //currentLines.forEach((element) => {
   // element.remove()
        
   // })


    for (person in mercadoria) {
        document.querySelector('table.tab_transacao tbody').innerHTML += `
            <tr class="excluidados">
            
                <td>
                    ${ (mercadoria[person].xp ?  '<span style="color:blue"> + </span>' : '<span style="color:red"> - </span>') }
                </td>
                
                <td>
                    ${ mercadoria[person].produto }
                </td>
                
                <td>
                    ${ mercadoria[person].Valor }        
                </td>
                <td>
                   
                    <button onclick="mercadoria.splice(${person}, 0); desenhaTabela()"> </button> 
                </td>
            </tr>
        `
    }
//}    


