/* 
As a user
To stay in touch with my friends
I would like to be able to create a contact for them in my address book 
*/


// userCanCreateAContact.feature.js


describe('user can access the site', () => {
	it('test', () => {
        cy.visit('http://localhost:3001') 
	})
})

describe('user can create a contact', () => {
	it('test', () => {
        cy.visit('http://localhost:3001')         
		cy.get('#name').type('Robin')
		cy.get('#email').type('robin@abacuz.se')
		cy.get('#phone').type('0700 101010')
		cy.get('#company').type('Craft Academy')
		cy.get('#notes').type('Awesome coder')
        cy.get('#twitter').type('@abacuz08')
        cy.get('#add-contact').click()
	})
})