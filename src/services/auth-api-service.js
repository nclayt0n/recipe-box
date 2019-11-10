import config from '../config'

const AuthApiService = {
    postLogin(email, password) {
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        }
        return fetch(`${config.API_ENDPOINT}/auth/login`, options)
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e) && console.log('not succesful')) :
                res.json()
            )
    },
    postUser(user) {
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        }
        return fetch(`${config.API_ENDPOINT}/users`, options)
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e)) : res.json())
    }
}
export default AuthApiService