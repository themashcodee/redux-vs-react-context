import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { RenderAnimation } from "animation"

export const Header = () => {
	const controls = useAnimation()

	useEffect(() => {
		controls.start("animate")
		setTimeout(() => controls.start("initial"), 1000)
	})

	return (
		<motion.header
			initial="initial"
			animate={controls}
			variants={RenderAnimation}
			className="w-full h-12 bg-gray-100 items-center flex px-3"
		>
			<span className="text-2xl font-semibold">Redux (Redux toolkit)</span>
		</motion.header>
	)
}
