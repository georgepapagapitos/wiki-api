import styled from 'styled-components';

import Logo from '../Logo/Logo';
import Links from '../Links/Links';

const Container = styled.div.attrs({
  className: 'container'
})``

const Nav = styled.nav.attrs({
  className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
  margin-bottom: 20px;
`

export default function NavBar() {
  return (
    <Container>
      <Nav>
        <Logo />
        <Links />
      </Nav>
    </Container>
  )
}