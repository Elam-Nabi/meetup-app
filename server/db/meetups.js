const { fake } = require('faker')
const faker = require('faker')

function getMeetupEvents() {

    let meetupEvents = []

    for (let id = 0; id < 8; id++) {
        const events = {
            id,
            eventTitle: faker.lorem.words(),
            eventImage: faker.random.image(),
            eventDate: faker.date.recent(),
            attendees: faker.random.number(100),
            eventPhrase: faker.company.catchPhrase(),
            eventText: faker.lorem.paragraph(),
            eventName: faker.name.findName(),
            eventParagraph: faker.lorem.paragraphs()
        }

        meetupEvents.push(events)
    }

    return { meetupEvents }
}

module.exports = { getMeetupEvents }