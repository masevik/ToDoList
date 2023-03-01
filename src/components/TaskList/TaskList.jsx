import { Box } from 'components/Box';
import { Item, ListHeader } from './TaskList.styled';

export const TaskList = ({ data, onDeleteTask, onChange }) => {
  return (
    <Box>
      <ListHeader>
        <span>ID</span>
        <span>TITLE</span>
        <span>DESCRIPTION</span>
        <span>STATUS</span>
        <span></span>
      </ListHeader>
      <ul>
        {data.map(({ id, title, description, status }) => (
          <Item key={id}>
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
          </Item>
        ))}
      </ul>
    </Box>
  );
};
