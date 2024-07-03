import { NextFunction, Router, Request, Response } from "express";
import multer from "multer";

import TaskController from "./src/controllers/TaskController";
import storage from "./src/utils/storage";

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

const upload = multer({storage: storage});

router.get('/task', taskController.get);//authMiddleware
router.get('/task/:id_task', taskController.getById);
router.post('/task', upload.single('file'), taskController.add);
router.put('/task/:id_task', taskController.update);
router.delete('/task/:id_task', taskController.delete);

export default router;