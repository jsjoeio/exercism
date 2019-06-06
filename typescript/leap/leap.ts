function isLeapYear(year: number) {
    // Leap year happens every 4 years
    // But it can't be divisible by 100. If it is, it must also be divisble by 400
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}

export default isLeapYear