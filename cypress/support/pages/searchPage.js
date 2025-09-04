class SearchPage {
  get searchBox() {
    return cy.get('input[data-testid="search-input"]');
  }

  get suggestions() {
    return cy.get('[data-testid="suggestion-item"]');
  }

  get menuButton() {
    return cy.get('[data-testid="menu-button"]');
  }

  get languageOption() {
    return cy.contains('three word address language');
  }

  get errorMessage() {
    return cy.contains('No Address found');
  }

  get mapCanvas() {
    return cy.get('#map'); 
  }

  search(text) {
    this.searchBox.clear().type(text);
  }

  selectExactSuggestion(text) {
    this.suggestions.contains(new RegExp(`^${text}$`)).click();
  }

  selectContainingSuggestion(text) {
    this.suggestions.contains(text).click();
  }

  selectFirstSuggestion() {
    this.suggestions.first().click();
  }

  openMenu() {
    this.menuButton.click();
  }

  changeLanguage(lang) {
    this.openMenu();
    this.languageOption.click();
    cy.contains(lang).click();
  }
}

export default new SearchPage();
