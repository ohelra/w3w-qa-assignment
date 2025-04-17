// ***********************************************
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { MapSiteBurgerMenu } from "./pages/mapSiteBurgerMenu";
import { MapSiteHomePage } from "./pages/mapSiteHomePage";

Cypress.Commands.add("selectThreeWordLanguageFromBurgerMenu", (language) => {
  cy.get(MapSiteHomePage.OPEN_BURGER_MENU).click();
  cy.get(MapSiteBurgerMenu.THREE_WORD_ADDRESS_LANGUAGE_MENU).click();
  return cy.get(MapSiteBurgerMenu.LANGUAGE_NAME).contains(language).click();
});
