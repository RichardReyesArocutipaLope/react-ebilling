

import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux';
import authReducer from '../slice/authSlice';
import mercaderiaReducer from '../slice/mercaderiaSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    dataTable: mercaderiaReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch=()=> useDispatch<AppDispatch>()