// import PropTypes from 'prop-types';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik } from 'formik';
import {
  Label,
  StyledForm,
  FieldWrapper,
  StyledField,
  Button,
  Error,
} from './AddTaskForm.styled';

const initialValues = { title: '', description: '' };

const schema = yup.object().shape({
  title: yup
    .string()
    .min(5, 'Too short')
    .max(25, 'Too long')
    .required('This field is empty'),
  description: yup
    .string()
    .min(10, 'Too short')
    .required('Please enter description'),
});

export const AddTaskForm = ({ onSubmit }) => {
  const titleInputId = nanoid();
  const descrInputId = nanoid();

  const HandleSubmit = (values, { resetForm }) => {
    const success = onSubmit(values);
    if (success) resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={HandleSubmit}
      validationSchema={schema}
    >
      <StyledForm>
        <FieldWrapper>
          <Label htmlFor={titleInputId}>Title</Label>
          <StyledField
            type="text"
            name="title"
            id={titleInputId}
            placeholder="Enter title"
          />
          <Error component="span" name="title" />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor={descrInputId}>Description</Label>
          <StyledField
            type="text"
            name="description"
            id={descrInputId}
            placeholder="Enter description"
          />
          <Error component="span" name="description" />
        </FieldWrapper>

        <Button type="submit">Create</Button>
      </StyledForm>
    </Formik>
  );
};
