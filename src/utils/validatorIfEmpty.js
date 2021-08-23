export const checkImage = (path) => {
    return path
    ? `https://image.tmdb.org/t/p/original/${path}`
    : 'default.png'
}