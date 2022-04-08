import { Variants } from "framer-motion"

export const RenderAnimation: Variants = {
	initial: {
		outline: "3px solid transparent",
		transition: {
			duration: 0.3,
		},
	},
	animate: {
		outline: "3px solid red",
		transition: {
			duration: 0.3,
		},
	},
}
