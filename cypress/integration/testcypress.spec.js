describe('MyComponent', () => {
    it('affiche le texte correctement', () => {
      cy.visit('/')
      cy.get('.my-component').should('contain', 'Hello World')
    })
  
  })
  