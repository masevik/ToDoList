import PropTypes from 'prop-types';
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
    <Item>
      <p onClick={toggleModal}>{id}</p>
      <p onClick={toggleModal}>{title}</p>
      <p onClick={toggleModal}>{description}</p>
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
          <ModalWindowContent
            data={task}
            onToggleModal={toggleModal}
            onChange={onChange}
          />
        </Modal>
      )}
    </Item>
  );
};

TaskListItem.propTypes = {
  task: PropTypes.object,
  onDeleteTask: PropTypes.elementType,
  onChange: PropTypes.elementType,
};
