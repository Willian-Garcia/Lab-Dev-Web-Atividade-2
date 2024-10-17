import { Request, Response } from "express";
import User from "../models/UserModel";

// Criar um novo usuário
export const createUser = async (req: Request, res: Response) => {
  try {
    const { nome, email, senha } = req.body;
    const newUser = new User({ nome, email, senha });
    await newUser.save();
    res
      .status(201)
      .json({ message: "Usuário criado com sucesso", user: newUser });
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar usuário", error });
  }
};

// Listar todos os usuários
export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().populate("listas");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuários", error });
  }
};

// Buscar um usuário por ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).populate("listas");
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar usuário", error });
  }
};

// Atualizar informações do usuário
export const updateUser = async (req: Request, res: Response) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res
      .status(200)
      .json({ message: "Usuário atualizado com sucesso", user: updatedUser });
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar usuário", error });
  }
};

// Deletar um usuário
export const deleteUser = async (req: Request, res: Response) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json({ message: "Usuário deletado com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar usuário", error });
  }
};
