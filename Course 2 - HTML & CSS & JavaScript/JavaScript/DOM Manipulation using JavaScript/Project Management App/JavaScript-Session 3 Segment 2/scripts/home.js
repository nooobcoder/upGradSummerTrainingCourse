const toggleMenu = () => {
	const toggleMenu = document.getElementsByClassName("menu-block")[0];
	toggleMenu.style.display =
		toggleMenu.style.display === "none" ? "" : "none";
	return;
};

var projectList = [
	{ name: "Project One", tasks: ["Task One", "Task Two"] },
	{ name: "Project Two" },
	{ name: "Project Three", tasks: ["Task One", "Task Two", "Taks Three"] },
	{ name: "Project JavaScript" },
];

const showProjectCards = (listId) => {
	const projectCards = document.getElementById(listId);
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
		htmlContent += `<div class="project-card" id=${listId}>${list.name}${tasks}</div>`;
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
// showProjectCards(`projectList_1`);

const removeCards = (param) => {
	document.getElementById(param[0].id).innerHTML = "";
};

const loadMenu = (boardId) => {
	document.getElementById(boardId.id).style.display =
		document.getElementById(boardId.id).style.display === "none"
			? "block"
			: "none";
};

var idName = 1;
const addBoardAPI = ({ value: boardName }) => {
	if (boardName.trim().length >= 1) {
		idName++;
		const boardId = `board_${idName}`;
		const templateBlock = `<section class="board-block" id="${boardId}">
					<div>${boardName}</div>
					<button onclick="removeCards(projectList_${idName})">Remove Card</button>
					<div class="project-block" id="projectList_${idName}"></div>
				</section>`;

		const parentBoard = document.getElementById("boardBlockList");
		parentBoard.innerHTML = templateBlock + parentBoard.innerHTML;
		showProjectCards(`projectList_${idName}`);
	}

	document.getElementById(
		"menuList"
	).innerHTML += `<li onclick="loadMenu(board_${idName})">${boardName}</li>`;
};
