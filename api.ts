import Axios from 'axios'

const hostname = 'device.cloud.sicon.eco'
export const httpUrl = `https://${hostname}`
export const mqttUrl = `wss://${hostname}`

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6NCwiVXNlciI6ImV4YW1wbGUiLCJGaXJzdG5hbWUiOiJleGFtcGxlIiwiTGFzdG5hbWUiOiJleGFtcGwiLCJFbWFpbCI6ImV4YW1wbGVAZXhhbXBsZS5jb20iLCJTeXN0ZW0iOjAsIlJvbGUiOnsiSUQiOjUsIk5hbWUiOiJPcHRpbWl6ZXIiLCJTeXN0ZW0iOjAsIkRlc2NyaXB0aW9uIjoicHJvY2VzcyBlbmdpbmVlciwgY2FuIGNoYW5nZSBwYXJhbWV0ZXJzIn0sIlByaXZpbGVnZXMiOlsiYXBwc3RvcmVfdmlldyIsInNldHRpbmdzX3JlYWQiLCJhc3NldHNfcmVhZCIsImFwcHNfc2ljb25fdmlldyIsImFwcHNfc2ljb25fbm9kZSIsImRldmljZV90cmVlX3JlYWQiXSwiaWF0IjoxNjM0MTI5MTkzfQ.WAbHaXMyAwe9p6zyx6DIHuhMbNpB1ZYUJepChYGn4PM'

const api = Axios.create({
	baseURL: `${httpUrl}/api/v1`,
	headers: {
		Authorization: `Bearer ${token}`
	}
})

export const withBase = (path: string | undefined) => `${httpUrl}/${path}`

export default api
