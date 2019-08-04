import * as express from 'express';
import { Request, Response } from 'express';

class Main {
  private app: any;
  constructor(express, port) {
    this.app = express();  
    this.getTasks();
    this.setListner(port);
  }

  private setListner(port: any) {
    this.app.listen(port, () => {
      console.log('server started at http://localhost:' + PORT);
    });
  }

  private getTasks() {
    this.app.get('/tasks', (req: Request, res: Response) => {
      res.send({
        message: 'tasks'
      });
    });
  }
}


const { PORT = 3000 } = process.env;

new Main(express, PORT);
