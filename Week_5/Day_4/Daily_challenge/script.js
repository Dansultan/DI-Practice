
var taskToDo = document.getElementsById('newTask');
var addButton = document.getElementById('addTaskButton');
var toDoTasks = document.getElementById('listTasks');



var addTask = function () {
   
       var text = taskToDo.value;
       var li = document.createElement("li");   
       li.innerHTML = "<input type='checkbox'>" +
                      "<label>" + text + "</label>";
       toDoTasks.appendChlid(li);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
}

addTaskButton.onclick = addTask;