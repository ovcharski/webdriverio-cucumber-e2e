Feature: Multiple tabs handling
  As a user
  I want to work with multiple browser tabs
  So that I can test multi-tab functionality

  Scenario: Switch between two browser tabs
    Given I am on the "homepage"
    When I open a new tab with URL "https://www.mediawiki.org"
    Then I should be able to switch between tabs
    And I can close the second tab