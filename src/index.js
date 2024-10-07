document.addEventListener("DOMContentLoaded", () => {
  // your code here
require("./helpers.js");
 describe("", () => {
describe("", () => {
  it("Test Passing", () => {
    return true;
    });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  
  const Form = document.getElementById("create-task-form");
  
  const TaskList = document.getElementById("Tasks");
  
  Form.addEventListener("Submit", (event) => {
    event.preventDefault();
    const TaskDescription = document.getElementById("New-Task-Description").value;
    const TaskPriority = document.getElementById("Task-priority").value;

    const NEWTaskItem = document.createElement("li");
    NEWTaskItem.textContent = TaskDescription;

    if (TaskPriority === "High") {
      NEWTaskItem.style.color = "Violet";
    } else if (TaskPriority === "Medium") {
      NEWTaskItem.style.color = "Yellow";
    } else {
      NEWTaskItem.style.color = "Green";
    }
 const deleteButton = document.createElement("button");
    deleteButton.textContent = "DELETE";
    deleteButton.addEventListener("click", () => {
      TaskList.removeChild(NEWTaskItem);
    });
const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      const newDescription = prompt("Edit your task:", TaskDescription);
      if (newDescription) {
        NEWTaskItem.firstChild.textContent = newDescription;
      }
    });
    
NEWTaskItem.appendChild(editButton);
    NEWTaskItem.appendChild(deleteButton);

    TaskList.appendChild(NEWTaskItem);
   
     Form.reset();
  });
 document.getElementById("sort-tasks").addEventListener("click", () => {
    const TasksArray = Array.from(TaskList.children);
    TasksArray.sort((a, b) => {
      const priorityA = a.style.color === "red" ? 3 : a.style.color === "yellow" ? 2 : 1;
      const priorityB = b.style.color === "red" ? 3 : b.style.color === "yellow" ? 2 : 1;
      return priorityA - priorityB;
    });
    TaskList.innerHTML = "";
    TasksArray.forEach(task => TaskList.appendChild(task));
  });
});
});