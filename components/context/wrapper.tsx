import React, { createContext, Dispatch, SetStateAction, useState } from "react"
import { Header, Body } from "."

type State = {
	counter: number
	setCounter: Dispatch<SetStateAction<number>>
}

const initialValue: State = {
	counter: 1,
	setCounter: () => {},
}

export const CounterContext = createContext(initialValue)
const { Provider } = CounterContext

export const Context = () => {
	const [counter, setCounter] = useState(1)

	return (
		<Provider value={{ counter, setCounter }}>
			<div className="flex flex-col gap-8">
				<Header />
				<Body />
			</div>
		</Provider>
	)
}
