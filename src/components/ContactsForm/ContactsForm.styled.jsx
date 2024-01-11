import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin: 20px;
`;

export const Input = styled.input`
  padding: 5px;
  border: 1px solid teal;
  border-radius: 10px;
`;

export const Button = styled.button`
  padding: 5px;
  border: 1px solid teal;
  border-radius: 15px;
  font-size: 16px;
  &:hover {
    background-color: #8cc351;
  }
`;
