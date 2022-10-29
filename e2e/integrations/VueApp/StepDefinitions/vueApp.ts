import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('the Hello World Vue app is open', () => {
  cy.visit('http://localhost:3000')
})

Then('the Vue app should display Vite + Vue', () => {
  cy.findByText('Vite + Vue').should('exist');
})
