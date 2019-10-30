import React from 'react'
import { Link } from 'gatsby'
import { Location } from '@reach/router'
import {
  SideNav,
  SideNavItems,
  SideNavLink,
} from 'carbon-components-react/lib/components/UIShell'

const items = [
  { name: 'Me', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work', path: '/work' },
  { name: 'Eduction', path: '/education' },
]

const Sidebar = () => {
  return (
    <SideNav
      isFixedNav
      expanded={true}
      isChildOfHeader={false}
      aria-label="Side navigation"
    >
      <SideNavItems>
        <Location>
          {({ location }) => {
            return (
              <>
                {items.map(i => (
                  <SideNavLink
                    isActive={
                      location.pathname === '/' && i.path === '/'
                        ? true
                        : location.pathname.slice(1).includes(i.path)
                    }
                    element={Link}
                    to={i.path}
                    key={i.name}
                  >
                    {i.name}
                  </SideNavLink>
                ))}
              </>
            )
          }}
        </Location>
      </SideNavItems>
    </SideNav>
  )
}

export default Sidebar
