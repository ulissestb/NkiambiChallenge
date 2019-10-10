import axios from 'axios'

const api = axios.create({
    baseURL: "https://powerful-caverns-27496.herokuapp.com/",
})

export default api