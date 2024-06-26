import { NextFunction, Router, Request, Response } from "express";

import TaskController from "./src/controllers/TaskController";

const taskController = new TaskController();

const authMiddleware = (Req: Request, Res: Response , next: NextFunction) => {
    //Executar as Verificações necessárias
      if(Req.headers.authorization) {
      // Validar o token para identificar a existencia do usúario
      next();
      }else{
         Res.json({error:'Usúario não autenticado!'});
         Res.status(400);
      }
  };
  

const router = Router();

router.get('/task',authMiddleware, taskController.get);
router.get('/task/:id_task', taskController.getById);
router.post('/task', taskController.add);
router.put('/task/:id_task', taskController.update);
router.delete('/task/:id_task', taskController.delete);

export default router;