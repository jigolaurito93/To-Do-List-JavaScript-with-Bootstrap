let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerHTML = `•  ${inputField.value}`;
    paragraph.style.fontSize = '30px';
    paragraph.style.paddingLeft = '100px'
    paragraph.style.marginTop = '10px'
    toDoContainer.appendChild(paragraph);
    inputField.value = '';

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through';
    })

    paragraph.addEventListener('dblclick', function(){ 
        toDoContainer.removeChild(paragraph)
    })
})