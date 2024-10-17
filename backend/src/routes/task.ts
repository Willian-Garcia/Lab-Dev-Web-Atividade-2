import { Router } from "express";
import { createTask, getTaskById, updateTask, deleteTask, getTasks } from "../controllers/taskcontroller";

const router = Router();

// Criar uma nova tarefa
router.post("/", createTask);

// Obter todas as tarefas
router.get("/", getTasks);

// Obter uma tarefa por ID
router.get("/:id", getTaskById);

// Atualizar uma tarefa por ID
router.put("/:id", updateTask);

// Deletar uma tarefa por ID
router.delete("/:id", deleteTask);

export default router;
