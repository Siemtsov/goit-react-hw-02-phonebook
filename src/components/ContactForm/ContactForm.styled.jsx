import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 6px solid white;
  border-radius: 10px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  color: white;
  font-size: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 7px;
  border: 2px solid #000;
  color: #white;
  font-size: 20px;
`;