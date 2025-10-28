import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Work from '../components/Work'

const WorkPage = ({ data }) => (
  <Layout>
    <SEO title="Trey Huffine | Experience" />
    <Work user={data.user} />
  </Layout>
)

export default WorkPage

export const query = graphql`
  query getUserWork {
    user {
      work {
        website
        summary
        startDate
        start {
          month
          year
        }
        location
        position
        isCurrentRole
        endDate
        end {
          month
          year
        }
        company
      }
    }
  }
`
