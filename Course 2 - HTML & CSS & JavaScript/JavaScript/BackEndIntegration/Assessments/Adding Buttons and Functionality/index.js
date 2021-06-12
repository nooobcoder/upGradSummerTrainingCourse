console.log("Hi");
const buttons = document.getElementsByTagName("button");
buttons[0].addEventListener(
	"click",
	window.open("https://www.google.com", "_blank")
);
