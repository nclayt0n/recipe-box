import config from '../config';
import TokenService from './token-service';
const AuthApiService = {
    postLogin(email, password) {
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        };
        return fetch(`${config.API_ENDPOINT}/auth/login`, options)
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e)) : res.json());
    },
    postUser(user) {
        let options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        };
        return fetch(`${config.API_ENDPOINT}/users`, options)
            .then(res =>
                (!res.ok) ?
                res.json().then(e => Promise.reject(e)) : res.json());
    },
    deleteUser(userId) {
        let options = {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({ 'id': userId }),
        };
        return fetch(`${config.API_ENDPOINT}/users/${userId}`, options)
            .catch(error => {
                console.error({ error });
            });
    }

};
export default AuthApiService;