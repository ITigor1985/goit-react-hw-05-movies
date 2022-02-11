import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  & > :not(:last-child) {
    margin-right: 10px;
  }
`;

export const ListLink = styled.ul`
  display: flex;
  liststyletype: none;
  & > :not(:last-child) {
    margin-right: 20px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DidescriptionWrapper = styled.div`
  width: 650px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 15px;
`;

export const MovieUserScore = styled.p`
  margin-bottom: 15px;
`;
export const MovieOverview = styled.h3`
  margin-bottom: 15px;
`;
