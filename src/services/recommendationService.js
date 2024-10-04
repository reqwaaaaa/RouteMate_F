import axios from 'axios'

const apiUrl = 'http://127.0.0.1:5000/'

export async function getPoiRecommendations(currentLocation) {
    const response = await axios.post(`${apiUrl}/recommendations/poi`, {
        current_location: currentLocation
    })
    return response.data
}

export async function getCarpoolRecommendations(trajectoryId, currentLocation) {
    const response = await axios.post(`${apiUrl}/recommendations/carpool`, {
        trajectory_id: trajectoryId,
        current_location: currentLocation
    })
    return response.data
}
