// import PropTypes from 'prop-types';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, Form } from 'formik';

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
      <Form>
        <label htmlFor={titleInputId}>Title</label>
        <input
          type="text"
          name="title"
          id={titleInputId}
          placeholder="Enter title"
        />
        <label htmlFor={descrInputId}>Description</label>
        <input
          type="text"
          name="description"
          id={descrInputId}
          placeholder="Enter description"
        />
        <button type="submit">Create</button>
      </Form>
    </Formik>
  );
};
