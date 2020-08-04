Feature: List of Clients
  Scenario: List of clients
    Given I have "10" clients in my database
    When I access the home webpage
    Then I see the list of "10" items