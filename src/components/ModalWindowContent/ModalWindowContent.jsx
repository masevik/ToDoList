import { Box } from 'components/Box';
import {
  Text,
  Title,
  DescriptionTitle,
  Input,
  Label,
  Button,
} from './ModalWindowContent.styled';

export const ModalWindowContent = ({
  data: { id, title, description, status },
  onToggleModal,
  onChange,
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="500px"
      maxHeight="600px"
      backgroundColor="white"
      paddingTop="20px"
      paddingLeft="50px"
      paddingRight="50px"
      paddingBottom="20px"
    >
      <Title>{title}</Title>
      <DescriptionTitle>Description</DescriptionTitle>
      <Text>{description}</Text>
      <Label>
        Status
        <Input
          type="checkbox"
          checked={status}
          onChange={() => {
            onChange(id);
          }}
        />
      </Label>
      <Button type="button" onClick={onToggleModal}>
        Close
      </Button>
    </Box>
  );
};
