import React, { useContext, useEffect } from "react"
import { CounterContext } from "./wrapper"
import { Description, Memoized } from "."
import { motion, useAnimation } from "framer-motion"
import { RenderAnimation } from "animation"

export const Body = () => {
	const state = useContext(CounterContext)
	const controls = useAnimation()

	useEffect(() => {
		controls.start("animate")
		setTimeout(() => controls.start("initial"), 1000)
	})

	return (
		<motion.div
			initial="initial"
			animate={controls}
			variants={RenderAnimation}
			className="flex flex-col gap-4 h-full sm:p-4 p-2"
		>
			<span className="text-2xl">Count: {state.counter}</span>

			<div className="flex gap-2">
				<button
					onClick={() => state.setCounter((counter) => counter + 1)}
					className="py-2 px-4 rounded-sm bg-[#265c55] text-white"
				>
					Increase
				</button>
				<button
					onClick={() => state.setCounter((counter) => counter - 1)}
					className="py-2 px-4 rounded-sm bg-red-400 text-white"
				>
					Decrease
				</button>
			</div>

			<Description />
			<Memoized />
		</motion.div>
	)
}
