export function dateFormat(date = 0) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let newDate = new Date(date)

    return `${days[newDate.getDay()]} ${newDate.getDate()}, ${newDate.getFullYear()}`
}