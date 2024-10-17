import { Router } from "express";
import { createList, getListById, updateList, deleteList, getLists } from "../controllers/listcontroller";

const router = Router();

// Criar uma nova lista
router.post("/", createList);

// Obter todas as listas
router.get("/", getLists);

// Obter uma lista por ID
router.get("/:id", getListById);

// Atualizar uma lista por ID
router.put("/:id", updateList);

// Deletar uma lista por ID
router.delete("/:id", deleteList);

export default router;
