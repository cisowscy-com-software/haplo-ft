import { getGreeting } from '../support/app.po';

describe('haplo-ft', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to haplo-ft!');
  });
});
