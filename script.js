const Itens = []

function cadastrarNovoFilme(){
    const nomeItem = prompt("Qual é o nome ?")
    const tipoItem = prompt("É uma série ou filme ?")
    const generoItem = prompt("Qual é o gênero ?")
    
    const novoItem = {
        id: Itens.length + 1,
        nome: nomeItem,
        tipo: tipoItem,
        gênero: generoItem
    }

    Itens.push(novoItem)
    {
        alert("Cadastrado com sucesso")
    }
}


function deletarItemPorId(){
    const idDoItem = prompt("Digite o id do filme ou série que você quer deletar ?")

    const index = Itens.findIndex(a => a.id == idDoItem)

    if(index === -1){
        alert("Não foi encontrado")
    } else {
        Itens.splice(index, 1) 
        alert("Filme/Série deletada com sucesso")
    }
 }


 function exibirTodosFilmes(){
    let lista = ""

    for(let i = 0; i < Itens.length; i++){
        lista += `id: ${Itens[i].id}, Nome: ${Itens[i].nome}, Tipo: ${Itens[i].tipo},
         Gênero: ${Itens[i].gênero} \n`
    }

    alert("Lista de filmes e séries: \n\n" + lista)
 }


 function buscarItem(){
    const nomeBusca = prompt("Digite o nome do filme ou série")

    const itemEncontrado = Itens.find(a => a.nome.toLowerCase() == nomeBusca.toLowerCase())

    if(itemEncontrado){
        alert("Item encontrado \n id: " + itemEncontrado.id + 
            " nome: " + itemEncontrado.nome + " tipo: " + itemEncontrado.tipo + " gênero: " + itemEncontrado.gênero)

    } else  {
        alert("Nenhum foi encontrado!")
    }

 } 
 
 
 function deletarUltimo(){
    const confirmar = prompt("Tem certeza que deseja remover o ultimo filme/série?");

    if (Itens.length > 0 && confirmar) {
   Itens.pop()
    alert("Ultimo foi removido")

    } else {
    alert("Não há nenhum para remover");
    }
 }


 function deletarTodos() {
    let confirmar = confirm("Tem certeza que deseja remover todos?");

    if (!confirmar) {
        
        alert("Não foi possivel remover");
    } else if (Itens.length === 0) {
        alert("Não há filmes ou séries para remover");
    } else{
        Itens.length = 0;
        alert("Todos foram removidos")
    }
}


 function exibirTotal(){
   alert(Itens.length)
 }