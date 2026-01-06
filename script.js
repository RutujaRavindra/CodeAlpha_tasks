const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

// Load tasks
renderTasks();

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (!text) return;

    tasks.push({ text, completed: false });
    saveTasks();
    taskInput.value = "";
    renderTasks();
});

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        if (
            currentFilter === "completed" && !task.completed ||
            currentFilter === "pending" && task.completed
        ) return;

        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) li.classList.add("completed");

        const btnDiv = document.createElement("div");
        btnDiv.className = "task-buttons";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.className = "complete";
        completeBtn.onclick = () => toggleTask(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑";
        deleteBtn.className = "delete";
        deleteBtn.onclick = () => deleteTask(index);

        btnDiv.appendChild(completeBtn);
        btnDiv.appendChild(deleteBtn);

        li.appendChild(btnDiv);
        taskList.appendChild(li);
    });
}
function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        if (
            currentFilter === "completed" && !task.completed ||
            currentFilter === "pending" && task.completed
        ) return;

        const li = document.createElement("li");
        li.textContent = task.text;

        if (task.completed) li.classList.add("completed");

        const btnDiv = document.createElement("div");
        btnDiv.className = "task-buttons";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "✔";
        completeBtn.className = "complete";
        completeBtn.onclick = () => toggleTask(index);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑";
        deleteBtn.className = "delete";
        deleteBtn.onclick = () => deleteTask(index);

        btnDiv.appendChild(completeBtn);
        btnDiv.appendChild(deleteBtn);

        li.appendChild(btnDiv);
        taskList.appendChild(li);
    });

    updateCounter(); // 🔥 added
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function filterTasks(type) {
    currentFilter = type;
    renderTasks();
}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function updateCounter() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    totalCount.textContent = `Total: ${total}`;
    completedCount.textContent = `Completed: ${completed}`;
    pendingCount.textContent = `Pending: ${pending}`;
}
