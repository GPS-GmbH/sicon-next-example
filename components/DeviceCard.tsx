import ProductionStatus from './ProductionStatus'
import { withBase } from '../api'
import { Hardware } from 'sicon-os-types'

interface Props {
	device: Hardware
}

const DeviceCard = ({ device }: Props) => {
	return <div className="flex flex-col justify-between shadow h-full rounded relative overflow-hidden">
		<div className="absolute top-0 right-0 rounded-bl overflow-hidden">
			<ProductionStatus device={device} />
		</div>
		<img src={withBase('docs/img/' + device.PictureFileName)} className="m-2" alt="" />
		<div className="p-2">
			<div className="text-lg">{device.ProductName}</div>
			<div>{device.Description}</div>
		</div>
	</div>

}
export default DeviceCard
