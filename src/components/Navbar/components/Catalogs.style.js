import styled from "styled-components";

export const CatalogsStyled = styled.div`

   .headerBox{
    display: flex;
    .navCatalogs{
        border-right: 1px solid gray;
        width: 15%;
        padding-top: 20px;
        ul{
            li{
                list-style: none;
                margin-bottom:10px;
                &:hover{
                    background: lightgray;
                    color:#7000FF;
                    cursor: pointer;
                }
            }
            
        }
    }
    .infoCatalogs{
            width: 85%;
            padding: 20px 0 0 20px;
            h4{
                margin-bottom: 20px;
            }

        .parent{
            display: grid;
        }
        .div1 { grid-area: 1 / 1 / 2 / 2; }
        .div2 { grid-area: 1 / 2 / 2 / 3; }
        .div3 { grid-area: 1 / 3 / 2 / 4; }
        .div4 { grid-area: 1 / 4 / 2 / 5; }
        .div5 { grid-area: 2 / 1 / 3 / 2; }
        .div6 { grid-area: 2 / 2 / 3 / 3; }
        .div7 { grid-area: 2 / 3 / 3 / 4; }
        .div8 { grid-area: 2 / 4 / 3 / 5; }
        .div9 { grid-area: 3 / 1 / 4 / 2; }
        .div10 { grid-area: 3 / 2 / 4 / 3; }
        .div11 { grid-area: 3 / 3 / 4 / 4; }
        .div12 { grid-area: 3 / 4 / 4 / 5; }
    }
   }



`