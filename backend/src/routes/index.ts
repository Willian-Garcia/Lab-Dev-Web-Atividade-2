import { Router, Request, Response } from "express";
import userRoutes from "./user";
import taskRoutes from "./task";
import listRoutes from "./list";

const router = Router();

// Definir rotas
router.use("/user", userRoutes);
router.use("/task", taskRoutes);
router.use("/list", listRoutes);

router.use( (_:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default router;
