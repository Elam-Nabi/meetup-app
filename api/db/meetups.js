const faker = require('faker')

function getMeetupEvents() {

    let meetupEvents = []

    for (let id = 0; id < 50; id++) {

        let eventTitle = faker.lorem.words()
        let eventImage = faker.random.image()
        let eventDate = faker.date.recent()
        let attendees = faker.random.number(100)

        meetupEvents.push({
            id,
            eventDate,
            eventTitle,
            attendees,
            eventImage
        })
    }

    return { meetupEvents }
}

module.exports = getMeetupEvents