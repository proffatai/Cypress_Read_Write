/// <reference types="cypress" />

beforeEach(() => {
    // this will first run to open the website on each test case / it()

    cy.visit("https://trytestingthis.netlify.app");
  });

  before(()=>{ // we are storing the content of the json file into an object called data
    cy.fixture('creds.json').as('data') // usual way of calling the fixtures ()
    // alternatively
   // cy.readFile('./cypress/fixtures/creds.json').as('data') 
  })
  // Testing Valid username and valid password
  it("Read File Demo", function () {
    cy.get("#uname").type(this.data.username); // we are now using the data object to access the keys. Note, we must include the this keyword
    cy.get("#pwd").type(this.data.password);
    cy.get('[type="submit"]').click();
    cy.get('h2').should('contain','Login Successful :)')
  });