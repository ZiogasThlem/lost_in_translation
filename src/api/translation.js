import { createHeaders } from "./helper"
const api_URL = process.env.REACT_APP_API_URL

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
        
    }
} 
export const clearHistory = user => {

}