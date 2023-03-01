import styled from 'styled-components';

export const ListHeader = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 5px;
  background-color: #5fafca;
  font-size: 18px;
  font-weight: 500;

  span:first-child {
    width: 40px;
  }

  span:nth-child(2) {
    width: 190px;
  }

  span:nth-child(3) {
    width: 380px;
  }

  span:nth-child(4) {
    width: 65px;
  }

  span:nth-child(5) {
    width: 100px;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding-top: 5px;
  background-color: #86c1d5;

  :last-child {
    padding-bottom: 5px;
  }

  span:first-child {
    width: 40px;
    text-align: center;
  }

  span:nth-child(2) {
    width: 190px;
  }

  span:nth-child(3) {
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
