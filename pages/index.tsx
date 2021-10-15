import type { NextPage } from 'next'
import Head from 'next/head'
import { Fragment, useEffect, useState } from 'react'
import api, { mqttUrl } from '../api'
import DeviceCard from '../components/DeviceCard'
import { Hardware, CollectionResponse } from 'sicon-os-types'
import mqtt from 'mqtt'

const Home: NextPage = () => {
	const [devices, setDevices] = useState<Hardware[]>([])
	useEffect(() => {
		const getHardware = async () => {
			const devices = (await api.get<CollectionResponse<Hardware>>('hardware')).data.items
			setDevices(devices)
		}
		getHardware()
	}, [])
	useEffect(() => {
		const client = mqtt.connect(mqttUrl)
		client.subscribe('device/+/changeProductionStatus')
		client.on('message', (topic, message) => {
			const deviceId = parseInt(topic.split('/')[1])
			setDevices(devices.map(device => ({
				...device,
				ProductionStatus: device.ID == deviceId ? JSON.parse(message.toString()) : device.ProductionStatus
			})))
		})
		return () => {
			client.end()
		}
	})
	return (
		<Fragment>
			<Head>
				<title>SICON.OS Next Starter</title>
				<meta name="description" content="SICON.OS Next Starter" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<main className="flex flex-wrap p-4">
				{devices.map(device => <div className="p-4 w-full md:w-1/3 lg:w-1/4 xl:w-1/6" key={device.ID}>
					<DeviceCard device={device} />
				</div>)}
			</main>
		</Fragment>
	)
}

export default Home
