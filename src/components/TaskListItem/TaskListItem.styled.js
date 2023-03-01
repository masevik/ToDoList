import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  max-height: 50px;
  flex-wrap: nowrap;
  align-items: center;
  padding-top: 5px;
  background-color: #86c1d5;
  overflow: hidden;

  :last-child {
    padding-bottom: 5px;
  }

  p:first-child {
    width: 40px;
    text-align: center;
  }

  p:nth-child(2) {
    width: 190px;
  }

  p:nth-child(3) {
    max-height: 40px;
    overflow: hidden;
    width: 380px;
  }

  input {
    width: 65px;
    text-align: center;
    margin-right: 10px;
  }

  button {
    margin-right: 10px;
    width: 100px;
    text-align: center;
  }

  :checked {
    font-size: 5px;
  }
`;
