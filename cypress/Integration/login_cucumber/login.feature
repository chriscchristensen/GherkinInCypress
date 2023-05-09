Feature: Vasion Login

Background: 
    Given a user opens the login page

##You may have to fix some of the element string referenced in this scenario.
Scenario: User enters in the correct Username and Password
    When a user types in the correct Username "USERNAME_HERE"
    And a user types in the correct Password "CORRECT_PASSWORD"
    And a user clicks the "Sign In" button
    Then the user will be logged into the "HOME_PAGE_URL"