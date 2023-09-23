import styled from "styled-components";

export const CatalogsStyled = styled.div`
    padding: 10px;

    .headerBox{
        display: flex;
        height: 500px;
    }
    
    .css-1h9z7r5-MuiButtonBase-root-MuiTab-root{
        padding: 0;
        min-height: 0;
    }

    .css-13xfq8m-MuiTabPanel-root{
        padding: 0 0 0 2rem;
    }

    .navBox{
        padding: 1rem 4rem 0 1rem;
        height: 100%;
        p{
            text-align:left;
            width: 100%;
            font-size: 12px;
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 0px;
        }
    }

  .infoBox{
        width: 80%;
        h3{
            color: red;
            font-size: 2rem;
            margin-bottom: 0px;
            &:hover{
                color: #7000FF;
                cursor: pointer;
            }
        }
        h5{
            font-size: 1rem;
            &:hover{
                color: #7000FF;
                cursor: pointer;
            }
        }
        p{
            font-size:14px;
            font-weight: lighter;
            &:hover{
                color: #7000FF;
                cursor: pointer;
            }
        }
  }

    .parent {
    display: grid;
    div{
        width: 100%;
    }
}

.div1 { grid-area: 1/ 1 / 2 / 2; }
.div2 { grid-area: 1 / 2 / 2 / 3; }
.div3 { grid-area: 1 / 3 / 2 / 4; }
.div4 { grid-area: 2 / 1 / 3 / 2; }
.div5 { grid-area: 2 / 2 / 3 / 3; }
.div6 { grid-area: 2 / 3 / 3 / 4; }
.div7 { grid-area: 3 / 1 / 4 / 2; }
.div8 { grid-area: 3 / 2 / 4 / 3; }


    
    



`