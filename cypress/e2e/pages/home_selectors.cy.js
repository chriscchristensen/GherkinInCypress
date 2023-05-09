export class HomePage {
    HomeURL() {
        //Or whatever your Home URL is suppose to be. Just using Imperial as an Example.
        cy.url().should('be.equal', 'https://qa-instance-testing.vasion.com/Imperial_Invasion/vasionHome')
    }
}