const headline = document.getElementById("headlineInput");
const content = document.getElementById("contentInput");
const infoContainer = document.getElementById("infoContainer");
let container = document.getElementById("container");
let showInfo = document.getElementById("showInfo");
const save = document.getElementById("save");
let date = new Date();
let todoList = [];

save.addEventListener("click", () => {
	const todo = {
		createTime: getTime(),
		headline: headline.value,
		content: content.value,
	};
	todoList.push(todo);
	headline.value = "";
	content.value = "";
	removeFromScreen();
	addToScreen(todoList);
});

function getTime() {
	const hour = date.getHours();
	const minutes = date.getMinutes();
	return `${hour} ${minutes}`;
}

function removeFromScreen() {
	while (infoContainer.firstChild) {
		infoContainer.removeChild(infoContainer.firstChild);
	}
}

function updateScreen(element) {
	const elementToRemove = element.headline;
	const indexToRemove = todoList.findIndex(
		(x) => x.headline === elementToRemove);
	if (indexToRemove !== -1) {
		todoList.splice(indexToRemove, 1);
	}
	addToScreen(todoList);
}

function addToScreen(todoList) {
	removeFromScreen();
	todoList.forEach((element) => {
		const showInfo = document.createElement("div");
		showInfo.addEventListener("click", () => updateScreen(element));
		showInfo.classList.add("showInfo");
		const headLine = document.createElement("div");
		const content = document.createElement("div");
		headLine.classList.add("sInfoHeadline");
		headLine.innerText = element.headline;
		showInfo.appendChild(headLine);
		content.classList.add("sInfoContent");
		content.innerText = element.content;
		showInfo.appendChild(content);
		infoContainer.appendChild(showInfo);
	});
}

function blabla() {
    console.log("testar lite")
}
