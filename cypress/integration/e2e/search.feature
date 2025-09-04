Feature: Search

Scenario: Search and select a valid 3 word address
    Given I am on the what3words homepage
    When I search for "certified.potato.vine"
    And I select the exact suggestion "certified.potato.vine"
    Then the map should display the location for "certified.potato.vine"

Scenario: Search for a landmark and select a specific suggestion
    Given I am on the what3words homepage
    When I search for "Tower Bridge"
    And I select the suggestion containing "Tower Bridge Hotel"
    Then the map should display the location for the hotel

Scenario: Search by coordinates after changing language to German
    Given I am on the what3words homepage
    When I open the menu and change the language to "German"
    And I search for the coordinates "51.521251, -0.203586"
    And I select the first German 3 word address from the results
    Then the map should display the correct location

Scenario: Search for an invalid 3 word address shows error
    Given I am on the what3words homepage
    When I search for "hear.limited.frown.know"
    Then an error message containing the text "No Address found" should be displayed
