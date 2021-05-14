const uri = "http://localhost:3000";

export default {
    async fetchBars() {
        return await fetch(uri + '/bars/all', {
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
    async deleteBar(id) {
        return await fetch(uri + '/bars/' + id, {
            method: 'DELETE',
            mode: 'cors'
        })
        .then((res) => {
            console.log(res);
            return res
        })
    }
    // async fetchBar(id: number) {
    //     return await fetch(uri + '/bars/' + id, {
    //         method: 'GET',
    //         mode: 'cors'
    //     })
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((datas) => {
    //             return datas
    //         })
    // },
    // async fetchReviews(id: number, limit = 0) {
    //     return await fetch(uri + '/bars/' + id + '/reviews?limit=' + limit, {
    //         method: 'GET',
    //         mode: 'cors'
    //     })
    //         .then((res) => {
    //             return res.json()
    //         })
    //         .then((datas) => {
    //             return datas
    //         })
    // }
}
