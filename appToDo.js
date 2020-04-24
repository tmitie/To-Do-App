//alert('Funciona');

var listElement = document.querySelector('#app ul'); 
var inputElement = document.querySelector('#app input');

//Vai recuperar a lista do json chamado listToDo, ao invés de ser inserido no html
var todos = JSON.parse(localStorage.getItem('listToDo')) || [];//Torna iterativo o json de forma a enviar vazio caso o jason n contenha nada

function renderTodos(){
    listElement.innerHTML =''; //Tudo que estiver na ul será removido para não adicionar itens repetidos na tela, ele apaga, depois reescreve

    for(todo of todos){
        var todoElement = document.createElement('li');//Cria elementos html
        var todoText = document.createTextNode(todo);//Coloca o texto no elemento


        var linkElement =document.createElement('a');
        linkElement.setAttribute('href','#');

        var pos =todos.indexOf(todo);//Pego o indice do elemento clicado
        linkElement.setAttribute('onclick','deleteTodos(' + pos + ')'); //Deleto na posição desejada

        var linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);



        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addToDo(){
    var todoText = inputElement.value;

    todos.push(todoText);//Pega o input
    inputElement.value ='';//Apaga o texto atual do input
    renderTodos();
    saveToStorage();
}

document.getElementById('btn').onclick = addToDo;//Quando o botão adicionar é clicado, adiciona


function deleteTodos(pos){
    todos.splice(pos,1);///Pega  a posição do mouse clicado e remove 1 item
    renderTodos();
    saveToStorage();
}

function saveToStorage(){//Pega a lista de to dos e salva
    localStorage.setItem('listToDo', JSON.stringify(todos));//Pego essa lista e salvo, mas não salva objetos, só jsons, por isso converto

}