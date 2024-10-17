import React, { useState } from 'react';
import { Box, Input, Button, Container } from './styles';

const Cadastro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Container>
      <Box>
        <h1>Cadastro</h1>
        <Input
          type="nome"
          placeholder="Insira seu nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Insiria seu Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Insira sua Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button >Cadastrar</Button>
      </Box>
    </Container>
  );
};

export default Cadastro;
