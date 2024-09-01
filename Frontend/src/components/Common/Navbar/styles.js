import styled from "styled-components";

export const Nav = styled.nav`
  margin-left: 45px;
`;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  cursor: pointer;

  li {
    float: left;
  }

  li a {
    display: block;
    color: #000;
    font-size: 16px;
    text-align: center;
    font-family: Inter, sans-serif;
    font-weight: 700;
    padding: 14px 3px;
    margin-left: 25px;
    text-decoration: none;
  }

  li a:hover {
    color: white;
  }
`;
