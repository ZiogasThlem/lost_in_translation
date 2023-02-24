import { createHeaders } from "./helper"

const api_URL = process.env.REACT_APP_API_URL

// checking if the user exists in the API
// and return their data, else returning error
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

// creating new user
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

// When user tries to login, we're checking if
// they're already registered in the API via userCheck
// and if not we're registering them with the use of userCreate
export const userLogIn = async (username) => {

    const [checkError, user] = await userCheck(username)

    if (checkError != null) return [checkError, null]
    if (user.length > 0) return [null, user.pop()]

    return await userCreate(username)
}
// returning the Id of the user from the API
export const userById = async (userID) => {
    try {
        const response = await fetch(`${api_URL}/${userID}`)
        if (!response.ok) throw new Error('nope')
        const user = await response.json()
        return [null, user]
    } catch (error) {
        return [error.message, null]
    }
}