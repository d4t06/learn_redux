import {configureStore} from '@reduxjs/toolkit'
// import counterReducer from '../features/Counter/counterSlice'
import postsReducer from '../features/Post/postsSlice'
import usersReducer from '../features/User/usersSlice'

const store = configureStore({
    reducer: {
        posts: postsReducer, // must use state.posts
        users: usersReducer
    }
})

export default store