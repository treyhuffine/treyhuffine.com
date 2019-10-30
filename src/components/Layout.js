/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Content } from 'carbon-components-react/lib/components/UIShell'
import Sidebar from './Sidebar'
import UserHeader from './UserHeader'

const Layout = ({ children }) => {
  return (
    <>
      <Sidebar />
      <Content style={{ minHeight: '100vh' }}>
        <UserHeader />
        <div>{children}</div>
      </Content>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
