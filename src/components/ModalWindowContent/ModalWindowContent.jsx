import { Box } from 'components/Box';

export const ModalWindowContent = ({
  data: { id, title, description, status },
}) => {
  return (
    <Box
      width="500px"
      minHeight="250px"
      backgroundColor="white"
      paddingTop="20px"
      paddingLeft="50px"
      paddingRight="50px"
    >
      <h1>{title}</h1>
      <p>Description</p>
      <p>{description}</p>
      <button type="button">Close</button>
    </Box>
  );
};
