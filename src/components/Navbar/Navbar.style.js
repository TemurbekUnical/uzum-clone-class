import styled from "styled-components";

export const NavbarStyled = styled.div`
  padding-top: 10px;

  .nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    .logo {
      cursor: pointer;
    }
  }

  .button-wr {
    margin-left: 50px;
    margin-right: -5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    border-radius: 4px;
    color: #33c;
    width: 120px;
    height: 40px;
    background-color: rgba(49, 49, 196, 0.1);
    .buttonIcon {
      margin-right: 5px;
    }
  }
  .button-wp {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      padding: 5px 5px;
      transition: all.2s;
      cursor: pointer;
      border-radius: 4px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
        color: #fff;
      }
    }
  }
  .button-wp:hover {
  }
  .nav-content {
    display: flex;
    align-items: center;
    height: 70px;
    list-style: none;
    ul {
      display: flex;
      list-style: none;
      li {
        box-sizing: border-box;
        font-weight: ;
        margin-right: 10px;
        cursor: pointer;

      }
    }
  }
  .serach__product {
    align-items: center;
    text-align: center;
    margin-left: 50px;
    margin-top: 10px;
    width: 400px;
  }
`;
