import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  z-index: ${(props) => (props.open ? 1 : -1)};
  opacity: ${(props) => (props.open ? 1 : 0)};
`;

export const ContainerItem = styled.div`
  position: relative;
  width: 350px;
  height: 378px;
  border-radius: 8px;
  text-align: center;
  gap: 12px;
  display: flex;
  padding: 10px;
  align-items: center;
  flex-direction: column;
  background-color: #dde1e7;
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 1),
    5px 5px 9px rgba(94, 104, 121, 1);
  transition: 0.3s;

  span {
    position: absolute;
    right: 10px;
    border-radius: 50%;
    background: #ffffff;
    color: #838383;
    padding: 5px;
    font-size: 12px;
    cursor: pointer;
    font-weight: bold;
    transition: 0.3s;

    :hover {
      opacity: 0.8;
    }
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }

  img {
    width: 200px;
  }
`;
