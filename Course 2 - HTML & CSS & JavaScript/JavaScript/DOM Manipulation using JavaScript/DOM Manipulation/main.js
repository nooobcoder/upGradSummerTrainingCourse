/*
document.getElementById("dummy_text").innerText = "Text Altered";

document.getElementsByClassName("para1")[0].innerHTML = "Hello World";
document.getElementsByClassName("para1")[1].innerHTML = "Hello World2";
document.getElementsByClassName("para1")[2].innerHTML = "Hello World3";*/

/*document.getElementById("paraOne").innerText = 'Paragraph with ID: paraOne'
document.getElementsByClassName("classOne")[0].innerText = 'Paragraph with class: classOne'
document.getElementsByTagName('h1')[0].innerText = 'Heading'*/

/*
var newNode = document.createElement("p")
newNode.innerText="Child Node"
document.getElementById('parent').appendChild(newNode)*/

/*
document.getElementById('changeColor').style.color='red'
document.getElementById('changeColor').style.fontWeight='bolder'*/

/*
document.getElementsByTagName('p')[0].setAttribute('id','changeColor');
document.getElementById('changeColor').style.color='red'*/

document.getElementById("insertHere").addEventListener("click", () => {
	alert("Event on P Tag");
});
