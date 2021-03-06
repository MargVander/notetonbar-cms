const uri = "http://localhost:3000";

export default {
    async fetchPictures(id, bearer) {
        return await fetch(uri + '/pictures/bar/' + id, {
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
    async deletePicture(id, path, bearer) {
        return await fetch(uri + '/pictures/' + path, {
            method: 'DELETE',
            mode: 'cors',
            body: JSON.stringify({ id }),
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
    async uploadPicture(id, file, bearer) {
        const formData = new FormData();
        formData.append('photo', file);

        return await fetch(uri + '/pictures/bar/' + id, {
            method: 'POST',
            headers: {
                "Authorization": `bearer ${bearer}`,
            },
            mode: 'cors',
            body: formData,
        })
            .then((res) => {
                return res.json().then((data) => {
                    return data;
                })
            })
    }
}