import styled from "styled-components";

const FrontPageStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

interface Props {
  isOpen: boolean;
}

const FPModal = styled.div<Props>`
  width: 45vw;
  height: 100vh;
  position: fixed;
  right: ${(props) => (props.isOpen ? 0 : `-100vw`)};
  transition: 0.5s;
`;

export { FrontPageStyled, FPModal };
