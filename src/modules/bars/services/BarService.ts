const uri = "http://localhost:3000";
export default {
<<<<<<< HEAD
    async fetchBars(bearer) {
        return await fetch(uri + '/bars/all', {
=======
    async fetchBars() {
        return await fetch(uri + '/bars/', {
>>>>>>> dev
            method: 'GET',
            headers: {
                "Authorization": `bearer ${bearer}`,
            },
            mode: 'cors'
        })
            .then((res) => {
                return res.json()
            })
            .then((datas) => {
                return datas
            })
    },
    async deleteBar(id, bearer) {
        return await fetch(uri + '/bars/' + id, {
            method: 'DELETE',
            headers: {
                "Authorization": `bearer ${bearer}`,
            },
            mode: 'cors'
        })
<<<<<<< HEAD
            .then((res) => {
                console.log(res);
                return res
            })
=======
        .then((res) => {
            return res
        })
    },
    async createBar(data) {
        return await fetch(uri + '/bars', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                return res
            })
    },
    async editBar(id, data) {
        delete data.pictures
        delete data.rating
        return await fetch(uri + '/bars/' + id, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                return res
            })
    },
    async fetchBar(id) {
        return await fetch(uri + '/bars/' + id, {
            method: 'GET',
            mode: 'cors'
        })
            .then((res) => {
                return res.json()
            })
            .then((datas) => {
                return datas
            })
    },
    async fetchReviews(id, limit = 0) {
        return await fetch(uri + '/bars/' + id + '/reviews?limit=' + limit, {
            method: 'GET',
            mode: 'cors'
        })
            .then((res) => {
                return res.json()
            })
            .then((datas) => {
                return datas
            })
    },
    async deleteReview(id) {
        return await fetch(uri + '/reviews/' + id, {
            method: 'DELETE',
            mode: 'cors'
        })
        .then((res) => {
            return res
        })
>>>>>>> dev
    }
}
