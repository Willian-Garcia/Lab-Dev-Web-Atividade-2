import React from 'react';
import { GlobalStyle } from './components/GlobalStyles';
import Login from './screens/login/login';
import Cadastro from './screens/cadastro/cadastro';
import TelaPrincipal from './screens/TelaPrincipal/TelaPrincipal';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <TelaPrincipal/>
    </>
  );
};

export default App;