import { Request, Response } from "express";
import List from "../models/ListModel"; // Remova a importação de User

// Criar uma nova lista
export const createList = async (req: Request, res: Response) => {
  try {
    const { nome, usuario, tarefas } = req.body;
    const newList = new List({ nome, usuario, tarefas });
    await newList.save();
    res
      .status(201)
      .json({ message: "Lista criada com sucesso", list: newList });
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar lista", error });
  }
};

// Listar todas as listas
export const getLists = async (req: Request, res: Response) => {
  try {
    const lists = await List.find().populate("usuario tarefas");
    res.status(200).json(lists);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar listas", error });
  }
};

// Buscar uma lista por ID
export const getListById = async (req: Request, res: Response) => {
  try {
    const list = await List.findById(req.params.id).populate("usuario tarefas");
    if (!list) {
      return res.status(404).json({ message: "Lista não encontrada" });
    }
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar lista", error });
  }
};

// Atualizar uma lista
export const updateList = async (req: Request, res: Response) => {
  try {
    const updatedList = await List.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedList) {
      return res.status(404).json({ message: "Lista não encontrada" });
    }
    res
      .status(200)
      .json({ message: "Lista atualizada com sucesso", list: updatedList });
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar lista", error });
  }
};

// Deletar uma lista
export const deleteList = async (req: Request, res: Response) => {
  try {
    const deletedList = await List.findByIdAndDelete(req.params.id);
    if (!deletedList) {
      return res.status(404).json({ message: "Lista não encontrada" });
    }
    res.status(200).json({ message: "Lista deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar lista", error });
  }
};
