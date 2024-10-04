import axios from 'axios'

const apiUrl = 'http://127.0.0.1:5000'

export async function login(email, password) {
    // 使用正确的模板字符串
    const response = await axios.post(`${apiUrl}/auth/login`, { email, password })
    alert("login success")
    return response.data
}

export async function register(username, password, email) {
    // 同样使用模板字符串
    const response = await axios.post(`${apiUrl}/auth/register`, { username, password, email })
    return response.data
}
