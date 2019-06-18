/// <reference types="Cypress" />
import * as example from '../../fixtures/example.json';

context('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5000/')
  })

  it('throw error when logged in with wrong username', () => {
    cy.get('#email').type('wrong username')
    cy.get('#pass').type('wrong password')
    cy.get('#submit').click()
    cy.get('form').find('.error')
  })

  it('throw error when logged in without username', () => {
    cy.get('#pass').type('wrong password')
    cy.get('#submit').click()
    cy.get('form').find('.error')
  })

  it('throw error when logged in with wrong password', () => {
    cy.get('#email').type('wrong username')
    cy.get('#submit').click()
    cy.get('form').find('.error')
  })

  it('login correctly when given correct user name and password', () => {
    cy.get('#email').type(example.email)
    cy.get('#pass').type(example.pass)
    cy.get('#submit').click()
    cy.get('#dashboard').contains('Dashboard');
    cy.get('#dashboard').contains('This is restricted page and you can see it')
  })
})
