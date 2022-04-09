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
			className="w-full bg-gray-100 items-center flex p-2"
		>
			<span className="text-2xl font-semibold">React Context API</span>
		</motion.header>
	)
}
