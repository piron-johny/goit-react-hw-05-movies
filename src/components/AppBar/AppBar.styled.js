import styled from "@emotion/styled";

export const StyledAppBar = styled.header`
  height: 40px;
  width: 100%;
  padding: 10px;
  background-color: #fefefe;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  & a {
    text-decoration: none;
  }
  & a:not(:last-child) {
    margin-right: 20px;
  }
`