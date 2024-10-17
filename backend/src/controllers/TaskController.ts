import { Request, Response } from "express";
import Task from "../models/TaskModel";

// Criar uma nova tarefa
export const createTask = async (req: Request, res: Response) => {
  try {
    const {
      titulo,
      descricao,
      data_de_vencimento,
      prioridade,
      status,
      lista,
      subtarefas,
      anexos,
    } = req.body;
    const newTask = new Task({
      titulo,
      descricao,
      data_de_criacao: new Date(),
      data_de_vencimento,
      prioridade,
      status,
      lista,
      subtarefas,
      anexos,
    });
    await newTask.save();
    res
      .status(201)
      .json({ message: "Tarefa criada com sucesso", task: newTask });
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar tarefa", error });
  }
};

// Listar todas as tarefas
export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find().populate("subtarefas lista");
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar tarefas", error });
  }
};

// Buscar uma tarefa por ID
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id).populate(
      "subtarefas lista"
    );
    if (!task) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar tarefa", error });
  }
};

// Atualizar uma tarefa
export const updateTask = async (req: Request, res: Response) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res
      .status(200)
      .json({ message: "Tarefa atualizada com sucesso", task: updatedTask });
  } catch (error) {
    res.status(400).json({ message: "Erro ao atualizar tarefa", error });
  }
};

// Deletar uma tarefa
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: "Tarefa não encontrada" });
    }
    res.status(200).json({ message: "Tarefa deletada com sucesso" });
  } catch (error) {
    res.status(500).json({ message: "Erro ao deletar tarefa", error });
  }
};
