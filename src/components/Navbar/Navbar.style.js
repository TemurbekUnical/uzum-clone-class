import { styled } from "styled-components";

export const NavbarStyled = styled.div`
  .nav-wrapper {
    display: flex;
    align-items: center;
    height: 50px;
    .logo {
      cursor: pointer;
    }
  }
  .search-input {
    border: none;
    border: 1px solid rgba(0, 0, 0, 0.7);
    display: block;
    padding: 10px;
    width: 500px;
    font-size: 0.875rem;
    border-radius: 5px;

    margin: auto;
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
  }
  .button-wp {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 4px;
  }
  .button-wp:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  .nav-content {
    display: flex;
    align-items: center;
    height: 70px;
    list-style: none;
    ul {
      display: flex;
      list-style: none;
      gap: 22px;
      color: rgba(0, 0, 0, 0.7);
    }
    li:hover {
      border-bottom: 3px solid black;
      color: black;
      transform: scale(1.1);
      transition: 0.1s;
    }
  }
`;
