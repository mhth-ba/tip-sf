class Api {

    static fetch(url) {
        return fetch(url, {
            credentials: 'same-origin'
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(response)
            })
    }

    static post(url, data) {
        return fetch(url, {
            credentials: 'same-origin',
            method: 'POST',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(response)
                } else {
                    return response.json()
                }
            })
    }

    static patch(url, data) {
        return fetch(url, {
            credentials: 'same-origin',
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response)
                }
            })
    }
}

export default Api