import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { RenderAnimation } from "animation"

export const Description = () => {
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
			className="grow"
		>
			<ol className="list-disc pl-4">
				<li>Good for Small Project</li>
				<li>
					Re renders the entire application because of the state is defined in
					the main component. This can be fixed with the help of React.memo
				</li>
				<li>Good for read not for write</li>
				<li>Super Easy to setup</li>
			</ol>
		</motion.div>
	)
}
