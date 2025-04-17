import { Given } from "cypress-cucumber-preprocessor/steps";
import { MapSiteHomePage } from "../pages/mapSiteHomePage";

Given(/^a user visits w3w mapsite and accepts cookies$/, () => {
  cy.visit(Cypress.env("mapSiteUrl"));
  return cy.get(MapSiteHomePage.ACCEPT_COOKIES).click();
});
