import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { selectPostById } from './postsSlice'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'

export const SinglePost = ({ match }) => {
  const { postId } = match.params

  const post = useSelector((state) => selectPostById(state, postId))

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <PostAuthor userId={post.user} />
        <p className="post-content">{post.content}</p>
        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
        <ReactionButtons post={post} />
      </article>
    </section>
  )
}
