import { RenderAnimation } from "animation"
import { motion, useAnimation } from "framer-motion"
import React, { useEffect } from "react"

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
			className="w-full bg-gray-100 items-center flex p-2"
		>
			<span className="text-2xl font-semibold">Redux (Redux toolkit)</span>
		</motion.header>
	)
}
