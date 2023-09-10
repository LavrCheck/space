import axios from 'axios'

const apiKey = 'DEMO_KEY'
const listUrl = 'https://api.nasa.gov/neo/rest/v1/'

export async function getList(startDate: Date, endDate: Date,) {
return

const resp = await axios.get(`${listUrl}feed?start_date=${formatDate(startDate
)}&end_date=${formatDate(endDate)}&api_key=${apiKey}`)

return resp.data
}

const formatDate = (date: Date) => {
let f = `${date.getFullYear()}-${String(date.getMonth()).padStart(2, '0')}-${String(date.getDay()
).padStart(2, '0')}`

return f
}

export async function getUnit(id:number){
    return
const resp = await axios.get(`${listUrl}neo/${id}?api_key=${apiKey}`)
return resp.data
}
