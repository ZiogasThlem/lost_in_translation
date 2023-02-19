import { createHeaders } from "./helper"

const api_URL = process.env.REACT_APP_API_URL

const userCheck = async (username) => {
    try {
        const response = await fetch(`${api_URL}?username=${username}`)
        if (!response.ok) throw new Error(username+"doesn't exist")

        const data = await response.json()
        return [null, data]

    } catch (error) {
        return [ error.message, null ]
    }
}

const userCreate = async (username) => {
    try {
        const response = await fetch(api_URL, {
            method: 'POST',
            headers: createHeaders(),
            body: JSON.stringify({
                username,
                translations: []
            })
        })
        if (!response.ok) throw new Error('ERRORRRRR' + username)

        const data = await response.json()
        return [null, data]

    } catch (error) {
        return [ error.message, [] ]
    }
}

export const userLogIn = async (username) => {

    const [checkError, user] = await userCheck(username)

    if (checkError != null) return [checkError, null]
    if (user.length > 0) return [null, user.pop()]

    return await userCreate(username)
}