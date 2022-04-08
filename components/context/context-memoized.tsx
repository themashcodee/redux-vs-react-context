import React, { memo, useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { RenderAnimation } from "animation"

export const Memoized = memo(() => {
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
			className="bg-yellow-400 py-2 px-3 text-sm rounded-md"
		>
			I am Memoized Context Component
		</motion.div>
	)
})

Memoized.displayName = "Context Memoized Component"
