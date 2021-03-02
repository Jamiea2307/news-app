import styled from "styled-components";

export const NavbarContainer = styled.div`
  height: 5rem;
  width: 100%;
  background-color: #1d1f1e;
`;

export const ListStyle = styled.li`
  list-style-type: none;
  display: flex;
  height: 100%;

  div {
    margin-right: 25px;
    width: 7rem;
  }

  div:hover {
    cursor: pointer;
  }
`;
