import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  & > li {
    width: 250px;
  }
`;
export const ImageContainer = styled.div`
  display: flex;
  height: 140px;
  background-color: black;
  align-items: center;
  padding: 0 10px;
`;
export const StyledLink = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 30px 0;
  & > li {
    width: 250px;
  }
`;
