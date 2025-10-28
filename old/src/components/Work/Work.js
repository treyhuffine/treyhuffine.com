import React from 'react'

import { SectionTitle, Paragraph } from '../../styles/components'
import { WorkItem, WorkTitle, JobTitle } from './styles'

const Work = ({ user }) => {
  return (
    <div>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map(work => (
            <WorkItem>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                <JobTitle>{work.company}</JobTitle> <span>{work.location}</span>
                <span> &sdot; </span>
                <span>
                  {work.start.year} to {work.end.year}
                </span>
              </div>
              <Paragraph>{work.summary}</Paragraph>
            </WorkItem>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Work
