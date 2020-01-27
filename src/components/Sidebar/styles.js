import styled from 'styled-components'
import { SideNav } from 'carbon-components-react/lib/components/UIShell'

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`

export const ViewResumeButton = styled.a`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  margin: 1rem 1rem;
  padding: 0.75rem;
  border: 2px solid #2ecc40;
  font-weight: bold;
  align-items: center;
  background-color: rgba(46, 204, 64, 0.3);

  svg {
    fill: white;
  }
`
