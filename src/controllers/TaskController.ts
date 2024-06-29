import {Request, Response} from "express";

import TaskService from "../services/TaskService";

import { GetSchema, GetByIdSchema, AddSchema, UpdateSchema, UpdateSchemaParams, DeleteSchema } from "../schemas/TaskSchema";

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

    async getById(Req: Request, Res: Response) {
        const { id_task } = Req.params;

        try {

            await GetByIdSchema.validate(Req.params);

            const result = taskService.getById(id_task);

            Res.json(result);

            
        } catch (error) {
            Res.json({error: error});
            Res.status(401);
        }


           


    }
    async add(Req: Request, Res: Response){

        try {

            await AddSchema.validate(Req.body);

            const result = taskService.add(Req.body);
            Res.json(result);
            Res.status(201);
        } catch (error) {
            Res.json({error: error});
            Res.status(401);
        }

    }

    async update(Req: Request, Res: Response) {

           try {

              const { id_task } = Req.params;

              await UpdateSchema.validate(Req.body);
              await UpdateSchemaParams.validate(id_task);

              const result = taskService.update(Req.body, id_task);

              if(Object.keys(result).length > 0){
                  Res.json(result);
              }else{
                  Res.json({error: "Task not found"});
                  Res.status(404);
              }
            
           } catch (error) {
            Res.json({error: error});
            Res.status(400);
           }



    }

    async delete(Req: Request, Res: Response){

        try {
            const {id_task} = Req.params;
            
            await DeleteSchema.validate(id_task);

            const result = taskService.delete(id_task);

        } catch (error) {
            Res.json({error: error});
        }
    }
}

export default TaskController;