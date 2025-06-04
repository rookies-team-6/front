import { FadeLoader } from "react-spinners";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Loading = () => {
  return (
    <LoaderWrapper>
      <FadeLoader color="#000000" />
    </LoaderWrapper>
  );
};

export default Loading;
