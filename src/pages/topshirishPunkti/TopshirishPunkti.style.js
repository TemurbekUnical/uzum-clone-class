import styled from "styled-components";

export const TopshirishPunktiStyled = styled.div`
display: flex;
justify-content: space-between;
.vakansiyalar{
    border: 1px solid grey;
    padding: 30px;
    h1{
        margin-bottom:  1.5rem;

    }
    p{
        margin-bottom:  1.5rem;

    }
    div{
        display: flex;
        gap: 10px;

        button{
            padding: 14px;
            color: #fff;
            background-color: #7000ff;
            border: none;
            cursor: pointer;
            justify-content: center;
            transition: all.2s;
            border-radius: 12px;
        }
       
    }
    ul{
        margin-top: 1.5rem;
        list-style: none;
        
    }
}
.maps{
    width: 500px;
}

`;
