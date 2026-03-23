describe('UI - Employee Validation', () => {

  it('should not allow negative dependants', () => {

    const firstName = 'Alesko'
    const lastName = 'Test'

    cy.visit('/Account/Login')

    // login
    cy.get('#Username').type(Cypress.env('uiUsername'))
    cy.get('#Password').type(Cypress.env('uiPassword'))
    cy.get('button[type="submit"]').click()

    // make sure login succeeded
    cy.url().should('include', '/Benefits')

    // open form
    cy.get('#add').click()

    // fill invalid data
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#dependants').type('-1')

    // submit
    cy.get('#addEmployee').click()

    // modal should remain open because the input is invalid
    cy.get('#employeeModal').should('have.class', 'show')
  })

})