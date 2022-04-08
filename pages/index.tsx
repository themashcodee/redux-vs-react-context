import type { NextPage } from "next"
import Head from "next/head"
import { Context, Redux } from "components"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>React Context vs Redux</title>
				<meta name="description" content="React Context vs Redux" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className="p-12 w-full flex flex-col h-screen gap-8">
				<h1 className="text-4xl font-semibold">React Context vs Redux</h1>

				<div className="w-full grid grid-cols-2 gap-12 h-full">
					<Context />
					<Redux />
				</div>
			</main>
		</>
	)
}

export default Home
