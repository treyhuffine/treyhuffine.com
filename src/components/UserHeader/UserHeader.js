import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Location } from '@reach/router'

import { HeaderContainer, Header, Image } from './styles'

const UserHeader = () => {
  const { user } = useStaticQuery(
    graphql`
      query {
        user {
          basics {
            name
            username
            picture
            region
            label
            headline
            blog
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
                  href={`https://gitconnected.com/${user.basics.username}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  @{user.basics.username}
                </a>
              </h4>
              <p>{user.basics.label}</p>
              <p>Coding in {user.basics.region}</p>
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

export default UserHeader
