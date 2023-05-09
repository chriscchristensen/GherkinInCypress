//These are all your page selectors and actions on those selectors. 
export class LoginPage {
    NavigateToLogin() {
        cy.visit('https://qa-instance-testing.vasion.com/Imperial_Invasion/login')
    }
    UsernameFieldType(typedText) {
        cy.get('.username').type(typedText);
    }
    PasswordFieldType(typedText) {
        cy.get('.password').type(typedText)
    }
    LoginButton(clickedButton) {
        cy.get('.login-submit').should('have.attr', 'value', clickedButton).click()
    }
}