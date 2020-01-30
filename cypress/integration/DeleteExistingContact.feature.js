/* 
As a user
In order to keep my contact list up to date
I would like to be able to delete contacts
*/
describe('clicking the "Delete"', () => {
    before(() => {
        cy.visit('http://localhost:3001')
        cy.get('#add-contact').click()
        cy.get('#name').type('Robin')
        cy.get('#email').type('robin@abacuz.se')
        cy.get('#phone').type('0700101010')
        cy.get('#company').type('Craft Academy')
        cy.get('#notes').type('Awesome coder')
        cy.get('#twitter').type('Abacuz08')
        cy.get('#submit').click()
        cy.wait(500)
        cy.get('#name').type('Robin2')
        cy.get('#email').type('robin2@abacuz.se')
        cy.get('#phone').type('0700101012')
        cy.get('#company').type('Craft Academy')
        cy.get('#notes').type('Awesome coder again')
        cy.get('#twitter').type('Abacuz09')
        cy.get('#submit').click()
    })

    it(' removes the contact', () => {
        cy.get('#deleteButton').click()
        cy.contains('robin@abacuz.se').should('not.exist')
    })
});