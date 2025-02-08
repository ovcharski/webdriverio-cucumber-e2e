Feature: Login Functionality
  Scenario: Successful Login
    Given I am on the login page
    When I log in with valid credentials
    Then I should be redirected to the user dashboard
    And I should see the user profile details
    And I should see the user cover photo

  Scenario: Login with invalid credentials
    Given I am on the login page
    When I log in with invalid credentials
    Then I should remain on the login page
    And I should see an error message "Password is incorrect. Please try again."