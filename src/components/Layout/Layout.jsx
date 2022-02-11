import { GlobalStyle } from '../../GlobalStyled/GlobalStyled.styled';
import { Outlet } from 'react-router-dom';
import { Container, List } from './Layout.styled';
import { Suspense } from 'react';
import CustomLink from 'components/CustomLink/CustomLink';

export default function Layout() {
  return (
    <div>
      <Container>
        <nav>
          <List>
            <li>
              <CustomLink to="/">Home</CustomLink>
            </li>
            <li>
              <CustomLink to="/movies">Movies</CustomLink>
            </li>
          </List>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
      <GlobalStyle />
    </div>
  );
}
