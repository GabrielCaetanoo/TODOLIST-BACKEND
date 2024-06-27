import {Request, Response} from "express";

import TaskService from "../services/TaskService";

import { GetSchema } from "../schemas/TaskSchema";

import { Task } from "../models/Task";

const taskService = new TaskService();

class TaskController{
    constructor(){
        
    }

   async get(Req: Request, Res: Response) {
        


        try {
            const  status  = Req.query.status;
            await GetSchema.validate(status);

            const result = taskService.get(status as string);
            Res.json(result);
            Res.status(200);
        } catch (error) {
            Res.json({error: "invalid status parameter"});
            Res.status(401);
        }

  
       

        
    }

    getById(Req: Request, Res: Response) {
        const { id_task } = Req.params;

        if (id_task) {

            const result = taskService.getById(id_task);
            Res.json(result);
            Res.status(200);

        }else{
            Res.json({error:"invalid id_task param"});
            Res.status(401);
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

    update(Req: Request, Res: Response) {
        const { id, descricao, data, status } = Req.body;
        const { id_task } = Req.params;

        if (id && descricao && data && status && id_task) {

            if(status === "in_progress" || status === "completed") {

                const result = taskService.update(Req.body, id_task);

                if(Object.keys(result).length > 0){
                    Res.json(result);
                }else{
                    Res.json({error: "Task not found"});
                    Res.status(404);
                }

            }else{
                Res.json({error: "Invalid status parameter"});
                Res.status(401);
            }

        }else{
            Res.json({error: "Invalid parameters"});
            Res.status(401);
        }
    }

    delete(Req: Request, Res: Response){
        const {id_task} = Req.params;

        if(id_task){

            const result = taskService.delete(id_task);

            Res.json(result);

        }else{
            Res.json({error: "id_task is required in para"});
            Res.status(401);
        }

    }
}

export default TaskController;