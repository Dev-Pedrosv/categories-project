import styled from "styled-components";

export const ContainerStyled = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0px 145px 40px;
  background-color: #dde1e7;

  @media (max-width: 900px) {
    padding: 0px 80px 20px;
  }

  @media (max-width: 600px) {
    padding: 0px 20px 20px;
  }
`;
