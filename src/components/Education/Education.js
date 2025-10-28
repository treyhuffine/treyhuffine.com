import React from 'react'

import { SectionTitle, Paragraph } from '../../styles/components'
import { EducationItem, Institution, Degree } from './styles'

const Education = ({ user }) => {
  return (
    <div>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map(education => (
            <EducationItem>
              <Institution>{education.position}</Institution>
              <div>
                <Degree>
                  {education.studyType}, {education.area}
                </Degree>{' '}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>
              <Paragraph>
                {education.description.replace('\n\n', '\n')}
              </Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Education
