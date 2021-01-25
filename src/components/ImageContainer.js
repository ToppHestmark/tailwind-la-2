import styled from "styled-components/macro";

const ImgContainer = styled.div`
  width: 100%;
  min-width: 400px;
  display: flex;
`;

const Image = styled.img.attrs(() => ({
  src: "./images/background.jpg",
  alt: "Desktop",
}))`
  -webkit-clip-path: polygon(38% 0, 100% 0%, 100% 100%, 13% 100%);
  clip-path: polygon(38% 0, 100% 0%, 100% 100%, 13% 100%);
`;

const ImageContainer = () => {
  return (
    <ImgContainer>
      <Image />
    </ImgContainer>
  );
};

export default ImageContainer;
