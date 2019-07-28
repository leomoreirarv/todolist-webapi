import TodoRepositoryInterface from './../domain/todo.repository.interface';
import Todo from './todo.model';

export default class TodoRepository extends TodoRepositoryInterface {
    constructor(){
        super();
    }

    save(todo) {
        if(todo instanceof Todo){
            console.log("saving todo", todo);
        }
    }
}