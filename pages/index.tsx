import type { NextPage } from "next"
import Head from "next/head"
import { Context } from "components/context"
import { Redux } from "components/redux"

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>React Context vs Redux</title>
				<meta name="description" content="React Context vs Redux" />
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className="sm:p-12 px-4 py-12 w-full flex flex-col gap-8">
				<h1 className="sm:text-4xl text-2xl font-semibold border-b-[2px] border-teal-900">React Context vs Redux</h1>

				<div className="w-full grid sm:grid-cols-2 gap-12 h-full">
					<Context />
					<Redux />
				</div>
			</main>
		</>
	)
}

export default Home
