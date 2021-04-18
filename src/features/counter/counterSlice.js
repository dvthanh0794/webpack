import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
      const response = await fetch(`https://600e82973bb1d100179df67b.mockapi.io/user/${userId}`)
      return response.json()
    }
  )

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 1,
    entities:[]
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
  extraReducers: {
    // Add reducers for additional action types here, and handle loading state as needed
    [fetchUserById.fulfilled]: (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer