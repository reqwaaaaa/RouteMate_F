import axios from 'axios'

const apiUrl = 'http://127.0.0.1:5000/'

export async function uploadTrajectory(trajectoryData) {
    const response = await axios.post(`${apiUrl}/track/upload`, {
        trajectory_data: trajectoryData
    })
    return response.data
}

export async function getHistoryTrajectories() {
    const response = await axios.get(`${apiUrl}/track/history`)
    return response.data
}
