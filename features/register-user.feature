Feature: User Registration

  Scenario: Register a new user
    Given I am on the registration page
    When I fill in the registration form with valid details
    And I submit the form
    Then I should be redirected to my profile page
    And I should see a message indicating my profile is empty