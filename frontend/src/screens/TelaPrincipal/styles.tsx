import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 100vh;
  background-color: #f4f4f9;
  padding: 20px;
`;

export const ListContainer = styled.div`
  width: 30%;
  background-color: #7b2cbf;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  color: white;
`;

export const TaskContainer = styled.div`
  width: 60%;
  background-color: #9d4edd;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  color: white;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background-color: #5a189a;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #7b2cbf;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 2px solid #5a189a;
  border-radius: 5px;
  background-color: white;
  color: #5a189a;
  font-size: 16px;
`;

// Estilo para o dropdown de prioridade
export const Select = styled.select`
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  background-color: #5a189a;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #7b2cbf;
  }

  option {
    background-color: white;
    color: #5a189a;
  }
`;

// Estilo para o modal
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  width: 500px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  h2 {
    color: #000;
    margin: 0;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

export const TaskList = styled.div`
  margin-top: 20px;
`;

export const TaskItem = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;
