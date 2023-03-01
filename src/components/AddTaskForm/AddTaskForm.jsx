// import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Label,
  StyledForm,
  FieldWrapper,
  StyledField,
  Button,
  Error,
} from './AddTaskForm.styled';

export const AddTaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [titleIsEmpty, setTitleIsEmpty] = useState(false);
  const [descriptionIsEmpty, setDescriptionIsEmpty] = useState(false);

  const onChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'description':
        setDescription(value);
        break;
      default:
        return console.log('Unknown field type');
    }
  };

  const reset = () => {
    setTitle('');
    setDescription('');
  };

  const HandleSubmit = event => {
    event.preventDefault();
    const success = onSubmit({ title, description });
    if (success) reset();
  };

  return (
    <StyledForm onSubmit={HandleSubmit}>
      <FieldWrapper>
        <Label>
          Title
          <StyledField
            type="text"
            name="title"
            placeholder="Enter title"
            value={title}
            onChange={onChange}
            title="This field is empty"
            required
          />
        </Label>
        {titleIsEmpty && <Error>Ошибка</Error>}
      </FieldWrapper>
      <FieldWrapper>
        <Label>
          Description
          <StyledField
            type="text"
            name="description"
            placeholder="Enter description"
            value={description}
            onChange={onChange}
            title="This field is empty"
            required
          />
        </Label>
        {descriptionIsEmpty && <Error>Ошибка</Error>}
      </FieldWrapper>
      <Button type="submit">Create</Button>
    </StyledForm>
  );
};
