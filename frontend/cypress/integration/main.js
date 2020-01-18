describe('renders shit', () => {
  it('should render shit', () => {
    cy.visit('http://localhost:7777/Home')
    cy.get('.container').find('h1')
  })
})
