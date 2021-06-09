var projectListObject = [
    {
        name: 'Javascript One'
    },
    {
        name: 'Javascript Two'
    }
];

showProject();

function showProject(){
   

    projectListObject.forEach(function(value,index){
        var template = '<div class ="project-card">'+
        value.name+
        '<ul>'+
            '<li>Task one</li>'+
            '<li>Task two</li>'+
        '</ul>'+
        '</div>';
        document.getElementById('projectList').innerHTML += template;
    })
}
    

function toggleMenu() {
    var toggleVariable = document.getElementsByClassName('menu-block')[0];
    if(toggleVariable.style.display == 'none') {
        toggleVariable.style.display = '';
    }else {
        toggleVariable.style.display = 'none'
    }
}

function removeCard(){
    document.getElementById('projectList').innerHTML = '';
}

function addBoard(id){
    var templateBlock = '<section id ="board-block">'+
    '<div>'+id.value+'<button onclick="removeCard()">Remove Card</button></div>'+
    '<div class="project-block" id = "projectList">'+
        
    '</div>'+
    '</section>'

    document.getElementById('boardBlockList').innerHTML += templateBlock
}