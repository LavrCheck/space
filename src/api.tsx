import axios from 'axios'

const apiKey = 'DEMO_KEY'
const listUrl = 'https://api.nasa.gov/neo/rest/v1/'

export async function getList(startDate: Date, endDate: Date,) {
    

const resp = await axios.get(`${listUrl}feed?start_date=${formatDate(startDate
)}&end_date=${formatDate(endDate)}&api_key=${apiKey}`)

return resp.data
}

function formatDate(date: Date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
}

export async function getUnit(id:number){
const resp = await axios.get(`${listUrl}neo/${id}?api_key=${apiKey}`)
return resp.data
}
