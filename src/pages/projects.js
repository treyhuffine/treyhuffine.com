import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'
import Projects from '../components/Projects'

const ProjectPage = ({ data }) => (
  <Layout>
    <SEO title="Trey Huffine | Projects" />
    <Projects user={data.user} />
  </Layout>
)

export default ProjectPage

export const query = graphql`
  query getUserProjects {
    user {
      projects {
        website
        videos {
          sourceId
          url
          source
        }
        summary
        name
        libraries
        languages
        images {
          resolutions {
            desktop {
              height
              size
              url
              width
            }
            thumbnail {
              height
              size
              url
              width
            }
          }
        }
        githubUrl
        displayName
      }
    }
  }
`
