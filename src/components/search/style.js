import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -15px;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const Typography = styled.h1`
  font-weight: bold;
  font-size: 44px;
  color: #2e82bb;
`;

export const Select = styled.select`
  width: 200px;
  height: 45px;
  padding: 8px;
  outline: none;
  border: none;
  box-shadow: 2px 2px 9px rgba(94, 104, 121, 0.7);
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;
