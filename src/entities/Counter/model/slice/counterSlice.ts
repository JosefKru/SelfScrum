import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CounterSchema } from '../types/counterSchema'
// import type { RootState } from '../../app/store'

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReduser } = counterSlice

// export const selectCount = (state: RootState) => state.counter.value

// export default counterSlice.reducer