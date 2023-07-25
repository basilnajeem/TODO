const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");



addButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText === "") {
        alert("please enter a task");
        return;
    }
    
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `<span>${taskText}</span>`;

    taskList.appendChild(li);
    taskInput.value = "";
}