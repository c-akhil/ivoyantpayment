import Axios from 'axios';
export default class HttpSevice {
    static http = Axios.create({
        baseURL: 'http://localhost:3000/data/'
    })

    static setBaseURL(baseURL) {
        this.http = Axios.create({
            baseURL
        });
    }

    static get(url, params = {}, options = {}) {
        return this.http.get(url, { params })
    }
    static post(url, requestBody = {}, options = {}) {
        return this.http.post(url, requestBody, options)
    }
}