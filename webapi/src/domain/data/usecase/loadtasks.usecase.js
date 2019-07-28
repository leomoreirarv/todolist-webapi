export default class LoadTasksUseCase {
    constructor(repository){
        this.repository = repository
    }

    run() {
        return repository.loadTasks();
    }
}