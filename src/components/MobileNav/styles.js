import styled from 'styled-components'
import { Link } from 'gatsby'
import Button from 'carbon-components-react/lib/components/Button'

export const Spacer = styled.div`
  height: 48px;
`

export const NavWrapper = styled.div`
  display: none;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;

  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
  }
`

export const NavLink = styled(Link)`
  width: 25%;
`

export const NavButton = styled(Button)`
  width: 100%;
  justify-content: center;
`
