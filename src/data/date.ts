export default function DateRecord(){    
    const date : Date = new Date(),
        monthFormat = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1),
        dayFormat = (date.getDate() < 10 ? '0' : '') + (date.getDate());
    return `${dayFormat}.${monthFormat}.${date.getFullYear()}`;
}

export function DateHistory() {
    const date = new Date();
    const monthFormat = (date.getMonth() + 1 < 10 ? '0' : '') + (date.getMonth() + 1);
    const dayFormat = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const hoursFormat = (date.getHours() < 10 ? '0' : '') + date.getHours();
    const minutesFormat = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    
    return `${dayFormat}.${monthFormat}.${date.getFullYear()} ${hoursFormat}:${minutesFormat}`;
}
