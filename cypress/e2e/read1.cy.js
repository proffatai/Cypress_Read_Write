/// <reference types="cypress"/>

describe('Reading via fixture()', () => {
  it('File available in the fixtures folder', () => {
 
    cy.fixture('example')// note i didnt put the .json to the file name since the file is inside the fixtures folder
    .then((data)=>{
      cy.log(data.name)
      cy.log(data.email)
      cy.log(data.body)
    })
})

it('file outside the fixtures folder', () => {
      
  cy.fixture('Hello/issues.json')//I had to to provide the full path of the file since it's in a folder inside the fixtures folder
  .then((message)=>{
    cy.log(message.day)
    cy.log(message.reason)
    cy.log(message.type)
  })
})

})

it('using the readFile()',()=>{
      
  cy.readFile('./issues.json')//I had to to provide the full path of the file since it's outside the fixtures folder
  .then((message)=>{
    cy.log(message.day)
    cy.log(message.reason)
    cy.log(message.type)
  })
})
