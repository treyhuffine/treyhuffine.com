import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'

import { HeaderContainer, Header, Image } from './styles'

const Me = () => {
  const { user } = useStaticQuery(
    graphql`
      query {
        user {
          basics {
            name
            picture
            location
            label
            headline
            blog
            usernameCaseSensitive
            yearsOfExperience
          }
        }
      }
    `,
  )

  return (
    <Location>
      {({ location }) => (
        <HeaderContainer isHome={location.pathname === '/'}>
          <Header>
            <Image src={user.basics.picture} />
            <div>
              <h2>{user.basics.name}</h2>
              <h4>
                <a
                  href={`https://gitconnected.com/${user.basics.usernameCaseSensitive}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @{user.basics.usernameCaseSensitive}
                </a>
              </h4>
              <p>{user.basics.label}</p>
              <p>Coding in {user.basics.location}</p>
              <p>
                {user.basics.yearsOfExperience} years of experience as a
                developer
              </p>
              <p>{user.basics.headline}</p>
              <p>
                Blog:{' '}
                <a
                  href={user.basics.blog}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {user.basics.blog}
                </a>
              </p>
            </div>
          </Header>
        </HeaderContainer>
      )}
    </Location>
  )
}

export default Me
