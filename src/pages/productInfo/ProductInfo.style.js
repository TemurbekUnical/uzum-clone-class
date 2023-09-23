import styled from "styled-components";

export const StyledProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  & > div {
    width: 50%;
  }
  .images {
    display: flex;
    flex-direction: row-reverse;
    height: 550px;
    gap: 2%;
    img {
      cursor: pointer;
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
  .right {
    margin-top: 50px;
    /* display: grid; */
    width: 500px;

    .h1 {
      color: #212121;
      font-size: 22px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 10px;
    }
    .p {
      color: #212121;
      font-size: 22px;
      font-weight: 400;
      line-height: 28px;
      margin-bottom: 30px;
    }
    div {
      .s {
        align-items: center;
        color: #141415;
        display: flex;
        font-size: 14px;
        line-height: 24px;
        min-width: 100px;
        display: flex;
        gap: 10px;
        p {
          align-items: center;
          color: #141415;
          display: flex;
          font-size: 14px;
          line-height: 24px;
          min-width: 100px;
        }
        a {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .n {
        margin-top: 50px;
        p {
          /* align-items: center; */
          color: #212121;
          /* display: flex; */
          font-size: 20px;
          /* font-weight: 400; */
          line-height: 24px;
        }
        .narxx {
          font-size: 24px;
          color: #212121;
          font-style: oblique;
        }
      }
    }
    .muddat {
      display: flex;
      align-items: center;
      gap: 5px;
      background: #f5f6fa;
      cursor: pointer;
      padding: 12px 8px 12px 12px;
      position: relative;
      width: 100%;
      border-radius: 10px;
      margin-bottom: 24px;
      transition: .2s;

      &:hover{
        background: #edeff2
      }

      .yellow {
        width: 150px;
        background-color: #ff0;
        border-radius: 8px;
        padding: 6px;
        color: #1f1f26;
        font-weight: 600;

        p {
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 18px;
        }
      }
      p {
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 18px;
        color: #1f1f26;
        font-weight: 600;
      }
      .arrow {
        display: flex;
        justify-content: end;
        width: 24px;
        height: 24px;
        align-items: center;
        margin-left: 200px;
        color: grey;
      }
    }
  }
`;
