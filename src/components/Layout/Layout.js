import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from '../Sidebar'
import UserHeader from '../UserHeader'
import MobileNav from '../MobileNav'

import { StyledContent } from './styles'

const Layout = ({ children }) => {
  return (
    <>
      <MobileNav />
      <Sidebar />
      <StyledContent>
        <UserHeader />
        <div>{children}</div>
      </StyledContent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
