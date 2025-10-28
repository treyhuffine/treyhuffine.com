import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Education from '../components/Education'

const EducationPage = ({ data }) => (
  <Layout>
    <SEO title="Trey Huffine | Education" />
    <Education user={data.user} />
  </Layout>
)

export default EducationPage

export const query = graphql`
  query getUserEducation {
    user {
      education {
        area
        studyType
        startDate
        institution
        description
        start {
          year
        }
        endDate
        end {
          year
        }
      }
    }
  }
`
