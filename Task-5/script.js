// استخدام let و const
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

let tasks = []; // مصفوفة لتخزين المهام

// دالة لإضافة مهمة
function addTask() {
const task = taskInput.value.trim();
if (!task) return;
tasks.push(task);
taskInput.value = '';
renderTasks();
}

// دالة لحذف مهمة
function deleteTask(index) {
tasks.splice(index, 1);
renderTasks();
}

// دالة لعرض المهام
function renderTasks() {
console.clear();
taskList.innerHTML = '';
tasks.forEach((task, i) => {
    console.log(`المهمة #${i + 1}: ${task}`);
    const li = document.createElement('li');
    li.textContent = task + ' ';
    const delBtn = document.createElement('button');
    delBtn.textContent = 'حذف';
    delBtn.onclick = () => deleteTask(i);
    li.appendChild(delBtn);
    taskList.appendChild(li);
});
}

// زر التفاعل
addBtn.addEventListener('click', addTask);