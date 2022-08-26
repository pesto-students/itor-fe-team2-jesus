import { configureStore } from '@reduxjs/toolkit'
import mentorReducer from '../modules/FindAMentor/mentorSlice'

export const store = configureStore({
  reducer: {
    mentor: mentorReducer
  },
})