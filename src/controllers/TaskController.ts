import {Request, Response} from "express";

import TaskService from "../services/TaskService";

import { Task } from "../models/Task";

const taskService = new TaskService();

class TaskController{
    constructor(){
        
    }

    get(Req: Request, Res: Response) {
        const { status } = Req.query;

        if( status && (status === "in_progress" || status === "completed")) {

            const result = taskService.get(status);
            Res.json(result);
            Res.status(200);

        }else{
            Res.json({error: "invalid status parameter"});
        }
    }
    add(Req: Request, Res: Response){
        const {id, descricao, data, status} = Req.body;

        if(id && descricao && data && status) {
            if(status === "in_progress" || status === "completed"){
                const result = taskService.add(Req.body);
                Res.json(result);
                Res.status(201);
            }else{
                Res.json({error: "Invalid status: completed or in_progress"});
                Res.status(401);
            }

        }else{
            Res.json({error: "Invalid parameters"});
            Res.status(401);
        }

    }
}

export default TaskController;