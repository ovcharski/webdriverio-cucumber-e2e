const { faker } = require('@faker-js/faker');

class DataGenerator {
  static generateUserData(overrides = {}) {
    return {
      username: faker.internet.userName().toLowerCase(),
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      password: 'JirjI*3nf)3jgIJRF',
      phoneNumber: '35988484548',
      ...overrides,
    };
  }
}

module.exports = DataGenerator; 