const toggleMenu = () => {
	const toggleMenu = document.getElementsByClassName("menu-block")[0];
	toggleMenu.style.display = toggleMenu.style.display === "none" ? "" : "none";
	return;
};

var projectList = [
	{ name: "Project One", tasks: ["Task One", "Task Two"] },
	{ name: "Project Two" },
	{ name: "Project Three", tasks: ["Task One", "Task Two", "Taks Three"] },
	{ name: "Project JavaScript" },
];

const showProjectCards = () => {
	const projectCards = document.getElementById("project-list");
	let htmlContent = "";
	for (const list of projectList) {
		let tasks = "";
		if (list.tasks !== undefined) {
			tasks = `<ul>`;
			for (const task of list.tasks) {
				tasks += `<li>${task}</li>`;
			}
			tasks.concat(`</ul>`);
		}
		htmlContent += `<div class="project-card">${list.name}${tasks}</div>`;
	}
	/* const myVar = projectCards.innerHTML.toString()
		.concat(`<div class="project-card">
							Project JavaScript
							<ul>
								<li>Task One</li>
								<li>Task Two</li>
							</ul>
						</div>`); */
	projectCards.innerHTML = htmlContent;
};
showProjectCards();

const removeCards = () => {
	console.log("remove");
	document.getElementById("project-list").innerHTML = "";
};

const addBoardAPI = () => {
	const templateBlock = `<section>
					<div>Board Name</div>
					<button onclick="removeCards()">Remove Card</button>
					<div class="project-block"></div>
				</section>`;

	const parentBoard = document.getElementById("boardBlockList");
	parentBoard.innerHTML = templateBlock + parentBoard.innerHTML;
};
