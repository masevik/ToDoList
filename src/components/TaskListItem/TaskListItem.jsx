import { useState } from 'react';
import { Modal } from '../Modal';
import { ModalWindowContent } from '../ModalWindowContent';
import { Item } from './TaskListItem.styled';

export const TaskListItem = ({ task, onDeleteTask, onChange }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { id, title, description, status } = task;

  const toggleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  return (
    <Item onClick={toggleModal}>
      <span>{id}</span>
      <span>{title}</span>
      <span>{description}</span>
      <input
        type="checkbox"
        checked={status}
        onChange={() => {
          onChange(id);
        }}
        value={status}
      />
      <button
        type="button"
        onClick={() => {
          onDeleteTask(id);
        }}
      >
        Delete
      </button>
      {isModalOpen && (
        <Modal onToggleModal={toggleModal}>
          <ModalWindowContent data={task} />
        </Modal>
      )}
    </Item>
  );
};
