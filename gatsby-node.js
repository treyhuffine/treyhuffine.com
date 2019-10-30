require('dotenv').config()
const fetch = require('isomorphic-unfetch')

const username = process.env.USERNAME

if (username === 'test') {
  throw new Error('Update the .env file to set USERNAME=yourusername')
}

exports.sourceNodes = async ({
  actions,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode } = actions

  const res = await fetch(`https://gitconnected.com/v1/api/resume/${username}`)
  const user = await res.json()
  const nodeContent = JSON.stringify(user)

  const nodeMeta = {
    id: createNodeId(`user-${user.basics.username}`),
    parent: null,
    children: [],
    internal: {
      type: `User`,
      mediaType: `application/json`,
      content: nodeContent,
      contentDigest: createContentDigest(user),
    },
  }

  const node = Object.assign({}, user, nodeMeta)
  createNode(node)
}
