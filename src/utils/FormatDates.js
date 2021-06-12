export function formatMonths(timestamp) {
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const months = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedMonths = months < 10 ? `0${months}` : months;
    return formattedMonths + '.' + year;
}
export function formatDate(timestamp) {
    if (!timestamp) return '';

    const date = new Date(timestamp);
    const months = date.getMonth() + 1;
    const days = date.getDate();
    const formattedMonths = months < 10 ? `0${months}` : months;
    const formattedDays = days < 10 ? `0${days}` : days;

    return formattedDays + '.' + formattedMonths;
}

export function formatHours(timestamp) {
    if (!timestamp) return '';

    const date = new Date(timestamp);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formatHours = hours < 10 ? `0${hours}` : hours;
    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formatSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return formatHours + ':' + formatMinutes + ':' + formatSeconds;
}
