import React from "react"
import { Provider } from "react-redux"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Header, Body } from "."

const initialState = {
	count: 1,
}
const counterSlice = createSlice({
	name: "Counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1
		},
		decrement: (state) => {
			state.count -= 1
		},
	},
})
const { actions, reducer } = counterSlice
export const { decrement, increment } = actions

const store = configureStore({
	reducer: {
		counter: reducer,
	},
})
export type RootState = ReturnType<typeof store.getState>

export const Redux = () => {
	return (
		<Provider store={store}>
			<div className="flex flex-col gap-8">
				<Header />
				<Body />
			</div>
		</Provider>
	)
}
