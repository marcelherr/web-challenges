import styled from "styled-components";

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  margin: 2rem;
  background-color: ${(props) => (props.$isBlack ? "black" : "green")};

  &:hover {
    background-color: red;
  }
`;

export default function Box({ isBlack }) {
  return <StyledBox $isBlack={isBlack} />;
}
