import styled from "styled-components";

export const SavatchaStyled = styled.div`
  .mahsulotlar-container {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
  }
  .savatchadagi-mahsulotlar {
    display: flex; 

  }
`;

export const SavatchaniIchiStyled = styled.div`
  width: 600px;
  .mahsulot-card {
    width: 90%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 5px;
    img {
      width: 100%;
    }
    .nomi {
      width: 30%;
      font-size: 30px;
      font-weight: 700;
    }
    .narxi {
      width: 15%;
    }
    .button-bir {
      width: 30%;
      order: 5;
      padding: 6px;
      display: flex;
      gap: .5px;
      align-items: center;
      background-color: rgb(112, 0, 255);
    }
    .mahsulotQoshish {
      width: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .tanlanganmi {
      top: 0;
      right: 0;
      background: none;
    }
  }
`;
