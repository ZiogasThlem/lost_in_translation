export const STORAGE_USER_KEY = 'website-user'

export const storageSave = (key, value) => {
    if ((!key)||(!value)) throw new Error('something is missing')
    sessionStorage.setItem(key, JSON.stringify(value))
}
export const storageRead = key => {
    const data = sessionStorage.getItem(key)
    if (data) return JSON.parse(data)
    return null
}

export const storageDelete = key => {
    sessionStorage.removeItem(key)
}