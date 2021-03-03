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

  button {
    height: 80px;
    width: 80px;
    border: none;
  }

  button:hover {
    cursor: pointer;
  }
`;
