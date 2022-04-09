import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Description, RootState, decrement, increment, Memoized } from "."
import { motion, useAnimation } from "framer-motion"
import { RenderAnimation } from "animation"

export const Body = () => {
	const dispatch = useDispatch()
	const state = useSelector((state: RootState) => state.counter)
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
			<span className="text-2xl">Count: {state.count}</span>

			<div className="flex gap-2">
				<button
					onClick={() => dispatch(increment())}
					className="py-2 px-4 rounded-sm bg-[#265c55] text-white"
				>
					Increase
				</button>
				<button
					onClick={() => dispatch(decrement())}
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
