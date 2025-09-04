import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import SearchPage from "../pages/searchPage";

// Given
Given("I am on the what3words homepage", () => {
  cy.visit(Cypress.env("mapSiteUrl") || "https://what3words.com");
});

// When - search
When("I search for {string}", (text) => {
  SearchPage.search(text);
});

// And - select exact suggestion
When("I select the exact suggestion {string}", (text) => {
  SearchPage.selectExactSuggestion(text);
});

// And - select suggestion containing text
When("I select the suggestion containing {string}", (text) => {
  SearchPage.selectContainingSuggestion(text);
});

// And - open menu and change language
When("I open the menu and change the language to {string}", (lang) => {
  SearchPage.changeLanguage(lang);
});

// And - select the first suggestion (German 3WA)
When("I select the first German 3 word address from the results", () => {
  SearchPage.selectFirstSuggestion();
});

// Then - map should display location
Then("the map should display the location for {string}", (address) => {
  cy.contains(address).should("exist");
});

// Then - map should display the correct location (for coordinates)
Then("the map should display the correct location", () => {
  SearchPage.mapCanvas.should("be.visible");
});

// Then - error message
Then(
  "an error message containing the text {string} should be displayed",
  (msg) => {
    SearchPage.errorMessage.should("contain.text", msg);
  }
);
