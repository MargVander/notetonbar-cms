const uri = "http://localhost:3000";
export default {
    async fetchBars(bearer) {
        return await fetch(uri + '/bars/', {
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
            .then((res) => {
                return res
            })
    },
    async createBar(data, bearer) {
        return await fetch(uri + '/bars', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `bearer ${bearer}`,
            }
        })
            .then((res) => {
                return res
            })
    },
    async editBar(id, data, bearer) {
        delete data.pictures
        delete data.rating
        return await fetch(uri + '/bars/' + id, {
            method: 'PUT',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `bearer ${bearer}`,
            }
        })
            .then((res) => {
                return res
            })
    },
    async fetchBar(id, bearer) {
        return await fetch(uri + '/bars/' + id, {
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
    async fetchReviews(id, limit = 0, bearer) {
        return await fetch(uri + '/bars/' + id + '/reviews?limit=' + limit, {
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
    async deleteReview(id, bearer) {
        return await fetch(uri + '/reviews/' + id, {
            method: 'DELETE',
            headers: {
                "Authorization": `bearer ${bearer}`,
            },
            mode: 'cors'
        })
            .then((res) => {
                return res
            })
    }
}
