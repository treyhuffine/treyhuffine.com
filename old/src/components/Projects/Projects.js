import React from 'react'

import { SectionTitle, Pill } from '../../styles/components'
import { ProjectItem, ProjectTitle, SkillContainer } from './styles'

const Projects = ({ user }) => {
  return (
    <div>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map(project => (
            <ProjectItem>
              <ProjectTitle>{project.name}</ProjectTitle>
              <p>{project.summary}</p>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map(item => (
                  <Pill>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Projects
