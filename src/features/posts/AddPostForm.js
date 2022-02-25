import React, { useState } from 'react'

import { useDispatch } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

import { addPost } from './postsSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handlePostChange = (e) => setContent(e.target.value)

  const savePost = (e) => {
    e.preventDefault()
    if (title && content) {
      dispatch(
        addPost({
          id: nanoid(),
          title,
          content,
        })
      )
      setTitle('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={savePost}>
        <label htmlFor="postTitle">Post title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={handlePostChange}
        />
        <button type="submit">Save Post</button>
      </form>
    </section>
  )
}
