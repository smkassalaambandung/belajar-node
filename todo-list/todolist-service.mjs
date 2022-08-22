export class TodolistService {
  todolist = ["Agung", "Wahyudi"];

  getJsonTodoList() {
    return JSON.stringify({
      code: 200,
      status: "OK",
      data: this.todolist.map((value, index) => {
        return {
          id: index,
          todo: value
        }
      })
    });
  }


  getTodoList(request, response) {

    response.write(this.getJsonTodoList());
    response.end();
  }
}