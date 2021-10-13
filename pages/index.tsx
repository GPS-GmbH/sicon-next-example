import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment } from 'react'

const Home: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>SICON.OS Next Starter</title>
				<meta name="description" content="SICON.OS Next Starter" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main>
				<h1>Welcome to your SICON.OS Next Starter</h1>
			</main>
		</Fragment>
	)
}

export default Home
