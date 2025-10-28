import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Me from '../components/Me'

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Trey Huffine" />
      <Me user={data.user} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query getUserProfile {
    user {
      basics {
        id
        username
        blog
        followers
        following
        headline
        id
        karma
        label
        region
        name
        picture
        username
        summary
        website
        yearsOfExperience
        profiles {
          network
          url
          username
        }
      }
      skills {
        name
        level
        yearsOfExperience
        rating
      }
    }
  }
`
