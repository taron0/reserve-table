class Fetch {
    get(url, params) {
        return (
            fetch(`${url}`).then(res => res.json())
        )
    }

    post(url, method, statement, data) {
        return (
            fetch(`${url}`, {
                method:`${method}`,
                [statement]:`${JSON.stringify(data)}`
            })
        )
    }
}

export default new Fetch();