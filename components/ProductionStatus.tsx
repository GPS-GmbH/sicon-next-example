import { Hardware } from 'sicon-os-types'

const productionStatusColors = {
	incident: 'bg-red-400',
	maintenance: 'bg-orange-400',
	changeover: 'bg-blue-400',
	idle: 'bg-yellow-400',
	producing: 'bg-green-400',
	off: 'bg-gray-400',
}

const ProductionStatus = ({ device }: { device: Hardware }) => {
	return <div className={`p-2 ${productionStatusColors[device.ProductionStatus.Status]}`}>
		{device.ProductionStatus.Status}
	</div>
}

export default ProductionStatus
