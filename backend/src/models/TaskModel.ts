import mongoose from "mongoose";
const { Schema } = mongoose;

const TaskSchema = new Schema({
  titulo: {
    type: String,
    maxLength: 30,
    required: true,
  },
  descricao: {
    type: String,
    maxLength: 150,
    required: true,
  },
  data_de_criacao: {
    type: Date,
    required: true,
    default: Date.now,
  },
  data_de_vencimento: {
    type: Date,
    required: true,
  },
  prioridade: {
    type: String,
    enum: ["Alta", "Média", "Baixa"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Atrasada", "Pendente", "Concluída"],
    required: true,
  },
  lista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "List",
    required: true,
  },
  subtarefas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
  anexos: [
    {
      type: String, // ou ObjectId se estiver armazenando referências a arquivos no banco de dados
      maxLength: 150,
    },
  ],
});

export default mongoose.model("Task", TaskSchema, "tarefas");
