import axios from "axios"

const HOST = 'https://65d0720eab7beba3d5e31e6b.mockapi.io'

export const endpoint = {
    'committees': '/test1/',
    'criteria': '/criteria/'
}

export const authApi = () => {
    return axios.create({
        baseURL: HOST,
        headers: {
            'Authorization': `Bearer ...`
        }
    })
}

export default axios.create({
    baseURL: HOST
})