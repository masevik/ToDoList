import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Box } from './Box';
import { AddTaskForm } from './AddTaskForm';
import { Section } from './Section';

export const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks !== null) {
      return JSON.parse(savedTasks);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = ({ title, description }) => {
    const newTask = {
      title,
      description,
      id: nanoid(),
    };

    setTasks(prevState => [newTask, ...prevState]);
    return true;
  };

  // const deleteContact = contactId => {
  //   setContacts(prevState =>
  //     prevState.filter(contact => contact.id !== contactId)
  //   );
  // };

  return (
    <Box display="block">
      <Section title="Input title and description">
        <AddTaskForm onSubmit={addTask} />
      </Section>
    </Box>
  );
};
