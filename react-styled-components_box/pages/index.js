import Box from "@/components/BoxWithStyledComponents.js";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
`;

export default function HomePage() {
  return (
    <StyledDiv>
      <Box />
      <Box isBlack />
    </StyledDiv>
  );
}
