import styled from "styled-components";

export const Navbarstyled = styled.div`
  background-color: #f4f5f5;
  height: 33px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: rgba(0, 0, 0, 0.7);
  .nav-right {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-left: 50px;
    .shahar{
      font-weight: 500px;
      font-size: 0.875rem;
      cursor: pointer;
      color: #000;

      b{
      font-size: 0.875rem;

      text-decoration: underline;
    }
      
    }
    .topshirish{
      font-weight: 500px;
      font-size: 0.875rem;
      cursor: pointer;
      color: #000;

    }
    
  }
  .nav-center {
    font-size: 0.875rem;

  }
  .nav-left {
    font-size: 0.875rem;

    display: flex;
    gap: 14px;
    margin-right: 55px;
  }
`;
