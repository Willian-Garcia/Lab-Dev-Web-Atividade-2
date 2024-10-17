import styled from 'styled-components';

// Fundo geral da página
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0f022e; /* Fundo roxo escuro */
`;

export const Box = styled.div`
  width: 550px;
  height: 400px;
  background: rgba(255, 255, 255, 0.15); /* Fundo mais transparente */
  backdrop-filter: blur(50px); /* Efeito de desfoque no fundo */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3); /* Borda suave para o efeito de vidro */
  
  h1 {
    color: #fff;
    margin-bottom: 20px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid;
  border-radius: 10px;
  background-color: #fff;
  color: #5a189a;
  font-size: 16px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  background-color: #5a189a;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #7b2cbf;
  }
`;
