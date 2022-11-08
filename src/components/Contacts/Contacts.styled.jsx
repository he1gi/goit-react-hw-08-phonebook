import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding: 0px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Btn = styled.button`
  transition: transform 0.3ms;
  cursor: pointer;
  width: 100px;
  height: 30px;
  display: inline-block;
  color: #000;
  background-color: #99cae3;
  font-size: 15px;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  box-shadow: 0px 1px 1px rgb(0 0 0 / 12%), 0px 4px 4px rgb(0 0 0 / 6%),
    1px 4px 6px rgb(0 0 0 / 16%);
  &:hover {
    transform: scale(1.03);
  }
`;

export const Input = styled.input`
  height: 30px;
  width: 130px;
  border-radius: 5px;
  margin-left: 10px;
  padding-left: 10px;
  margin-right: 10px;
  transition: border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;
