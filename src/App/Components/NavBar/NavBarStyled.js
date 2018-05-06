import { Constants } from 'expo';
import styled from 'styled-components/native';

const NavBarStyled = styled.View`
  background-color: #15191E;
  margin-top: ${Constants.statusBarHeight};
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export default NavBarStyled;
