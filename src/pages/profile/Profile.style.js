import styled from "styled-components";

export const ProfileStyled = styled.div`
  display: flex;
  gap: 80px;
  justify-content: space-between;

  .form{
    border: 1px solid rgba(0,0,0,.12);
    padding: 20px;
    width: 750px;
    .form__content{
      padding: 20px;


    h1{
      font-size: 20px;
    }
    ul{
      list-style: none;
      display: flex;
      gap: 35px;

      li{
        label{
          font-size: 14px;
          color: rgba(0,0,0,.6);


        }
        input{
          border: 1px solid rgba(0,0,0,.12);
          width: 100%;
          padding: 10px;
          margin-top: 10px;
          border-radius: 5px;
        }
      }

    }
    
  }

  }

`;
