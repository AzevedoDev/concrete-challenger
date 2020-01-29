import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: row;
  width: 680px;
  @media (max-width: 768px) {
    width: 90vw;
    padding: 0 10px;
  }
`;
