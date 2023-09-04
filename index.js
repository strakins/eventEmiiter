const EventEmitter = require('events');

class EventLogger extends EventEmitter {
  constructor() {
    super();
    this.loggedEvents = [];
  }

  logEvent(title, description) {
    const timestamp = new Date();
    const event = { title, description, timestamp };
    this.loggedEvents.push(event);
    this.emit('log', event);
  }

  displayEvents() {
    console.log('| event index. | event title | event timestamp |');
    this.loggedEvents.forEach((event, index) => {
      console.log(`| ${index + 1}. | ${event.title} | ${event.timestamp} |`);
    });
  }
}

const eventLogger = new EventLogger();

eventLogger.on('log', (event) => {
  console.log(`Event logged: ${event.title}`);
});

eventLogger.logEvent('Develop Saas App', 'An Automated Emailing Platform');
eventLogger.logEvent('Write A Node Action', 'Node Process for a new Programming Language');
eventLogger.logEvent('Analize Langium', 'langium is a an Evolving Programming Language on the rise');

eventLogger.displayEvents();
