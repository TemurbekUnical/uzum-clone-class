import styled from "styled-components";

export const StyledProductInfo = styled.div`
  display: flex;
  & > div {
    width: 50%;
  }
  .images {
    display: flex;
    flex-direction: row-reverse;
    height: 550px;
    gap: 2%;
    img {
      object-fit: contain;
    }
    img.active {
      width: 79%;
      height: 100%;
    }
    .not-active-images {
      width: 19%;
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-y: auto;
      gap: 2%;
      ::-webkit-scrollbar {
        width: 0px;
      }
      img.curr-active {
        border: 1px solid black;
      }
    }
  }
`;
