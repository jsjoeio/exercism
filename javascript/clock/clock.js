export function at (hours, minutes = 0) {
  let timeHours = hours
  let timeMinutes = minutes

  const atClass = {
    toString () {
      // If we're given a negative time
      // Add 60 minutes until we get to a positive number
      while (timeMinutes < 0) {
        timeHours -= 1
        timeMinutes += 60
      }

      // If we're given a negative time
      // Add 24 hours until we get to a positive number
      while (timeHours < 0) {
        timeHours += 24
      }

      // If we have more than 60 minutes, we need to adjust the clock
      while (timeMinutes >= 60) {
        timeHours += 1
        timeMinutes -= 60
      }

      if (timeHours >= 24) {
        // Clock rolls over after 24 hours
        timeHours = timeHours % 24
      }

      return `${timeHours < 10 ? '0' + parseInt(timeHours) : timeHours}:${timeMinutes < 10 ? '0' + parseInt(timeMinutes) : timeMinutes}`
    },
    equals (atInstance) {
      // Check that the clocks have the same time
      return this.toString() === atInstance.toString()
    },
    plus (minutes) {
      timeMinutes += minutes
      return this
    },
    minus (minutes) {
      timeMinutes -= minutes
      return this
    }
  }

  return atClass
}
