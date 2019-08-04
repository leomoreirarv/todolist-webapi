export default class TodoRepository implements TodoRepositoryInterface {
    saveTask() {
        console.log("saving");
    }
    loadTasks() {
        console.log("loading");

    }
    updateTask() {
        console.log("updating");
    }
}
