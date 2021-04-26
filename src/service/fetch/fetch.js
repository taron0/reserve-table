class Fetch {
    get(url, params) {
        return (
            fetch(`${url}`).then(res => res.json())
        )
    }

    post(url, method, statmen, data) {
        return (
            fetch(`${url}`, {
                method:`${method}`,
                [statmen]:`${JSON.stringify(data)}`
            })
        )
    }
}

export default new Fetch();