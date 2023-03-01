import { Box } from 'components/Box';
import { TaskListItem } from '../TaskListItem';
import { ListHeader } from './TaskList.styled';

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
        {data.map(task => (
          <TaskListItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onChange={onChange}
          />
        ))}
      </ul>
    </Box>
  );
};
