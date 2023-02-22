export const STORAGE_USER_KEY = 'website-user'

// saving input to sessin storage
export const storageSave = (key, value) => {
    if ((!key) || (!value)) throw new Error('something is missing')
    sessionStorage.setItem(key, JSON.stringify(value))
}
// reading requested data from session storage
export const storageRead = key => {
    const data = sessionStorage.getItem(key)
    if (data) return JSON.parse(data)
    return null
}
// deleting requested data from session storage
export const storageDelete = key => {
    sessionStorage.removeItem(key)
}