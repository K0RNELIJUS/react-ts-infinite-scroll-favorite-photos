import { LayoutStyled, ContainerStyled } from './Layout.styled';
import { LayoutProps } from './type';

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutStyled>
      <ContainerStyled>{children}</ContainerStyled>
    </LayoutStyled>
  );
};

export default Layout;
