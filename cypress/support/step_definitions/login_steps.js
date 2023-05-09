import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { LoginPage } from "../../e2e/pages/login_selectors.cy";
import { HomePage } from "../../e2e/pages/home_selectors.cy";

const loginPage = new LoginPage()
const homePage = new HomePage()

Given('a user opens the login page', () => {
    loginPage.NavigateToLogin();
})

When('a user types in the correct Username {string}', (correctUsername) => {
    loginPage.UsernameFieldType(correctUsername);
})

And('a user types in the correct Password {string}', (correctPassword) => {
    loginPage.PasswordFieldType(correctPassword);
})

And('a user clicks the {string} button', (buttonClick) => {
    loginPage.LoginButton(buttonClick);
})

Then('the user will be logged into the {string}', (homeURL) => {
    homePage.HomeURL(homeURL);
})