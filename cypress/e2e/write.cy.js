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
  it("Write File Demo", function () {
    cy.writeFile('sample.txt', "Hello world")
    cy.writeFile('sample.txt', "\nI am Ibrahim Fatai",{flag: "a+"})
    cy.writeFile('sample.txt', "\nI am I wanna be serious",{flag: "a+"})
  });