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
    setTitleIsEmpty(false);
    setDescriptionIsEmpty(false);
  };

  const HandleSubmit = event => {
    event.preventDefault();
    if (!title) {
      setTitleIsEmpty(true);
      return;
    }
    if (!description) {
      setDescriptionIsEmpty(true);
      return;
    }

    const success = onSubmit({ title, description });
    if (success) reset();
  };

  const blurHandler = event => {
    const { name } = event.currentTarget;
    switch (name) {
      case 'title':
        setTitleIsEmpty(true);
        break;
      case 'description':
        setDescriptionIsEmpty(true);
        break;
      default:
        return console.log('Unknown field type');
    }
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
            onBlur={event => blurHandler(event)}
          />
        </Label>
        {!title && titleIsEmpty && <Error>This field is empty</Error>}
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
            onBlur={event => blurHandler(event)}
          />
        </Label>
        {!description && descriptionIsEmpty && (
          <Error>This field is empty</Error>
        )}
      </FieldWrapper>
      <Button type="submit">Create</Button>
    </StyledForm>
  );
};
