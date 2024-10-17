import React, { useState } from 'react';
import { 
  Container, 
  ListContainer, 
  TaskContainer, 
  Button, 
  Input, 
  TaskList, 
  TaskItem, 
  FilterContainer, 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  CloseButton,
  Select 
} from './styles';

const TelaPrincipal: React.FC = () => {
  const [nomeLista, setNomeLista] = useState('');
  const [novaTarefa, setNovaTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [dataVencimento, setDataVencimento] = useState('');
  const [prioridade, setPrioridade] = useState('Média');
  const [subtarefas, setSubtarefas] = useState('');
  const [listas, setListas] = useState<string[]>([]);
  const [tarefas, setTarefas] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddLista = () => {
    setListas([...listas, nomeLista]);
    setNomeLista('');
  };

  const handleAddTarefa = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitTarefa = (e: React.FormEvent) => {
    e.preventDefault();
    const tarefa = {
      titulo: novaTarefa,
      descricao: descricaoTarefa,
      dataVencimento: new Date(dataVencimento),
      prioridade: prioridade,
      status: 'Pendente',
      subtarefas: subtarefas.split(',').map(tarefa => tarefa.trim()), // Subtarefas separadas por vírgulas
    };
    setTarefas([...tarefas, tarefa]);
    setIsModalOpen(false);
    setNovaTarefa('');
    setDescricaoTarefa('');
    setDataVencimento('');
    setPrioridade('Média');
    setSubtarefas('');
  };

  return (
    <Container>
      <ListContainer>
        <h2>Listas</h2>
        <Input
          value={nomeLista}
          onChange={(e) => setNomeLista(e.target.value)}
          placeholder="Nome da nova lista"
        />
        <Button onClick={handleAddLista}>Criar Lista</Button>
        <ul>
          {listas.map((lista, index) => (
            <li key={index}>{lista}</li>
          ))}
        </ul>
      </ListContainer>

      <TaskContainer>
        <h2>Tarefas</h2>
        <Button onClick={handleAddTarefa}>Adicionar Nova Tarefa</Button>

        <FilterContainer>
          <Input placeholder="Filtrar por palavra-chave" />
          <Button>Filtrar</Button>
        </FilterContainer>

        <TaskList>
          {tarefas.map((tarefa, index) => (
            <TaskItem key={index}>
              <h3>{tarefa.titulo}</h3>
              <p>Descrição: {tarefa.descricao}</p>
              <p>Prioridade: {tarefa.prioridade}</p>
              <p>Status: {tarefa.status}</p>
              <p>Vencimento: {tarefa.dataVencimento.toLocaleDateString()}</p>
              <p>Subtarefas: {tarefa.subtarefas.join(', ')}</p>
            </TaskItem>
          ))}
        </TaskList>
      </TaskContainer>

      {isModalOpen && (
        <Modal>
          <ModalContent>
            <ModalHeader>
              <h2>Criar Nova Tarefa</h2>
              <CloseButton onClick={closeModal}>X</CloseButton>
            </ModalHeader>

            <ModalBody>
              <form onSubmit={handleSubmitTarefa}>
                <Input 
                  value={novaTarefa}
                  onChange={(e) => setNovaTarefa(e.target.value)} 
                  placeholder="Nome da tarefa" 
                  required 
                />
                <Input 
                  value={descricaoTarefa}
                  onChange={(e) => setDescricaoTarefa(e.target.value)} 
                  placeholder="Descrição da tarefa" 
                  required 
                />
                <Input 
                  type="date" 
                  value={dataVencimento}
                  onChange={(e) => setDataVencimento(e.target.value)} 
                  placeholder="Data de entrega" 
                  required 
                />
                
                <Select 
                  value={prioridade}
                  onChange={(e) => setPrioridade(e.target.value)}
                >
                  <option value="Alta">Alta</option>
                  <option value="Média">Média</option>
                  <option value="Baixa">Baixa</option>
                </Select>

                <Input 
                  value={subtarefas}
                  onChange={(e) => setSubtarefas(e.target.value)} 
                  placeholder="Subtarefas (separadas por vírgula)" 
                />

                <Input 
                  type="file" 
                  accept="image/*" 
                />

                <Button type="submit">Criar Tarefa</Button>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};

export default TelaPrincipal;
