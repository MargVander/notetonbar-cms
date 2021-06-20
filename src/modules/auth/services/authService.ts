import config from '../../../config.ts'
const URI = config.uri

export default {
    login(mail, password) {
        return fetch(URI + '/auth/login', {
            method: 'POST',
            body: JSON.stringify({ "mail": mail, "password": password }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status == 201) {
                    return response.json()
                } else {
                    throw new Error();
                }
            })
            .catch((error) => { return error })
    },
}