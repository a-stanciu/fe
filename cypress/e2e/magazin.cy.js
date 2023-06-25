/// <reference types="cypress" />

import Chance from 'chance';
const chance = new Chance();

describe('aplicație magazin de haine', () => {

  const email = chance.email();
  const password = '1234';
  const firstName = 'prenume';
  const lastName = 'nume de familie';
  const phoneNumber = '0722222222';
  const billingAddress = 'adresa de facturare';
  const deliveryAddress = 'adresa de livrare';

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  })

  it('has a title', () => {
    cy.contains('Bun venit');
  })

  it('creates a new account', () => {
    cy.get('#accountItemsButton').click();
    cy.get('#registerButton').click();

    cy.get('#firstNameField').type(firstName);
    cy.get('#lastNameField').type(lastName);
    cy.get('#emailField').type(email);
    cy.get('#phoneNumberField').type(phoneNumber);
    cy.get('#passwordField').type(password);

    cy.get('#registerButton').click();
  })

  it('logs in and places an order', () => {
    cy.get('#accountItemsButton').click();
    cy.get('#loginButton').click();

    cy.get('#emailField').type(email);
    cy.get('#passwordField').type(password);

    cy.get('#loginButton').click()

    cy.contains('Contul meu');

    cy.visit('http://localhost:4200/pdp/10');
    cy.get('#variantSelector').click();
    cy.get('#variant-2').click();

    cy.get('#addToCartBtn').click();
    cy.get('#cartSnackbarBtn').click();

    cy.get('#proceedBtn').click();

    cy.get('#billAddrLabel').click();
    cy.get('#billAddrInput').type(billingAddress);
    cy.get('#deliverAddrLabel').click();
    cy.get('#delivAddrInput').type(deliveryAddress);
    cy.get('#placeOrderBtn').click();
  })
})