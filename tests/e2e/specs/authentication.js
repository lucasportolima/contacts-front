describe("Login", () => {
    it("authentication", () => {
        cy.visit(Cypress.env("login_url"));
        cy.get("#name").type(Cypress.env("login_user"));
        cy.get("#password").type(Cypress.env("login_password"));
        cy.get("#submit").click();
    });
});
