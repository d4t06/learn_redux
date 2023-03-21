// with redux
// 1. initState
// 2. reducer = (state = initState, action) => { switch() }

import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns'

const initialState = [
   {
      "title": "Learn Redux ...",
      "content": "balabalabal...",
      "userId": "1",
      "date": sub(new Date(), {minutes: 10}).toISOString(),
   },
   {
      "title": "Nguyen Huu Dat Post",
      "content": "balabalabal...",
      "userId": "2",
      "date": sub(new Date(), {minutes: 5}).toISOString(),
   }
];

const postsSlice = createSlice({
   name: "posts",
   initialState,
   reducers: {
      // actions
      addPost: {
         reducer(state, action) {
            state.push(action.payload);
         },
         prepare(title, content, userId) {
           return {
              payload: {
                  id: nanoid(),
                  title, 
                  content,
                  userId,
                  date : new Date().toISOString()
               }
           } 
         }
      },
   },
});

export const selectAllPost = (state) => state.posts;

export const { addPost } = postsSlice.actions;

export default postsSlice.reducer;
