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
				<li>Perfect for big projects</li>
				<li>
					Re-renders only the subscribed component so its children. Children 
					re-rendering can be fixed with the help of React.memo
				</li>
				<li>
					{
						"Work Flow : UI(Action Dispatched) -> Reducers (Calculating New State) -> State(Set New State) -> UI(Update UI) -> Cycle Repeat"
					}
				</li>
				<li>
					States (store) is defined seperately and not inside the main(App)
					component
				</li>
				<li>Lots of boilerplate</li>
				<li>PubSub Based</li>
			</ol>
		</motion.div>
	)
}
