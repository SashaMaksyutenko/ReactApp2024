import { createSlice } from '@reduxjs/toolkit'
import { resetDestination } from './destinationSlice'
import { resetReduxOPedia } from '../action/actions'
const initialState = { count: 0 }
export const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
    decrementMultiplier: (state, action) => {
      state.count -= Number(action.payload)
    },
    incrementMultiplier: (state, action) => {
      state.count += Number(action.payload)
    }
  },
  extraReducers: builder => {
    builder.addCase(resetReduxOPedia, (state, action) => {
      state.count = 10
    })
  }
})
export const {
  increment,
  decrement,
  incrementMultiplier,
  decrementMultiplier
} = counterSlice.actions
export const counterReducer = counterSlice.reducer
