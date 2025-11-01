class TodoService {

    constructor(todoRepository) {
        this.todoRepository = todoRepository;
    }

    create(todoText) {
        // console.log("heere");
        this.todoRepository.insert(todoText);
    }

    getOneTodo(id) {
        return this.todoRepository.get(id);
    }

    getAllTodos() {
        return this.todoRepository.getAll();
    }
}

module.exports = TodoService;