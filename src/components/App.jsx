import { useState, useEffect } from 'react';
import { Box } from './Box';
import { AddTaskForm } from './AddTaskForm';
import { Section } from './Section';
import { TaskList } from './TaskList';

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

  const getTaskId = tasks => {
    if (tasks.length > 0) {
      const taskId = tasks.map(task => {
        return Number(task.id);
      });
      const nextId = Math.max(...taskId) + 1;
      return String(nextId);
    }
    return 1;
  };

  const addTask = ({ title, description }) => {
    const newTask = {
      title,
      description,
      id: getTaskId(tasks),
      status: false,
    };

    setTasks(prevState => [...prevState, newTask]);
    return true;
  };

  const deleteTask = taskId => {
    setTasks(prevState => prevState.filter(task => task.id !== taskId));
  };

  return (
    <Box display="block">
      <Section title="Input title and description">
        <AddTaskForm onSubmit={addTask} />
      </Section>
      <Section title="To Do List">
        <TaskList data={tasks} onDeleteTask={deleteTask} />
      </Section>
    </Box>
  );
};
