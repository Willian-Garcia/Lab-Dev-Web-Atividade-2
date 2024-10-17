import React, { useState } from 'react';
import { Box, Input, Button, Container } from './styles';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  return (
    <Container>
      <Box>
        <h1>Login</h1>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button >Login</Button>
        <Button >Cadastrar</Button>
      </Box>
    </Container>
  );
};

export default Login;
