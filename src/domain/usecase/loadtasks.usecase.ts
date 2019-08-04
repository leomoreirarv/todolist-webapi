export default class LoadTasksUseCase {
    repository: TodoRepositoryInterface;
    constructor(_repository: TodoRepositoryInterface){
        this.repository = _repository;
    }

    run() {
        return this.repository.loadTasks();
    }
}