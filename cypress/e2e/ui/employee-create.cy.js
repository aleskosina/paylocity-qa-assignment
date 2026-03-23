describe('UI - Create Employee', () => {

  it('should create employee via UI', () => {

    //const unique = Date.now().toString().slice(-4) // ensure unique last name to avoid data collisions in tests
    // A unique suffix can be added to test data if stricter record identification is needed - i.e. const unique = Date.now().toString().slice(-4) and add +unique
    // For this assignment, static names are used because the application allows duplicates
    // and generates a unique internal ID for each employee record.

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

    // fill form
    cy.get('#firstName').type(firstName)
    cy.get('#lastName').type(lastName)
    cy.get('#dependants').type('2')

    // submit
    cy.get('#addEmployee').click()

    // modal should close
    cy.get('#employeeModal').should('not.have.class', 'show')

    // new employee should appear in the table
    cy.get('table').should('contain.text', firstName)
    cy.get('table').should('contain.text', lastName)

  })

})