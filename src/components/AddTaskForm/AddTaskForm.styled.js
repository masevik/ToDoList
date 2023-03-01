import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  align-items: flex-start;
`;

export const Label = styled.label`
  display: block;
  margin-right: 10px;
  margin-bottom: 5px;
`;

export const StyledField = styled(Field)`
  display: block;
  height: 30px;
  width: 100%;
`;

export const Error = styled(ErrorMessage)`
  font-size: 12px;
  color: red;
`;

export const FieldWrapper = styled.div`
  margin-right: 20px;
  width: 100%;
`;

export const Button = styled.button`
  margin-top: 23.4px;
  width: 100px;
  height: 30px;
  padding-left: 30px;
  padding-right: 30px;
`;
