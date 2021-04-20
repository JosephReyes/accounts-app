describe('Accounts app', () => {
  it('should add accounts, transfer money and transactions should appear', () => {
    cy.visit('http://localhost:3000')
      // Add first account
      .get('[e2e="add-account"]')
      .click()
      .get('[e2e="account-name"]')
      .type('123')
      .get('[e2e="account-email"]')
      .type('123')
      .get('[e2e="account-submit"]')
      .click()
      // Check first account exists with correct opening balance
      .get('[e2e="account-name-123"]')
      .should('exist')
      .get('[e2e="account-balance-123"]')
      .contains('£200.00')
      // Add second account
      .get('[e2e="add-account"]')
      .click()
      .get('[e2e="account-name"]')
      .type('456')
      .get('[e2e="account-email"]')
      .type('456')
      .get('[e2e="account-submit"]')
      .click()
      // Check second account exists with correct opening balance
      .get('[e2e="account-name-456"]')
      .should('exist')
      .get('[e2e="account-balance-456"]')
      .contains('£200.00')
      // Transfer £13.50 from first account to second
      .get('[e2e="transfer"]')
      .click()
      .get('[e2e="transfer-from-accounts"]')
      .click()
      .get('[e2e="account-item-0"]')
      .click()
      .get('[e2e="transfer-to-accounts"]')
      .click()
      .get('[e2e="account-item-1"]')
      .click()
      .get('[e2e="transfer-amount"]')
      .type('13.50')
      .get('[e2e="submit-transfer"]')
      .click()
      .get('[e2e="account-balance-123"]')
      .contains('£186.50')
      .get('[e2e="account-balance-456"]')
      .contains('£213.50');
  });
});
