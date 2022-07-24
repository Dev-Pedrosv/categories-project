import styled from "styled-components";

export const ContainerItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 200px;
  height: 200px;
  border-radius: 4px;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.3),
    5px 5px 9px rgba(94, 104, 121, 0.3);
  transition: 0.3s;
  cursor: pointer;

  :hover {
    box-shadow: -5px -5px 9px rgba(255, 255, 255, 1),
      5px 5px 9px rgba(94, 104, 121, 1);

    img {
      transform: scale(1.1);
    }
  }

  button {
    border: none;
    background-color: #dde1e7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    align-items: center;
    cursor: pointer;
  }

  img {
    width: 96px;
    transform: scale(0.9);
    transition: 0.3s;
  }

  p {
    font-weight: bold;
  }
`;
