describe('API - Create Employee', () => {

  it('should create employee successfully', () => {

    const employee = {
      firstName: 'Alesek',
      lastName: 'Test',
      username: 'ales.test.' + Date.now(),
      dependants: 2,
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

      expect(response.status).to.eq(200)

    })

  })

})