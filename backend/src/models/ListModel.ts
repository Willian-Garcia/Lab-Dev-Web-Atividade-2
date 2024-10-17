import mongoose from "mongoose";
import User from "./UserModel";
import Task from "./TaskModel";
const { Schema } = mongoose;

const ListSchema = new Schema({
  nome: {
    type: String,
    maxLength: 30,
    required: true,
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    validate: {
      validator: async function (id: string) {
        const usuario = await User.findById(id);
        return !!usuario;
      },
      message: "O usuário não existe!",
    },
  },
  tarefas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
      validate: {
        validator: async function (id: string) {
          const tarefa = await Task.findById(id);
          return !!tarefa;
        },
        message: "A tarefa não existe!",
      },
    },
  ],
});

export default mongoose.model("List", ListSchema, "listas");
