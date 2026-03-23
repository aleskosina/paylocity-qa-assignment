describe('API - Employee Validation', () => {

  it('should reject negative dependants', () => {

    const unique = Date.now()

    const employee = {
      firstName: 'Ales' + unique,
      lastName: 'Test',
      username: 'ales.test.' + unique,
      dependants: -1,
      salary: 50000
    }

    cy.request({
      method: 'POST',
      url: '/api/Employees',
      headers: {
        Authorization: Cypress.env('authToken')
      },
      body: employee,
      failOnStatusCode: false
    }).then((response) => {

      cy.log(JSON.stringify(response.body))

      // Expected behavior:
      // API should reject negative dependants with 400 Bad Request
      expect(response.status).to.eq(400)
      
    })

  })

})