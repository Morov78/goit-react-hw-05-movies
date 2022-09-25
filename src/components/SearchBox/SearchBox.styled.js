import styled from 'styled-components';

export const List = styled.div`
  margin-right: auto;
  margin-left: 15px;
  display: flex;
  align-items: center;
  width: 100%;
  gap: 4px;

  & input {
    padding: 1px 8px;
    width: 200px;
    border-radius: 3px;
    border-width: 1px;
    height: 19px;
  }
  & button {
    border: 1px solid #000000;
    border-radius: 3px;
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  img {
    width: 18px;
    height: 18px;
    transition: transform 300ms;
  }
  img:hover {
    transform: scale(1.2);
  }
`;
