import { ReactNode } from 'react';
import * as S from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <S.Layout>
      <nav>Navbar</nav>
      <main>{children}</main>
      <footer>Footer</footer>
    </S.Layout>
  );
};

export default Layout;
