import { createHeaders } from "./helper"
const api_URL = process.env.REACT_APP_API_URL

// registering a new translation to the API
export const newTranslation = async (user, translation) => {
    try {
        const response = await fetch(`${api_URL}/${user.id}`,{
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                username: user.username,
                translations: [...user.translations, translation]
            })
        })
        if (!response.ok) throw new Error('cnt updt')
        const result = await response.json()
        return [null, result]

    } catch (error) {
        return [error.message, null]
    }
} 

// Clearing the translation history of the user
// by his provided Id from the API
export const clearHistory = async userID => {
    try {
        const response = await fetch(`${api_URL}/${userID}`,{
            method: 'PATCH',
            headers: createHeaders(),
            body: JSON.stringify({
                translations: []
            })
        })
        if (!response.ok) throw new Error('cnt dlt')
        const result = await response.json()
        return [null, result]
        
    } catch (error) {
        return [error.message, null]
    }

}