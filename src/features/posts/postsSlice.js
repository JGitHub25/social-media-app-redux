import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, action) {
      state.push(action.payload)
    },
  },
})

export default postsSlice.reducer
export const { addPost } = postsSlice.actions
