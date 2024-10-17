import { Router } from "express";
import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers/usercontroller";

const router = Router();

// Criar um novo usuário
router.post("/", createUser);

// Obter todos os usuários
router.get("/", getUsers);

// Obter um usuário por ID
router.get("/:id", getUserById);

// Atualizar um usuário por ID
router.put("/:id", updateUser);

// Deletar um usuário por ID
router.delete("/:id", deleteUser);

export default router;
