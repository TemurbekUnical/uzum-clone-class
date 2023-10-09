import styled from "styled-components";

export const FooterStyled = styled.div`

.cointainer{
    margin-top: 20px;
    margin-bottom: 50px;
    display: flex;
    justify-content: space-between;
    font-family: sans-serif;
    h4{
        cursor: pointer;
        color: #1f1f26;
        font-size: 15px;
    }
    p{
        color: #4d4e59;
        font-size: 14px;
        cursor: pointer;
    }
    .img-svg{
        display: flex;
        .svg{
            display: flex;
        }
    }
}
.footer-botom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid gray;
    .f-botom1{
        display: flex;
        gap: 15px;
        p{  
            font-size: 14px;
            color: #1f1f26;
            font-weight: 500;
            line-height: 18px;
        }
    }
    .f-botom{
        font-size: 12px;
        color: #4d4e59;
        
    }
}

`