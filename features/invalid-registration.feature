Feature: Invalid User Registration

  Scenario: Register with an invalid email
    Given I am on the registration webpage
    When I fill in the registration form with an invalid email
    And I click the register button
    Then I should see an error message indicating the email is incorrect

  Scenario: Register with an invalid password
    Given I am on the registration webpage
    When I fill in the registration form with an invalid password
    And I click the register button
    Then I should see an error message indicating the password is invalid

  Scenario: Register with an existing username
    Given I am on the registration webpage
    When I fill in the registration form with an existing username
    And I click the register button
    Then I should see an error message indicating the username already exists