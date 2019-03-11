const event = {
  name: 'Party',
  guests : ['Me', 'Danny'],
  printGuestList() {
    console.log(`Guest list for ${this.name}`),
    // arrow functions don't bind their own scope, so this stays bound in parent context
    this.guests.forEach(guest => console.log(`${guest} is attending ${this.name}`))
  },
  // Arrow function must grab parent context by reaching up (in this instance to global object) then back down
  arrowGuests: () => {
    console.log(`Arrow version of guests for ${event.name}`)
    event.guests.forEach(guest => console.log(`${guest} is attending ${event.name}`))
  }
}

event.printGuestList()