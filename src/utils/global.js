import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }
  *:focus {
    outline: none;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
    @media only screen and (max-width: 500px) {
      transition: all 0.3s linear;
    }
  }
  h1 {
  margin: 0 auto;
  text-align: center;
  font-weight: normal;
  font-size: 38px;
  // max-width: 500px;
  @media only screen and (max-width: 700px) {
    font-size: 30px;
    width: 80%;
    padding: 10px;
  }
}
h2 {
  margin: 0 auto;
  text-align: center;
  font-weight: normal;
  font-size: 30px;
  color: ${({ theme }) => theme.text};
  @media only screen and (max-width: 550px) {
    font-size: 25px;
  }
}
h3 {
  margin: 0 auto;
  text-align: center;
  font-weight: normal;
  font-size: 20px;
  color: ${({ theme }) => theme.subHeader};
  @media only screen and (max-width: 550px) {
    font-size: 18px;
  }
}
  `;
