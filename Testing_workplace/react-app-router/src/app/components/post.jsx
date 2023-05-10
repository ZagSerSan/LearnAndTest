import React from 'react'

const post = ({match,posts}) => {
  const postId = match.params.postId
  const getPostById = (id) => {
    return posts.find((post)=>(post.id.toString() === id))
  }
  const post = getPostById(postId)

  return <h3>{post ? post.label : `post ${postId} is not found`}</h3>
}
 
export default post