import mongoose from "mongoose";
const { Schema } = mongoose;

const senhaValidator = [
  {
    validator: (v: string) => /[A-Z]/.test(v),
    message: "A senha deve conter pelo menos uma letra maiúscula.",
  },
  {
    validator: (v: string) => /\d/.test(v),
    message: "A senha deve conter pelo menos um número.",
  },
  {
    validator: (v: string) => v.length >= 8,
    message: "A senha deve ter pelo menos 8 caracteres.",
  },
];

const UserSchema = new Schema({
  nome: {
    type: String,
    maxLength: 30,
    required: true,
  },
  email: {
    type: String,
    maxLength: 100,
    validate: {
      validator: function isValidEmail(value: string) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: (props: { value: string }) =>
        `${props.value} é um e-mail inválido.`,
    },
    unique: true,
    required: true,
  },
  senha: {
    type: String,
    required: [true, "A senha é obrigatória"],
    validate: senhaValidator,
  },
  listas: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
});

export default mongoose.model("User", UserSchema, "usuarios");
