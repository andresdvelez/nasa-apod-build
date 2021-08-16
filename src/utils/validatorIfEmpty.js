export const checkImage = (path) => {
    return path
    ? `https://image.tmdb.org/t/p/original/${path}`
    : 'default.png'
}

export const ifEmpty = (object) => {
    return (object && Object.keys(object).length === 0)
}