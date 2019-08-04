export default class TodoDomainModel {
    title: string;
    description: string;
    author: string;
    deadline: Date;
    order: number;
    constructor(_title: string, _description: string, _author: string, _deadline: Date, _order: number) {
        this.title = _title;
        this.description = _description;
        this.author = _author;
        this.deadline = _deadline;
        this.order = _order;
    }
}