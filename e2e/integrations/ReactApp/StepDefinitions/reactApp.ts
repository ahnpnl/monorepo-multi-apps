import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the Hello World React app is open', () => {
  cy.visit('http://localhost:3001')
})

Then('the React app should display Vite + React', () => {
  cy.findByText('Vite + React').should('exist');
})
