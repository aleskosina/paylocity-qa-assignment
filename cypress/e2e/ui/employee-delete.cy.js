describe('UI - Delete Employee', () => {
  it('should delete first matching employee via UI', () => {
    const firstName = 'Alesko2'
    const lastName = 'Test'

    cy.visit('/Account/Login')

    // login
    cy.get('#Username').type(Cypress.env('uiUsername'))
    cy.get('#Password').type(Cypress.env('uiPassword'))
    cy.get('button[type="submit"]').click()

    // make sure login succeeded
    cy.url().should('include', '/Benefits')

    // delete first matching row
    cy.contains('tr', firstName)
      .should('contain.text', lastName)
      .first()
      .within(() => {
        cy.get('.fa-times').click()
      })

    // verify modal appears
    cy.get('#deleteModal').should('be.visible')

    // confirm correct employee (optional but strong)
    cy.get('#deleteModal').should('contain.text', firstName)
    cy.get('#deleteModal').should('contain.text', lastName)

    // click DELETE button
    cy.get('#deleteEmployee').click()

    // basic sanity check (table still exists after deletion)
    cy.get('table').should('exist')
  })
})