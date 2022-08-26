import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
}

export const mentorSlice = createSlice({
  name: 'mentor',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const {} = mentorSlice.actions

export default mentorSlice.reducer