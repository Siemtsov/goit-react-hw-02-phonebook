import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 5px solid white;
  list-style: none;
`;

export const Item = styled.li`
  background-color: #ffffff;
  border: 2px solid white;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 4px 8px;
  cursor: pointer;
  border-radius: 4px 8px;
  border: none;
`;